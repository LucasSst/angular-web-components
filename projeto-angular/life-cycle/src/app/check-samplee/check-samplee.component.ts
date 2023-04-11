import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-check-samplee',
  templateUrl: './check-samplee.component.html',
  styleUrls: ['./check-samplee.component.css']
})
export class CheckSampleeComponent
implements OnInit,
            DoCheck,
            AfterContentChecked,
            AfterViewChecked,
            AfterViewInit,
            AfterContentInit,
            OnDestroy
{

  quantidade:number = 0
  constructor() { }




  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterContentChecked(): void {
     console.log('ngAfterContentChecked')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  ngOnInit(): void {
    console.log('ngOninit')
  }

  ngOnDestroy(): void {
    console.log("tchau meu amigo")
   }

}
