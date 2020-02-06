import * as selectors from '../store/selectors';

describe('selectors', () => {

    it('should check if user exist', () => {
        
       const user = {
            username: 'pablesite',
            email: 'pablo.ruiz.molina@gmail.com'
        }

        expect(selectors.isAuthorized(user).exist).toEqual(true);
  
   });
   
});
