import { Role } from '../user';

export default interface ICreateUserInput {
  email: string;
  name?: string;
  picture?: string;
  googleId?: string;
  encryptedPassword?: string;
  roles?: Role[];
}