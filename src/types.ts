export interface UserFormData {
  idType: string;
  phoneNumber: string;
  idNumber: string;
  passcode: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  organization?: string;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
}

export type IDType = 
  | 'National ID' 
  | 'Voter\'s card ID' 
  | 'International Passport' 
  | 'Social Security Number' 
  | 'Others';

export const ID_TYPES: IDType[] = [
  'National ID',
  'Voter\'s card ID',
  'International Passport',
  'Social Security Number',
  'Others'
];