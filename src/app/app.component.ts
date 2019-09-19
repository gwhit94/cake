import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cake';

  navLinks: Array<{ icon: string, label: string, path: string}> = [
    { icon: "photo", label: `Gallery`, path: "/gallery"},
    { icon: "account_box", label: `About`, path: "/about" },
    { icon: "email", label: `Contact`, path: "/contact"}
  ];
}
