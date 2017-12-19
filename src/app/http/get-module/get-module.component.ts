import { Component, OnInit } from '@angular/core';
import { HttpModule,Http } from '@angular/http';

@Component({
  selector: 'get-module',
  templateUrl: './get-module.component.html',
  styleUrls: ['./get-module.component.css']
})
export class GetModuleComponent implements OnInit {
  ngOnInit(): void {
    this.httpService.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe( res =>
      this.data= res.json());
  }

  data:any[];

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpService:Http) {
     
  }

  deletePost(post) {
    this.httpService.delete(this.url+'/'+post.id)
      .subscribe(res => {
        let index = this.data.indexOf(post);
        this.data.splice(index,1);
        console.log(res.json());
      });
  }

  updatePost(postId) 
  {
    this.httpService.patch(this.url+'/'+postId, JSON.stringify({isRead : true}))
      .subscribe( res => {
        console.log(res.json());
      });
  }

  getJsonData(){
      
  }
}

