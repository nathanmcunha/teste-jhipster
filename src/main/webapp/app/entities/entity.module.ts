import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#TesteJhipsterRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#TesteJhipsterCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#TesteJhipsterLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#TesteJhipsterDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#TesteJhipsterTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#TesteJhipsterEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#TesteJhipsterJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#TesteJhipsterJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteJhipsterEntityModule {}
