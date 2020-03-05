import { Injectable } from '@angular/core';
import { Hero } from './models/hero'
import { HEROES } from './models/mock-heroes'
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mensajeService: MensajeService) { }

  getHeroes(): Observable<Hero[]> {
    this.mensajeService.add('HeroService: Devueltos Heroes');
    return of(HEROES);

  }
  
  getHeroById(id: number): Observable<Hero> {
       this.mensajeService.add("Devolviendo Heroe con id:" + id);
       return of(HEROES.find(h => h.id == id));
      
  }
}