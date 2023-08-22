import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidebar') sidebar: ElementRef;
  title = 'components';

  toggleClasse() {
    console.log('leo');
    try {
      const elemento = this.sidebar.nativeElement;
      console.log(elemento);

      // Verifica se a classe está presente no elemento
      if (elemento.classList.contains('active')) {
        // Se a classe estiver presente, remove-a
        elemento.classList.remove('active');
      } else {
        // Se a classe não estiver presente, adiciona-a
        elemento.classList.add('active');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
