
// user selector
export const user = state => state.user;

export const token = state => state.user.token;

export function isAuthorized(state) {
    return  Boolean(state.user && state.user.username)  
}

// adverts selector
export const advertsInPages = state => state.adverts.advertsInPages;
export const actualPage = state => state.adverts.actualPage;
export const numberOfPages = state => state.adverts.numberOfPages;

export const locateAdvertFromUrl = (location, state) => {
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

// tags selectors
export const tags = state => state.tags;

// ui selectors
export const isFetching = state => state.ui.isFetching;
export const error = state => state.ui.error;

// app selectors
export const showLogin = state => state.appSelectors.showLogin;
export const showRegister = state => state.appSelectors.showRegister;
export const showUserRegistered = state => state.appSelectors.showUserRegistered;
export const showAdvertDetail = state => state.appSelectors.showAdvertDetail;
export const showCreateAdvert = state => state.appSelectors.showCreateAdvert;


