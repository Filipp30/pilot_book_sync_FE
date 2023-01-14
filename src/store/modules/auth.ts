export default {

    state:{
        apiHeader: {
            headers: {
                Authorization: 'Bearer 9|XgPBst2avFH1a2jQWkUuEfer901tESUtC8FfKqn4',
                Accept: 'application/json'
            }
        }
    },

    actions:{},

    mutations:{},

    getters: {
        getApiHeader(state: any) {
            return state.apiHeader;
        }
    }

}