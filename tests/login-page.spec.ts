import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
import {Admin} from '../utils/app';
test.describe("Login",()=>{
    test.beforeEach(async({page,baseURL})=>{
        await page.goto(`${baseURL}signin`);
    })
    test("Happy Case - New account", async({page})=>{
        const admin = new Admin(page);
        test.info().annotations.push({ type: 'issue', description:'' }); //note description
        await admin.LoginPage.login("khanh114","123456");
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.SideMenu.acceptNext();
        await admin.SideMenu.assertionAccountNew();
        await admin.SideMenu.createBankaccount("chanel2","123456789","123456798")
        await admin.SideMenu.assertionsAccountExist();
    })
    test("Happy Case - Old account", async({page})=>{
        const admin = new Admin(page);
        test.info().annotations.push({ type: 'issue', description:''});
        await admin.LoginPage.login("khanhkhum113","1233211");
        // await test.info().annotations.push({ type: 'issue', description: 'descriptive text' });
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.SideMenu.assertionsAccountExist();      
        await admin.LoginPage.logout();
        // test.info().annotations.push({ type: 'issue', description: 'descriptive text' });
    })
    test("Unfill username",async({page})=>{
        const admin = new Admin(page);
        test.info().annotations.push({ type: 'issue', description:''});
        await admin.LoginPage.loginInvalid("","123456");
        await admin.LoginPage.assertionLoginPage.requiredUser();
    })
    test("Fill username & password < 4 characters",async({page})=>{
        const admin = new Admin(page);
        test.info().annotations.push({ type: 'issue', description:''});
        await admin.LoginPage.loginInvalid("1","12");
        await admin.LoginPage.clickCheck();
        await admin.LoginPage.assertionLoginPage.requidPass();
    })
    test("Username & password is invalid",async({page})=>{
        const admin = new Admin(page);
        test.info().annotations.push({ type: 'issue', description:'' });
        await admin.LoginPage.loginInvalid("123456","123456");
        await admin.LoginPage.clickSigup();
        await admin.LoginPage.assertionLoginPage.requiredInvalid();
    })
})
