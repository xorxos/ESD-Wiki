import { Title } from '@angular/platform-browser';


export interface IArticle {
    id: number
    title: string
    description: string
    articleContents: any[]
    categoryTags: string[]
}

export interface ITitleSection {
    selector: string,
    contents: string
}

export interface IRichTextSection {
    selector: string,
    contents: string
}

export interface IBulletedListSection {
    selector: string,
    contents: string
}

export interface INumberedListSection {
    selector: string,
    contents: string
}

export interface IStepDividerSection {
    selector: string,
    contents: string
}

export interface IImageLeftSection {
    selector: string,
    contents: string
}

export interface IImageRightSection {
    selector: string,
    contents: string
}

export interface IFullWidthImageSection {
    selector: string,
    contents: string
}