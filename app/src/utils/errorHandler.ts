/**
 * Error handling utilities
 */

export interface AppError {
  message: string;
  code?: string;
  details?: unknown;
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      details: __DEV__ ? error.stack : undefined,
    };
  }

  if (typeof error === 'object' && error !== null) {
    const err = error as {message?: string; code?: string};
    return {
      message: err.message || 'An unknown error occurred',
      code: err.code || 'UNKNOWN_ERROR',
    };
  }

  return {
    message: 'An unknown error occurred',
    code: 'UNKNOWN_ERROR',
  };
};

export const getErrorMessage = (error: unknown): string => {
  const appError = handleError(error);
  return appError.message;
};

