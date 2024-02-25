export interface Font {
  url: string;
  name: string;
}

export interface ColorsName {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  main: string;
  highlight: string;
}

interface BaseColors {
  theme: ColorsName;
  contrast: ColorsName;
}

export interface Colors extends BaseColors {
  lightTheme?: BaseColors;
  darkTheme?: BaseColors;
}

export interface StyleGuide {
  colors: Colors;
  font: Font;
}
