import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpModule,Http } from '@angular/http';

@Component({
  selector: 'get-module',
  templateUrl: './get-module.component.html',
  styleUrls: ['./get-module.component.css']
})
export class GetModuleComponent implements OnInit {
  

  data:any[];

  
  constructor(private httpService:PostService) {
     
  }

  ngOnInit(): void {
    this.httpService.getPosts()
      .subscribe( res =>
      this.data= res.json());
  }

  deletePost(post) {
    this.httpService.deletePost(post)
      .subscribe(res => {
        let index = this.data.indexOf(post);
        this.data.splice(index,1);
        console.log(res.json());
      });
  }

  updatePost(postId) 
  {
    this.httpService.updatePost(postId, {isRead : true})
      .subscribe( res => {
        console.log(res.json());
      });
  }
}

