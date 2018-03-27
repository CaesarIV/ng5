import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';     

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  names: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //Called when Component is loaded
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.name.subscribe(res => this.names = res);
  }

  sendMeHome(){
    this.router.navigate(['']) //Empty to correspond to empty path
  }

}
