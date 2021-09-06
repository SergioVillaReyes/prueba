export const addFavoritoAction = state => {
    return {
        type:"ADD_CHARACTER",
        payload:state
    };
};

export const deleteFavoritoAction = id => {
    return {
        type:"DELETE_CHARACTER",
        payload:id
    }
}