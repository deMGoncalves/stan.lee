import h from '@cea/h'
import router from '@cea/router'
import '@cea/reset'

router(/^\/$/, async () => {
  const { default: Sacola } = await import(/* webpackChunkName: "sacola" */ '@sacola')
  document.body.append(<Sacola />)
})
