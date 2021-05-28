import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-popup',
  // templateUrl: './popup.component.html',
  template: `
  <dx-popup [visible]="true">
    <ng-template #template></ng-template>
  </dx-popup>
  `,
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @ViewChild('template', { static: true, read: ViewContainerRef }) template!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const COMPONENT = this.cfr.resolveComponentFactory(FormComponent);
    this.template.createComponent(COMPONENT);
  }
}
