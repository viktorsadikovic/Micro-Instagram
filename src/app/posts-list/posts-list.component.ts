import { Component, OnInit } from '@angular/core';
import {Post } from '../shared/post.model'
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  constructor(private postsService: PostsService) { }


  ngOnInit(){
    return this.postsService.getPosts().subscribe(data => this.posts = data);
  }

}
