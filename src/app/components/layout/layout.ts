import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';
import { MenuLateral } from '../menu-lateral/menu-lateral';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Menu,MatSidenavModule,MatIconModule,MatMenuModule, MatSidenavModule,MatListModule ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
