import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  )
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.hasUser()
    .pipe(
      /* Para debuggear un observable se puede utilizar el operador tap,
      el cual genera una intersepción entre un flujo de datos pero no
      realiza alguna mutación */
      tap(user => console.log(user)),
      map(user => user === null ? this.router.parseUrl('/') : true)
    );
  }
  
}
