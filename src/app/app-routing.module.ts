import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuillTextEditorComponent } from './quill-text-editor/quill-text-editor.component';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component: AppComponent,
  // },
  {
    path: '',
    component: GiphyComponent
  },
  {
    path:'editor',
    component: QuillTextEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
