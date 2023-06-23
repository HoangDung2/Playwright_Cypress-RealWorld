import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
import {Admin} from '../utils/app';
test.describe("Sig up",()=>{
    test.beforeEach(async({page,baseURL})=>{
        await page.goto(`${baseURL}signup`);
    })
    test("Happy case",async({page})=>{
        const admin= new Admin(page);
        await admin.Sigup.SigupAccount("123","123","1234","123456","123456");
        await admin.Sigup.clickSigup();
        await admin.Sigup.assertionSigupPage.allElementHidden();
        await admin.LoginPage.assertionLoginPage.allElementLogin();
    })
    test("Unfill from sigup",async({page})=>{
        const admin = new Admin(page);
        await admin.Sigup.SigupAccount("","","","","");
        await admin.Sigup.clickPasswordIP();
        await admin.Sigup.assertionSigupPage.allElementExistRequid();
    })
    test("Fill all from sigup & Pasowrd at least 4 characters",async({page})=>{
        const admin= new Admin(page);
        await admin.Sigup.SigupAccount("123","123","1234","123","123");
        await admin.Sigup.assertionSigupPage.requidPassWordLength();
        await admin.Sigup.assertionSigupPage.allElementExits();
    })
    test("Fill all from sigup & ConfirmPassWord not match",async({page})=>{
        const admin= new Admin(page);
        await admin.Sigup.SigupAccount("123","123","1234","1234","1235");
        await admin.Sigup.assertionSigupPage.requidConfirmNotMatch();
        await admin.Sigup.assertionSigupPage.allElementExits();
    })
})