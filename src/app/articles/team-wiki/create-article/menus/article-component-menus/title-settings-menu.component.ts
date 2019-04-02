import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, ITitleSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'title-settings-menu',
    templateUrl: './title-settings-menu.component.html',
    styleUrls: ['./title-settings-menu.component.css']
})
export class TitleSettingsMenuComponent implements OnInit{
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() updateTitleContentMessage = new EventEmitter<Input>()
    @Output() closeTitleSettingsMenuMessage = new EventEmitter<boolean>()

    title:ITitleSection

    ngOnInit() {
        this.getTitle()
    }

    closeTitleSettingsMenu() {
        this.closeTitleSettingsMenuMessage.emit(true)
    }

    updateTitleContent(event:Input) {
        this.updateTitleContentMessage.emit(event)
    }

    getTitle() {
        this.title = this.newArticle.articleContents[this.sectionIndex]
    }
}