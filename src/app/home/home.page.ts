import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Profile } from './profile';
import { Country } from '../home/country';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public countries!: Country[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Country[]>(environment.baseUrl + 'api/Countries')
    .subscribe(result => {
      console.log(result);
      this.countries = result;
    }, error => console.error(error));
  }

}

