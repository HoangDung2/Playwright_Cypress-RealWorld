import { Page, Locator, expect, test, TestInfo } from '@playwright/test';
import { Admin } from "../utils/app";
import { User, users } from "./filedata";
import mysql from 'mysql2/promise'
test.describe("Get Database",async()=>{
    test.beforeEach(async({page,baseURL})=>{
        await page.goto(`${baseURL}signin`);
    })
    test("", async ({ request,page }) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456789',
            database: 'user'
        });
        const [rows, fields] = await connection.execute("SELECT * FROM user.dataemployee Where firstName='hung';");
        const admin = new Admin(page); 
        await admin.LoginPage.login(rows[0].username,rows[0].password);
        await admin.LoginPage.assertionLoginPage.allElementExist();
        const screenshot = await page.screenshot();
        await test.info().attach('screenshot', { body: screenshot, contentType: 'image/png' });
        test.info().annotations.push({ type: "locator.fill(xpath=//label[text()='Username'])", description:'fill username' }); //note description
        test.info().annotations.push({ type: "locator.fill(xpath=//label[text()='Password'])", description:'fill password' });
        test.info().annotations.push({ type: "Beauty", description:'u know , im very good boy' }) //note description
        await admin.LoginPage.assertionLoginPage.allElementExist();
        // await admin.SideMenu.acceptNext();
        // await admin.SideMenu.createBankaccount("chanel2","123456789","123456798")
        await admin.SideMenu.assertionsAccountExist();
    });
})


