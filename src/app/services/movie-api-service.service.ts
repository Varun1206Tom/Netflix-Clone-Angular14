import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

  // <-------- bannerApiData ------>
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  // <-------- TrendingMovieApiData ------->
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  // <----------- SearchedMovie ----------->
  getSearchMovie(data:any):Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.query}`);
  }

  // <---------- Get Movie Details --------->
  getMovieDetails(data: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  // <---------- GetMovieVideo ------------>
  getMovieVideo(data: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  // <------------ GetMovieCast ---------->
  getMovieCast(data: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  // <----------- Get Action Movies ---------->
  getActionMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }

  // <--------- Get Adventure Movies ---------->
  getAdventureMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }

  // <---------- get Animation Movies ---------->
  getAnimationMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }

  // <---------- get Comedy Movies ---------->
  getComedyMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }

  // <---------- get Documentary Movies ---------->
  getDocumentaryMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }

  // <---------- get Science-Fiction Movies ---------->
  getScienceFictionMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }

  // <---------- get Thriller Movies ---------->
  getThrillerMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }

}
