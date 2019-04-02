import { Component, OnInit } from '@angular/core'
import { IArticle, 
         ITitleSection, 
         IRichTextSection, 
         ISubheaderSection, 
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
    showArticleContents: boolean
    showArticleSettings: boolean
    showAddItemMenu: boolean
    showTitleSettings: boolean
    showRichTextSettings: boolean
    showSubheaderSettings: boolean

    subheaderIndex:number

    newArticle: IArticle
    titleSection: ITitleSection
    richTextSection: IRichTextSection
    subheaderSection: ISubheaderSection
    imageLeftSection: IImageLeftSection
    imageRightSection: IImageRightSection
    fullWidthImageSection: IFullWidthImageSection
    bulletedListSection: IBulletedListSection
    numberedListSection: INumberedListSection

    ngOnInit() {
        this.showArticleContents = true
        this.showArticleSettings = false
        this.showAddItemMenu = false
        this.showTitleSettings = false
        this.showSubheaderSettings = false
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

    toggleShowAddItemMenu(event) {
        this.setMenuBooleansFalse()
        this.showAddItemMenu = event
    }

    toggleSettings() {
        this.setMenuBooleansFalse()
        this.showArticleSettings = true
    }

    toggleConfigurationSection(event) {
        this.setMenuBooleansFalse()
        this.showArticleContents = event
    }

    toggleTitleSettings() {
        this.setMenuBooleansFalse()
        this.showTitleSettings = true
    }

    toggleRichTextSettings() {
    }

    toggleSubheaderSettings(event) {
        this.setMenuBooleansFalse()
        this.subheaderIndex = event
        this.showSubheaderSettings = true
    }

    /** Re-usable function for toggling boolean values */
    setMenuBooleansFalse() {
        this.showArticleSettings = false
        this.showAddItemMenu = false
        this.showArticleContents = false
        this.showTitleSettings = false
        this.showRichTextSettings = false
        this.showSubheaderSettings = false
    }

    /** Functions to update content */
    updateTitleContent(event) {
        try {
            this.newArticle.articleContents[0].contents = event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    updateSubheaderContent(event) {
        try {
            this.newArticle.articleContents[this.subheaderIndex].contents = event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    /** Functions to add components */
    addArticleItem(event) {
        if(event === "RichText"){
            this.addRichTextComponent()
        }else if (event === "Subheader") {
            this.addSubheaderComponent()
        }else if (event === "Bulleted List") {
            this.addBulletedListComponent()
        }else if (event === "Numbered List") {
            this.addNumberedListComponent()
        }else if (event === "FullWidth Image") {
            this.addFullWidthImageComponent()
        }else if (event === "Image Left") {
            this.addImageLeftComponent()
        }else if (event === "Image Right") {
            this.addImageRightComponent()
        }
        this.toggleConfigurationSection(true)
    }

    addRichTextComponent() {
        this.richTextSection = {
            selector: "RichText",
            contents: "This is a step by step guide on how to create a new employee account in profile manager. It covers all of the approvals needed as well as what information the ESD requires to create the account."
        }
        this.newArticle.articleContents.push(this.richTextSection)
    }

    addSubheaderComponent() {
        this.subheaderSection = {
            selector: "Subheader",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.subheaderSection)
    }

    addBulletedListComponent() {
        this.bulletedListSection = {
            selector: "Bulleted List",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.bulletedListSection)
    }

    addNumberedListComponent() {
        this.numberedListSection = {
            selector: "Numbered List",
            contents: "Step 1"
        }
        this.newArticle.articleContents.push(this.numberedListSection)
    }

    addImageLeftComponent() {
        this.imageLeftSection = {
            selector: "Image-left With Text",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.imageLeftSection)
    }

    addImageRightComponent() {
        this.imageRightSection = {
            selector: "Image-right With Text",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.imageRightSection)
    }

    addFullWidthImageComponent() {
        this.fullWidthImageSection = {
            selector: "Full-Width Image",
            contents: "This is some rich text"
        }
        this.newArticle.articleContents.push(this.fullWidthImageSection)
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

    isSubheaderComponent(component): boolean {
        if(component.selector === "Subheader") {
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
}