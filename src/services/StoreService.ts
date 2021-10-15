import requests from 'services/httpService';
import { IStore } from 'types';

class StoreService {
  getStores(): Promise<IStore[]> {
    return requests.get('/store');
  }

  getStoreByID(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  getStoreProduct(id: string): Promise<IStore> {
    return requests.get(`/store/${id}/product`);
  }

  addStoreProduct(id: string, body: {}): Promise<IStore[]> {
    return requests.post(`/store/${id}/product`, body);
  }

  updateStore(id: string, body: {}): Promise<any> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
