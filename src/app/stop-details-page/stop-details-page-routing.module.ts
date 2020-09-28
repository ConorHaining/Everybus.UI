import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopResolver } from './resolvers/stop-resolver.service';
import { StopDetailsPageComponent } from './stop-details-page.component';


const routes: Routes = [
    {
        path: ':atcoCode',
        component: StopDetailsPageComponent,
        pathMatch: 'full',
        resolve: {
            stop: StopResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StopDetailsPageRoutingModule { }

