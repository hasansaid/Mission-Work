import { ApplicationService } from '../../services/application.service';
import { Application } from './../models/application';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css'],
})
export class ApplicationEditComponent implements OnInit {
  editForm: FormGroup;
  application: Application;
  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getByIdApplication();
  }

  createEditForm() {
    this.editForm = this.formBuilder.group({
      fullname: [this.application.fullname, Validators.required],
      email: [this.application.email, Validators.required],
      phone: [this.application.phone, Validators.required],
    });
  }

  getApplication(id: number) {
    this.applicationService.getApplicationById(id).subscribe((data) => {
      this.application = data;
      this.createEditForm();
    });
  }

  getByIdApplication() {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplication(params['id']);
    });
  }

  editApplication() {
    this.applicationService
      .editApplication(
        this.activatedRoute.snapshot.params['id'],
        this.editForm.value
      )
      .subscribe();
  }
}
