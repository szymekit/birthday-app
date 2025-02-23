import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BirthdayComponent} from "./birthday/birthday.component";
import {HeroComponent} from "./hero/hero.component";
import {CountdownComponent} from "./countdown/countdown.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BirthdayComponent, HeroComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements AfterViewInit {
  @ViewChild('balloonContainer', { static: false }) balloonContainer!: ElementRef;

  ngAfterViewInit() {
    this.createBalloons(30);
  }

  random(num: number): number {
    return Math.floor(Math.random() * num);
  }

  getRandomStyles(): string {
    const r = this.random(255);
    const g = this.random(255);
    const b = this.random(255);
    const mt = this.random(200);
    const ml = this.random(50);
    const dur = this.random(5) + 5;
    return `
      background-color: rgba(${r}, ${g}, ${b}, 0.7);
      color: rgba(${r}, ${g}, ${b}, 0.7);
      box-shadow: inset -7px -3px 10px rgba(${r - 10}, ${g - 10}, ${b - 10}, 0.7);
      margin: ${mt}px 0 0 ${ml}px;
      animation: float ${dur}s ease-in infinite;
    `;
  }

  createBalloons(num: number): void {
    for (let i = 0; i < num; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.cssText = this.getRandomStyles();
      this.balloonContainer.nativeElement.appendChild(balloon);
    }

    console.log(this.balloonContainer.nativeElement);
  }

  removeBalloons(): void {
    const container = this.balloonContainer.nativeElement;
    container.style.opacity = '0';
    setTimeout(() => {
      container.remove();
    }, 500);
  }

  @HostListener('window:click')
  onWindowClick(): void {
    this.removeBalloons();
  }
}
