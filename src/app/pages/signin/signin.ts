import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
