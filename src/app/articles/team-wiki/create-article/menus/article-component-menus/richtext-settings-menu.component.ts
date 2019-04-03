import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, ISubheaderSection, IRichTextSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'richtext-settings-menu',
    templateUrl: './richtext-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class RichtextSettingsMenuComponent implements OnInit{
    
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() updateRichtextContentMessage = new EventEmitter<Input>()
    @Output() closeRichtextSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    richtextComponent:IRichTextSection

    ngOnInit(): void {
        this.getRichtext()
    }

    closeRichtextSettingsMenu() {
        this.closeRichtextSettingsMenuMessage.emit(true)
    }

    updateRichtextContent(event:Input) {
        this.updateRichtextContentMessage.emit(event)
    }

    getRichtext() {
        this.richtextComponent = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeRichtextSettingsMenuMessage.emit(true)
    }
}