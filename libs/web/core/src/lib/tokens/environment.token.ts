import { InjectionToken } from '@angular/core';

export interface Environment {
  production: boolean;
  api_url: string;
}

export const ENVIRONMENT = new InjectionToken<Environment>('environment');
