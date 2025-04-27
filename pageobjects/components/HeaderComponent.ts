import { waitForElementDisplayed } from '../../helpers/wait.helper';

class HeaderComponent {
    get title() { return $('~headerTitle'); }
    get backButton() { return $('~headerBackButton'); }

    async clickBackButton() {
        await waitForElementDisplayed(this.backButton);
        await this.backButton.click();
    }

    async getTitleText(): Promise<string> {
        await waitForElementDisplayed(this.title);
        return this.title.getText();
    }
}

export default new HeaderComponent();
