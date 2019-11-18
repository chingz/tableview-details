export default class BaseApiService {
  constructor(private _baseUrl: string) {}

  private backendFetch(method: string, path: string, body?: Object, config?: RequestInit) {
    const innerConfig: RequestInit = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    const mergedConfig = { ...innerConfig, ...config };
  
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      mergedConfig.body = JSON.stringify(body);
    }
  
    return fetch(`${this._baseUrl}${path}`, mergedConfig)
      .then(response => {
        if (response.ok) return response.json();
        const err = new Error(response.statusText);
        // @ts-ignore
        err.response = response;
        throw err;
      });
  }

  public get = (path: string) => this.backendFetch('GET', path);

  public post = (path: string, data: any = null) => this.backendFetch('POST', path, data);

  public put = (path: string, data: any = null) => this.backendFetch('PUT', path, data);

  public del = (path: string, data: any = null) => this.backendFetch('DELETE', path, data);
}
