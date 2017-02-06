import {Component} from '@angular/core';
import {PostService} from "./post.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, UserService]
})
export class AppComponent {
  title = 'app works!';
  posts: Posts[];
  users: Users[];

  constructor(private  postService: PostService, private userService: UserService) {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
      // console.log(posts);
    });

    this.userService.getUser().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }
}


interface Posts {
  id: number;
  title: string;
  body: string;

}

interface Localisation {

  lng: string;
  lat: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Localisation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


interface  Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
