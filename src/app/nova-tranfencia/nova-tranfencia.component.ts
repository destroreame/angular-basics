import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private service: TransferenciaService,
    private router: Router) { }

  public transferir() {
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(transferencia)
      .subscribe(resultado => {
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
        (error) => console.error(error)
      );
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
