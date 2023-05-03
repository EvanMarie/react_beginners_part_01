import axios from 'axios';
import { CanceledError } from "axios";

// headers is where things like api-key would go
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    })

export { CanceledError };


/* 

This code exports a default instance of the Axios library with a specified 
baseURL of "https://jsonplaceholder.typicode.com". Axios is a JavaScript 
library that allows us to make HTTP requests to web servers.

The axios.create() method returns an instance of the Axios library with a 
specified configuration. In this case, the configuration object only contains 
the baseURL property, which is the root URL for all HTTP requests made with 
this instance.

Additionally, the code exports the CanceledError class from Axios. This class 
is used when a request is canceled by an AbortController instance, and it can 
be used to handle this specific type of error.

Overall, this code exports a pre-configured Axios instance that can be used to 
make HTTP requests to the specified baseURL.

*/