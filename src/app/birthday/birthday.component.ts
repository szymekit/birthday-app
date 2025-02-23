import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  imports: [CommonModule]
})
export class BirthdayComponent {
  location = 'Browar Welders w Sierakowicach';
  date = '15.03 (sobota)';
  time = '16:00';
}
