import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('names', [
      transition('* => *',[
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true}),
      ])
    ])



  ]
})
export class HomeComponent implements OnInit {

  characterCount: number;
  btnText: string = 'Add a Character';
  nameText: string = 'My first character';
  names = [];

  constructor(private _data: DataService) { }

  ngOnInit() {    
    
    this._data.name.subscribe(res => this.names = res);
    this._data.changeName(this.names);
    this.characterCount = this.names.length;
  }

  addCharacter() {
    this.names.push(this.nameText);
    this.nameText = '';    
    this._data.changeName(this.names);
    this.characterCount = this.names.length;
  }

  removeItem(i){
    this.names.splice(i, 1);    
    this._data.changeName(this.names);
    this.characterCount = this.names.length;
  }

}
