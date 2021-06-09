export abstract class ErrorHandlerService {
  abstract handle(err: any, params: any): void;
}
