import apiClient from "./api-client";

interface Entity {
id: number;
}

class HTTPService {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
}

    // T = generic type parameter, replace later with <User> or <Post>, etc
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
        signal: controller.signal,
      });
      return { request, cancel: () => controller.abort() }
}

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id)
    };

    add<T>(entity: T) {
        return apiClient
        .post(this.endpoint, entity)
};

    update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity)
};
}


const create = (endpoint: string) => new HTTPService(endpoint);

export default create;



/* 
 This is a TypeScript code file that exports a factory function named "create" 
 that returns an instance of the HTTPService class.

    - The first line imports an "apiClient" module from a file named "api-client". 
    We can assume that this module exports functions to handle HTTP requests.

    - The next line defines an interface "Entity" that has a single property 
    "id" of type number. This interface is used as a constraint on the "update" 
    method of the "HTTPService" class.

    - The "HTTPService" class is defined with a constructor that takes an "endpoint" 
    string parameter. The constructor sets the class property "endpoint" to the value
    of the "endpoint" parameter.

    - The "getAll" method of the "HTTPService" class is defined with a generic type 
    parameter "T". This method sends an HTTP GET request to the "endpoint" using the 
    "apiClient" module's "get" function. The method returns an object with two 
    properties - "request" and "cancel". The "request" property contains the actual 
    request object that was sent, while the "cancel" property is a function that can 
    be used to cancel the request using an AbortController.

    - The "delete" method of the "HTTPService" class takes an "id" parameter of type 
    number. This method sends an HTTP DELETE request to the "endpoint" with the 
    specified ID using the "apiClient" module's "delete" function.

    - The "add" method of the "HTTPService" class takes a generic type parameter 
    "T" and an "entity" parameter of type "T". This method sends an HTTP POST request 
    to the "endpoint" with the specified "entity" using the "apiClient" module's 
    "post" function.

    - The "update" method of the "HTTPService" class takes a generic type parameter 
    "T" that extends the "Entity" interface, and an "entity" parameter of type "T". 
    This method sends an HTTP PATCH request to the "endpoint" with the ID of the 
    specified "entity" using the "apiClient" module's "patch" function.

    - The "create" function is defined as a function that takes an "endpoint" parameter 
    of type string and returns a new instance of the "HTTPService" class with the 
    specified "endpoint". This function is exported as the default export of the module.

To summarize, this code file exports a factory function that creates instances of an 
"HTTPService" class, which provides methods for making HTTP requests to a specified 
endpoint. The "getAll" method returns an object that can be used to cancel the request, 
while the "delete", "add", and "update" methods perform HTTP DELETE, POST, and PATCH 
requests respectively. The "update" method requires the "Entity" interface to be 
extended, which means that the "id" property must be present in any object passed to 
this method.

*/