import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';
import {Game} from './game-list/game.model';


@Injectable({
  providedIn: 'root'
})
export class GamesApiService implements ApiService {

  constructor(private httpClient: HttpClient,
              private constants: ConstantsService) {
  }

  API_URL = 'http://127.0.0.1:8000/api/games';

  destroy(id: number): void {
  }


  get(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id.toString(), this.constants.httpOptions);
  }

  index(): Observable<Game[]> {
    // console.log(this.constants.httpOptions);
    console.log('Index Games');
    console.log(this.API_URL);

    return this.httpClient.get<Game[]>(this.API_URL, this.constants.httpOptions);
  }

  patch(id: number, values: any[]): void {
  }

  put(id: number, values: any[]): void {
  }

  store(resource: any) {
    console.log('STORE');
    console.log(resource);
    return this.httpClient.post(this.API_URL, resource, this.constants.httpOptions);
  }

  getGamesResults(): Observable<any> {
    console.log('GET GAMES RESULTS');
    return this.httpClient.get(this.API_URL + '/results', this.constants.httpOptions);
  }

  nextCallback(parameter: any, message: string): any {
    console.log('Next Callback');
    console.log(parameter);

    if (parameter === undefined) {
      return '';
    } else {
      return parameter[0];
    }
  }

  errorCallback(error: any): void {
    console.log('Error Callback');
    console.log(error);
  }


}
