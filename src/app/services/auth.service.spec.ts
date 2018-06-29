import { AuthService } from './auth.service';
/* describe contains a test suite
    it contains test
*/

describe('Service: Auth', () =>{
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    it('return true when if authenticated' , () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('return false when if not authenticated' , () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });

    it('sum functionality', () =>{
        expect(service.sum(2, 5)).toEqual(7);
    });

    it('sum functionality', () =>{
        expect(service.sum(2, 5)).toEqual(7);
    });
});
