import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,


    ],

  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  signinForm: FormGroup;
  isloading = false;
  isSubmit = true;



  constructor(
    private fb: FormBuilder,
    private auth:Auth,
    private router:Router

  ) {

    this.signinForm = this.fb.group({
      login: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required]],
    });

  }

  onSubmit() {
    if (this.signinForm.valid) {

      console.log('Form enviado:', this.signinForm.value);

    }

    this.isloading = true;

    const username = `${this.signinForm.value.login.toLowerCase()}`;

    this.auth.signIn(username, this.signinForm.value.password).subscribe({

      next: (data) => {
        console.log(data);


        if (data){
          console.log('Foi data');
          this.router.navigate(['home']);
        }


        this.isloading = false;

      },
      error: (err) => {

        if (err.status == 401) {
          console.log('Usuário ou senha incorretos. Tente novamente.');
          //this.toastr.error('Usuário ou senha incorretos. Tente novamente.');
        }
        this.isloading = false;
      },

    });
  }

}
