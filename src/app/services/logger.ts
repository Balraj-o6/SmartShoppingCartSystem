import { Injectable } from '@angular/core';
import { LogEntry } from '../models/log-entry';

@Injectable()
export class LoggerService {

  componentName = '';
  private logs: LogEntry[] = [];

  setComponentName(name: string): void {
    this.componentName = name;
  }

  log(message: string): void {

    const log: LogEntry = {
      timestamp: new Date(),
      level: 'info',
      message,
      componentName: this.componentName
    };

    this.logs.push(log);

    console.log(log);
  }

  warn(message: string): void {

    const log: LogEntry = {
      timestamp: new Date(),
      level: 'warn',
      message,
      componentName: this.componentName
    };

    this.logs.push(log);

    console.warn(log);
  }

  error(message: string): void {

    const log: LogEntry = {
      timestamp: new Date(),
      level: 'error',
      message,
      componentName: this.componentName
    };

    this.logs.push(log);

    console.error(log);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }
}