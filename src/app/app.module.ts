import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { QuillTextEditorComponent } from './quill-text-editor/quill-text-editor.component';
import { GiphyComponent } from './giphy/giphy.component'
import { MatDialogModule } from '@angular/material/dialog';
import { GiphyPopupComponent } from './giphy-popup/giphy-popup.component'




@NgModule({
  declarations: [
    AppComponent,
    QuillTextEditorComponent,
    GiphyComponent,
    GiphyPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    QuillModule.forRoot(),
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    GiphyPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
