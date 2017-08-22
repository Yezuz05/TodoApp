import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  template: `
    <div class="color-selector">
      <i (click)="showSelector(true)" class="material-icons icon">color_lens</i>
      <div class="selector row center-xs"
      *ngIf="isSelectorVisible">
      <div class="color"
      *ngFor="let color of colors"
      [ngStyle]="{'background-color':color}"
      (click)="selectColor(color)"></div> 
      </div>
    </div>
  `,
  styles: [`
  .selector {
    min-width: 120px;
    border: 1px solid lightgrey;
    padding: 10px;
    background-color: #efefef;
    position: absolute;
    top: -50px;
    left: 0;
  }
  .color-selector {
    position: relative;
  }
  .color{
    height: 30px;
    width: 30px;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .color:hover {
    border: 2px solid darkgrey;
  }
  .icon {
    font-size: 1.4rem;
    color: grey;
    cursor: pointer;
  }
  `]
})
export class ColourPickerComponent implements OnInit {
  @Input() colors: Array<string> = [];
  @Output() colorPicked = new EventEmitter();
  isSelectorVisible : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showSelector(value: boolean){
    this.isSelectorVisible = value;
  }
  selectColor(color){
    this.showSelector(false);
    this.colorPicked.emit(color);
  }

}
