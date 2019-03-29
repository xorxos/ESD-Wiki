import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IArticle } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'title-settings-menu',
    templateUrl: './title-settings-menu.component.html',
    styleUrls: ['./title-settings-menu.component.css']
})
export class TitleSettingsMenuComponent {
    @Input() newArticle:IArticle
    @Output() updateTitleContentMessage = new EventEmitter<Input>()
    @Output() closeTitleSettingsMenuMessage = new EventEmitter<boolean>()

    closeTitleSettingsMenu() {
        this.closeTitleSettingsMenuMessage.emit(true)
    }

    updateTitleContent(event:Input) {
        this.updateTitleContentMessage.emit(event)
    }

}