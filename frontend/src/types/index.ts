export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  dueDate: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}