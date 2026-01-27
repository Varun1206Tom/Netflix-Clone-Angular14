import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailsResult: any;
  movieVideoResult: any;
  movieCastResult: any;

  constructor(
    private service: MovieApiServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    console.log("GetParamID :", getParamId);
    this.getMovieDetails(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovieDetails(id: any){
    this.service.getMovieDetails(id).subscribe((res) => {
      console.log("Movie details :",res);
      this.movieDetailsResult = res;
    })
  }

  getVideo(id: any){
    this.service.getMovieVideo(id).subscribe((res) => {
      res.results.forEach((element:any) => {
        if(element.type == "trailer")
        {
          this.movieVideoResult = element.key;
        }        
      });
    })
  }

  getCast(id: any){
    this.service.getMovieCast(id).subscribe((res) => {
      console.log("Movie Cast :",res);
      this.movieCastResult = res.cast;
    })
  }

}
