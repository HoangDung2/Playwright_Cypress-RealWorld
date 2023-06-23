import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
export default class CreatedTransaction{
    readonly page:Page;
    readonly newBtn:Locator;
    readonly SelectsearchName:Locator;
    readonly SelectclickUser:Locator;
    readonly Payamount:Locator;
    readonly PayAddnote:Locator;
    readonly PayRequested:Locator;
    readonly Paymentpay:Locator;
    readonly returnTransac: Locator;
    readonly createTransac: Locator;
    constructor(page:Page){
        this.page=page;
        this.newBtn=page.locator("a[data-test='nav-top-new-transaction']");
        this.SelectsearchName=page.locator("input[placeholder='Search...']");
        this.SelectclickUser=page.locator("ul[data-test='users-list'] > li").first();
        this.Payamount=page.locator("input[placeholder='Amount']");
        this.PayAddnote=page.locator("input[placeholder='Add a note']");
        this.PayRequested=page.locator("button[data-test='transaction-create-submit-request']");
        this.Paymentpay=page.locator("button[data-test='transaction-create-submit-payment']");
        this.createTransac=page.locator("button[data-test='new-transaction-create-another-transaction']");
        this.returnTransac=page.locator("a[data-test='new-transaction-return-to-transactions']");
    }
    async clickNewBtn(){
        return this.newBtn.click();
    }
    async fillsearchName(name:string){
        await this.SelectsearchName.fill(name);
        await expect(this.SelectsearchName).toHaveValue(name);
    }
    async chooseUser(){
        return this.SelectclickUser.click();
    }
    async fillPayment(amount:string,note:string){
        await this.Payamount.fill(amount);
        await this.PayAddnote.fill(note);
        await expect(this.PayAddnote).toHaveValue(note);
    }
    async unfillPaymen(amount:string,note:string){
        await this.Payamount.fill(amount);
        await this.PayAddnote.fill(note);
        await expect(this.PayAddnote).toHaveValue(note);
        await expect(this.Payamount).toHaveValue(amount);
    }
    async ChooseRequest(){
        return await this.PayRequested.click();
    }
    async ChoosePay(){
        return await this.Paymentpay.click();
    }
    async returnTransaction(){
        return this.returnTransac.click();
    }
    async createTransaction(){
        return this.createTransac.click();
    }
    async clickCheckAmount(){
        return await this.Payamount.click();
    }
}   