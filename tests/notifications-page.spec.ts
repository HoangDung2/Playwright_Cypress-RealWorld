import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
import {Admin} from '../utils/app';
test.describe("Notification",()=>{
    test.beforeEach(async({page,baseURL})=>{
        let admin = new Admin(page);
        await page.goto(`${baseURL}signin`);
        await admin.LoginPage.login("khanhkhum113","1233211");
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.AssertionNotification.clickNotification();
    });
    test("Delete Notification",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNotification.DeleteNotification.deleteNotification();
        await admin.AssertionNotification.verifyDeleteSuccess();
    })
})
test.describe("Comment Transaction",()=>{
    test.beforeEach(async({page,baseURL})=>{
        let admin = new Admin(page);
        await page.goto(`${baseURL}signin`);
        await admin.LoginPage.login("khanhkhum113","1233211");
        await admin.LoginPage.assertionLoginPage.allElementExist();
    });
    test("commen",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNewTransaction.DetailTransaction.clickChoosUserComment();
        await admin.AssertionNewTransaction.DetailTransaction.fillComment("heheeeeeeee");
    })
})