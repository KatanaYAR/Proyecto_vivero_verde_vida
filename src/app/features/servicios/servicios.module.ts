import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { ServicesListComponent } from '../services-list/services-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ServiciosComponent,
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    ServicesListComponent, // Ahora puede exportarse
  ],
})
export class ServiciosModule { }
