import { PostsListComponent } from './posts-list/posts-list.component'
import { PostDetailsComponent } from './posts-list/post-details/post-details.component';
import { Routes } from '@angular/router'
import { CreatePostComponent } from './posts-list/create-post/create-post.component'
import { EditPostComponent } from './posts-list/edit-post/edit-post.component';
import { PostRouteActivator } from './shared/post-route-activator.service';
import { Error404Component } from './shared/404.component';

export const routes: Routes = [
  { path: 'posts/edit/:id', component: EditPostComponent, canDeactivate: ['canDeactivateCreateEvent'], canActivate: [PostRouteActivator] },
  { path: 'posts/new', component: CreatePostComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'posts', component: PostsListComponent  },
  { path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator] },
  { path: '404', component: Error404Component},
  { path: '', pathMatch: 'full', redirectTo: '/posts' }
]
