import { Page, Locator, expect } from '@playwright/test';
import CreateBankAccount from './page/widgets/bankaccounts/create-bankaccounts';
import DeleteBankAccount from './page/widgets/bankaccounts/delete-bankaccounts';
export class AssertionCreatBankAccount{
    readonly page:Page;
    readonly titleBankAccount:Locator;
    readonly verifyCreate:Locator;
    readonly requidBankname:Locator
    readonly requidRou:Locator;
    readonly requidAccount:Locator;
    readonly createbank:CreateBankAccount;
    readonly deletebank:DeleteBankAccount;
    constructor(page:Page){
        this.page=page;
        this.deletebank= new DeleteBankAccount(page);
        this.createbank= new CreateBankAccount(page);
        this.titleBankAccount= page.locator("h2.MuiTypography-gutterBottom");
        this.verifyCreate= page.locator("a[href='/bankaccounts/new']")
        this.requidBankname=page.locator("p#bankaccount-bankName-input-helper-text");
        this.requidRou=page.locator("p#bankaccount-routingNumber-input-helper-text");
        this.requidAccount=page.locator("p#bankaccount-accountNumber-input-helper-text");
    }
    async allElementExits(){
        for(let iteam of[
            this.titleBankAccount,
            this.verifyCreate
        ]){
            await expect(iteam).toBeVisible();
        }
    }
    async allElementRequi(){
        for(let iteam of[
            this.requidBankname,
            this.requidAccount,
            this.requidRou
        ]){
            await expect(iteam).toBeVisible();
        }
    }
    async clicCheckRou(){
        return await this.requidRou.click();
    }
    async requidbankname(){
        let message='Must contain at least 5 characters';
        await expect(this.requidBankname).toHaveText(message);
    }
    async requidrou(){
        let message='Must contain a valid routing number'; // characters >9
        await expect(this.requidRou).toHaveText(message);
    }
    async requidaccountLeast(){
        let message='Must contain at least 9 digits';
        await expect(this.requidAccount).toHaveText(message);
    }
    async requidaccountMax(){
        let message='Must contain no more than 12 digits';
        await expect(this.requidAccount).toHaveText(message);
    }
}