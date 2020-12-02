import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'currency-converter',
    loadChildren: () => import('./pages/currency-converter/currency-converter.module').then( m => m.CurrencyConverterPageModule)
  },
  {
    path: 'temperature-converter',
    loadChildren: () => import('./pages/temperature-converter/temperature-converter.module').then( m => m.TemperatureConverterPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/animals/animals.module').then( m => m.AnimalsPageModule)
  },
  {
    path: 'hello/:name',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: 'note-list',
    loadChildren: () => import('./pages/notes/note-list/note-list.module').then( m => m.NoteListPageModule)
  },
  {
    path: 'note-details/:id',
    loadChildren: () => import('./pages/notes/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
