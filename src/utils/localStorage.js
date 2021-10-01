
export const getStateLocalStoraga = () => {
    const favoritosStorage = localStorage.getItem("favoritos");
    if(favoritosStorage === null) return undefined;
    return JSON.parse(favoritosStorage);
};


export const setStateLocalStorage = (state) => {
    localStorage.setItem("favoritos", JSON.stringify(state));
}





