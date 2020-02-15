import * as selectors from '../store/selectors';

describe('selectors', () => {

    it('should check if user exist', () => {

        const state = {
            user = {
                username: 'pablesite',
                email: 'pablo.ruiz.molina@gmail.com'
            }

        }

        expect(selectors.isAuthorized(state)).toEqual(true);

    });

});
