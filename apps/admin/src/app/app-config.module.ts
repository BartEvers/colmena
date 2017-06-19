import { NgModule } from '@angular/core'

// Colmena Modules
import { AuthConfigModule } from '@colmena/module-admin-auth'
import { ContentConfigModule } from '@colmena/module-admin-content'
import { DashboardConfigModule } from '@colmena/module-admin-dashboard'
import { DataBrowserConfigModule } from '@colmena/module-admin-data-browser'
import { DevConfigModule } from '@colmena/module-admin-dev'
import { SystemConfigModule } from '@colmena/module-admin-system'

// Custom Modules
// import { StarterConfigModule } from '@colmena/module-admin-starter'
import { StorageConfigModule } from '@colmena/module-admin-storage'

@NgModule({
  imports: [
    // Colmena Modules
    AuthConfigModule,
    ContentConfigModule,
    DashboardConfigModule,
    DataBrowserConfigModule,
    DevConfigModule,
    SystemConfigModule,

    // Custom Modules
    // StarterConfigModule
    StorageConfigModule
  ],
})
export class AppConfigModule {}
