import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {

  services: any[] = [];

  constructor(private serviceService: ServiciosService) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
  }

}
