import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/admin-layout'
import { SimpleLayoutComponent } from '@colmena/admin-layout'

import { AuthModuleRoutes } from '@colmena/module-admin-auth'
import { ContentModuleRoutes } from '@colmena/module-admin-content'
import { CoreModuleRoutes } from '@colmena/module-admin-core'

import { SystemModuleRoutes } from '@colmena/module-admin-system'

import { HasContentAccess, HasSystemAccess } from './app.guards'
import { DomainResolver } from './app.resolvers'

const simpleRoutes = [
  { path: '', children: CoreModuleRoutes },
  ...AuthModuleRoutes,
]

const fullRoutes = [
  {
    path: 'content',
    canActivate: [HasContentAccess],
    resolve: { domain: DomainResolver },
    children: ContentModuleRoutes,
  },  {
    path: '',
    loadChildren: '@colmena/module-admin-dashboard#DashboardModule',
  }, {
    path: '',
    canActivate: [HasSystemAccess],
    loadChildren: '@colmena/module-admin-dev#DevModule',
  }, {
    path: 'system',
    canActivate: [HasSystemAccess],
    children: SystemModuleRoutes,
  }
]

const routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  { path: '', component: SimpleLayoutComponent, children: simpleRoutes },
  { path: '', component: FullLayoutComponent, children: fullRoutes },
  { path: '**', redirectTo: 'not-found' }
]

// Set enableTracing to true to debug routing
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false, useHash: true })
