export interface User {
  name: string;
  email: string;
  age: number;
  id: number;
}

export interface UserCreate {
  name: string;
  email: string;
  age: number;
}

export interface UserResponse extends UserCreate {
  id: number;
}
