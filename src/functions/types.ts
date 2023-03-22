
export type menuItemType = {
    name: string;
    link: string;
}

export type courseInfo = {
    imageUrl: string;
    courseName: string;
    destination: string;
    artisanName?: string;
    episode?: number;
    duration?: number;
    categories?: string[];
    price?: string;
}