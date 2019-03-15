import { Injectable } from '@angular/core'
import  { IArticle } from './article.model'

@Injectable()
export class ArticleService {
    articleList:IArticle[]

    getArticleByCategory(category:string):IArticle[] {
        return this.articleListByCategory(category)
    }

    getAllArticles(){
        return ARTICLES
    }

    articleListByCategory(category:string):IArticle[] {
        this.articleList = []
        ARTICLES.forEach(item => {
            if (item.categoryTags.includes(category)) {
                this.articleList.push(item)
            }
        })
        console.log(this.articleList)
        return this.articleList
        
    }
}

const ARTICLES:IArticle[] = [
    {
        id: 1,
        title: "Windows - How to Sign-in to Skype",
        description: "Skype typically will log you in automatically, but when it for some reason doesn't, this guide will walk you through the process of manually signing in.",
        categoryTags: ["Skype", "PC"]
    },
    {
        id: 2,
        title: "Mac - How to Sign-in to Skype",
        description: "22Skype typically will log you in automatically, but when it for some reason doesn't, this guide will walk you through the process of manually signing in.",
        categoryTags: ["Skype", "Mac"]
    },
    {
        id: 3,
        title: "iPhone - How to Sign-in to Skype",
        description: "22Skype typically will log you in automatically, but when it for some reason doesn't, this guide will walk you through the process of manually signing in.",
        categoryTags: ["Skype", "Mobile Devices"]
    },
    {
        id: 4,
        title: "Android - How to Sign-in to Skype",
        description: "22Skype typically will log you in automatically, but when it for some reason doesn't, this guide will walk you through the process of manually signing in.",
        categoryTags: ["Skype", "Mobile Devices"]
    },
    {
        id: 5,
        title: "How to Screen Share in Skype",
        description: "22Skype typically will log you in automatically, but when it for some reason doesn't, this guide will walk you through the process of manually signing in.",
        categoryTags: ["Skype", "Mobile Devices"]
    },
]