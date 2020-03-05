import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  constructor(
    private heroService: HeroService, 
    private location: Location,
    private route: ActivatedRoute
    ) { }

    hero: Hero;

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id');

    this.heroService.getHeroById(Number(id)).subscribe(data => this.hero=data);


  }   

  irAtras():void{
    this.location.back();
  }

  }
  

