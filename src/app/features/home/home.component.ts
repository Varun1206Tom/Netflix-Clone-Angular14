import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  constructor(
    private service: MovieApiServiceService
  ) { }

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comdeyMovieData();
    this.documentaryMovieData();
    this.scienceFictionMovieData();
    this.thrillerMovieData();
  }

  // <------ bannerData ------>
  bannerData() {
    this.service.bannerApiData().subscribe((res)=> {
      console.log(res, "result");
      this.bannerResult = res.results;
    })
  }

  // <------- TrendingMovieData ------->
  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((res) => {
      console.log(res, "trending moviedata");
      this.trendingMovieResult = res.results;
    })
  }

  // <------- ActionMovieData ------->
  actionMovieData() {
    this.service.getActionMovie().subscribe((res)=>{
      this.actionMovieResult = res.results;
    })
  }

  // <------- AdventureMovieData ------->
  adventureMovieData() {
    this.service.getAdventureMovie().subscribe((res)=> {
      this.adventureMovieResult = res.results;
    })
  }

  // <------- AnimationMovieData ------->
  animationMovieData(){ 
    this.service.getAnimationMovie().subscribe((res) => {
      this.animationMovieResult = res.results;
    })
  }

  // <------- ComedyMovieData ------->
  comdeyMovieData() {
    this.service.getComedyMovie().subscribe((res) => {
      this.comedyMovieResult = res.results;
    })
  }

  // <------- DocumentaryMovieData ------->
  documentaryMovieData() {
    this.service.getDocumentaryMovie().subscribe((res) => {
      this.documentaryMovieResult = res.results;
    })
  }

  // <------- ScienceFictionMovieData ------->
  scienceFictionMovieData() {
    this.service.getScienceFictionMovie().subscribe((res) => {
      this.scienceFictionMovieResult = res.results;
    })
  }

  // <------- ThrillerMovieData ------->
  thrillerMovieData() {
    this.service.getThrillerMovie().subscribe((res)=> {
      console.log(res, "thrille");
      this.thrillerMovieResult = res.results;
    })
  }

}
