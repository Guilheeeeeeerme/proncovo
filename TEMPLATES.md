# Templates de Código - pronCOVO

Templates úteis para acelerar a implementação de funcionalidades.

## Backend - NestJS

### Módulo Básico

```typescript
// api/src/{module}/{module}.module.ts
import { Module } from '@nestjs/common';
import { {Module}Controller } from './{module}.controller';
import { {Module}Service } from './{module}.service';

@Module({
  controllers: [{Module}Controller],
  providers: [{Module}Service],
  exports: [{Module}Service],
})
export class {Module}Module {}
```

### Controller Básico

```typescript
// api/src/{module}/{module}.controller.ts
import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { {Module}Service } from './{module}.service';

@Controller('{module}')
export class {Module}Controller {
  constructor(private readonly {module}Service: {Module}Service) {}

  @Get()
  async findAll() {
    try {
      return await this.{module}Service.findAll();
    } catch (error) {
      throw new HttpException(
        { message: 'Error message', code: 'ERROR_CODE' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
```

### Service Básico

```typescript
// api/src/{module}/{module}.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class {Module}Service {
  async findAll() {
    // Implementation
    return [];
  }
}
```

### DTO com Validação

```typescript
// api/src/{module}/dto/{module}.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Create{Module}Dto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  value?: number;
}
```

## App - React Native

### Componente Básico

```typescript
// app/src/components/{Component}.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface {Component}Props {
  // props
}

export const {Component}: React.FC<{Component}Props> = ({ }) => {
  return (
    <View style={styles.container}>
      <Text>{Component}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles
  },
});
```

### Screen Básica

```typescript
// app/src/screens/{Screen}Screen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const {Screen}Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>{Screen}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // styles
  },
});
```

### Service Básico

```typescript
// app/src/services/{service}.service.ts
import { apiService } from './api.service';

export class {Service}Service {
  static async getData() {
    try {
      const response = await apiService.get('/endpoint');
      return response.data;
    } catch (error) {
      throw new Error('Error message');
    }
  }
}
```

### Custom Hook

```typescript
// app/src/hooks/use{Feature}.ts
import { useState, useEffect } from 'react';

export const use{Feature} = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Implementation
  }, []);

  return { data, loading, error };
};
```

### API Service Base

```typescript
// app/src/services/api.service.ts
import axios from 'axios';
import { API_BASE_URL } from '@env';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = getAuthToken(); // Implement getAuthToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    return Promise.reject(error);
  },
);

export const apiService = apiClient;
```

## TypeScript Types

### Location Types

```typescript
// app/src/types/location.ts
export interface Location {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  heading?: number;
  speed?: number;
}

export interface PointOfInterest {
  id: string;
  name: string;
  location: Location;
  type: string;
  distance?: number;
}
```

### AI Types

```typescript
// app/src/types/ai.ts
export interface AIProvider {
  id: string;
  name: string;
  type: 'openai' | 'anthropic' | 'google' | 'other';
  token: string;
  isActive: boolean;
}

export interface Briefing {
  text: string;
  audioUrl?: string;
  duration?: number;
}
```

### API Response Types

```typescript
// app/src/types/api.ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
}
```

## Error Handling

### Backend Error Handler

```typescript
// api/src/common/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
```

### App Error Handler

```typescript
// app/src/utils/errorHandler.ts
export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export const showError = (message: string) => {
  // Implement with your notification system
  console.error(message);
};
```

## Testing Templates

### Backend Unit Test

```typescript
// api/src/{module}/{module}.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {Module}Service } from './{module}.service';

describe('{Module}Service', () => {
  let service: {Module}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{Module}Service],
    }).compile();

    service = module.get<{Module}Service>({Module}Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
```

### App Component Test

```typescript
// app/src/components/{Component}.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { {Component} } from './{Component}';

describe('{Component}', () => {
  it('renders correctly', () => {
    const { getByText } = render(<{Component} />);
    expect(getByText('{Component}')).toBeTruthy();
  });
});
```

