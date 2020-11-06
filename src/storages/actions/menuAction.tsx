import { MENU_TYPE } from "../types"

export const activeMenu = (id: number) => {
    return {
        type: MENU_TYPE.ACTIVE_MENU,
        payload: id
    }
}