import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { configureStore, IAppStore } from './store/app-store';
import { AppStateSelectors } from './store/app/app-state.selectors';
import { AppStateActions } from './store/app/app-state.actions';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './form/edit-form.component';
import { ModalComponent } from './form/modal.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditFormComponent,
    ModalComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    AppStateActions,
    AppStateSelectors,
    ApiService
  ]
})
export class AppModule {
  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppStore>,
  ) {
    const store = configureStore().store;
    ngRedux.provideStore(store);
  }
}
