class Address{
  street: string;
  city: string;
  zipCode: string;
}
export class User {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  phoneNumbers: String[];
  login: string;
  password: string;
  picture:string;
  birthday: Date;
}
