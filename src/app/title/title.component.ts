import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges , OnDestroy{
  @Input() name:string = "";

  constructor(){
    console.log(`Exibindo constructor TitleComponent - ${this.name}`);
  }
  ngOnDestroy(): void {
    console.log(`Exibindo ngOnDestroy TitleComponent - ${this.name}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Exibindo ngOnChanges TitleComponent - ${this.name}`);
  }

  ngOnInit(): void {
    //this.name = "Roni 2";
    console.log(`Exibindo ngOnInit TitleComponent - ${this.name}`);
  }

}
