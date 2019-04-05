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
    contents: string,
    hovered: boolean
}

export interface IRichTextSection {
    selector: string,
    contents: string,
    hovered: boolean
}

export interface IBulletedListSection {
    selector: string,
    contents: string[],
    hovered: boolean
}

export interface INumberedListSection {
    selector: string,
    contents: string[],
    hovered: boolean
}

export interface ISubheaderSection {
    selector: string,
    contents: string,
    hovered: boolean
}

export interface IImageLeftSection {
    selector: string,
    contents: string,
    hovered: boolean
}

export interface IImageRightSection {
    selector: string,
    contents: string,
    hovered: boolean
}

export interface IFullWidthImageSection {
    selector: string,
    contents: string,
    hovered: boolean
}