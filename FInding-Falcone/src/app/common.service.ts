import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
    constructor(private _http: HttpClient) { }

    //urls
    planetUrl: string = "https://findfalcone.herokuapp.com/planets";
    vehicleUrl: string = "https://findfalcone.herokuapp.com/vehicles";
    planetsArray: Array<any>;
    vehiclesArray: Array<any>;

    getPlanet(): Observable<Array<any>> {
        return this._http.get<Array<any>>(this.planetUrl).do(data => console.log(data)).catch(this.handleError);
    };

    getVehicle(): Observable<Array<any>> {
        return this._http.get<Array<any>>(this.vehicleUrl).do(data => console.log(data)).catch(this.handleError);
    };
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}