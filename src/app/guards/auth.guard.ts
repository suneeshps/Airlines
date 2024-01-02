import { CanActivateFn , Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';
import * as constants from '../../assets/json/constants.json';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const routes : string[] = ['/dashboard'];
  if(localStorage.getItem(constants['USER_TOKEN'])){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
