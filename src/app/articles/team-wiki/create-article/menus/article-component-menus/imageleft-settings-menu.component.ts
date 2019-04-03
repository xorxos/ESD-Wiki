import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, IImageLeftSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'imageleft-settings-menu',
    templateUrl: './imageleft-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class ImageLeftSettingsMenuComponent implements OnInit{
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() closeImageLeftSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() updateImageLeftContentMessage = new EventEmitter<Input>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    imageLeft:IImageLeftSection

    ngOnInit() {
        this.getImageLeft()
    }

    closeImageLeftSettingsMenu() {
        this.closeImageLeftSettingsMenuMessage.emit(true)
    }

    updateImageLeftContent(event:Input) {
        this.updateImageLeftContentMessage.emit(event)
    }

    getImageLeft() {
        this.imageLeft = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeImageLeftSettingsMenuMessage.emit(true)
    }
}