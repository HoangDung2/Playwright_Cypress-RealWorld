import { Page, Locator, expect } from '@playwright/test';
import CreatedTransaction from './page/widgets/newtransaction/created-transaction';
import DetailTransaction from './page/widgets/newtransaction/detail-transaction';
export default class AssertionNewTransaction {
    readonly page: Page;
    readonly CreatedTransaction: CreatedTransaction;
    readonly DetailTransaction:DetailTransaction;
    readonly requidPayamont: Locator;
    readonly requidPayAddnote: Locator;
    readonly transactionSuccess: Locator;
    readonly everyoneBtn: Locator;
    readonly friendsBtn: Locator;
    readonly mineBtn: Locator;
    readonly VerifyCreateTransac: Locator;
    readonly listComment:Locator;
    constructor(page:Page){
        this.page=page;
        this.CreatedTransaction= new CreatedTransaction(page);
        this.DetailTransaction= new DetailTransaction(page);
        this.requidPayamont=page.locator("p#transaction-create-amount-input-helper-text");
        this.requidPayAddnote=page.locator("p#transaction-create-description-input-helper-text")
        this.transactionSuccess=page.locator("div.MuiGrid-justify-content-xs-center>div>h2");
        this.everyoneBtn=page.locator("a[data-test='nav-public-tab']");
        this.friendsBtn=page.locator("a[data-test='nav-contacts-tab']");
        this.mineBtn=page.locator("a[data-test='nav-personal-tab']");
        this.VerifyCreateTransac=page.locator("div.MuiGrid-grid-xs-12>div>div");
        this.listComment= page.locator("ul[data-test='comments-list']>li");
    }
    async verifyCreateTransac(){
        let iteam = this.VerifyCreateTransac.all();
        for(let list of await iteam){
            await expect(list).toBeVisible();
        }
    }
    async verifyReturnTransaction(){
        for(let iteam of [
            this.everyoneBtn,
            this.friendsBtn,
            this.mineBtn
        ]){
            await expect(iteam).toBeVisible()
        }
    }
    async requidFromPayment(){
        let messsageAmount='Please enter a valid amount';
        let messageAddnote='Please enter a note';
        await expect(this.requidPayamont).toHaveText(messsageAmount);
        await expect(this.requidPayAddnote).toHaveText(messageAddnote);
    }
    async verifyTranSuccess(){
        await expect(this.transactionSuccess).toBeVisible();
    }
    async veryfiComment(){
        await expect(this.listComment).toBeVisible();
    }
}