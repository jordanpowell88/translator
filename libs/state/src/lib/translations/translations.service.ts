import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { TranslateRequestBody, TranslateResponse } from "@caribbean-developers-conference/api-interfaces";

@Injectable()
export class TranslationsService {
    constructor(private readonly http: HttpClient) {}

    translate(text: string): Observable<TranslateResponse> {
        const body: TranslateRequestBody = { text, sourceLanguageCode: 'en' };
        return this.http.post<TranslateResponse>('http://localhost:3333/api/translate', body)
    }
}