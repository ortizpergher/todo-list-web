export function add(payload) {
    return {
        type: 'tasks/ADD',
        payload
    };
}

export function update(payload) {
    return {
        type: 'tasks/UPDATE',
        payload
    };
}

export function remove(payload) {
    return {
        type: 'tasks/REMOVE',
        payload,
    };
}