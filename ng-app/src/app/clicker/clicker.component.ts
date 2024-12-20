import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-clicker',
  imports: [],
  templateUrl: './clicker.component.html',
})
export class ClickerComponent implements OnInit {
  ngOnInit(): void {}

  protected counter = signal(0);

  protected onClick(_: MouseEvent): void {
    this.counter.set(this.counter() + 1);
  }
}
