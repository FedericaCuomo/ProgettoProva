import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { UserTable, UserTableRequest } from './users-table.model';

@Injectable({ providedIn: 'root' })
export class UsersTableService {
  private http = inject(HttpClient);

  getUsersTable(request: UserTableRequest): Observable<UserTable[]> {
    return this.http.post<UserTable[]>(
      `${environment.apiUrl}/getUsersTable`,
      request,
      {},
    );
  }
}
