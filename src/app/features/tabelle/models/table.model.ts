import { FormControl } from '@angular/forms';

export type AnagraficaForm = {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
};
