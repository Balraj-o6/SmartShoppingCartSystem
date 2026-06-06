export interface Notification {
    id: number;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timestamp: Date;
}