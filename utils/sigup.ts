import { Page, Locator, expect } from '@playwright/test';
export default class Sigup {
    readonly page: Page;
    readonly firstnameIP: Locator;
    readonly lastnameIP: Locator;
    readonly usernameIP: Locator;
    readonly passwordIP: Locator;
    readonly confirmPassIP: Locator;
    readonly sigupBtn: Locator;
    readonly requidFirstname: Locator;
    readonly requidLastname: Locator;
    readonly requidUsername: Locator;
    readonly requidPassword: Locator;
    readonly requidConfirmPass: Locator;
    constructor(page: Page) {
        this.page = page;
        this.firstnameIP = page.locator("input#firstName");
        this.lastnameIP = page.locator("input#lastName");
        this.usernameIP = page.locator("input#username");
        this.passwordIP = page.locator("input#password");
        this.confirmPassIP = page.locator("input#confirmPassword");
        this.sigupBtn = page.locator("button[type='submit']");
        this.requidFirstname = page.locator("#firstName-helper-text");
        this.requidLastname = page.locator("#lastName-helper-text");
        this.requidUsername = page.locator("#username-helper-text");
        this.requidPassword = page.locator("#password-helper-text");
        this.requidConfirmPass = page.locator("#confirmPassword-helper-text");
    }
    async fillFirstname(firstname: string) {
        await this.firstnameIP.fill(firstname);
        await expect(this.firstnameIP).toHaveValue(firstname);
    }
    async fillLastname(lastName: string) {
        await this.lastnameIP.fill(lastName);
        await expect(this.lastnameIP).toHaveValue(lastName);
    }
    async fillUsername(username: string) {
        await this.usernameIP.fill(username);
        await expect(this.usernameIP).toHaveValue(username);
    }
    async fillPassword(password: string) {
        await this.passwordIP.fill(password);
        await expect(this.passwordIP).toHaveValue(password);
    }
    async fillConfirmPass(confirmPassword: string) {
        await this.confirmPassIP.fill(confirmPassword);
        await expect(this.confirmPassIP).toHaveValue(confirmPassword);
    }
    async clickPasswordIP(){
        return this.passwordIP.click();
    }
    async SigupAccount(firstname: string, lastName: string, username: string, password: string, confirmPassword: string) {
        await this.fillFirstname(firstname);
        await this.fillLastname(lastName);
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.fillConfirmPass(confirmPassword);
    }
    async clickSigup(){
        return await this.sigupBtn.click();
    }
    get assertionSigupPage(): SigupAssertions {
        return new SigupAssertions(this);
    }
}
class SigupAssertions {
    readonly page: Sigup;
    constructor(sigupPage: Sigup) {
        this.page = sigupPage;
    }
    async allElementHidden() {
        for (let iteam of [
            this.page.firstnameIP,
            this.page.lastnameIP,
            this.page.confirmPassIP,
        ]) {
            await expect(iteam).toBeHidden();
        }
    }
    async allElementExits() {
        for (let iteam of [
            this.page.usernameIP,
            this.page.firstnameIP,
            this.page.lastnameIP,
            this.page.confirmPassIP,
            this.page.passwordIP
        ]) {
            await expect(iteam).toBeVisible();
        }
    }
    async allElementExistRequid() {
        for (let iteam of [
            this.page.requidFirstname,
            this.page.requidConfirmPass,
            this.page.requidLastname,
            this.page.requidPassword,
            this.page.requidUsername
        ]) {
            await expect(iteam).toBeVisible();
        }
    }
    async requidFirstname() {
        let message = 'First Name is required';
        await expect(this.page.requidFirstname).toHaveText(message);
    }
    async requidLastname() {
        let message = 'Last Name is required';
        await expect(this.page.requidLastname).toHaveText(message);
    }
    async requidUsername() {
        let message = 'Username is required';
        await expect(this.page.requidUsername).toHaveText(message);
    }
    async requidPassWord() {
        let message = 'Enter your password';
        await expect(this.page.requidPassword).toHaveText(message);
    }
    async requidPassWordLength() {
        let message = 'Password must contain at least 4 characters';
        await expect(this.page.requidPassword).toHaveText(message);
    }
    async requidConfirm() {
        let message = 'Confirm your password';
        await expect(this.page.requidConfirmPass).toHaveText(message);
    }
    async requidConfirmNotMatch() {
        let message = 'Password does not match';
        await expect(this.page.requidConfirmPass).toHaveText(message);
    }
}