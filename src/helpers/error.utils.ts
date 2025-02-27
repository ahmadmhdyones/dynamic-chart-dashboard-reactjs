import toast from 'react-hot-toast';
import type { AxiosError } from 'axios';
import axios, { HttpStatusCode } from 'axios';

// ----------------------------------------------------------------------

export interface ApiErrorResponse {
  error: unknown;
  message: string;
  status: number;
}

// ----------------------------------------------------------------------

export const ERROR_MESSAGES = {
  DEFAULT: 'An unexpected error occurred',
  FORBIDDEN: 'Access forbidden',
  NETWORK: 'Network error. Please check your connection',
  NOT_FOUND: 'Resource not found',
  RATE_LIMIT: 'Rate limit exceeded. Please try again later',
  SERVER: 'Server error. Please try again later',
  TIMEOUT: 'Request timed out',
  UNAUTHORIZED: 'Unauthorized. Please log in again',
  VALIDATION: 'Validation error',
};

// ----------------------------------------------------------------------

export const getErrorMessageByStatus = (status: HttpStatusCode): string => {
  switch (status) {
    case HttpStatusCode.BadRequest:
      return ERROR_MESSAGES.VALIDATION;
    case HttpStatusCode.Unauthorized:
      return ERROR_MESSAGES.UNAUTHORIZED;
    case HttpStatusCode.Forbidden:
      return ERROR_MESSAGES.FORBIDDEN;
    case HttpStatusCode.NotFound:
      return ERROR_MESSAGES.NOT_FOUND;
    case HttpStatusCode.RequestTimeout:
      return ERROR_MESSAGES.TIMEOUT;
    case HttpStatusCode.TooManyRequests:
      return ERROR_MESSAGES.RATE_LIMIT;
    case HttpStatusCode.InternalServerError:
    case HttpStatusCode.BadGateway:
    case HttpStatusCode.ServiceUnavailable:
    case HttpStatusCode.GatewayTimeout:
      return ERROR_MESSAGES.SERVER;
    default:
      return ERROR_MESSAGES.DEFAULT;
  }
};

// ----------------------------------------------------------------------

export const handleApiError = (error: unknown, serviceName = 'API'): ApiErrorResponse => {
  let message = ERROR_MESSAGES.DEFAULT;
  let status = 500;

  // Handle Axios errors
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    status = axiosError.response?.status || 500;

    // Try to get error message from response
    const responseData = axiosError.response?.data as unknown;
    if (responseData && typeof responseData === 'object' && 'message' in responseData) {
      message = responseData.message as string;
    } else if (axiosError.message === 'Network Error') {
      message = ERROR_MESSAGES.NETWORK;
      status = 0;
    } else {
      message = getErrorMessageByStatus(status);
    }

    // Log the error for debugging
    console.error(`${serviceName} Error (${status}):`, axiosError.response?.data || axiosError.message);
  } else {
    // Handle non-Axios errors
    console.error(`Unexpected ${serviceName} error:`, error);
  }

  // Show toast notification
  toast.error(message);

  return {
    error,
    message,
    status,
  };
};
