

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';



const checkAuthStatus=():boolean|Observable<boolean>=>{
  const authService:AuthService=inject(AuthService);
  const router:Router=inject(Router);

  return authService.checkAuthentication().pipe(
    tap(isAuthenticated=>console.log({'Authenticated':isAuthenticated})),
    tap((isAuthenticated)=>{
      if(isAuthenticated){
        router.navigate(['/'])
      }
    }),
    map(isAuthenticated=>!isAuthenticated)
  )
}
export const publicGuardMatch:CanMatchFn=(route:Route,segments:UrlSegment[])=>{
  return checkAuthStatus();
}
export const publicActivateGuard:CanActivateFn=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{

  return checkAuthStatus();
}
