import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { IArticle, INumberedListSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'numberedlist-settings-menu',
    templateUrl: './numberedlist-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class NumberedListSettingsMenuComponent implements OnInit {
    @Input() newArticle: IArticle
    @Input() sectionIndex: number
    @Output() updateNumberedListContentMessage = new EventEmitter<object>()
    @Output() closeNumberedListSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    numberedList: INumberedListSection

    ngOnInit() {
        this.getNumberedList()
    }

    closeNumberedListSettingsMenu() {
        this.closeNumberedListSettingsMenuMessage.emit(true)
    }

    updateNumberedListContent(event: Input, index: number) {
        this.updateNumberedListContentMessage.emit({ index: index, event: event })
    }

    getNumberedList() {
        this.numberedList = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeNumberedListSettingsMenuMessage.emit(true)
    }

    trackByFn(index: any, item: any) {
        return index;
    }
}