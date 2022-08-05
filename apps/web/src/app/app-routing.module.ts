import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('@app/web/pages/settings').then((m) => m.SettingsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@app/web/pages/profile').then((m) => m.ProfileModule),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('@app/web/pages/editor').then((m) => m.EditorModule),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('@app/web/pages/article').then((m) => m.ArticleModule),
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: QuicklinkStrategy,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
