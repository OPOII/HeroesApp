
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';


export const canMatchGuard:CanMatchFn=(route:Route,segments:UrlSegment[])=>{
  console.log('Can match');
  console.log({route,segments})
  return false;
}
export const canActivateGuard:CanActivateFn=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{

  console.log('Can match');
  console.log({route,state})
  return false;
}
