
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

  constructor(private  http: Http) {
    console.log("user service initiazeld...");
  }


  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
  }


}



