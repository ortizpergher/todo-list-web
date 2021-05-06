const initialState = [];

export default function tasks(state = initialState, {type, payload}) {
    
    switch (type){
        case 'tasks/ADD':
            return [...state, payload];
        case 'tasks/UPDATE':
            return state.filter((item, index) => { 
                if (index === payload.index) {
                    item.checked = !item.checked;
                }

                return item;
            });
        case 'tasks/REMOVE':
            return state.filter((item, index) => { 
                if (index !== payload.index) {
                    return item;
                }
            });
        default:
            return state;
    }
}