import { getAuth, signOut, signInWithEmailAndPassword ,createUserWithEmailAndPassword, } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

export default{
  actions: {
      async register({dispatch,commit}, {email,password,name,pointBalance,balance}) {
        try{
          const auth = getAuth();
          const database = getDatabase();
          await createUserWithEmailAndPassword(auth, email, password)
          const uid = await dispatch("getUid")
          await set(ref(database, `users/` + uid ), {
            name,
            pointBalance,
            balance
          })

        } catch(e) {
          commit("setError", e)
          throw e
        }
      },
      async login({commit}, {email,password}) {
        try{
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password)

        }catch(e){
          commit("setError", e)
        }
      },
      async logout({commit}) {
        try{
          const auth = getAuth();
          await signOut(auth)
          commit('clearInfo')
        }catch(e){
          commit("setError", e)
          throw e
        }
      },
      getUid() {
        const auth = getAuth();
        const user = auth.currentUser;
        return user ? user.uid : null;
      }
  }
}