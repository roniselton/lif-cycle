import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit , OnDestroy, DoCheck , AfterContentInit , AfterContentChecked , AfterViewChecked,AfterViewInit{

  @Input() quantidade : number = 0;
  @Input() max = 10;

  adicionar():void{
    if(this.quantidade < this.max)
      this.quantidade++;
  }

  podeAdicionar():boolean{
    return this.quantidade < this.max;
  }
  podeDiminuir():boolean{
    return this.quantidade > 0;
  }

  diminuir():void{
    if(this.quantidade > 0)
      this.quantidade --;
  }

  ngOnInit(): void {
    console.log(`Metodo ngOnInit`);
  }
  ngOnDestroy(): void {
    console.log(`Metodo ngOnDestroy`);
  }
  ngDoCheck(): void {
    console.log(`Metodo ngDoCheck`);
  }
  ngAfterContentInit(): void {
    console.log(`Metodo ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`Metodo ngAfterContentChecked`);
  }
  ngAfterViewChecked(): void {
    console.log(`Metodo ngAfterViewChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`Metodo ngDoCheck`);
  }

}
