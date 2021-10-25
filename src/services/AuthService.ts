import requests from 'services/httpService';
import { IAuthData, IUser } from 'types';
class AuthService {
  login(body: { email: string; password: string }): Promise<IAuthData> {
    return requests.post(`/auth/login`, body);
  }

  users(): Promise<IUser[]> {
    return requests.get('/users');
  }

  logout(): Promise<any> {
    return requests.get(`/auth/logout`);
  }
}

export default new AuthService();
