import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
]

/**
 * Please don' t remove this.
 * Artefact will use it to inject code
 */
//<= inject_routes =>
routes = routes.concat([{"path":"/","component":require('../artefact/At/main').default,"redirect":"ide"},{"name":"ui","path":"/ui","component":require('../artefact/At/Pages/UiPage').default},{"name":"ide","path":"/ide","component":require('../artefact/At/Pages/IdePage').default}])
//<= end_routes =>

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
