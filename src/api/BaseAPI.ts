import HTTPTransport from "./HTTPTransport";

export default class BaseAPI {
  protected http: HTTPTransport;
  
  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint)
  }

  create(data: unknown) { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  // update() { throw new Error('Not implemented') }

  delete() { throw new Error('Not implemented'); }
}