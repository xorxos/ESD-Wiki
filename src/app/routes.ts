import { Routes } from '@angular/router'

import { ArticleCategoriesComponent } from './articles/articlecategories.component'
import { CategoryListComponent } from './articles/category-details/category-articlelist.component'

export const appRoutes:Routes = [
    { path: 'browse', component: ArticleCategoriesComponent},
    { path: 'browse/:name', component: CategoryListComponent},
    { path: '', redirectTo: '/browse', pathMatch: 'full'}
]