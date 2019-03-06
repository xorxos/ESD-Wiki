import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticleAppComponent } from './article-app.component'
import { TopNavBarComponent } from './navbar/top-navbar.component';
import { BodyComponent } from './body.component';


@NgModule({
  declarations: [
    ArticleAppComponent,
    TopNavBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArticleAppComponent]
})
export class AppModule { }
