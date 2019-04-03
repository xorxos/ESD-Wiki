import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { IArticle, IBulletedListSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'bulletedlist-settings-menu',
    templateUrl: './bulletedlist-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class BulletedListSettingsMenuComponent implements OnInit{
    @Input() newArticle:IArticle
    @Input() sectionIndex:number
    @Output() updateBulletedListContentMessage = new EventEmitter<object>()
    @Output() closeBulletedListSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    bulletedList:IBulletedListSection

    ngOnInit() {
        this.getBulletedList()
    }

    closeBulletedListSettingsMenu() {
        this.closeBulletedListSettingsMenuMessage.emit(true)
    }

    updateBulletedListContent(event:Input, index:number) {
        this.updateBulletedListContentMessage.emit({index:index, event:event})
    }

    getBulletedList() {
        this.bulletedList = this.newArticle.articleContents[this.sectionIndex]
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeBulletedListSettingsMenuMessage.emit(true)
    }

    trackByFn(index: any, item: any) {
        return index;
    }
}