import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[] = [];
  private nextId = 1;

  private addNotification(type: any, message: string) {

    const notification: Notification = {
      id: this.nextId++,
      type,
      message,
      timestamp: new Date()
    };

    this.notifications.push(notification);
  }

  showSuccess(message: string): void {
    this.addNotification('success', message);
  }

  showError(message: string): void {
    this.addNotification('error', message);
  }

  showWarning(message: string): void {
    this.addNotification('warning', message);
  }

  showInfo(message: string): void {
    this.addNotification('info', message);
  }

  getNotifications(): Notification[] {
    return [...this.notifications];
  }

  clearNotifications(): void {
    this.notifications = [];
  }

  removeNotification(id: number): void {
    this.notifications =
      this.notifications.filter(n => n.id !== id);
  }
}