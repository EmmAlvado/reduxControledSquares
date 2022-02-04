import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

let stateObj = {
    color: ""
}

const reducer = (state = stateObj, action) => {
    //here we update states depending actions 

    switch (action.type) {
        case "blue":
            state.color="blue";
            return {...state}
        case "red":
            state.color="red";
            return {...state}
        default:
            state.color="";
            return {...state}
    }

}

const store = createStore(reducer); // create the store

store.subscribe(() => {
    const truc = store.getState();
});

const Provider = ({children, ...props}) => {
    return (<ReduxProvider {...props} store={store}>{children}</ReduxProvider>);
}

export default Provider;