import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, InjectDecorator, Injector } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { BodyInjectorService } from '../../services/body-injector.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    private bodyInjectorService: BodyInjectorService,
    componentFactoryResolver: ComponentFactoryResolver){
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    console.log('ModalService open called');

    const componentRef = this.createComponenteRef();

    componentRef.instance.config = config;

    this.bodyInjectorService.stackBeforeAppRoot(componentRef);

    return new ModalRef(componentRef);
  }

  private createComponenteRef(): ComponentRef<ModalComponent>{
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {

  constructor(private componenteRef: ComponentRef<ModalComponent>){}

  public close(): void {
    console.log('ModalService close called');
    this.componenteRef.destroy();
  }
}
