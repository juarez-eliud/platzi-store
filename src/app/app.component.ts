import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Implementación de Google Analytics
  constructor( private router: Router) {
    /* const navEndEvents$ = this.router.events
    .pipe(
      //Se filtran los eventos cuando se cambia de una página a otra
      filter(event => event instanceof NavigationEnd)
    );
    // Cada vez que haya un cambio de una página a otro se envía la 
    // información a Google Analytics, escucha un flujo de datos cada vez que
    // se termina la navegación
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-147051588-1', {
        //Se envía que ruta es la que está cambiando
        page_path: event.urlAfterRedirects
      });
    }); */
  }
}