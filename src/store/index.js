import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
/**
 * Please don' t remove this.
 * Artefact will use it to inject code
 */
//<= inject_import =>

//<= end_import =>

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  /**
   * Please don' t remove this.
   * Artefact will use it to inject code
   */
  //<= inject_store =>
state: {
	
  
		primaryColor:  "#179de3"		,      },

        
//<= end_store =>
})
