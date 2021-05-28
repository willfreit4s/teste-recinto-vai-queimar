import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/components/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      pageTitle: 'Bem Vindo!',
    };
  }

  ngOnInit(): void {
    
  }
}
