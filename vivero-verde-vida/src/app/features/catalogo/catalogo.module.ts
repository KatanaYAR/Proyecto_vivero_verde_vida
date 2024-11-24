 // Asegúrese de que la ruta sea correcta

import { NgModule } from "@angular/core";
import { CatalogoComponent } from "./catalogo.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { CatalogoRoutingModule } from "./catalogo-routing.module";

@NgModule({
  declarations: [
    CatalogoComponent,
    ProductListComponent, // Declarado aquí
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
  ],
  exports: [
    ProductListComponent, // Ahora puede exportarse
  ],
})
export class CatalogoModule {}
