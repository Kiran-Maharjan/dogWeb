import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { GuideComponent } from './guide/guide.component';
import { UserComponent } from './user/user.component';
import { DogComponent } from './dog/dog.component';
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
        title: 'Home Details Page'
    }
    , {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details Page'
    },
    {
        path: 'user',
        component: UserComponent,
        title: 'User Page'
    }, {
        path: 'guide',
        component: GuideComponent,
        title: 'Guide Page'
    }, {
        path: 'dog',
        component: DogComponent,
        title: 'Dog Page'
    }

]
export default routeConfig;