import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    setInterval(() => {

      this.notifications =
        this.notificationService.getNotifications();

    }, 500);
  }

  dismiss(id: number): void {

    this.notificationService.removeNotification(id);
  }
}