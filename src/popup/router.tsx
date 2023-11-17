import { ReactRouter, RootRoute, Route, createHashHistory } from '@tanstack/react-router'
import Layout from './HelloWorld'

const rootRoute = new RootRoute()

const layoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Layout,
  id: 'layout',
})

const routeTree = rootRoute.addChildren([layoutRoute.addChildren([])])

const hashHistory = createHashHistory()
const router = new ReactRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router }
