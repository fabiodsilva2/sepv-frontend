import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-lateral',
  imports: [MatIconModule,MatMenuModule, MatSidenavModule,MatListModule],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css'
})
export class MenuLateral {

}
