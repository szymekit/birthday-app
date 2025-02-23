import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  targetDate: Date = new Date('2025-03-15T16:00:00');

  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });

    this.updateCountdown();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance > 0) {
      this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.countdown.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.countdown.seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );
    } else {
      this.countdown = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  }
}
