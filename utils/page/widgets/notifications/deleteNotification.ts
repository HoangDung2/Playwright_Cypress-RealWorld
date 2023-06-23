import { Page, Locator, expect } from '@playwright/test';
export default class DeleteNotification {
    readonly page: Page;
    readonly dismissBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.dismissBtn = page.locator("button.MuiButton-sizeSmall");
    }
    async deleteNotification() {
        const list = this.dismissBtn.all();
        for (const i of await list) {
            await i.first().click();
        }
        await expect(this.dismissBtn).toBeHidden();
    }
}