import pool from "@/database/db";

export const GetAll = async () => {
  const query = ` SELECT  Id, Chave, Descricao, QtdMensal, Acessos, DtLimite 
                  FROM    tb_JusCopier`;
  try {
    await pool.connect();
    const result = await pool.request().query(query);
    return result.recordset.length > 0 ? result.recordset : [];
  } catch (error) {
    return { error: error.message };
  }
};

export const GetItem = async (id) => {
  const query = ` SELECT  Id, Chave, Descricao, QtdMensal, Acessos, DtLimite 
                  FROM    tb_JusCopier
                  WHERE   Id = '${id}'`;
  try {
    await pool.connect();
    const result = await pool.request().query(query);
    return result.recordset.length > 0 ? result.recordset[0] : {};
  } catch (error) {
    return { error: error.message };
  }
};