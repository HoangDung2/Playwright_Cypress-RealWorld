export interface User {
    Employee: users[],
    Transaction:transactions[]
}
export interface users {
  id: string;
  uuid: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  balance: number;
  avatar: string;
  createdAt: Date;
  modifiedAt: Date;
}
export interface transactions{

}
import * as fs from 'fs';
const jsonString = fs.readFileSync('D:/5/playwright_orangehrm/data/database.json', 'utf-8');
var data = JSON.parse(jsonString);
export default { data};