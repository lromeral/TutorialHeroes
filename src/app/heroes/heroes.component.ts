import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes'



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = HEROES;
  selectedHero: Hero;

  ngOnInit(): void {
  }

  onSelected(h: Hero): void{
    this.selectedHero = h;
    console.log (this.selectedHero);
  }
}
