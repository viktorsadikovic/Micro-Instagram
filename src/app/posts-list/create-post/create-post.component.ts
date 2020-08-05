import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/post.model';
import { PostsService } from 'src/app/shared/posts.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  newPost;
  title: FormControl;
  thumbnailUrl: FormControl;
  url: FormControl;
  albumId: FormControl
  newPostForm: FormGroup;
  nextId: number;
  isDirty: boolean = true;
  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.title = new FormControl('', Validators.required);
    this.thumbnailUrl = new FormControl('', Validators.required);
    this.url = new FormControl('', Validators.required);
    this.albumId = new FormControl('',Validators.required);

    this.newPostForm = new FormGroup({
      title: this.title,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl,
      albumId: this.albumId

    })
  }

  savePost(formValues){
    this.postsService.getPosts().subscribe(data => {
      this.nextId = Math.max.apply(Math, data.map(obj => obj.id));
      let post: Post = {
        id: this.nextId + 1,
        title: formValues.title,
        url: formValues.url,
        thumbnailUrl: formValues.thumbnailUrl,
        albumId: formValues.albumId
      };
      this.isDirty = false;
      this.postsService.savePost(post);
      this.router.navigate(['/posts'])
    })


  }

  cancel(){
    this.router.navigate(['/posts'])
  }

}
