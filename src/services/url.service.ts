import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environment/environment";

@Injectable({
    providedIn: 'root'
})

export class UrlService {
    constructor(
        private http: HttpClient
    ){}

    encurtar(url: any): Observable<any> {
        return this.http.post<any>(`${environment.shortMyUrl}encurtar`, url)
    }
}