import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private calculatorService: ServicoService) { }

  ngOnInit() {
    this.calculatorService.reset();
  }

}