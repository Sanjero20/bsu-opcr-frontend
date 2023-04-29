////////////////////////////
//  Request modification  //
////////////////////////////
let apiAddr = import.meta.env.MODE == 'development' ? 'http://localhost:5050/api' : '/api';

const getRequest = async (path) => {
    const response = await fetch(`${apiAddr}${path}`, {
        credentials: 'include'
    });

    return response;
};

const postRequest = async (path, body) => {
    const response = await fetch(`${apiAddr}${path}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    });

    return response;
};