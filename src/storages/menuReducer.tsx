const InitialState: any = {
    menu: [
        {
            id: 1,
            name: 'Template',
            hasTab: false,
            icon: 'fas fa-inbox',
            isActive: true
        },
        {
            id: 2,
            name: 'Photo',
            hasTab: true,
            icon: 'fas fa-image',
            isActive: false
        },
        {
            id: 3,
            name: 'Videos',
            hasTab: true,
            icon: 'fas fa-video',
            isActive: false
        },
        {
            id: 4,
            name: 'Music',
            hasTab: true,
            icon: 'fas fa-music',
            isActive: false
        },
        {
            id: 5,
            name: 'Animations',
            hasTab: false,
            icon: 'fas fa-paw',
            isActive: false
        },
        {
            id: 6,
            name: 'Text',
            hasTab: true,
            icon: 'fas fa-text-width',
            isActive: false
        }
    ]
}

export const menuReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case 'ACTIVE_MENU':
            state.menu.forEach((value: any) => {
                if (value.id === action.payload) {
                    value.isActive = true
                } else {
                    value.isActive = false
                }
            })
            return { ...state }
        default:
            return { ...state }
    }
}