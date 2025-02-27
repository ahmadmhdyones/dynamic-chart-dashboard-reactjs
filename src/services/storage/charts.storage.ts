import { v4 as uuidv4 } from 'uuid';

import type { Chart } from '@/types/chart.types';

import { API_MOCK_DELAY } from '@/configs/global.config';

// ----------------------------------------------------------------------

// Simulate localStorage with type safety
class ChartStorage {
  private readonly STORAGE_KEY = 'dashboard_charts';
  private readonly MOCK_DELAY = API_MOCK_DELAY; // milliseconds

  // Helper to simulate API delay
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all charts from storage
  async getAll(): Promise<Chart[]> {
    await this.delay(this.MOCK_DELAY);

    try {
      const chartsJson = localStorage.getItem(this.STORAGE_KEY);
      if (!chartsJson) return [];

      return JSON.parse(chartsJson) as Chart[];
    } catch (error) {
      console.error('Error retrieving charts from storage:', error);
      return [];
    }
  }

  // Get a single chart by ID
  async getById(id: string): Promise<Chart | null> {
    await this.delay(this.MOCK_DELAY);

    try {
      const charts = await this.getAll();
      return charts.find(chart => chart.id === id) || null;
    } catch (error) {
      console.error(`Error retrieving chart ${id} from storage:`, error);
      return null;
    }
  }

  // Save a new chart
  async create(chart: Omit<Chart, 'id'>): Promise<Chart> {
    await this.delay(this.MOCK_DELAY);

    try {
      const charts = await this.getAll();

      // Create new chart with ID
      const newChart: Chart = {
        ...chart,
        id: uuidv4(),
      };

      // Save to storage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...charts, newChart]));

      return newChart;
    } catch (error) {
      console.error('Error saving chart to storage:', error);
      throw new Error('Failed to save chart');
    }
  }

  // Update an existing chart
  async update(id: string, chartData: Partial<Chart>): Promise<Chart> {
    await this.delay(this.MOCK_DELAY);

    try {
      const charts = await this.getAll();
      const chartIndex = charts.findIndex(chart => chart.id === id);

      if (chartIndex === -1) {
        throw new Error(`Chart with ID ${id} not found`);
      }

      // Update chart
      const updatedChart: Chart = {
        ...charts[chartIndex],
        ...chartData,
      };

      charts[chartIndex] = updatedChart;

      // Save to storage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(charts));

      return updatedChart;
    } catch (error) {
      console.error(`Error updating chart ${id}:`, error);
      throw error;
    }
  }

  // Delete a chart
  async delete(id: string): Promise<void> {
    await this.delay(this.MOCK_DELAY);

    try {
      const charts = await this.getAll();
      const filteredCharts = charts.filter(chart => chart.id !== id);

      // Save to storage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredCharts));
    } catch (error) {
      console.error(`Error deleting chart ${id}:`, error);
      throw error;
    }
  }

  // Clear all charts (for testing)
  async clear(): Promise<void> {
    await this.delay(this.MOCK_DELAY);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

const chartStorage = new ChartStorage();

export default chartStorage;
