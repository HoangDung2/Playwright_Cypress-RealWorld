import { Page, Locator, expect,test,TestInfo} from '@playwright/test';
import {Admin} from '../utils/app';
import LoginPage from '../utils/login';
test.describe("Bank Account",async()=>{
    test.beforeEach(async({page,baseURL})=>{
        let admin = new Admin(page);
        await page.goto(`${baseURL}signin`);
        await admin.LoginPage.login("khanhkhum113","1233211");
        await admin.LoginPage.assertionLoginPage.allElementExist();
        await admin.AssertionCreatBankAccount.createbank.clicbankAccountBtn();
    });
    test("Creat Bank Account New",async({page,baseURL})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.createbank.clickCreat();
        await admin.AssertionCreatBankAccount.createbank.addBankAccount("Chanel2","123456789","123456789");
        await admin.AssertionCreatBankAccount.createbank.clicksaveBtn();
        await admin.AssertionCreatBankAccount.allElementExits();
    })  
    test("Unfill from Creat BankAccount",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.createbank.clickCreat();
        await admin.AssertionCreatBankAccount.createbank.addBankAccount("","","");
        await admin.AssertionCreatBankAccount.createbank.clickCheckRou();
        await admin.AssertionCreatBankAccount.allElementRequi();
    })
    test("Fill from Creat Bankaccount at least requid",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.createbank.clickCreat();
        await admin.AssertionCreatBankAccount.createbank.addBankAccount("123","123","123");
        await admin.AssertionCreatBankAccount.createbank.clickCheckRou();
        await admin.AssertionCreatBankAccount.allElementRequi();
    })
    test("TC_01 Fill BankName , Routing & Account is't enough condition ",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.createbank.clickCreat();
        await admin.AssertionCreatBankAccount.createbank.addBankAccount("12345","123","123");
        await admin.AssertionCreatBankAccount.createbank.clickCheckRou();
        await admin.AssertionCreatBankAccount.requidrou();
        await admin.AssertionCreatBankAccount.requidaccountLeast();
    })
    test("TC_02 Fill BankName , Routing & Account is't enough condition ",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.createbank.clickCreat();
        await admin.AssertionCreatBankAccount.createbank.addBankAccount("12345","123","123456789101213");
        await admin.AssertionCreatBankAccount.createbank.clickCheckRou();
        await admin.AssertionCreatBankAccount.requidrou();
        await admin.AssertionCreatBankAccount.requidaccountMax();
    })
    test("Delete BankAccount",async({page})=>{
        let admin = new Admin(page);
        await admin.AssertionCreatBankAccount.deletebank.deleteAccount();
    })
})