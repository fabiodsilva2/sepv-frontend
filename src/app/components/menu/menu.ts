import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule,MatButtonModule, MatIconModule,MatMenuModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
nameUSer: any='Fábio Damasceno Silva';
signOut() {
throw new Error('Method not implemented.');
}

}
