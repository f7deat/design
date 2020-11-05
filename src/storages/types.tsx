export const MENU = 'MENU';

export interface Size {
    width: string;
    height: string;
}

export interface Menu {
    id: number;
    name: string;
    hasTab: boolean;
    icon: string,
    isActive: boolean
}