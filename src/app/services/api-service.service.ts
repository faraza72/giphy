import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiBase: string;

  constructor(private http: HttpClient) {

    this.apiBase = `http://api.giphy.com/v1/gifs/search`;

  }

  getUrl(giphy_to_search){
    return this.apiBase + `?q=${giphy_to_search}&api_key=${environment.GIPHY_API_KEY}&limit=500`
  }

  execute(request: string, url: string, data?: any) {
    // JSON API
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      // withCredentials: true
    };

      // this.http.post() or this.http.get()
    if (request == 'get') {
      return this.http.get<any>(url, httpOptions);
    } else {
      return this.http.post<any>(url, data, httpOptions);
    }
  }

  // Common Method for Posting Data
  post(url: string, data: any) {
    return this.execute('post', url, data);
  }

  // Common Method for Posting Data
  get(url: string) {
    return this.execute('get', url, null);
  }

  // to find the specific giphy
  getGiphy(giphy_to_search) {
    const url = this.getUrl(giphy_to_search);
    return this.get(url);
  }


}
