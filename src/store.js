export function initialStore() {
    return {
        slug: "",
        contacts: [],
        loading: false,
        error: null
    };
}

export default function storeReducer(store, action) {
    switch (action.type) {
        
        case "SET_SLUG":
            return {
                ...store,
                slug: action.payload
            };

        case "SET_CONTACTS":
            return {
                ...store,
                contacts: action.payload
            };

        case "SET_LOADING":
            return {
                ...store,
                loading: action.payload
            };

        case "SET_ERROR":
            return {
                ...store,
                error: action.payload
            };

        default:
            console.error("Unknown action:", action.type);
            return store;
    }
}
