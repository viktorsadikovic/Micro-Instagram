import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostThumbnailComponent } from './posts-list/post-thumbnail/post-thumbnail.component';
import { PostsService } from './shared/posts.service'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PostDetailsComponent } from './posts-list/post-details/post-details.component';
import { CreatePostComponent } from './posts-list/create-post/create-post.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './posts-list/edit-post/edit-post.component'
import { PostRouteActivator } from './shared/post-route-activator.service'
import { Error404Component } from './shared/404.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostThumbnailComponent,
    PostDetailsComponent,
    CreatePostComponent,
    EditPostComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService,
    PostRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:any){
  if(component.isDirty)
    return window.confirm('You have not saved this post, do you really want to cancel?')
  return true;
}
