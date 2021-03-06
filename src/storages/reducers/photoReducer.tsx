import { PHOTO_TYPE } from "../types"

const InitialState: any = {
    images: []
}

export const photoReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case PHOTO_TYPE.SELECT_IMAGE:
            let image = state.images.find((x: any) => x.id === action.payload.id)
            if (image) {
                return { ...state }
            }
            return { ...state, images: [...state.images, action.payload] }
        default:
            return state
    }
}