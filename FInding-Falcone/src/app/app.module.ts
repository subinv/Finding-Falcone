import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { GuessFieldsComponent } from './guess-fields/guess-fields.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    GuessFieldsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:SearchComponent}
    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
