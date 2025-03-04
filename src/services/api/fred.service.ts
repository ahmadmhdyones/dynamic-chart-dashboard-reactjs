import axios from 'axios';
import type { AxiosInstance } from 'axios';

import { handleApiError } from '@/helpers/error.utils';
import { FRED_API_KEY, FRED_BASE_URL } from '@/configs/global.config';

import { FRED_API_ENDPOINTS } from './endpoints';
import type {
  FredSearchParams,
  FredSearchResponse,
  FredObservationParams,
  FredObservationResponse,
} from './fred.types';

// ----------------------------------------------------------------------

const fredApi = axios.create({
  baseURL: FRED_BASE_URL,
  params: {
    api_key: FRED_API_KEY,
    file_type: 'json',
  },
});

// ----------------------------------------------------------------------

class FredService {
  private static instance: FredService;

  private constructor(private readonly api: AxiosInstance) {
    this.api.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        const errorResponse = handleApiError(error, 'FRED API');
        return Promise.reject(errorResponse);
      }
    );
  }

  static getInstance() {
    if (!FredService.instance) {
      FredService.instance = new FredService(fredApi);
    }
    return FredService.instance;
  }

  async searchSeries(params: FredSearchParams) {
    const response = await this.api.get<FredSearchResponse>(FRED_API_ENDPOINTS.SERIES_SEARCH, { params });
    return response.data;
  }

  async getSeriesData(params: FredObservationParams) {
    const response = await this.api.get<FredObservationResponse>(FRED_API_ENDPOINTS.SERIES_OBSERVATIONS, { params });
    return response.data;
  }

  async getSeriesInfo(seriesId: string) {
    const response = await this.api.get<FredSearchResponse>(FRED_API_ENDPOINTS.SERIES, {
      params: { series_id: seriesId },
    });
    return response.data.seriess[0];
  }
}

const fredService = FredService.getInstance();

export default fredService;

// ----------------------------------------------------------------------
