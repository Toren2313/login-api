interface IUser {
  id?: bigint;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt: Date;
}

export { IUser };
