import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
export const routes: Routes = [];
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
     {
        path: 'details',
        component: DetailsComponent,
        title: 'Details Page'
    }
    , {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
]
export default routeConfig;