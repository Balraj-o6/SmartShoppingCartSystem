export interface LogEntry {
    timestamp: Date;
    level: 'info' | 'warn' | 'error';
    message: string;
    componentName: string;
}