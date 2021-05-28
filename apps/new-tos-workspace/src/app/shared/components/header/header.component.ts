import { AuthGuard } from './../../../guards/auth.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  isDrawerOpen: boolean = false;
  dataNavegation: any ;
  toolbarContent: any;
  addButtonOptions: any;

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.toolbarContent = {
      icon: 'menu',
      widget: 'dxButton',
      location: 'before',
      onClick: () => (this.isDrawerOpen = !this.isDrawerOpen),
    };
    this.addButtonOptions = {
      icon: 'chevronnext',
      onClick: () => this.authGuard.logout(),
    };
  }

  get title(): string {
    return this.headerService.headerData.pageTitle;
  }

  selectItem(e: any) {
    if (e.itemData.icon === undefined || e.itemData.path === '') {
      this.isDrawerOpen = false;
      this.router.navigate([e.itemData.path]);
    }
  }
}
