import { waitForElementDisplayed } from '../../helpers/wait.helper';
import HeaderComponent from '../components/HeaderComponent'; // <-- Importamos

class RegisterPage {
    get firstNameField() { return $('~firstName'); }
    get lastNameField() { return $('~lastName'); }
    get emailField() { return $('~email'); }
    get passwordField() { return $('~password'); }
    get registerButton() { return $('~register'); }
    get successMessage() { return $('~registerSuccessMessage'); }
    
    header = HeaderComponent; // <-- Exponemos el header

    async enterFirstName(name: string) {
        await waitForElementDisplayed(this.firstNameField);
        await this.firstNameField.setValue(name);
    }

    async enterLastName(lastName: string) {
        await waitForElementDisplayed(this.lastNameField);
        await this.lastNameField.setValue(lastName);
    }

    async enterEmail(email: string) {
        await waitForElementDisplayed(this.emailField);
        await this.emailField.setValue(email);
    }

    async enterPassword(password: string) {
        await waitForElementDisplayed(this.passwordField);
        await this.passwordField.setValue(password);
    }

    async submitRegistration() {
        await waitForElementDisplayed(this.registerButton);
        await this.registerButton.click();
    }
}

export default new RegisterPage();
