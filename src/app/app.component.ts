import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SomaComponent } from './pages/soma';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SomaComponent, CommonModule, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
