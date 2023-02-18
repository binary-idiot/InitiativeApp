import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navItems: MenuItem[]
  ngOnInit(): void {
    this.navItems = [{
      label: 'Tracker',
      icon: 'pi pi-list',
      routerLink: '/tracker'
    },
    {
      label: 'Config',
      icon: 'pi pi-cog',
      routerLink: '/config'
    }];
  }

}
