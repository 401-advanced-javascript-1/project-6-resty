
export const GET = (payload) => {
    return {
        type: 'GET',
        payload: payload
    };
};
  
export const POST = (payload) => {
    return {
        type: 'POST',
        payload: payload
    };
};

export const DESTROY = (payload) => {
    return {
        type: 'DESTROY',
        payload: payload
    };
};

export const PATCH = (payload) => {
    return {
        type: 'PATCH',
        payload: payload
    };
};

export const PUT = (payload) => {
    return {
        type: 'PUT',
        payload: payload
    };
};