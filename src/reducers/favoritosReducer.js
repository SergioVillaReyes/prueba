const initialProps = {  
    favoritos:[]
}

export default function(state = initialProps, action){
    switch (action.type){
        case "ADD_CHARACTER":
            return {
                ...state,
                favoritos: [...state.favoritos, action.payload]
            };
        case "DELETE_CHARACTER":
                return {
                    ...state,
                    favoritos: state.favoritos.filter(favorito => favorito.id !== action.payload)
                }
        default:
            return state;
    }
}