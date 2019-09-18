import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cake';
  navLinks: Array<{label: string, path: string}> = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact"},
    { label: "Gallery", path: "/gallery"}
  ];
}
