import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numero = 0;
  time1 = 0;
  time2 = 0;
  p1 = 0;
  p2 = 0;
  constructor() {}

  botoes(valor: number){
    this.numero = valor;
  }

  soma1(){
    this.time1 += this.numero;
    this.numero = 1;
    if(this.time1 >=12){
      this.p1 += 1;
      this.time1=0;
      this.time2=0;
    }
  }
  soma2(){
    this.time2 += this.numero;
    this.numero = 1;
    if(this.time2 >=12){
      this.p2 += 1;
      this.time1=0;
      this.time2=0;
    }
  }

  tirar1(){
    this.time1 -= this.numero;
    this.numero = 1;
  }

  tirar2(){
    this.time2 -= this.numero;
    this.numero = 1;
  }

  voltar(){
    this.numero = 0;
    this.time1 = 0;
    this.time2 = 0;
    this.p1=0;
    this.p2=0;
  }


}
