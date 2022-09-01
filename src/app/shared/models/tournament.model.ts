export class Tournament {
  constructor(
    public id?: number,
    public nomeTorneio?: string,
    public ativo?: boolean,
    public premiacao?: number,
    public totalParticipantes?: number,
    public dataInicio?: Date,
    public dataFim?: Date,
    public dataCadastro?: string,
    public dataAlteracao?: string,
    public userId?: string,
    public totalGrupo?: number
  ) {}
}
