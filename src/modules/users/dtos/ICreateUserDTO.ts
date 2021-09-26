export interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
  preferences: string;
  creditCard?: {
    number: string;
    holderName: string;
    cvvCode: string;
    expirationDate: string;
  };
  address?: {
    street: string;
    number: string;
    state: string;
    city: string;
    postCode: string;
  };
}
