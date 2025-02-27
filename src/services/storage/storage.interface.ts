/**
 * Interface for storage implementations
 * This allows for different storage backends (localStorage, sessionStorage, custom implementations)
 * while maintaining the same API
 */

// ----------------------------------------------------------------------

export interface IStorage {
  /**
   * Store an item in storage
   * @param key The key to store the item under
   * @param value The value to store
   */
  setItem(key: string, value: string): void;

  /**
   * Retrieve an item from storage
   * @param key The key to retrieve
   * @returns The stored value or null if not found
   */
  getItem(key: string): string | null;

  /**
   * Remove an item from storage
   * @param key The key to remove
   */
  removeItem(key: string): void;

  /**
   * Clear all items from storage
   */
  clear(): void;
}

/**
 * LocalStorage implementation of IStorage
 */
export class LocalStorageAdapter implements IStorage {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

/**
 * SessionStorage implementation of IStorage
 */
export class SessionStorageAdapter implements IStorage {
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}

/**
 * In-memory storage implementation of IStorage
 * Useful for testing or environments without browser storage
 */
export class MemoryStorageAdapter implements IStorage {
  private storage = new Map<string, string>();

  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }

  getItem(key: string): string | null {
    return this.storage.has(key) ? this.storage.get(key)! : null;
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

/**
 * Factory function to get the appropriate storage implementation
 * @param storageType The type of storage to use
 * @returns An implementation of IStorage
 */
export function getStorage(storageType: 'local' | 'session' | 'memory' = 'local'): IStorage {
  switch (storageType) {
    case 'local':
      return new LocalStorageAdapter();
    case 'session':
      return new SessionStorageAdapter();
    case 'memory':
      return new MemoryStorageAdapter();
    default:
      return new LocalStorageAdapter();
  }
}
