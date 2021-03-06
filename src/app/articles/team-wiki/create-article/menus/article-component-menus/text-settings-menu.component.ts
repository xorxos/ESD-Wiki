import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, ITextSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'text-settings-menu',
    templateUrl: './text-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class TextSettingsMenuComponent implements OnInit{
    
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() updateTextContentMessage = new EventEmitter<Input>()
    @Output() updateLeftSpacingMessage = new EventEmitter<Input>()
    @Output() updateTopSpacingMessage = new EventEmitter<Input>()
    @Output() updateBottomSpacingMessage = new EventEmitter<Input>()
    @Output() updateDisplayNameMessage = new EventEmitter<Input>()
    @Output() closeTextSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    textComponent:ITextSection

    ngOnInit(): void {
        this.getText()
    }

    closeTextSettingsMenu() {
        this.closeTextSettingsMenuMessage.emit(true)
    }

    updateDisplayName(event:Input) {
        this.updateDisplayNameMessage.emit(event)
    }

    updateTextContent(event:Input) {
        this.updateTextContentMessage.emit(event)
    }

    updateLeftSpacing(event:Input) {
        this.updateLeftSpacingMessage.emit(event)
    }

    updateTopSpacing(event:Input) {
        this.updateTopSpacingMessage.emit(event)
    }

    updateBottomSpacing(event:Input) {
        this.updateBottomSpacingMessage.emit(event)
    }

    getText() {
        this.textComponent = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeTextSettingsMenuMessage.emit(true)
    }
}