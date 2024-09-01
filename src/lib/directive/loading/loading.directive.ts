import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[waveLoading]',
})
export class WaveLoadingDirective {
  /// WORKS - DISPLAY NONE ////

  // @Input() waveLoading: boolean = false;

  // constructor(private el: ElementRef) {}

  // ngOnChanges(): void {
  //   this.toggleVisibility();
  // }

  // private toggleVisibility() {
  //   this.el.nativeElement.style.display = this.waveLoading ? 'none' : 'block';
  // }

  // WORKS - REMOVE ELEMENT FROM DOM //////

  // private hasView = false;

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef
  // ) {}

  // @Input() set waveLoading(condition: boolean) {
  //   if (!condition && !this.hasView) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     this.hasView = true;
  //   } else if (condition && this.hasView) {
  //     this.viewContainer.clear();
  //     this.hasView = false;
  //   }
  // }

  // WORKS - REMOVE ELEMNT FROM DOM AND ADD A NEW ELEMENT

  // private view: EmbeddedViewRef<any> | null = null;
  // private loadingElement: HTMLElement | null = null;

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef,
  //   private elementRef: ElementRef
  // ) {}

  // @Input() set waveLoading(condition: boolean) {
  //   if (condition) {
  //     if (this.view) {
  //       this.viewContainer.clear();

  //       this.loadingElement = document.createElement('div');
  //       this.loadingElement.className = 'text-loading';

  //       this.elementRef.nativeElement.parentNode.insertBefore(
  //         this.loadingElement,
  //         this.elementRef.nativeElement.nextSibling
  //       );
  //     }
  //   } else {
  //     if (this.loadingElement && this.loadingElement.parentNode) {
  //       this.loadingElement.parentNode.removeChild(this.loadingElement);
  //       this.loadingElement = null;
  //     }

  //     this.viewContainer.clear();
  //     this.view = this.viewContainer.createEmbeddedView(this.templateRef);
  //   }
  // }

  //

  // // NOW, I NEED A LOADING INITIAL ///
  // private view: EmbeddedViewRef<any> | null = null;
  // private loadingElement: HTMLElement | null = null;

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef,
  //   private elementRef: ElementRef
  // ) {}

  // @Input() set waveLoading(condition: boolean) {
  //   if (condition) {
  //     if (this.view) this.viewContainer.clear();

  //     this.loadingElement = document.createElement('div');
  //     this.loadingElement.className = 'text-loading';

  //     this.elementRef.nativeElement.parentNode.insertBefore(
  //       this.loadingElement,
  //       this.elementRef.nativeElement.nextSibling
  //     );
  //   } else {
  //     if (this.loadingElement && this.loadingElement.parentNode) {
  //       this.loadingElement.parentNode.removeChild(this.loadingElement);
  //       this.loadingElement = null;
  //     }

  //     this.viewContainer.clear();
  //     this.view = this.viewContainer.createEmbeddedView(this.templateRef);
  //   }
  // }

  // NOW, I WANNA USE SUBSCRIBE ///
  private view: EmbeddedViewRef<any> | null = null;
  private loadingElement: HTMLElement | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {}

  @Input() set waveLoading(condition: boolean) {
    if (condition) {
      if (this.view) this.viewContainer.clear();

      this.loadingElement = document.createElement('div');
      this.loadingElement.className = 'text-loading';

      this.elementRef.nativeElement.parentNode.insertBefore(
        this.loadingElement,
        this.elementRef.nativeElement.nextSibling
      );
    } else {
      if (this.loadingElement && this.loadingElement.parentNode) {
        this.loadingElement.parentNode.removeChild(this.loadingElement);
        this.loadingElement = null;
      }

      this.viewContainer.clear();
      this.view = this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
