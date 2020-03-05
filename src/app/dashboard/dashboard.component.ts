import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[]=[];

  ngOnInit(): void {

    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(
      res => {this.heroes= res.slice(1,5)
      console.log(res)}
    );
  }
}
