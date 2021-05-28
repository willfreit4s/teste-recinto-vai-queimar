import { Component } from '@angular/core';
import { HeaderService } from '../../../shared/components/header/header.service';
import { veiculosMock } from './templates/teste';

@Component({
  selector: 'app-veiculos-em-operacao',
  templateUrl: './templates/veiculos-em-operacao.component.html',
  styleUrls: ['./templates/veiculos-em-operacao.component.scss']
})
export class VeiculosEmOperacaoComponent {
  veiEmOpeData = veiculosMock;
  collapsed: boolean = false;
  isPopupVisible: boolean = false;
  
  constructor(private headerService: HeaderService) {
    this.isPopupVisible = true;
    this.headerService.headerData = {
      pageTitle: 'Veículos em Operação!',
    };
  }
  
  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  heightPopup(){
    return window.innerHeight / 1.8;
  }

  widthPopup(){
    return window.innerWidth / 1.1;
  }
  
  formatCPF(cpf: any) {
    const _cpf = cpf.valueText.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    return _cpf;
  }

  formatCNPJ(cnpj: any) {
    const _cnpj = cnpj.valueText.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
    return _cnpj;
  }

  formatCPFCNPJ(cpfCnpj: any) {
    let CPFcnpj = cpfCnpj.valueText;
    let _cpfCnpj;
    if (CPFcnpj.length === 11) {
      return (_cpfCnpj = CPFcnpj.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      ));
    } else {
      return (_cpfCnpj = CPFcnpj.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
      ));
    }
  }
}

