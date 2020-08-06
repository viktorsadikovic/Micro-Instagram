import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { PostsService } from './posts.service'
import { catchError } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Post } from './post.model'

@Injectable()
export class PostRouteActivator implements CanActivate{
  constructor(private postService: PostsService, private router: Router ){

  }

  canActivate(route:ActivatedRouteSnapshot){
    const postExists = !!this.postService.getPost(+route.params['id']);
    console.log(postExists)
    if (!postExists){
      this.router.navigate(['/404']);
    }
    return postExists
  }
}

