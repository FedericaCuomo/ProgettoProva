import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { UserProfile } from './profilo.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private http = inject(HttpClient);

  getUser(): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${environment.apiUrl}/getUser`, {});
  }
}
