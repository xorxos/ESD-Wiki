import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IArticle } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'article-contents-menu',
    templateUrl: './article-contents-menu.component.html',
    styleUrls: ['./article-contents-menu.component.css']
})
export class ArticleContentsMenuComponent {

    @Input() newArticle: IArticle
    @Output() openAddItemMenu = new EventEmitter<boolean>();
    @Output() openTitleSettings = new EventEmitter<number>();
    @Output() openRichTextSettings = new EventEmitter<number>();
    @Output() openSubheaderSettings = new EventEmitter<number>();
    @Output() openBulletedListSettings = new EventEmitter<number>();
    @Output() openNumberedListSettings = new EventEmitter<number>();
    @Output() openImageLeftSettings = new EventEmitter<number>();
    @Output() openImageRightSettings = new EventEmitter<number>();
    @Output() openFullWidthImageSettings = new EventEmitter<number>();
    @Output() moveComponentUpMessage = new EventEmitter<number>();
    @Output() moveComponentDownMessage = new EventEmitter<number>();

    showAddItemMenu() {
        this.openAddItemMenu.emit(true)
    }

    toggleTitleSettings(itemIndex) {
        this.openTitleSettings.emit(itemIndex)
    }

    toggleRichTextSettings(itemIndex) {
        this.openRichTextSettings.emit(itemIndex)
    }

    toggleSubheaderSettings(itemIndex) {
        this.openSubheaderSettings.emit(itemIndex)
    }

    toggleBulletedListSettings(itemIndex) {
        this.openBulletedListSettings.emit(itemIndex)
    }

    toggleNumberedListSettings(itemIndex) {
        this.openNumberedListSettings.emit(itemIndex)
    }

    toggleImageLeftSettings(itemIndex) {
        this.openImageLeftSettings.emit(itemIndex)
    }

    toggleImageRightSettings(itemIndex) {
        this.openImageRightSettings.emit(itemIndex)
    }

    toggleFullWidthImageSettings(itemIndex) {
        this.openFullWidthImageSettings.emit(itemIndex)
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

    /** Functions to send messages up to the parent to re-arrange components */
    moveComponentUp(index) {
        this.moveComponentUpMessage.emit(index)
    }

    moveComponentDown(index) {
        this.moveComponentDownMessage.emit(index)
    }
}