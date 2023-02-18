import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  baseURL = environment.baseApiURL;
  title = 'marvel';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.baseURL+'/characters').subscribe((el)=>{
      console.log(el);
    })
  }
}
