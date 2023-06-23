import { Page, Locator, expect } from '@playwright/test';
import EditAccount from './page/widgets/myaccounts/editaccounts';
export class AssertionMyAccount{
    readonly page:Page;
    readonly EditAccount:EditAccount;
    readonly requidFirstName:Locator;
    readonly requidLastName:Locator;
    readonly requidEmail:Locator;
    readonly requidPhone:Locator;
    constructor(page:Page){
        this.page=page;
        this.EditAccount = new EditAccount(page);
        this.requidFirstName=page.locator("p#user-settings-firstName-input-helper-text");
        this.requidLastName=page.locator("p#user-settings-lastName-input-helper-text");
        this.requidEmail=page.locator("p#user-settings-email-input-helper-text");
        this.requidPhone=page.locator("p#user-settings-phoneNumber-input-helper-text");
    }
    async allElementExist(){
        for(let iteam of[
            this.requidEmail,
            this.requidFirstName,
            this.requidLastName,
            this.requidPhone
        ]){
            await expect(iteam).toBeVisible()
        }
    }
    async requidemail(){
        let message ='Must contain a valid email address';
        await expect(this.requidEmail).toHaveText(message);
    }
    async requidphone(){
        let message ='Phone number is not valid';
        await expect(this.requidPhone).toHaveText(message);
    }
}