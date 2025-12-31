import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get port(): number {
    return this.configService.get<number>('PORT', 3000);
  }

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }

  get corsOrigin(): string {
    return this.configService.get<string>('CORS_ORIGIN', '*');
  }

  get logLevel(): string {
    return this.configService.get<string>('LOG_LEVEL', 'info');
  }

  get googleMapsApiKey(): string | undefined {
    return this.configService.get<string>('GOOGLE_MAPS_API_KEY');
  }

  get appleMapsApiKey(): string | undefined {
    return this.configService.get<string>('APPLE_MAPS_API_KEY');
  }

  get jwtSecret(): string | undefined {
    return this.configService.get<string>('JWT_SECRET');
  }

  get rateLimitTtl(): number {
    return this.configService.get<number>('RATE_LIMIT_TTL', 60);
  }

  get rateLimitMax(): number {
    return this.configService.get<number>('RATE_LIMIT_MAX', 100);
  }
}

