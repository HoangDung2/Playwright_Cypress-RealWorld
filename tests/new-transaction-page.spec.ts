import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
import {Admin} from '../utils/app';
test.describe("New Transaction",async()=>{
    test.beforeEach(async({page,baseURL})=>{
        let admin= new Admin(page);
        await page.goto(`${baseURL}sigin`);
        await admin.LoginPage.login("khanhkhum113","1233211");
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.AssertionNewTransaction.CreatedTransaction.clickNewBtn();
    })
    test("TC_01 Happy case ",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNewTransaction.CreatedTransaction.fillsearchName("Edgar Johns");
        await admin.AssertionNewTransaction.CreatedTransaction.chooseUser();
        await admin.AssertionNewTransaction.CreatedTransaction.fillPayment("2000","1000");
        await admin.AssertionNewTransaction.CreatedTransaction.ChooseRequest();
        await admin.AssertionNewTransaction.verifyTranSuccess();
        await admin.AssertionNewTransaction.CreatedTransaction.returnTransaction();
        await admin.AssertionNewTransaction.verifyReturnTransaction();
    })
    test("TC_02 Happy case ",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNewTransaction.CreatedTransaction.fillsearchName("Edgar Johns");
        await admin.AssertionNewTransaction.CreatedTransaction.chooseUser();
        await admin.AssertionNewTransaction.CreatedTransaction.fillPayment("2000","1000");
        await admin.AssertionNewTransaction.CreatedTransaction.ChoosePay();
        await admin.AssertionNewTransaction.verifyTranSuccess();
        await admin.AssertionNewTransaction.CreatedTransaction.createTransaction();
        await admin.AssertionNewTransaction.verifyCreateTransac();
    })
    test("Unfill from Payment",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNewTransaction.CreatedTransaction.fillsearchName("Edgar Johns");
        await admin.AssertionNewTransaction.CreatedTransaction.chooseUser();
        await admin.AssertionNewTransaction.CreatedTransaction.unfillPaymen("","");
        await admin.AssertionNewTransaction.CreatedTransaction.clickCheckAmount();
        await admin.AssertionNewTransaction.requidFromPayment();
    })
    test("  ",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionNewTransaction.CreatedTransaction.fillsearchName("Edgar Johns");
        await admin.AssertionNewTransaction.CreatedTransaction.chooseUser();
        await admin.AssertionNewTransaction.CreatedTransaction.fillPayment("0","");
        await admin.AssertionNewTransaction.verifyCreateTransac();
    })
})