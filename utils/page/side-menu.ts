import { Page, Locator, expect } from '@playwright/test';
const URL="//*[contains(@class,'MuiList-padding')]//div//";
export default class SideMenu{
    readonly page:Page;
    readonly tittle:Locator;
    readonly bankName:Locator;
    readonly routingNum:Locator;
    readonly accountNum:Locator;
    readonly saveBtn:Locator;
    readonly DonePage:Locator;
    readonly myAccount:Locator;
    readonly bankAccount:Locator;
    readonly notiFication:Locator;
    readonly nextPage:Locator;
    constructor(page:Page){
        this.page=page;
        this.tittle= page.locator("MuiTypography-root MuiTypography-h6");
        this.bankName=page.locator("input[placeholder='Bank Name']");
        this.routingNum=page.locator("input[placeholder='Routing Number']");
        this.accountNum=page.locator("input[placeholder='Account Number']");
        this.saveBtn=page.locator("button[type='submit']");
        this.DonePage=page.locator("button.MuiButton-textPrimary>span.MuiButton-label");
        this.myAccount=page.locator(`xpath=${URL}a[contains(@href,'/user')]`);
        this.bankAccount=page.locator(`xpath=${URL}a[contains(@href,'/bank')]`);
        this.notiFication=page.locator(`xpath=${URL}a[contains(@href,'/notifications')]`);
        this.nextPage=page.locator("button.MuiButton-textPrimary>span.MuiButton-label");
    }
    async assertionAccountNew(){
        for (const iteam of[
            this.tittle,
            this.bankName,
            this.routingNum,
            this.accountNum,
            this.saveBtn
        ]) 
         await expect(iteam).toBeVisible();
    }
    async createBankaccount(bankname:string, routing:string, account:string){
        await this.bankName.fill(bankname);
        await this.routingNum.fill(routing);
        await this.accountNum.fill(account);
        await this.saveBtn.click();
        await this.acceptDone;
    }
    async acceptNext(){
        await this.nextPage.click();
    }
    async acceptDone(){
       await this.DonePage.click();
    }
    async assertionsAccountExist(){
        for(const iteamm of[
            this.myAccount,
            this.bankAccount,
            this.notiFication
        ]){
            await expect(iteamm).toBeVisible();
        }
    }
}