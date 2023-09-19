import 'zone.js/dist/zone';
import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Carro de compra</h1>
      <select
        [ngModel]="quantity()"
        (change)="onQuantitySelected($any($event.target).value)">
        <option *ngFor="let q of qtyAvailable()">{{ q }}</option>
      </select>
  `,
})
export class App {
  name = 'Angular';
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  constructor() {
    console.log(this.quantity());
  }

  qtyEff = effect(()=> console.log("Latest quantity:", this.quantity()))
  onQuantitySelected(qty: number) {
    this.quantity.set(qty);

    this.quantity.set(5);

    this.quantity.set(34)
  }
}

bootstrapApplication(App);
