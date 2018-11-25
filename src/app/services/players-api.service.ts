import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersApiService implements ApiService {

  constructor(private httpClient: HttpClient,
              private constants: ConstantsService) {
  }

  API_URL = 'http://127.0.0.1:8000/api/players';

  destroy(id: number): void {
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id.toString(), this.constants.httpOptions);
  }

  index(): Observable<any> {
    return this.httpClient.get(this.API_URL, this.constants.httpOptions);
  }

  patch(id: number, values: any[]): void {
  }

  put(id: number, values: any[]): void {
  }

  store(resource: any): void {
  }

  errorCallback(error: any): void {
    console.log('Error Callback');
    console.log(error);
  }

  nextCallback(parameter: any, message: string): any {
    // console.log('Next Callback');
    // console.log(message);
    // console.log(parameter);

    if (parameter === undefined) {
      return '';
    } else {
      return parameter['data'];
    }
  }

  // destroy(id: number): void {
  // }
  //
  // get(id: number): Observable<any> {
  // }
  //
  // index(): Observable<any> {
  //   return this.httpClient.get(this.API_URL);
  // }
  //
  // patch(values: any[]): void {
  // }
  //
  // put(values: any[]): void {
  // }
  //
  // store(resource: any): void {
  // }

}
