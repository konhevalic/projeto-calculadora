import { Component } from '@angular/core';
import { SomaService } from '../../services';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {

  resultado!: number;

  constructor(private somaService: SomaService) {}

  somarValores(numero1: string, numero2: string): void {
    this.resultado = this.somaService.somar(parseFloat(numero1), parseFloat(numero2));
  }

  get result(): string {
    return this.resultado.toString();
  }
}
