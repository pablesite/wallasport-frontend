export function isAuthorized(user) {

    return { exist: Boolean(user && user.email) } //Añadirle user.username cuando lo tenga implementado. Quitarle también lo de exist...

    // if ((user !== undefined && user !== null )  && 
    //     (user.username !== '' && user.email !== '')
    //     ) {
    //     return {
    //         exist: true,
    //         user: user
    //     }
    // }
    // else {
    //         return {
    //             exist: false,
    //             user: {}
    //         }
    //     }

}

export const locateAdvertFromUrl = (location, state) => {

    let advertUrl = null;
    const path = location.pathname.split('/')
    for (let i = 1; i < state.numberOfPages + 1; i++) {
        advertUrl = state.advertsInPages[i].find(advert => advert._id === path[2]);
        if (advertUrl !== null) {
            i = state.numberOfPages + 1;
        }
    }
    return advertUrl

}


