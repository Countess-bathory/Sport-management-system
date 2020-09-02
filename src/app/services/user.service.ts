import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'api/users';
  constructor(
    private httpClient:HttpClient
  ) { }

  getAllUsers() {
    return this.httpClient.get(this.userUrl);
  }

  getUserById(id:number) {
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }

  deleteUser(id:number){
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  addUser(user:any) {
    return this.httpClient.post(this.userUrl, user);
  }

  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }

}
