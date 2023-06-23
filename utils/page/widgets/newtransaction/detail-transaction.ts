import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
export default class DetailTransaction{
    readonly page:Page;
    readonly chooseUserComment:Locator;
    readonly chooseLike:Locator;
    readonly comment:Locator;
    constructor(page:Page){
        this.page=page;
        this.chooseUserComment=page.locator("div[data-test='transaction-list']>div>div>div").first();
        this.chooseLike=page.locator("button.MuiIconButton-colorPrimary");
        this.comment=page.locator("input[placeholder='Write a comment...']");
    }
    async clickChoosUserComment(){
        return this.chooseUserComment.click();
    }
    async clickLike(){
        return this.chooseLike.click();
    }
    async fillComment(name:string){
        await this.comment.fill(name);
        await this.comment.press('Enter');
        // await expect(this.comment).toHaveValue(name);
    }
}