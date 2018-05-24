import { Component } from '@angular/core';
import { ClickService } from './service/click.service';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent {
  allClicks: number;
  constructor(private clickService: ClickService, private httpService: HttpService) {
  }
  title = 'First component with Angular';
  header = 'HEADER';
  writer = ['one', 'two', 'three'];
  having(key: string): void {
    console.log('HAVING');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.clickService.getSum().subscribe(click => {
      this.allClicks = click;
    });
  }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }
  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(posts => {
      console.log(posts);
    });
  }
  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Moj post',
      body: 'Pierwszy post o angularze'
    });
    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }
  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'uno tre quatro',
      body: 'dfdsag post o angularze'
    });
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }
  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }
  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis'
    });
    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    });
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
