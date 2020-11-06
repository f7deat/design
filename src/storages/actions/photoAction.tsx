import { PHOTO_TYPE } from "../types"

export const selectImage = (image: any) => {
    return {
        type: PHOTO_TYPE.SELECT_IMAGE,
        payload: image
    }
}