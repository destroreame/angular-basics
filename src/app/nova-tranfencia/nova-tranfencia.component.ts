import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/tranferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-tranfencia',
  templateUrl: './nova-tranfencia.component.html',
  styleUrls: ['./nova-tranfencia.component.scss']
})
export class NovaTranfenciaComponent {

  public valor!: number;
  public destino!: number;

constructor(private service: TransferenciaService) {}

  public tranferir() {
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(transferencia);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
