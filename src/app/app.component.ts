import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FullScreenService } from './fullscreen.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'

import { Component0Component } from './component0/component0.component';
import { Component1Component } from './component1/component1.component';
import { Component11Component } from './component11/component11.component';
import { TableDetailsComponent } from './table-details/table-details.component';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, CommonModule,
    MatButtonModule,
    MatIconModule,
    Component0Component,
    Component1Component,
    Component11Component,
    TableDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpService, private fullScreenService: FullScreenService) {}

  posts: any[] = [];
  currentComponent: string = '';
  masterButtonDisable: boolean = false;

  ngOnInit(): void {
    
    this.fullScreenService.ActivateFullscreen();
    this.addPost();
    this.currentComponent = 'component0';
  }

  selectComponent(component: string) {
    this.currentComponent = component;
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Realmente desea cerrar la sesión?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result)
      {
        window.close();
      }
    });
  }

  loadPosts() {
    this.http.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      }
    });
  }

  addPost() {
    const newPost = { userId: '105400579', title: 'New Post', body: 'Post sent by Tickets Controller 2025.' };
    this.http.createPost(newPost).subscribe({
      next: (response) => {
        console.log('Post created', response);
        this.loadPosts();
      },
      error: (error) => {
        console.error('Error creating post', error);
      }
    });
  }
}
