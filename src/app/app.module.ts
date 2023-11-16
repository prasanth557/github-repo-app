import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list-component/repo-list.component';
import { RepoModalComponentComponent } from './components/repo-modal-component/repo-modal-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from "./feature/feature.module";
import { LoginComponent } from './login/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        RepoListComponent,
        RepoModalComponentComponent,
        HeaderComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ModalModule.forRoot(),
        NgbModule,
        FeatureModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
