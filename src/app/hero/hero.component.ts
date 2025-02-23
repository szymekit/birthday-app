import {Component, OnDestroy, OnInit} from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  ngOnInit() {
    setInterval(() => {
      this.onHeroClicked()
    }, 2000)
  }

  onHeroClicked() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
