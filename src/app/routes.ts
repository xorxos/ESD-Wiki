import { Routes } from '@angular/router'

import { ArticleCategoriesComponent } from './articles/articlecategories.component'
import { CategoryListComponent } from './articles/category-details/category-articlelist.component'
import { TeamWikiComponent } from './articles/team-wiki/team-wiki.component';

export const appRoutes:Routes = [
    { path: 'browse', component: ArticleCategoriesComponent},
    { path: 'browse/:name', component: CategoryListComponent},
    { path: 'team-wiki', component: TeamWikiComponent},
    { path: '', redirectTo: '/browse', pathMatch: 'full'}
]