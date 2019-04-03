import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, IFullWidthImageSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'fullwidthimage-settings-menu',
    templateUrl: './fullwidthimage-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class FullWidthImageSettingsMenuComponent implements OnInit{
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() closeFullWidthImageSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() updateFullWidthImageContentMessage = new EventEmitter<Input>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    fullWidthImage:IFullWidthImageSection

    ngOnInit() {
        this.getFullWidthImage()
    }

    closeFullWidthImageSettingsMenu() {
        this.closeFullWidthImageSettingsMenuMessage.emit(true)
    }

    updateFullWidthImageContent(event:Input) {
        this.updateFullWidthImageContentMessage.emit(event)
    }

    getFullWidthImage() {
        this.fullWidthImage = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeFullWidthImageSettingsMenuMessage.emit(true)
    }
}