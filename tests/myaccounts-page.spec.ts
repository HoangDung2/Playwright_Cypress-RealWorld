import { Page, Locator, expect, test, TestInfo } from '@playwright/test';
import { Admin } from '../utils/app';
test.describe("My Acount", () => {
    test.beforeEach(async ({ page, baseURL }) => {
        let admin = new Admin(page);
        await page.goto(`${baseURL}signin`);
        await admin.LoginPage.login("khanhkhum113", "1233211");
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.AssertionMyAccount.EditAccount.clickMyaccount();
    })
    test("Fill from User Setting, First & Last name is available",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionMyAccount.EditAccount.fillEmailPhone("chanel@gmail.com",1234567);
        await admin.AssertionMyAccount.EditAccount.clicksave();
    })
    test("Unfill from User Setting", async ({ page }) => {
        let admin = new Admin(page);
        await admin.AssertionMyAccount.EditAccount.fillFromAccount("","","",0);
        await admin.AssertionMyAccount.allElementExist();
    })
    test("Fill Emai & Phone fail",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionMyAccount.EditAccount.unfillEmaiPhone("123456",0);
        await admin.AssertionMyAccount.requidemail();
        await admin.AssertionMyAccount.requidphone();
    })
})