type AuthRequest = {
  password: string;
  username: string;
};

type AuthResponse = {
  refreshToken: string;
  accessToken: string;
};

type CustomerInfoResponse = {
  lastName: string;
  firstName: string;
  country: string;
  customerType: 'PERSON' | 'COMPANY';
  agreement: boolean;
  address: string;
  phone: string;
  userName: string;
  birthDate: string;
  email: string;
};

type RegisterRequest = {
  lastName: string;
  firstName: string;
  password: string;
  customerType: 'PERSON' | 'COMPANY';
  userName: string;
};

type SetAdditionalUserInfoRequest = {
  address: string;
  birthDate: string;
  email: string;
  countryId: number;
};

type Country = {
  id: number;
  alpha2Code: string;
  name: string;
};

type Agreement = {
  agreement: string;
};

type FAQCategory = {
  id: number;
  name: string;
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type Services = Service[];

type Service = {
  id: number;
  actionGroups: Array<{
    id: 21 | 22 | 23 | 24 | 25;
    name: string;
  }>;
  monthlyPrice?: number;
  yearlyPrice?: number;
  nameKa: string;
  organizationalProductType: 'STANDARD' | 'PREMIUM';
};
