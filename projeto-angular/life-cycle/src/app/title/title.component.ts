import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = 'Lucas'
  constructor() { }

  ngOnChanges(): void {
    console.log("Onchanges")
  }

  ngOnInit(): void {
    console.log('Console on init')
  }

}
