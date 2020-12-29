export default class Funcionamento {
  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = dataAgora.getDay();
    this.horarioAgora = dataAgora.getUTCHours() -3;
  }
  estaAberto(){
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto(){
    if(tthis.estaAberto()){
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init(){
    if(this.funcionamento){
      this.dadosAgora();
      this.dadosFuncionamento();
      this.ativaAberto();
    }
    return this
  }

  // if (semanaAberto && horarioAberto) {
  // }
}
