
// user selector
export const user = state => state.user;

export const token = state => state.user.token;
export const username = state => state.user.username;
export const email = state => state.user.email;
export const isAuthorized = (state) => Boolean(state.user && state.user.username);

export const findInFavourites = (state, favId) => {
    let isInTheList = undefined;
    if (state.user.favs) {
        isInTheList = state.user.favs.find(fav => fav == favId);
    }
    return Boolean(isInTheList);
}

// adverts selector
export const advertsInPages = state => state.adverts.advertsInPages;
export const actualPage = state => state.adverts.actualPage;
export const numberOfPages = state => state.adverts.numberOfPages;
export const sort = state => state.adverts.sort;

export const locateAdvertFromUrl = (state, location) => {
    if(state.adverts.advertsInPages.length !== 0){
        let advert = null;
        const path = location.pathname.split('/')
        for (let i = 1; i < state.adverts.numberOfPages + 1; i++) {
            advert = state.adverts.advertsInPages[i].find(advert => advert.slugName === path[2]);
            if (advert !== null && advert !== undefined) {
                i = state.adverts.numberOfPages + 1;
            }
        }
        return advert;
    }
}

// tags selectors
export const tags = state => state.tags;

// ui selectors
export const isFetching = state => state.ui.isFetching;
export const error = state => state.ui.error;

// app selectors
export const showLogin = state => state.appSelectors.showLogin;
export const showRegister = state => state.appSelectors.showRegister;
export const showUserRegistered = state => state.appSelectors.showUserRegistered;
export const showUpdateUser = state => state.appSelectors.showUpdateUser;
export const showAdvertDetail = state => state.appSelectors.showAdvertDetail;
export const showCreateAdvert = state => state.appSelectors.showCreateAdvert;


