import { Injectable } from '@angular/core';
import { Hero } from './models/hero'
//import { HEROES } from './models/mock-heroes'
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mensajeService: MensajeService, private http: HttpClient) { }

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(x=> this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );

  }

  getHeroById(id: number): Observable<Hero> {
       this.mensajeService.add("Devolviendo Heroe con id:" + id);
       const url = `${this.heroesUrl}/${id}`;
       return this.http.get<Hero>(url).pipe(
        tap(x => this.log('Heroe id=' + id),
        catchError(this.handleError<Hero>('getHeroeById'))));

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private log(msg: string){
    this.mensajeService.add('HeroService:' + msg);
  }

  updateHeroe(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero,this.httpOptions).pipe(
      tap(_ =>this.log('heroe actualizado'),
      catchError (this.handleError<any>('Updating Hero')))
    );

  }

  addHeroe(heroe: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, heroe, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
}

