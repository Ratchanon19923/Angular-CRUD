import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListStoreComponent } from './pages/list-store/list-store.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';
import { EditStoreComponent } from './pages/edit-store/edit-store.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-store' },
  { path: 'list-store', component: ListStoreComponent },
  { path: 'create-store', component: CreateStoreComponent },
  { path: 'edit-store/:id', component: EditStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
