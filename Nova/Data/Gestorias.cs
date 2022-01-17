using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Nova.Data
{
    public class Gestorias
    {
        private Cnxn cnxn = new Cnxn();

        public DataSet getTemplate(Dictionary<string, object> _DyParametros)
        {
            DataSet ds = null;
            string spname = "Pacientes_Get_Listado";
            Dictionary<string, object> dyparametros = cnxn.SetFormatDyDatos(_DyParametros, spname);
            SqlParameter[] sqlparameters = cnxn.getSQLParameters(dyparametros);

            ds = SqlHelper.ExecuteDataset(Cnxn.sCon, spname, sqlparameters);

            ds.Tables[0].TableName = "Dt_Result";
            if (ds.Tables.Count > 1)
            {
                ds.Tables[1].TableName = "Dt_Pacientes";
            }

            return ds;
        }
        public DataSet getCatalogosIniciales(Dictionary<string, object> _DyParametros)
        {
            DataSet ds = null;
            string spname = "gestoriasGetCatalogosIniciales";
            Dictionary<string, object> dyparametros = cnxn.SetFormatDyDatos(_DyParametros, spname);
            SqlParameter[] sqlparameters = cnxn.getSQLParameters(dyparametros);

            ds = SqlHelper.ExecuteDataset(Cnxn.sCon, spname, sqlparameters);

            ds.Tables[0].TableName = "municipios";
            ds.Tables[1].TableName = "diputados";
            ds.Tables[2].TableName = "estatusGestorias";
            ds.Tables[3].TableName = "origenes";
            ds.Tables[4].TableName = "tipoGestorias";

            return ds;
        }
        public DataSet getBusquedaListaNominal(Dictionary<string, object> _DyParametros)
        {
            DataSet ds = null;
            string spname = "stdGetlistaNominal";
            Dictionary<string, object> dyparametros = cnxn.SetFormatDyDatos(_DyParametros, spname);
            SqlParameter[] sqlparameters = cnxn.getSQLParameters(dyparametros);

            ds = SqlHelper.ExecuteDataset(Cnxn.sCon, spname, sqlparameters);

            ds.Tables[0].TableName = "listaNominal";

            return ds;
        }
        public DataSet setPersona(Dictionary<string, object> _DyParametros)
        {
            DataSet ds = null;
            string spname = "setPersona";
            Dictionary<string, object> dyparametros = cnxn.SetFormatDyDatos(_DyParametros, spname);
            SqlParameter[] sqlparameters = cnxn.getSQLParameters(dyparametros);

            ds = SqlHelper.ExecuteDataset(Cnxn.sCon, spname, sqlparameters);

            ds.Tables[0].TableName = "result";

            return ds;
        }
        public DataSet gestoriasGetListGestorias(Dictionary<string, object> _DyParametros)
        {
            DataSet ds = null;
            string spname = "gestoriasGetListGestorias";
            Dictionary<string, object> dyparametros = cnxn.SetFormatDyDatos(_DyParametros, spname);
            SqlParameter[] sqlparameters = cnxn.getSQLParameters(dyparametros);

            ds = SqlHelper.ExecuteDataset(Cnxn.sCon, spname, sqlparameters);

            ds.Tables[0].TableName = "personas";

            return ds;
        }

    }
}