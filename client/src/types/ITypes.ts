export type ILanguage = {
    en: string;
    uz: string;
    kr_uz: string;
    ru: string
}

type DocumentDate={
    created_at:string;
    updated_at:string;
}

interface IDocument {
    title: ILanguage;
    content: ILanguage;
    info_id: number;
    images: string[];
    show_on_homepage: boolean;
    show_on_slider: boolean;
    views_count: number;
    author: string;
    document: string[];
    _page: string;
} 

export type INews = IDocument & DocumentDate
