import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {

  services: any[] = [];
  filteredServices: any[] = [];
  filterText: string = '';

  constructor(private serviceService: ServiciosService) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    this.filteredServices = [...this.services];
  }

  filterServices(): void {
    this.filteredServices = this.services.filter(service =>
      service.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

}
