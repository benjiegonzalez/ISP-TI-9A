import * as mongoose from 'mongoose';

export const DepartamentoUsuarioSchema = new mongoose.Schema(
  {
    // name: { type: String, required: true },
    // flujo_proceso_id: { type: String, required: true },
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    departamento_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'departamentos',
    },
    //El ref no es el de la base de datos es del export const FLUJO_PROCESO = { name: 'flujoProcesos' };
  },
  { timestamps: true },
);
