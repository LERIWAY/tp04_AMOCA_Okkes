import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentFormComponent } from './componentForm/componentForm.component';
import { ComponentAffichageComponent } from './componentAffichage/componentAffichage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ValiditeNumberDirective } from './directives/ValiditeNumber/validite-number.directive';
import { ValiditeStringDirective } from './directives/ValiditeString/validite-string.directive';
import { TelFormatPipe } from './pipe/tel-format.pipe';
import { MonserviceService } from './services/monservice.service';
import { ComponentCatalogueComponent } from './component-catalogue/component-catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentRechercheComponent } from './component-recherche/component-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentFormComponent,
    ComponentAffichageComponent,
    FooterComponent,
    HeaderComponent,
    ValiditeNumberDirective,
    ValiditeStringDirective,
    TelFormatPipe,
    ComponentCatalogueComponent,
    ComponentRechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
