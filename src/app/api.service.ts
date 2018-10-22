import {Observable} from 'rxjs';

export interface ApiService {

  API_URL: string;

  // index all entries of a determined resource
  index(): Observable<any>;

  // get a resource with a determined ID
  get(id: number): Observable<any>;

  // store a resource with a determined ID
  store(resource: any): void;

  // substitute existing entry with new values
  put(id: number, values: any[]): void;

  // patch existing entry with new values
  patch(id: number, values: any[]): void;

  // destroy a resource with a determined ID
  destroy(id: number): void;

  // generic interface for 'next' callback
  nextCallback(parameter: any, message: string): any;

  // generic interface for 'error' callback
  errorCallback(error: any): void;

}
