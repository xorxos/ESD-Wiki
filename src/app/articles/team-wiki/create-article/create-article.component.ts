import { Component, OnInit } from '@angular/core'
import { IArticle, 
         ITitleSection, 
         IRichTextSection, 
         IStepDividerSection, 
         IImageLeftSection, 
         IImageRightSection, 
         IFullWidthImageSection, 
         IBulletedListSection, 
         INumberedListSection } from '../../shared/article.model';

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
    stepDividerSection: IStepDividerSection
    imageLeftSection: IImageLeftSection
    imageRightSection: IImageRightSection
    fullWidthImageSection: IFullWidthImageSection
    bulletedListSection: IBulletedListSection
    numberedListSection: INumberedListSection

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

    /** Functions to handle which menu is being shown */

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

    /** Functions to check which component is in newArticle.articleContents */

    isTitleComponent(component): boolean {
        if(component.selector === "Title") {
            return true
        } else return false
    }

    isRichTextComponent(component): boolean {
        if(component.selector === "RichText") {
            return true
        } else return false
    }

    isStepDividerComponent(component): boolean {
        if(component.selector === "Step Divider") {
            return true
        } else return false
    }

    isBulletedListComponent(component): boolean {
        if(component.selector === "Bulleted List") {
            return true
        } else return false
    }

    isNumberedListComponent(component): boolean {
        if(component.selector === "Numbered List") {
            return true
        } else return false
    }

    isImageLeftComponent(component): boolean {
        if(component.selector === "Image-left With Text") {
            return true
        } else return false
    }

    isImageRightComponent(component): boolean {
        if(component.selector === "Image-right With Text") {
            return true
        } else return false
    }

    isFullWidthImageComponent(component): boolean {
        if(component.selector === "Full-Width Image") {
            return true
        } else return false
    }

    /** Functions to add components */

    addRichTextComponent() {
        this.richTextSection = {
            selector: "RichText",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.richTextSection)
        this.toggleConfigurationSection()
    }

    addStepDividerComponent() {
        this.stepDividerSection = {
            selector: "Step Divider",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.stepDividerSection)
        this.toggleConfigurationSection()
    }

    addBulletedListComponent() {
        this.bulletedListSection = {
            selector: "Bulleted List",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.bulletedListSection)
        this.toggleConfigurationSection()
    }

    addNumberedListComponent() {
        this.numberedListSection = {
            selector: "Numbered List",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.numberedListSection)
        this.toggleConfigurationSection()
    }

    addImageLeftComponent() {
        this.imageLeftSection = {
            selector: "Image-left With Text",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.imageLeftSection)
        this.toggleConfigurationSection()
    }

    addImageRightComponent() {
        this.imageRightSection = {
            selector: "Image-right With Text",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.imageRightSection)
        this.toggleConfigurationSection()
    }

    addFullWidthImageComponent() {
        this.fullWidthImageSection = {
            selector: "Full-Width Image",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.fullWidthImageSection)
        this.toggleConfigurationSection()
    }
}