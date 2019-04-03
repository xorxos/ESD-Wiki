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
import { CreateArticleComponent } from './articles/team-wiki/create-article/create-article.component';
import { AddItemMenuComponent } from './articles/team-wiki/create-article/menus/add-item-menu.component';
import { TitleSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/title-settings-menu.component';
import { ArticleSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-settings-menu.component';
import { ArticleContentsMenuComponent } from './articles/team-wiki/create-article/menus/article-contents-menu.component';
import { SubheaderSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/subheader-settings-menu.component';
import { RichtextSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/richtext-settings-menu.component';
import { BulletedListSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/bulletedlist-settings-menu.component';
import { NumberedListSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/numberedlist-settings-menu.component';
import { ImageLeftSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/imageleft-settings-menu.component';
import { ImageRightSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/imageright-settings-menu.component';
import { FullWidthImageSettingsMenuComponent } from './articles/team-wiki/create-article/menus/article-component-menus/fullwidthimage-settings-menu.component';


@NgModule({
  declarations: [
    ArticleAppComponent,
    TopNavBarComponent,
    ArticleCategoriesComponent,
    CategoryListComponent,
    TeamWikiComponent,
    CreateArticleComponent,
    AddItemMenuComponent,
    TitleSettingsMenuComponent,
    ArticleSettingsMenuComponent,
    ArticleContentsMenuComponent,
    SubheaderSettingsMenuComponent,
    RichtextSettingsMenuComponent,
    BulletedListSettingsMenuComponent,
    NumberedListSettingsMenuComponent,
    ImageLeftSettingsMenuComponent,
    ImageRightSettingsMenuComponent,
    FullWidthImageSettingsMenuComponent
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
