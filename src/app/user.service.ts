import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

import { UtilService } from './util.service';
import { ApiResponse } from './api-response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = `${environment.apiBaseUrl}/stores`;

  constructor(private http: HttpClient, private utilService: UtilService) { }

  index(): Promise<User[]> {
    return this.http.get<ApiResponse>(`${this.apiBaseUrl}`)
              .toPromise()
              .then(this.utilService.checkSuccess)
              .then(response => {
                return response.data as User[];
              })
              .catch(this.utilService.handleApiError);
  }

  show(username: string): Promise<User> {
    return this.http.get<ApiResponse>(`${this.apiBaseUrl}/${username}`)
              .toPromise()
              .then(this.utilService.checkSuccess)
              .then(response => {
                return response.data as User;
              })
              .catch(this.utilService.handleApiError);
  }

  create(user: User): Promise<User> {
    return this.http.post<ApiResponse>(`${this.apiBaseUrl}`, user)
              .toPromise()
              .then(this.utilService.checkSuccess)
              .then(response => {
                return response.data as User;
              })
              .catch(this.utilService.handleApiError);
  }

  update(username: string, user: User): Promise<User> {
    return this.http.put<ApiResponse>(`${this.apiBaseUrl}/${username}`, user)
              .toPromise()
              .then(this.utilService.checkSuccess)
              .then(response => {
                return response.data as User;
              })
              .catch(this.utilService.handleApiError);
  }

  destroy(username: string): Promise<User> {
    return this.http.delete<ApiResponse>(`${this.apiBaseUrl}/${username}`)
              .toPromise()
              .then(this.utilService.checkSuccess)
              .then(response => {
                return response.data as User;
              })
              .catch(this.utilService.handleApiError);
  }
}
