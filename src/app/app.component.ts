import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'mail' },
    { title: 'Mensajes', url: '/folder/Mensajes', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Cuenta', url: '/folder/Cuenta', icon: 'cog' },
    { title: 'Nosotras', url: '/folder/Nosotras', icon: 'person' },
    { title: 'Ayuda', url: '/folder/Ayuda', icon: 'alert' },
    { title: 'Login', url: '/folder/login', icon: 'person' },
    { title: 'Registro', url: '/folder/registro', icon: 'person' },
  ];

}
