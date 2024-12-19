import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  protected counter = signal(0);

  protected o = viewChild('object', { read: ElementRef });

  protected onClick(event: MouseEvent): void {
    this.counter.set(this.counter() + 1);
  }
}
