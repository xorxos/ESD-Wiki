import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { ArticleAppComponent } from './article-app.component'
import { TopNavBarComponent } from './navbar/top-navbar.component';
import { ArticleCategoriesComponent } from './articles/articlecategories.component';
import { CategoryListComponent } from './articles/category-details/category-articlelist.component'
import { CategoryService } from './articles/shared/category.service'
import { ArticleService } from './articles/shared/article.service'
import { appRoutes } from './routes'
import { TeamWikiComponent } from './articles/team-wiki/team-wiki.component';


@NgModule({
  declarations: [
    ArticleAppComponent,
    TopNavBarComponent,
    ArticleCategoriesComponent,
    CategoryListComponent,
    TeamWikiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    CategoryService,
    ArticleService
  ],
  bootstrap: [ArticleAppComponent]
})
export class AppModule { }
