import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticleAppComponent } from './article-app.component'
import { TopNavBarComponent } from './navbar/top-navbar.component';
import { ArticleListComponent } from './articlelist.component';


@NgModule({
  declarations: [
    ArticleAppComponent,
    TopNavBarComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArticleAppComponent]
})
export class AppModule { }
