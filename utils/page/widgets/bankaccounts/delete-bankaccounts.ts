import { Page, Locator, expect } from '@playwright/test';
export default class DeleteBankAccount{
    readonly page:Page;
    readonly deleteBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.deleteBtn=page.locator("button.MuiButton-sizeLarge>span.MuiButton-label");
    }
    async deleteAccount(){  
        const list = this.deleteBtn.all();
        for(const i of await list ){
            await i.first().click();
        }
    await expect(this.deleteBtn).toBeHidden();
    }
}