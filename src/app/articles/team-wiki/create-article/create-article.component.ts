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
    showTitleSettings: boolean
    showRichTextSettings: boolean
    showStepDividerSettings: boolean

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
            contents: "How to Create an Employee Account in PM"
        }
        this.newArticle = {
            id: 20,
            description: "",
            articleContents: [this.titleSection],
            title: this.titleSection.contents.toString(),
            categoryTags: []
        }
    }

    /** Functions to handle which menu/component is being shown */

    toggleAddSection() {
        this.setMenuBooleansFalse()
        this.showAddSection = true
    }

    toggleSettings() {
        this.setMenuBooleansFalse()
        this.showSettings = true
    }

    toggleConfigurationSection() {
        this.setMenuBooleansFalse()
        this.showConfiguration = true
    }

    toggleTitleSettings() {
        if(this.showTitleSettings == false){
            this.showTitleSettings = true
        }else this.showTitleSettings = false
    }

    toggleRichTextSettings() {
        if(this.showRichTextSettings == false){
            this.showRichTextSettings = true
        }else this.showRichTextSettings = false
    }

    toggleStepDividerSettings() {
        if(this.showStepDividerSettings == false){
            this.showStepDividerSettings = true
        }else this.showStepDividerSettings = false
    }

    /** Re-usable function for toggling boolean values */
    setMenuBooleansFalse() {
        this.showSettings = false
        this.showAddSection = false
        this.showConfiguration = false
        this.showTitleSettings = false
        this.showRichTextSettings = false
        this.showStepDividerSettings = false
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
            contents: "This is a step by step guide on how to create a new employee account in profile manager. It covers all of the approvals needed as well as what information the ESD needs to create the account."
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