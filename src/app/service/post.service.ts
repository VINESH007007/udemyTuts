import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) { 
    
  }

  getPosts() {
    return this.http.get(this.url);
  }

  updatePost(postId,updateObj) {

    return this.http.patch(this.url+'/'+postId,JSON.stringify(updateObj));
  }

  deletePost(post) {
    return this.http.delete(this.url+'/'+post.id);
  }



}
