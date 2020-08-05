import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from 'src/app/shared/post.model';
import { PostsService } from 'src/app/shared/posts.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  isDirty: boolean = true;
  post: Post;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router){

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.postsService.getPost(+params['id']).subscribe((post: Post) => {
        this.post = post;
        this.initializeForm(post)
        console.log(this.post);

      })
    })
  }

  initializeForm(post){
    let title = new FormControl(this.post.title, Validators.required);
    let thumbnailUrl = new FormControl(this.post.thumbnailUrl, Validators.required);
    let url = new FormControl(this.post.url, Validators.required);
    let albumId = new FormControl(this.post.albumId ,Validators.required);
      this.postForm = new FormGroup({
        title: title,
        thumbnailUrl: thumbnailUrl,
        url: url,
        albumId: albumId
      })
  }
  cancel(){
    this.router.navigate(['/posts'])
  }
  updatePost(post){
    if (this.postForm.valid){
      console.log(post)
      this.isDirty = false;
      this.postsService.updateCurrentPost(post);
      this.router.navigate(['/posts']);
    }
  }


}
