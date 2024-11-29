import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CatalogoModule } from './features/catalogo/catalogo.module';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ServicesListComponent } from './features/services-list/services-list.component';
import { ServiciosModule } from './features/servicios/servicios.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    SlickCarouselModule,
    CatalogoModule,
    ServiciosModule,
    FormsModule,
    MatIconModule
    // FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
