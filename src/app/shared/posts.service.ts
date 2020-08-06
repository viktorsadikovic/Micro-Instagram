import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from './post.model'
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class PostsService {
  apiUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http:HttpClient,private router: Router){ }

  getPosts(){
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id: number){
    return this.http.get<Post>(this.apiUrl + "/" + id).pipe(catchError((err) => {
      console.log('error caught');
      this.router.navigate(['/404'])
      return throwError(err);
    }));
  }

  getAlbum(id: number){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/albums/" + id);
  }

  getUser(id: number){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users/" + id);
  }

  savePost(post) {
    console.log(post)
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    return this.http.post<Post>(this.apiUrl, post, options);
  }

  updateCurrentPost(post){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    return this.http.put<Post>(this.apiUrl, post, options)

  }

  deletePost(id: number){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    console.log("Deleted object id=" + id)
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/photos/' + id, options)

  }



}
