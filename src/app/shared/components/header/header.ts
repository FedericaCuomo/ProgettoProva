import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgxSirioEvent,
  SirioSelectComponent,
  SirioSelectPanelComponent,
  SirioSelectOptionComponent,
} from 'ngx-sirio-lib-20';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { languageOption } from './configs/select-option.configs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    SirioSelectComponent,
    RouterLink,
    SirioSelectPanelComponent,
    SirioSelectOptionComponent,
    TranslatePipe,
  ],
})
export class Header {
  private translate = inject(TranslateService);
  currentLanguage = signal<string>('it');
  readonly isItalian = computed(() => this.currentLanguage() === 'it');
  readonly languageOption = languageOption;

  constructor() {
    this.translate.use(this.currentLanguage());
  }

  onSelectedLanguage(event: NgxSirioEvent<SirioSelectOptionComponent>) {
    const selectedLang = event.component.value();
    if (selectedLang) {
      this.currentLanguage.set(selectedLang);
      this.translate.use(selectedLang);
    }
  }
}
