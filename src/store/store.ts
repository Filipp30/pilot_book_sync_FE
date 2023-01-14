import {createStore} from "vuex";
import auth from "@/store/modules/auth";

const store = createStore({
    state:{},
    actions:{},
    mutations:{},
    getters:{},
    modules:{
        auth
    }
})

export default store