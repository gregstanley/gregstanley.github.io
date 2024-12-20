import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickerComponent } from './clicker/clicker.component';
import { MastermindComponent } from './mastermind/mastermind.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClickerComponent, MastermindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gs';
}
