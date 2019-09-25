import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'est-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas: any = [
    { setor: 'A', qtd_vagas: [{ desc:'a1'}, { desc:'a2'}, { desc:'a3'}, { desc:'a4'}, { desc:'a6'}, { desc:'a7'}, { desc:'a8'}, { desc:'a9'}], setor_page: 1 },
    { setor: 'B', qtd_vagas: [{ desc: 'b1'}, { desc: 'b2'}, { desc: 'b3'}, { desc: 'b4'}, { desc: 'b6'}, { desc: 'b7'}, { desc: 'b8'}, { desc: 'b9'}, { desc: 'b10'}], setor_page: 1 },
    { setor: 'C', qtd_vagas: [{ desc: 'c1'}, { desc: 'c2'}, { desc: 'c3'}, { desc: 'c4'}, { desc: 'c6'}, { desc: 'c7'}, { desc: 'c8'}, { desc: 'c9'}, { desc: 'c10'}, { desc: 'c11'}], setor_page: 1 },
    { setor: 'D', qtd_vagas: [{ desc: 'd1'}, { desc: 'd2'}, { desc: 'd3'}, { desc: 'd4'}, { desc: 'd6'}, { desc: 'd7'}, { desc: 'd8'}, { desc: 'd9'}, { desc: 'd10'}, { desc: 'd11'}, { desc: 'd12'}, { desc: 'd13'}, { desc: 'd14'}, { desc: 'd15'}, { desc: 'd16'}, { desc: 'd17'}, { desc: 'd18'}, { desc: 'd19'}], setor_page: 1 },
    { setor: 'E', qtd_vagas: [{ desc: 'e1'}, { desc: 'e2'}, { desc: 'e3'}, { desc: 'e4'}, { desc: 'e6'}, { desc: 'e7'}, { desc: 'e8'}, { desc: 'e9'}, { desc: 'e10'}, { desc: 'e11'}, { desc: 'e12'}, { desc: 'e13'}], setor_page: 1 }
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
