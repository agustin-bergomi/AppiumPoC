import LoginPage from '../../pageobjects/pages/LoginPage';
import { validUser } from '../../data/users';

describe('Login flujo', () => {
    it('debería loguearse con un usuario válido', async () => {
        await LoginPage.enterUsername(validUser.username);
        await LoginPage.enterPassword(validUser.password);
        await LoginPage.submitLogin();
        await expect(LoginPage.successMessage).toBeDisplayed();
    });
});
