import { ApplicationService } from '../../services/application.service';
import { Application } from './../models/application';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  applications: Application[] = [];
  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.getAllApplication();
  }

  getAllApplication() {
    this.applicationService
      .getApplication()
      .subscribe((data) => (this.applications = data));
  }

  deleteApplication(id: number) {
    this.applicationService.deleteApplication(id).subscribe();
    window.location.reload();
  }

  editApplication(id: number, application: any) {}
}
