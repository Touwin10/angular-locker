
import { Directive, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';
import { DomService } from 'src/app/services/dom-service/dom-service.service';

@Directive({
  selector: '[locker]'
})
export class LockerDirective implements OnInit {

  constructor(private tempRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private domSrv: DomService) {
  }

  ngOnInit(): void {
    this.domSrv.addComponent(this.viewContainer, this.tempRef);
  }


}
