import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Injectable()
export class MenuResolve implements Resolve<Menu> {

  constructor(
    private menuService: MenuService,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.menuService.show(route.params['menuNo']);
  }
}
