import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  Autos:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.Autos = this._heroesService.getAutos();
    // console.log( this.heroes );
  }

  verAuto( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
