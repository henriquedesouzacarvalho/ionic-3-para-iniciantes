import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {
  private baseApiPath="https://api.themoviedb.org/3";
  private apiKey: string = "";

  constructor(public http: Http) {

  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.getApiKey());
  }

  getPopularMovies(page = 1){
    console.log(page);
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  getMovieDetailById(id){
    return this.http.get(this.baseApiPath + `/movie/${id}?api_key=` + this.getApiKey());
  }

  private getApiKey() :string {
    this.apiKey = "0a6fbecc00fac9f381da717b546d640c";
    return this.apiKey;
  }

}
