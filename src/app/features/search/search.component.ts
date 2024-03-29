import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: any;

  constructor(
    private service: MovieApiServiceService
  ) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, "searchForm");
    this.service.getSearchMovie(this.searchForm.value).subscribe((res) => {
      console.log(res, "searched movie");
      this.searchResult = res.results;
    })
  }

}
