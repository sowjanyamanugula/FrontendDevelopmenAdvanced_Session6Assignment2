import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
