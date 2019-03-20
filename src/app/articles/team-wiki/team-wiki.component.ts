import { Component } from '@angular/core'

@Component({
    selector: 'team-wiki',
    templateUrl: './team-wiki.component.html',
    styleUrls: ['./team-wiki.component.css']
})
export class TeamWikiComponent {
    HideCreateArticleButton:boolean = true;

    mouseEntered() {
        this.HideCreateArticleButton = false;
    }

    mouseLeft() {
        this.HideCreateArticleButton = true;
    }
}