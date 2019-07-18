import { Directive, TemplateRef, ApplicationRef, ViewContainerRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[portal]',
})
export class PortalDirective implements OnDestroy {
  portalOutlet: ViewContainerRef;
  constructor(private content: TemplateRef<any>, private readonly app: ApplicationRef) {}

  ngAfterViewInit() {
    const [ appComponent ] = this.app.components;
    this.portalOutlet = appComponent.instance.topbarOutlet;
    this.portalOutlet.createEmbeddedView(this.content);
  }

  ngOnDestroy(): void {
    if(this.portalOutlet) {
      this.portalOutlet.clear();
    }
  }
}
