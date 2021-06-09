import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { HttpStatusService, HttpStatusType, IHttpStatus } from './http-status-service';

export class HttpStatusImplService extends HttpStatusService {

  #requestStatus: BehaviorSubject<Map<string, IHttpStatus>>;
  #baseValue = {
    loading: false,
    success: false,
    empty: false,
    error: false,
  };

  constructor() {
    super();
    this.#requestStatus = new BehaviorSubject<Map<string, IHttpStatus>>(new Map<string, IHttpStatus>());
  }

  change(key: string, type: HttpStatusType, errorMessage?: string): void {
    const newStatus = {
      ...this.#baseValue,
      ...{ [type]: true },
      errorMessage,
    };

    const newStatusValues = this.#requestStatus.getValue();
    newStatusValues.set(key, newStatus);
    this.#requestStatus.next(newStatusValues);
  }

  listen(key: string): Observable<IHttpStatus> {
    return this.getListener(key).pipe(
      finalize(() => this.removeItem(key))
    )
  }

  setInternalError(key: string, errorMessage: string) {
    this.change(key, 'error', errorMessage);
  }

  private getListener(key: string): Observable<IHttpStatus> {
    const current = this.#requestStatus.getValue();

    if (!current.has(key)) {
      current.set(key, this.#baseValue)
      this.#requestStatus.next(current)
    }

    return this.#requestStatus.pipe(
      map(e => e.get(key))
    ) as Observable<IHttpStatus>;
  }

  private removeItem(key: string): void {
    const tmpValue = this.#requestStatus.getValue();
    tmpValue.delete(key)
    this.#requestStatus.next(tmpValue);
  }

}
