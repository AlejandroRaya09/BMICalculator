import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {
private route = inject(ActivatedRoute)
bmi: number = 0
resultado:string = ''
interpretacion:string = ''

ngOnInit(): void {
  this.bmi = +this.route.snapshot.paramMap.get('valor')!;

  this.getResultado()
}

getResultado(){
if(this.bmi >= 25){
this.resultado = 'Exceso de Peso'
this.interpretacion = 'Tienes un peso corporal superior al normal, marrano'
}else if(this.bmi >= 18.5){
  this.resultado = 'Normal'
  this.interpretacion = 'Andas al putazoo padrino'
}else{
  this.resultado = 'Bajo de Peso'
  this.interpretacion = 'Comete un pan bro, cuidado'
}




}

}
