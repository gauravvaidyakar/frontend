import {configureStore} from '@reactjs/toolkit'
const store = configureStore({
     reducer:{
        counter:counterReducer
     }
})