import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Colors, Font, StyleGuide } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public init(callback: Function, styleGuide: StyleGuide) {
    this.handleColors(styleGuide.colors);

    this.handleFont(styleGuide.font);

    setTimeout(() => {
      callback();
    }, 1000);
  }

  handleColors(colors: Colors) {
    ['theme', 'contrast'].forEach((type) => {
      Object.entries((colors as any)[type]).forEach(
        ([paletteKey, paletteValue]) => {
          this.document.documentElement.style.setProperty(
            `--color-${type}-${paletteKey}`,
            `${paletteValue}`
          );
        }
      );
    });
  }

  handleFont(font: Font) {
    document.body.style.setProperty(
      '--bs-body-font-family',
      `\'${font.name}\', sans-serif`
    );

    let link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('href', `${font.url}`);
    link.setAttribute('rel', 'stylesheet');
    this.document.head.appendChild(link);
  }
}
