import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IArticle, IFullWidthImageSection } from 'src/app/articles/shared/article.model';

@Component({
    selector: 'fullwidthimage-settings-menu',
    templateUrl: './fullwidthimage-settings-menu.component.html',
    styleUrls: ['./shared-settings-styles.component.css']
})
export class FullWidthImageSettingsMenuComponent implements OnInit {
    @Input() newArticle: IArticle
    @Input() sectionIndex: number
    @Output() closeFullWidthImageSettingsMenuMessage = new EventEmitter<boolean>()
    @Output() updateFullWidthImageContentMessage = new EventEmitter<File>()
    @Output() updateFullWidthImageSrcMessage = new EventEmitter<any>()
    @Output() deleteComponentMessage = new EventEmitter<number>()

    fullWidthImage: IFullWidthImageSection

    @ViewChild('labelImport')
    labelImport: ElementRef
    @ViewChild('imagePreview')
    imagePreview: ElementRef

    formImport: FormGroup
    imgSrc: any = "..\\assets\\images\\placeholder-image.jpg"

    constructor() {
        this.formImport = new FormGroup({
            importFile: new FormControl('', Validators.required)
        })
    }


    public imagePath;
    public message: string;

    ngOnInit() {
        this.getFullWidthImage()
    }

    onFileChange(files) {

        if (files.length === 0)
            return;

        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }

        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgSrc = reader.result;

            this.updateFullWidthImageSrc(this.imgSrc)
        }

        this.labelImport.nativeElement.innerText = files.item(0).name
        this.updateFullWidthImageContent(this.imagePath)
    }

    closeFullWidthImageSettingsMenu() {
        this.closeFullWidthImageSettingsMenuMessage.emit(true)
    }

    updateFullWidthImageContent(file: File) {
        this.updateFullWidthImageContentMessage.emit(file)
    }

    updateFullWidthImageSrc(src: any) {
        this.updateFullWidthImageSrcMessage.emit(src)
    }

    getFullWidthImage() {
        this.fullWidthImage = this.newArticle.articleContents[this.sectionIndex]
        var files = this.fullWidthImage.image
        if (files != null) {
            var mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = "Only images are supported.";
                return;
            }

            var reader = new FileReader();
            this.imagePath = files;
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.imgSrc = reader.result;
            }
        }
    }

    deleteComponent() {
        this.deleteComponentMessage.emit(this.sectionIndex)
        this.closeFullWidthImageSettingsMenuMessage.emit(true)
    }
}