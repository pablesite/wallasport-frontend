import { createMuiTheme } from '@material-ui/core/styles';

// export const theme = createMuiTheme({
//     palette: {
//         primary: {
//             light: '#8ee7c9',
//             main: '#56e2b6',
//             dark: '#219d76',
//             contrastText: '#fff',
//         },
//         secondary: {
//             light: '#696969',
//             main: '#444444',
//             dark: '#2f2f2f',
//             contrastText: '#fff',
//         },
//     },
//     overrides: {
//         MuiAvatar: {
//             colorDefault: {
//                 backgroundColor: '#56e2b6',
//             }
//         }
//     }
// });

export const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#77e7c4',
                main: '#56e2b6',
                dark: '#3c9e7f',
                contrastText: '#fff',
            },
            secondary: {
                light: '#718792',
                main: '#455a64',
                dark: '#1c313a',
                contrastText: '#fff',
            },
        },
        overrides: {
            MuiAvatar: {
                colorDefault: {
                    backgroundColor: '#56e2b6',
                }
            }
        }
    });

export const styles = {

    apiUnavailable: {
        paddingLeft: '3em',
        paddingRight: '3em',
        flexGrow: 1,
        backgroundColor: '#56e2b6',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3em'
    },

};
