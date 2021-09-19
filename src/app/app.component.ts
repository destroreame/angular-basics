import { Component } from '@angular/core';
import { Transferencia } from 'src/app/models/tranferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-basics';

  constructor(private service: TransferenciaService) {}
}
