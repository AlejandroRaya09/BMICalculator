import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  private router = inject(Router)

  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo: string = 'Masculino';

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }
  femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100,2)

    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }

}
