import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { InterceptorService } from './common/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{

  constructor( private service: InterceptorService) {

  
  }
  ngOnInit(): void {
   this.service.getData()
  }
  

  

}

