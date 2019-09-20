import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'est-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas: any = [
    { setor: 'A', qtd_vagas: ['a1', 'a2', 'a3', 'a4', 'a6', 'a7', 'a8', 'a9'], setor_page: 1 },
    { setor: 'B', qtd_vagas: ['b1', 'b2', 'b3', 'b4', 'b6', 'b7', 'b8', 'b9', 'b10'], setor_page: 1 },
    { setor: 'C', qtd_vagas: ['c1', 'c2', 'c3', 'c4', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11'], setor_page: 1 },
    { setor: 'D', qtd_vagas: ['d1', 'd2', 'd3', 'd4', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16', 'd17', 'd18', 'd19'], setor_page: 1 },
    { setor: 'E', qtd_vagas: ['e1', 'e2', 'e3', 'e4', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12', 'e13'], setor_page: 1 }
  ];
  perPage: number;
  left = true;

  constructor() { }

  ngOnInit() {
    this.setNumberOfPage();
  }

  @HostListener('window:resize') onResize() {
    this.setNumberOfPage();
    this.vagas.forEach(v => v.setor_page = 1);
  }

  nextPage(setor) {
    setor.setor_page++;
    this.left = true;
  }

  previousPage(setor) {
    setor.setor_page--;
    this.left = false;
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
