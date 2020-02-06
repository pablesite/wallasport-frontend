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




