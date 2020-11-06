export const MENU_TYPE = {
    GET_MENU: 'GET_MENU',
    ACTIVE_MENU: 'ACTIVE_MENU'
}

export const PHOTO_TYPE = {
    SELECT_IMAGE: 'SELECT_IMAGE'
}

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