
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef, TemplateRef } from '@angular/core';
import { LockerComponent } from 'src/app/locker/locker.component';

@Injectable({
  providedIn: 'root'
})
export class DomService {


  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  public addComponent(viewContainerRef: ViewContainerRef, tempRef: TemplateRef<any>) {

    const factory = this.factoryResolver.resolveComponentFactory(LockerComponent);
    const component: ComponentRef<LockerComponent> = factory.create(viewContainerRef.parentInjector);

    component.instance.unlockSubject.subscribe(unlock => {
      if (unlock) {
        viewContainerRef.clear();
        viewContainerRef.createEmbeddedView(tempRef);
      } else {
        viewContainerRef.insert(component.hostView, 0);
      }

    })

  }



}
