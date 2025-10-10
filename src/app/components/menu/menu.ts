import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Auth } from '../../service/auth';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule,MatButtonModule, MatIconModule,MatMenuModule, MatSidenavModule,MatListModule ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

constructor(
    private authService:Auth
    //private toastr: ToastrService
  ) {}
nameUSer: any='dkflaskdlfj';
signOut() {

  this.authService.signOut();

}

getNome(){
  return this.authService.getNome();

}

}
