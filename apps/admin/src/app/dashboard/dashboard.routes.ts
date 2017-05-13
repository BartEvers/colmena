import { Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotFoundComponent } from '../core/not-found/not-found.component'
import { PasswordComponent } from './password/password.component'
import { ProfileComponent } from './profile/profile.component'

export const DashboardModuleRoutes: Routes = [ {
  path: '',
  data: {
    title: 'Dashboard',
  },
  children: [
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'profile', component: ProfileComponent },
  ],
} ]

