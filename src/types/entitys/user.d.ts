import Credential from './credential';

type User = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  credential: Credential;
};

export default User;
