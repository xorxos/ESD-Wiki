import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service'
import  { ICategory } from '../shared/category.model'

@Component({
    templateUrl: './category-articlelist.component.html',
    styleUrls: ['./category-articlelist.component.css']
})
export class CategoryListComponent implements OnInit {
    category:ICategory

    constructor(private CategoryService:CategoryService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        console.log(this.CategoryService.getCategory(this.route.snapshot.params['name']))
        this.category = this.CategoryService.getCategory(String(this.route.snapshot.params['name']))
    }
}