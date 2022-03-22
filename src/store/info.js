import { ref, getDatabase, onValue,} from 'firebase/database'
export default{
  state:{
    info: {}
  },
  mutations:{
    setInfo(state,info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
  },
  actions: {
    async fetchInfo({dispatch,commit}) {
      try{
        const database = getDatabase()
        const uid = await dispatch('getUid')
        const info = await ref(database, `/users/${uid}/`);
        await onValue(info, (snapshot) => {
          const data = snapshot.val();
          commit('setInfo', data)
        });
        

      }catch(e){
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    info: s => s.info
  }
}