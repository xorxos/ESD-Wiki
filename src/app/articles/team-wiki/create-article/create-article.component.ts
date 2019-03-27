import { Component, OnInit } from '@angular/core'
import { IArticle, ITitleSection, IRichTextSection } from '../../shared/article.model';

@Component({
    templateUrl: 'create-article.component.html',
    styleUrls: ['create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
    showConfiguration: boolean
    showSettings: boolean
    showAddSection: boolean
    newArticle: IArticle
    titleSection: ITitleSection
    richTextSection: IRichTextSection

    ngOnInit() {
        this.showConfiguration = true
        this.showSettings = false
        this.showAddSection = false
        this.titleSection = {
            selector: "Title",
            contents: "Title"
        }
        this.newArticle = {
            id: 20,
            description: "",
            articleContents: [this.titleSection],
            title: this.titleSection.contents.toString(),
            categoryTags: []
        }
    }

    isTitleSection(content): boolean {
        if(content.selector === "Title") {
            return true
        } else return false
    }

    isRichTextSection(content): boolean {
        if(content.selector === "RichText") {
            return true
        } else return false
    }

    toggleAddSection() {
        this.showAddSection = true
        this.showSettings = false
        this.showConfiguration = false
    }

    toggleSettings() {
        this.showAddSection = false
        this.showSettings = true
        this.showConfiguration = false
    }

    toggleConfigurationSection() {
        this.showAddSection = false
        this.showSettings = false
        this.showConfiguration = true
    }

    addRichTextComponent() {
        this.richTextSection = {
            selector: "RichText",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.richTextSection)
        this.toggleConfigurationSection()
    }
}