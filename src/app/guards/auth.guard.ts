import { CanActivateFn , Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const routes : string[] = ['/dashboard'];
  return routes.includes(state.url) && localStorage.getItem('userToken') ? false : true ;
};
