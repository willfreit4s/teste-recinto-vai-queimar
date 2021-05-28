import { AuthGuard } from './guards/auth.guard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'treinamento';
  hiddenMenu: boolean = false;

  constructor(private authGuard: AuthGuard) {}
  formData = {
    nome:"samuel",
    aisdjjia:"kasdjias"
  };
  
  ngOnInit() {
    this.authGuard.hiddenMenuEmitter.subscribe(
      (hidden) => (this.hiddenMenu = hidden)
    );
  }
}
