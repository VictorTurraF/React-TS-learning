import { User, Credential } from './entitys';

/** Login types */
export type LoginPayload = Omit<Credential, 'id' | 'user_id'>;
export type LoginForm = LoginPayload; // Alias for form validation

/** Registration Types */
export type RegistrationPayload =
  Pick<User & Credential, 'first_name' | 'last_name' | 'email' | 'password'>;
export type RegistrationForm = RegistrationPayload;
