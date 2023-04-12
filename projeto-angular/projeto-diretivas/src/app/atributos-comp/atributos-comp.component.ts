import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos-comp',
  templateUrl: './atributos-comp.component.html',
  styleUrls: ['./atributos-comp.component.css']
})
export class AtributosCompComponent implements OnInit {
  style:string ="enabel"
  textColor:string = "white"
  backgroundColor:string = "black"
  item:string = ''
  list:string[] = []
  isEnableBlock:boolean = true
  constructor() { }

  addList():void{
    this.list.push(this.item)
  }

  changeStyle() : void{
   if( this.style === "disable"){
      this.style = 'enabel'
   }else {
      this.style = 'disable'
   }
  }

  ngOnInit(): void {
  }

}
