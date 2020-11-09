import { PAGE_TYPE } from "../types"

const InitialState: any = {
    pages: [
        { id: 1, pageIndex: 1, isActive: true },
        { id: 2, pageIndex: 2, isActive: false }
    ]
}

export const pageReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case PAGE_TYPE.ADD_PAGE:
            return { ...state, pages: [...state.pages, action.payload] }
        default:
            return state
    }
}