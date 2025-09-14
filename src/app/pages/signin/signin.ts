import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule

    ],

  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  signinForm: FormGroup;
  isloading = false;
  isSubmit = true;



  constructor(private fb: FormBuilder) {

    this.signinForm = this.fb.group({
      login: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required]],
    });

  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form enviado:', this.signinForm.value);
    }
  }

}
