import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service'
import  { ICategory } from '../shared/category.model'
import { IArticle } from '../shared/article.model'
import { ArticleService } from '../shared/article.service'

@Component({
    templateUrl: './category-articlelist.component.html',
    styleUrls: ['./category-articlelist.component.css']
})
export class CategoryListComponent implements OnInit {
    category:ICategory
    selectedFilter:string
    articles

    constructor(private CategoryService:CategoryService, private route:ActivatedRoute, private ArticleService:ArticleService) {

    }

    ngOnInit() {
        this.category = this.CategoryService.getCategory(String(this.route.snapshot.params['name']))
        this.articles = this.ArticleService.getArticleByCategory("Skype")
        this.selectedFilter = "All"
    }
}