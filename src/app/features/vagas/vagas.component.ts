import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { borderColorAnimation } from 'src/app/shared/animations/border-color.animation';

@Component({
  selector: 'est-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
  animations: [borderColorAnimation]
})
export class VagasComponent implements OnInit {

  vagas: any[] = [
    { setor: 'A', qtd_vagas: [{ situacao: { codigo: 1 }, desc:'a1'}, { situacao: { codigo: 1 }, desc:'a2'}, { situacao: { codigo: 1 }, desc:'a3'}, { situacao: { codigo: 1 }, desc:'a4'}, { situacao: { codigo: 1 }, desc:'a6'}, { situacao: { codigo: 1 }, desc:'a7'}, { situacao: { codigo: 1 }, desc:'a8'}, { situacao: { codigo: 1 }, desc:'a9'}], setor_page: 1 },
    { setor: 'B', qtd_vagas: [{ situacao: { codigo: 1 }, desc: 'b1'}, { situacao: { codigo: 1 }, desc: 'b2'}, { situacao: { codigo: 1 }, desc: 'b3'}, { situacao: { codigo: 1 }, desc: 'b4'}, { situacao: { codigo: 1 }, desc: 'b6'}, { situacao: { codigo: 1 }, desc: 'b7'}, { situacao: { codigo: 1 }, desc: 'b8'}, { situacao: { codigo: 1 }, desc: 'b9'}, { situacao: { codigo: 1 }, desc: 'b10'}], setor_page: 1 },
    { setor: 'C', qtd_vagas: [{ situacao: { codigo: 1 }, desc: 'c1'}, { situacao: { codigo: 1 }, desc: 'c2'}, { situacao: { codigo: 1 }, desc: 'c3'}, { situacao: { codigo: 1 }, desc: 'c4'}, { situacao: { codigo: 1 }, desc: 'c6'}, { situacao: { codigo: 1 }, desc: 'c7'}, { situacao: { codigo: 1 }, desc: 'c8'}, { situacao: { codigo: 1 }, desc: 'c9'}, { situacao: { codigo: 1 }, desc: 'c10'}, { situacao: { codigo: 1 }, desc: 'c11'}], setor_page: 1 },
    { setor: 'D', qtd_vagas: [{ situacao: { codigo: 1 }, desc: 'd1'}, { situacao: { codigo: 1 }, desc: 'd2'}, { situacao: { codigo: 1 }, desc: 'd3'}, { situacao: { codigo: 1 }, desc: 'd4'}, { situacao: { codigo: 1 }, desc: 'd6'}, { situacao: { codigo: 1 }, desc: 'd7'}, { situacao: { codigo: 1 }, desc: 'd8'}, { situacao: { codigo: 1 }, desc: 'd9'}, { situacao: { codigo: 1 }, desc: 'd10'}, { situacao: { codigo: 1 }, desc: 'd11'}, { situacao: { codigo: 1 }, desc: 'd12'}, { situacao: { codigo: 1 }, desc: 'd13'}, { situacao: { codigo: 1 }, desc: 'd14'}, { situacao: { codigo: 1 }, desc: 'd15'}, { situacao: { codigo: 1 }, desc: 'd16'}, { situacao: { codigo: 1 }, desc: 'd17'}, { situacao: { codigo: 1 }, desc: 'd18'}, { situacao: { codigo: 1 }, desc: 'd19'}], setor_page: 1 },
    { setor: 'E', qtd_vagas: [{ situacao: { codigo: 1 }, desc: 'e1'}, { situacao: { codigo: 1 }, desc: 'e2'}, { situacao: { codigo: 1 }, desc: 'e3'}, { situacao: { codigo: 1 }, desc: 'e4'}, { situacao: { codigo: 1 }, desc: 'e6'}, { situacao: { codigo: 1 }, desc: 'e7'}, { situacao: { codigo: 1 }, desc: 'e8'}, { situacao: { codigo: 1 }, desc: 'e9'}, { situacao: { codigo: 1 }, desc: 'e10'}, { situacao: { codigo: 1 }, desc: 'e11'}, { situacao: { codigo: 1 }, desc: 'e12'}, { situacao: { codigo: 1 }, desc: 'e13'}], setor_page: 1 }
  ];
  perPage: number;
  left = true;

  constructor() { }

  ngOnInit() {
    this.setNumberOfPage();
  }

  @HostListener('window:resize') onResize() {
    this.setNumberOfPage();
    this.vagas.forEach(v => {
      v.setor_page = 1;
      v.qtd_vagas.forEach(vaga => vaga.ocupar = false);
    });
  }

  nextPage(setor) {
    setor.setor_page++;
    this.left = true;
  }

  previousPage(setor) {
    setor.setor_page--;
    this.left = false;
  }

  exibirCadastro(vaga) {
    vaga.ocupar = !vaga.ocupar;
  }

  private setNumberOfPage() {
    const width = window.innerWidth;
    if (width <= 600) {
      this.perPage = 1;
    } else if (width <= 1090) {
      this.perPage = 2;
    } else if (width <= 1475) {
      this.perPage = 3;
    } else if (width <= 1800) {
      this.perPage = 4;
    } else {
      this.perPage = 5;
    }
    this.setMaxPages();
  }

  private setMaxPages() {
    
    this.vagas.forEach(v => v.max_pages = Math.ceil(v.qtd_vagas.length / this.perPage));
  }

}
