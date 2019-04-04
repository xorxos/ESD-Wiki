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

    /** Booleans that handle when a menu is shown */
    showArticleContents: boolean
    showArticleSettings: boolean
    showAddItemMenu: boolean
    showTitleSettings: boolean
    showRichTextSettings: boolean
    showSubheaderSettings: boolean
    showImageLeftSettings: boolean
    showImageRightSettings: boolean
    showFullWidthImageSettings: boolean
    showBulletedListSettings: boolean
    showNumberedListSettings: boolean

    /** Index number of the component when changes are made in the settings */
    sectionIndex:number

    /** Variables used when updating list objects such as bulleted lists and numbered lists */
    selectedBulletedList

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
        /** Setting the initial boolean values to dictate which menu to show */
        this.showArticleContents = true
        this.showArticleSettings = false
        this.showAddItemMenu = false
        this.showTitleSettings = false
        this.showSubheaderSettings = false
        this.showImageLeftSettings = false
        this.showImageRightSettings = false
        this.showFullWidthImageSettings = false
        this.showBulletedListSettings = false
        this.showNumberedListSettings = false
        this.titleSection = {
            selector: "Title",
            contents: "This is a Title"
        }
        this.newArticle = {
            id: 20,
            description: "",
            articleContents: [this.titleSection],
            title: this.titleSection.contents.toString(),
            categoryTags: []
        }
    }

    /** Functions to handle which menu or component is being shown */
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

    toggleTitleSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showTitleSettings = true
    }

    toggleRichTextSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showRichTextSettings = true
    }

    toggleSubheaderSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showSubheaderSettings = true
    }

    toggleImageLeftSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showImageLeftSettings = true
    }

    toggleImageRightSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showImageRightSettings = true
    }

    toggleFullWidthImageSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showFullWidthImageSettings = true
    }

    toggleBulletedListSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showBulletedListSettings = true
    }

    toggleNumberedListSettings(event) {
        this.setMenuBooleansFalse()
        this.sectionIndex = event
        this.showNumberedListSettings = true
    }

    /** Re-usable function for toggling boolean values */
    setMenuBooleansFalse() {
        this.showArticleSettings = false
        this.showAddItemMenu = false
        this.showArticleContents = false
        this.showTitleSettings = false
        this.showRichTextSettings = false
        this.showSubheaderSettings = false
        this.showImageLeftSettings = false
        this.showImageRightSettings = false
        this.showFullWidthImageSettings = false
        this.showBulletedListSettings = false
        this.showNumberedListSettings = false
    }

    /** Functions to re-arrange newArticle.articleContents */
    moveComponentUp(index) {
        var oldIndex = index
        var newIndex = index - 1
        var item = this.newArticle.articleContents[oldIndex]
        if(newIndex > 0) {
            this.newArticle.articleContents.splice(oldIndex, 1)
            this.newArticle.articleContents.splice(newIndex, 0, item)
        }
    }

    moveComponentDown(index) {
        var oldIndex = index
        var newIndex = index + 1
        var item = this.newArticle.articleContents[oldIndex]
        if(newIndex <= this.newArticle.articleContents.length) {
            this.newArticle.articleContents.splice(oldIndex, 1)
            this.newArticle.articleContents.splice(newIndex, 0, item)
        }
    }

    /** Functions to update content */
    updateTitleContent(event) {
        try {
            this.newArticle.articleContents[this.sectionIndex].contents = event.target.value
        } catch(e) {
            console.log('could not set text-area value')
            console.log(e)
        }
    }

    updateSubheaderContent(event) {
        try {
            this.newArticle.articleContents[this.sectionIndex].contents = event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    updateRichtextContent(event) {
        try {
            this.newArticle.articleContents[this.sectionIndex].contents = event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    updateBulletedListContent(event){
        console.log("Updating Bullets")
        try {
            this.newArticle.articleContents[this.sectionIndex].contents[event.index] = event.event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    updateNumberedListContent(event){
        console.log("Updating Numbered")
        try {
            this.newArticle.articleContents[this.sectionIndex].contents[event.index] = event.event.target.value
        } catch(e) {
            console.log('could not set text-area value')
        }
    }

    /** Function to remove component */
    deleteComponent(index:number) {
        if (index !== -1) {
            this.newArticle.articleContents.splice(index, 1)
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
            contents: "This is some rich text. Extra spaces and returns are shown exactly as entered."
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
            contents: ["Item 1", "Item 2", "Item 3"]
        }
        this.newArticle.articleContents.push(this.bulletedListSection)
    }

    addNumberedListComponent() {
        this.numberedListSection = {
            selector: "Numbered List",
            contents: ["Item 1", "Item 2", "Item 3"]
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