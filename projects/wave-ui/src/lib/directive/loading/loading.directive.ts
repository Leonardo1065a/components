import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[waveLoading]',
})
export class WaveLoadingDirective implements OnChanges {
  private view: EmbeddedViewRef<any> | null = null;
  private loadingElement: HTMLElement | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {}

  @Input() waveLoading: boolean = false;

  @Input() waveLoadingSize: 'lg' | 'md' | 'sm' = 'sm';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['waveLoading'] || changes['waveLoadingSize']) {
      this.updateView();
    }
  }
  updateView() {
    if (this.waveLoading) {
      if (this.view) this.viewContainer.clear();

      this.loadingElement = document.createElement('div');

      this.loadingElement.className = `loading ${this.waveLoadingSize}`;

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
