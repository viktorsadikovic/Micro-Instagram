import { Component, OnInit } from '@angular/core';
import { Post} from 'src/app/shared/post.model';
import { PostsService } from 'src/app/shared/posts.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) { }
  album: any;
  user: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.postsService.getPost(+params['id']).subscribe((post: Post) => {
        this.post = post;
        console.log("PHOTO OBJECT = ");
        console.log(this.post)

        this.getALBUM(+this.post.albumId)
      })
    })
  }

  getALBUM(id: number){
      this.postsService.getAlbum(id).subscribe((album: any) => {
        this.album = album;
        console.log("ALBUM OBJECT = ");
        console.log(this.album)
        this.getUSER(this.album.userId);
        })

    }
  getUSER(id: number){
      this.postsService.getUser(id).subscribe((user: any) => {
        this.user = user;
        console.log("USER OBJECT = ");
        console.log(this.user)
      })
  }

  editPost(){
    this.router.navigate(['/posts/edit/' + this.post.id])
  }

  deletePost(){
    if (window.confirm("Are you sure you want to delete this post?")){
      this.postsService.deletePost(this.post.id)
      this.router.navigate(['/posts'])
    }

  }

  }





