import { Component, OnInit } from '@angular/core'

@Component({
    templateUrl: 'create-article.component.html',
    styleUrls: ['create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
    showConfiguration: boolean
    showSettings: boolean
    showAddSection: boolean

    ngOnInit() {
        this.showConfiguration = true
        this.showSettings = false
        this.showAddSection = false
    }

    toggleAddSection() {
        this.showAddSection = true
        this.showSettings = false
        this.showConfiguration = false
    }

    toggleSettings() {
        this.showAddSection = false
        this.showSettings = true
        this.showConfiguration = false
    }

    toggleConfigurationSection() {
        this.showAddSection = false
        this.showSettings = false
        this.showConfiguration = true
    }
}