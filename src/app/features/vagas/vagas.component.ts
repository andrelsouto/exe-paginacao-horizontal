import { Component, OnInit } from '@angular/core';

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
  perPage = 5;
  left = true;

  constructor() { }

  ngOnInit() {
    this.vagas.forEach(v => v.max_pages = Math.ceil(v.qtd_vagas.length / this.perPage));
  }

  addPage(setor) {
    setor.setor_page++;
    this.left = true;
  }

  backPage(setor) {
    setor.setor_page--;
    this.left = false;
  }

}
