export interface IUser {
  id: string;
  username: string;
}

export interface AuthStoreInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  user: IUser | undefined;
  setUser: (user: IUser) => void;
}
