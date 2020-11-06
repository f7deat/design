export const MENU_TYPE = {
    GET_MENU: 'GET_MENU',
    ACTIVE_MENU: 'ACTIVE_MENU'
};

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