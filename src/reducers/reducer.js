export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, data: action.payload };
      case "ADD_FAV":
        return { ...state, fav: [...state.fav, action.payload] };
      case "REMOVE_FAV":
        const filteredFavs = state.fav.filter(
          (fav1) => fav1.id !== action.payload.id
        );
        return { ...state, fav: filteredFavs };
      case 'SET_DARK_MODE':
            return{ ...state, theme: true};
     case 'SET_LIGHT_MODE':
            return { ...state, theme: false};
     case 'TOGGLE_THEME':
            return { ...state, theme: !state.theme};
        default:
            return state;   
    }
  };