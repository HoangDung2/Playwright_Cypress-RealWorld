import { Page, Locator, expect } from '@playwright/test';
export default class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly PasswordInput: Locator;
    readonly loginBtn: Locator;
    readonly requiredUser: Locator;
    readonly requiredPass: Locator;
    readonly requiredInvalid: Locator;
    readonly clickRemen:Locator;
    readonly logoutBtn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("xpath=//label[text()='Username']");
        this.PasswordInput = page.locator("xpath=//label[text()='Password']");
        this.loginBtn = page.locator("[type='submit']");
        this.requiredUser = page.locator("p#username-helper-text");
        this.requiredPass = page.locator("p#password-helper-text");
        this.requiredInvalid = page.locator("xpath=//*[contains(text(),'Username or password is invalid')]");
        this.clickRemen= page.locator("xpath=//span[text()='Remember me']");
        this.logoutBtn=page.locator("xpath=//span[text()='Logout']");
    }
    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
        await expect(this.usernameInput).toHaveValue(username);
    }
    async fillPassword(password: string) {
        await this.PasswordInput.fill(password);
        await expect(this.PasswordInput).toHaveValue(password);
    }
    async clickSigup() {
        return await this.loginBtn.click();
    }
    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSigup();
        await expect(this.loginBtn).toBeHidden();
    }
    async loginInvalid(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }
    get assertionLoginPage(): LoginPageAssertions {
        return new LoginPageAssertions(this);
    }
    async clickCheck(){
        await this.clickRemen.click();
    }
    async logout(){
        return await this.logoutBtn.click();
    }
}
class LoginPageAssertions {
    readonly page: LoginPage;
    constructor(loginpage: LoginPage) {
        this.page = loginpage;
    }
    async allElementExist() {
        for (let iteam of [
            this.page.usernameInput,
            this.page.PasswordInput,
            this.page.loginBtn
        ]) {
            await expect(iteam).toBeHidden();
        }
    }
    async allElementLogin() {
        for (let iteam of [
            this.page.usernameInput,
            this.page.PasswordInput,
            this.page.loginBtn
        ]) {
            await expect(iteam).toBeVisible();
        }
    }
    async requiredUser() {
        let message = 'Username is required';
        await expect(this.page.requiredUser).toHaveText(message)
    }
    async requidPass() {
        let message = 'Password must contain at least 4 characters';
        await expect(this.page.requiredPass).toHaveText(message);
    }
    async requiredInvalid() {
        let message = 'Username or password is invalid';
        await expect(this.page.requiredInvalid).toHaveText(message);
    }
}
