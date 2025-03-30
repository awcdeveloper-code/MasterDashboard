import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'

import { Component0Component } from './component0/component0.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { Component9Component } from './component9/component9.component';
import { Component10Component } from './component10/component10.component';
import { Component11Component } from './component11/component11.component';
@Component({
  selector: 'app-root',
  imports: [HttpClientModule, CommonModule,
    MatButtonModule,
    MatIconModule,
    Component0Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    Component8Component,
    Component9Component,
    Component10Component,
    Component11Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpService) {}

  posts: any[] = [];
  currentComponent: string = '';
  masterButtonDisable: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('userPIN') == null)
    {
      this.masterButtonDisable = true;
    }
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
