import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/tranferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {

  //@Input() transferencias: Array<any> = [];
  transferencias: any[];

  constructor(private service: TransferenciaService) {
    this.transferencias = [];
  }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
