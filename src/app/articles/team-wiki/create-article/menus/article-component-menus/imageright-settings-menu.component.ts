import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, IImageRightSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'imageright-settings-menu',
    templateUrl: './imageright-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class ImageRightSettingsMenuComponent implements OnInit{
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() closeImageRightSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() updateImageRightContentMessage = new EventEmitter<Input>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    imageRight:IImageRightSection

    ngOnInit() {
        this.getImageRight()
    }

    closeImageRightSettingsMenu() {
        this.closeImageRightSettingsMenuMessage.emit(true)
    }

    updateImageLeftContent(event:Input) {
        this.updateImageRightContentMessage.emit(event)
    }

    getImageRight() {
        this.imageRight = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeImageRightSettingsMenuMessage.emit(true)
    }
}