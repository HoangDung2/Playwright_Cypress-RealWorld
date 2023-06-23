import { Page, Locator, expect } from '@playwright/test';
import LoginPage from './login';
import SideMenu from './page/side-menu';
import Sigup from './sigup';
import {AssertionCreatBankAccount} from './bankaccounts';
import { AssertionMyAccount } from './myaccounts';
import AssertionNewTransaction from './newtransaction';
import AssertionNotification from './notification';
export class Admin{
    readonly page:Page;
    readonly AssertionCreatBankAccount:AssertionCreatBankAccount;
    readonly LoginPage:LoginPage;
    readonly SideMenu:SideMenu;
    readonly Sigup:Sigup;
    readonly AssertionMyAccount:AssertionMyAccount;
    readonly AssertionNewTransaction:AssertionNewTransaction;
    readonly AssertionNotification:AssertionNotification;
    constructor(page:Page){
        this.page=page;
        this.Sigup=new Sigup(page);
        this.LoginPage= new LoginPage(page);
        this.SideMenu= new SideMenu(page);
        this.AssertionCreatBankAccount= new AssertionCreatBankAccount(page);
        this.AssertionMyAccount= new AssertionMyAccount(page);
        this.AssertionNewTransaction= new AssertionNewTransaction(page);
        this.AssertionNotification= new AssertionNotification(page);
    }
}