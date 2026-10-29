import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgxSirioEvent,
  SirioSelectComponent,
  SirioSelectPanelComponent,
  SirioSelectOptionComponent,
} from 'ngx-sirio-lib-20';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

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
  constructor() {
    this.translate.use('en');
  }

  onSelectedLanguage(event: NgxSirioEvent<SirioSelectOptionComponent>) {
    const selectedLang = event.component.value();
    if (selectedLang) {
      this.translate.use(selectedLang);
    }
  }
}
