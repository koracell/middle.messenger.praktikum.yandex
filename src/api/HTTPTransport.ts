enum METHODS {
   GET = 'GET',
   POST =  'POST',
   PUT = 'PUT',
   DELETE ='DELETE',
};

function queryStringify(data: any) {
if (typeof data !== 'object') {
      throw new Error('Data must be object');
}

const keys = Object.keys(data);
return keys.reduce((result, key, index) => {
 return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
}, '?');
}

type Options = {
      data?: any
      headers?: Record<string, string>
      timeout?: number
      method?: METHODS
      withCredentials?: boolean
      mode?: string
  };

export default class HTTPTransport {
   static API_URL = 'https://ya-praktikum.tech/api/v2'
   protected endpoint: string;

   constructor(endpoint: string) {
      this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
   }

   get = (path: string = '/') => {
         return this.request(this.endpoint + path);
   };

   post = (path: string, data?: unknown) => {
         return this.request(this.endpoint + path, {data, method: METHODS.POST}, );
   };

   put = (path: string, data: unknown) => {
         return this.request(this.endpoint + path, {...data, method: METHODS.PUT});
   };

   delete = (path: string, data: unknown) => { 
         return this.request(this.endpoint + path, {data, method: METHODS.DELETE});
   };

   request = (url: string, options: Options = {method: METHODS.GET}) => {
         console.log('options', options)
         const {headers = {}, method, data} = options;
         console.log('data', data?.get('avatar'))
         console.log('method', method)

         return new Promise(function(resolve, reject) {
            if (!method) {
                  reject('No method');
                  return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                  method, 
                  isGet && !!data
                        ? `${url}${queryStringify(data)}`
                        : url,
            );

            Object.keys(headers).forEach(key => {
                  xhr.setRequestHeader(key, headers[key]);
            });
      
            xhr.onload = function() {
                  resolve(xhr);
            };
      
            xhr.onabort = reject;
            xhr.onerror = reject;
      
            if (data) {
                  xhr.timeout = data.timeout;
            }

            xhr.ontimeout = reject
            
            xhr.setRequestHeader('Content-Type', 'application/json');

            const isMultiPartHeader = headers?.['content-type'] === 'multipart/form-data';
            console.log('headers', headers)
            console.log('isMultiPartHeader', isMultiPartHeader)
            const headerKeys = Object.keys(!isMultiPartHeader ? {} : headers);
            console.log('headerKeys', headerKeys)

            if (headerKeys.length) {
                headerKeys.forEach((key) => {
                    console.log('headers[key]', headers[key])
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            console.log('xhr', xhr)

            xhr.withCredentials = true;
            xhr.responseType = 'json'

               
            if (isGet || !data) {
                  xhr.send();
            } else if (isMultiPartHeader) {
                  console.log('data in se', data.get('avatar'))
                  xhr.send(data)
            } else {
                  xhr.send(JSON.stringify(data));
            }
        });
   };
}