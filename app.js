import { createStore } from "redux";

const reducer = (state, action) => state;

//initial state
const initialState = {
    recipes:[
        {
            id:10,
            name:"Omlette"
        }
    ],
    ingredients:[
        {
            recipe_id:10,
            name:"eggs",
            quantity:1
        },
        {
            recipe_id:10,
            name:"milk",
            quantity:2
        }

    ]

};

const store = createStore(reducer, initialState);

store.subscribe(()=>console.log("store changed!"));

store.dispatch({type:""});


console.log("Redux started! ")


