import { PAGE_TYPE } from "../types"
import PageType from "../types/pageType"

export const activePage = (id: number) => {
    return {
        type: PAGE_TYPE.ACTIVE_PAGE,
        payload: id
    }
}

export const addPage = (page: PageType) => {
    return {
        type: PAGE_TYPE.ADD_PAGE,
        payload: page
    }
}