import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {

  constructor() { }
  @Input() post: any;
  ngOnInit(): void {
  }

}
