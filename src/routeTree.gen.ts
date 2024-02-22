/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppWorkspaceIndexImport } from './routes/_app/$workspace/index'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppWorkspaceIndexRoute = AppWorkspaceIndexImport.update({
  path: '/$workspace/',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/$workspace/': {
      preLoaderRoute: typeof AppWorkspaceIndexImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AppRoute.addChildren([AppWorkspaceIndexRoute]),
])

/* prettier-ignore-end */
