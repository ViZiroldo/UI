export class Team {
  constructor(
    public id?: number,
    public nome?: string,
    public ativo?: number,
    public dataCadastro?: string,
    public dataAlteracao?: string,
    public userId?: string
  ) {}
}
