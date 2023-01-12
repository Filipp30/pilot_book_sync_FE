export default {

    state:{
        apiHeader: {
            headers: {
                Authorization: 'Bearer 7|3zaxC39mTf0rh7eNjWdkpabcarv3Nk17Bj3HB1AH',
                Accept: 'application/json'
            }
        }
    },

    actions:{},

    mutations:{},

    getters: {
        getApiHeader(state) {
            return state.apiHeader;
        }
    }

}