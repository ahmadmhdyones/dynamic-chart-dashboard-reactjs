import { getStorage } from './storage.interface';
import type { StoragePayloads } from './storage-map';
import type { StorageServiceOptions } from './types';
import type { StorageKeys } from './storage-keys.enum';

// ----------------------------------------------------------------------

export class StorageService {
  static save<T extends StorageKeys>(
    key: T,
    value: StoragePayloads[T],
    { storage }: StorageServiceOptions = { storage: getStorage('local') }
  ): void {
    try {
      const serializedValue = (() => {
        switch (typeof value) {
          case 'string':
          case 'number':
          case 'boolean':
            return String(value);
          default:
            return JSON.stringify(value);
        }
      })();
      storage.setItem(key, serializedValue);
    } catch (e) {
      console.error(`Error setting storage item: ${key}`, e);
    }
  }

  static load<T extends StorageKeys>(
    key: T,
    { storage }: StorageServiceOptions = { storage: getStorage('local') }
  ): StoragePayloads[T] | null {
    try {
      const jsonValue = storage.getItem(key);
      if (jsonValue === null) return null;
      return this.parseStoredValue(key, jsonValue);
    } catch (e) {
      console.error(`Error getting storage item: ${key}`, e);
      return null;
    }
  }

  static update<T extends StorageKeys>(
    key: T,
    value: Partial<StoragePayloads[T]>,
    { storage }: StorageServiceOptions = { storage: getStorage('local') }
  ): void {
    try {
      const existingValue = this.load(key, { storage });
      if (existingValue === null || typeof existingValue !== 'object') {
        // If no existing value or not an object, just save the new value
        this.save(key, value as StoragePayloads[T], { storage });
        return;
      }

      // Merge existing object with new values
      const updatedValue = {
        ...existingValue,
        ...value,
      };

      this.save(key, updatedValue as StoragePayloads[T], { storage });
    } catch (e) {
      console.error(`Error updating storage item: ${key}`, e);
    }
  }

  static delete<T extends StorageKeys>(
    key: T,
    { storage }: StorageServiceOptions = { storage: getStorage('local') }
  ): void {
    try {
      storage.removeItem(key);
    } catch (e) {
      console.error(`Error removing storage item: ${key}`, e);
    }
  }

  static clear({ storage }: StorageServiceOptions = { storage: getStorage('local') }): void {
    try {
      storage.clear();
    } catch (error) {
      console.error(`Error clearing storage`, error);
    }
  }

  private static parseStoredValue<T extends StorageKeys>(key: T, value: string): StoragePayloads[T] {
    const expectedType = typeof ({} as StoragePayloads)[key];

    switch (expectedType) {
      case 'string':
        return value as unknown as StoragePayloads[T];
      case 'number': {
        const num = Number(value);
        if (Number.isNaN(num)) throw new Error(`Invalid number for key: ${key}`);
        return num as unknown as StoragePayloads[T];
      }
      case 'boolean': {
        if (value !== 'true' && value !== 'false') {
          throw new Error(`Invalid boolean for key: ${key}`);
        }
        return (value === 'true') as unknown as StoragePayloads[T];
      }
      default:
        return JSON.parse(value) as StoragePayloads[T];
    }
  }
}
