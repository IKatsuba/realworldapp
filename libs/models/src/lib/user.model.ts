export interface UserModel {
  username: string;
  bio: string;
  image: string;
  email?: string;
  following?: boolean;
}
