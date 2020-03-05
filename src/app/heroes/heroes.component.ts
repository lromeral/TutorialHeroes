import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService} from '../hero.service'




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private h: HeroService) { }

  heroes: Hero[]=[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.h.getHeroes().subscribe(
      res => this.heroes = res,
      err => console.log(err),
      ()=> console.log("getHeroes"));

  }

  addHeroe(nombre: string): void{
    nombre = nombre.trim();
    if (!nombre) return;

    this.h.addHeroe(<unknown>name as Hero).subscribe(
      heroe => this.heroes.push(heroe)
    );

    }
  }
