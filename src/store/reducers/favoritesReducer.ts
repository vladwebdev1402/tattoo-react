const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";
const CHECK_FAVORITE = "CHECK_FAVORITE";

export interface IFavorite {
    id: number;
}

export interface IFavoriteReducer {
    favorites: IFavorite[];
    isFavorite?: boolean;
}

export interface IFavoriteAction {
    type: string;
    payload?: any;
}

export const initioalState: IFavoriteReducer = {
    favorites: []
}

export const favoriteReducer = (state = initioalState, action: IFavoriteAction): IFavoriteReducer=> {
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]  }
        case DELETE_FAVORITE:
            return {...state, favorites: [...state.favorites.filter(f => f !== action.payload)]  }
        case CHECK_FAVORITE:
             return {...state, isFavorite: state.favorites.some(f => f.id === action.payload) }
        default: return state
    }
}