import { BehaviorSubject, Observable } from 'rxjs';

export type HttpStatusType = 'loading' | 'success' | 'empty' | 'error';

export interface IHttpStatus {
  loading: boolean;
  success: boolean;
  empty: boolean;
  error: boolean;
  errorMessage?: string;
}

export abstract class HttpStatusService {
  abstract listen(key: string): Observable<IHttpStatus>;
  abstract change(key: string, type: HttpStatusType, errorMessage?: string): void;
  abstract setInternalError(key: string, errorMessage?: string): void;
}
