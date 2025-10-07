import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Menu],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
