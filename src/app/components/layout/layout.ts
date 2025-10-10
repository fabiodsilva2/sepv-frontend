import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';
import { MenuLateral } from '../menu-lateral/menu-lateral';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Menu,MenuLateral,MatSidenavModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
