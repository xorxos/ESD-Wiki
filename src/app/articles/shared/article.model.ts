export interface IArticle {
    id: number
    title: string
    description: string
    articleContents: []
    categoryTags: string[]
}

export interface TitleSection {
    contents: string
}

export interface RichTextSection {
    contents: string
}

export interface BulletedListSection {
    contents: string
}

export interface NumberedListSection {
    contents: string
}

export interface StepDividerSection {
    contents: string
}

export interface ImageLeftSection {
    contents: string
}

export interface ImageRightSection {
    contents: string
}

export interface FullWidthImageSection {
    contents: string
}