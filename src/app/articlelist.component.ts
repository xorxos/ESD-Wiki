import { Component } from '@angular/core'

@Component({
    selector: 'articlelist-component',
    templateUrl: './articlelist.component.html',
    styleUrls: ['./articlelist.component.css']
})
export class ArticleListComponent {
    categories = [
        {
            id: 1,
            name: 'Email',
            imageUrl: '/assets/images/microsoft-outlook-96.png'
        },
        {
            id: 2,
            name: 'VPN',
            imageUrl: '/assets/images/pulse-secure-small.png'
        },
        {
            id: 3,
            name: 'Internet',
            imageUrl: '/assets/images/wifi-96.png'
        },
        {
            id: 4,
            name: 'Skype',
            imageUrl: '/assets/images/skype-96.png'
        },
        {
            id: 5,
            name: 'Password Resets',
            imageUrl: '/assets/images/password-96.png'
        },
        {
            id: 6,
            name: 'Microsoft Office',
            imageUrl: '/assets/images/office-96.png'
        },
        {
            id: 7,
            name: 'Adobe',
            imageUrl: '/assets/images/adobe-creative-cloud-96.png'
        },
        {
            id: 8,
            name: 'Antivirus',
            imageUrl: '/assets/images/symantec-96.png'
        },
        {
            id: 9,
            name: 'Mobile Devices',
            imageUrl: '/assets/images/smartphone-tablet-filled-100.png'
        },
        {
            id: 10,
            name: 'Fiori',
            imageUrl: '/assets/images/sap-96.png'
        },
        {
            id: 11,
            name: 'Browser Issues',
            imageUrl: '/assets/images/chrome-96.png'
        },
        {
            id: 12,
            name: 'Windows',
            imageUrl: '/assets/images/windows-10-96.png'
        },
        {
            id: 12,
            name: 'Mac',
            imageUrl: '/assets/images/mac-client-96.png'
        },
    ]
}