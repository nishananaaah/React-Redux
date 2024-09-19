import { BUY_CAKE } from "./CakeType"

const Initialstate={
    numOfCakes:10
}

const CakeReducer = (state=Initialstate,action)=>{
    switch(action.type){
       case BUY_CAKE:return{
        ...state,
        numOfCakes:state.numOfCakes - 1
       }
       default :return state
    }

}
export default CakeReducer