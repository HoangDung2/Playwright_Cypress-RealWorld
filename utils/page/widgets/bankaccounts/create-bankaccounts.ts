import { Page, Locator, expect } from '@playwright/test';
export default class CreateBankAccount {
    readonly page: Page;
    readonly createBtn: Locator;
    readonly bankAccountBtn:Locator;
    readonly bankName: Locator;   // x>5
    readonly routNumber: Locator; // x>9
    readonly accountNum: Locator; // 9<x<12
    readonly saveBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.bankAccountBtn= page.locator("a[data-test='sidenav-bankaccounts']");
        this.createBtn = page.locator("a[href='/bankaccounts/new']");
        this.bankName = page.locator("input#bankaccount-bankName-input");
        this.routNumber = page.locator("input#bankaccount-routingNumber-input");
        this.accountNum = page.locator("input#bankaccount-accountNumber-input");
        this.saveBtn = page.locator("[type='submit']");
    }
    async clickCreat(){
        return await this.createBtn.click();
    }
    async clickCheckRou(){
        return await this.routNumber.click();
    }
    async clicbankAccountBtn(){
        return await this.bankAccountBtn.click();
    }
    async fillbankName(name:string){
        await this.bankName.fill(name);
        await expect(this.bankName).toHaveValue(name);
    }
    async fillroutnumber(routnum:string){
        await this.routNumber.fill(routnum);
        await expect(this.routNumber).toHaveValue(routnum);
    }
    async fillaccountNum(accountnum:string){
        await this.accountNum.fill(accountnum);
        await expect(this.accountNum).toHaveValue(accountnum);
    }
    async addBankAccount(name:string,routnum:string,accountnum:string){
        await this.fillbankName(name);
        await this.fillroutnumber(routnum);
        await this.fillaccountNum(accountnum);
        await expect(this.saveBtn).toBeVisible();
    }
    async clicksaveBtn(){
        return await this.saveBtn.click();
    }
}