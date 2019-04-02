import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, ISubheaderSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'subheader-settings-menu',
    templateUrl: './subheader-settings-menu.component.html',
    styleUrls: ['./subheader-settings-menu.component.css']
})
export class SubheaderSettingsMenuComponent implements OnInit{
    
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() updateSubheaderContentMessage = new EventEmitter<Input>()
    @Output() closeSubheaderSettingsMenuMessage = new EventEmitter<boolean>()

    subheader:ISubheaderSection

    ngOnInit(): void {
        this.getSubheader()
    }

    closeSubheaderSettingsMenu() {
        this.closeSubheaderSettingsMenuMessage.emit(true)
    }

    updateSubheaderContent(event:Input) {
        this.updateSubheaderContentMessage.emit(event)
    }

    getSubheader() {
        this.subheader = this.newArticle.articleContents[this.sectionIndex]
    }
}