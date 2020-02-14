export function isAuthorized(user) {
    return  Boolean(user && user.username)  
}

export const locateAdvertFromUrl = (location, state) => {

    let advertUrl = null;
    const path = location.pathname.split('/')
    for (let i = 1; i < state.numberOfPages + 1; i++) {
    
        advertUrl = state.advertsInPages[i].find(advert => advert.slugName === path[2]);
        if (advertUrl !== null && advertUrl !== undefined) {
            i = state.numberOfPages + 1;
        }
    }

    return advertUrl;

}


