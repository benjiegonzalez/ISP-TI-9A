export interface IDepartamentoUsuario extends Document {
  usuario_id: IUser;
  departamento_id: IDepartamento;
}

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IDepartamento extends Document {
  name: string;
}
