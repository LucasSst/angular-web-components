import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = 'Lucas'
  constructor() {
    console.log(`contructor ${this.nome}`)
   }

  ngOnChanges(): void {
    console.log(`Onchanges ${this.nome}`)
  }

  ngOnInit(): void {
    console.log(`Console on init ${this.nome}`)
  }

}
