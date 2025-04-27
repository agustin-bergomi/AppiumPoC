export async function waitForElementDisplayed(element: WebdriverIO.Element) {
    await element.waitForDisplayed({ timeout: 5000 });
}
