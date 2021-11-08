export interface ICreateMerchantDto {
  name: string;
  email: string;
  cnpj: string;
  password: string;
  address?: {
    street: string;
    number: string;
    state: string;
    city: string;
    postCode: string;
  };
}
