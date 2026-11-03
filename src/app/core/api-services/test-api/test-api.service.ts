import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export interface TestResponse {
  message: string;
  test: string;
}

@Injectable({ providedIn: 'root' })
export class TestService {
  private http = inject(HttpClient);

  call(): Observable<TestResponse> {
    return this.http.post<TestResponse>(`${environment.apiUrl}/example`, {});
  }
}
