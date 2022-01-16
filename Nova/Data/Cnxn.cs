﻿using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Nova.Data
{
    public class Cnxn
    {
        public static string sCon = "";
        public SqlConnection conn = new SqlConnection();

        public string IPAddress;
        public string DataBase;
        public string Login;
        public string Password;

        public Cnxn()
        {
            //IPAddress = ConfigurationManager.AppSettings["Server"].ToString();
            //DataBase = ConfigurationManager.AppSettings["DataBase"].ToString();
            //Login = ConfigurationManager.AppSettings["Login"].ToString();
            //Password = ConfigurationManager.AppSettings["Password"].ToString();

            sCon = ConfigurationManager.ConnectionStrings["Gestor"].ToString();
            //this.conn = new SqlConnection(string.Format("Data Source={0}; Initial Catalog={1}; User ID={2};Password={3}", this.IPAddress, this.DataBase, this.Login, this.Password));
        }

        public Dictionary<string, object> SetFormatDyDatos(Dictionary<string, object> _DyDatos, string spname)
        {

            //Obtienes todos los parametros que utiliza el sp
            DataSet ds_parametros = SqlHelper.ExecuteDataset(sCon, "sys_GetParametroSP", new SqlParameter("P_SP", (object)Utils.getValueToSP(spname)));
            ds_parametros.Tables[0].TableName = "dtParameterSP";

            //Se crea un diccionario limpio para que sea en el orden en que estan los parametros del sp
            Dictionary<string, object> dyParametros = new Dictionary<string, object>();

            foreach (DataRow dr in ds_parametros.Tables["dtParameterSP"].Rows)
            {

                //La lectura trae la @, por ello se quita
                string nombreparametro = dr["NombreParametro"].ToString().Replace("@", "");
                string nombreparametroalterno = nombreparametro;

                if (nombreparametro.StartsWith("P_"))
                {
                    //Esto se hizo por que si hago el replace directo truena con algunas, por ejemplo P_CURP_; quita la primer p y la segunda y entonces ya no se encuentra el campo
                    string solo_para_limpiar = "XYZ_" + nombreparametro;
                    nombreparametroalterno = solo_para_limpiar.Replace("XYZ_P_", "");
                }



                //Se va agregando el parametro el nuevo diccionario
                dyParametros.Add(nombreparametro, DBNull.Value);

                //En esta parte lo que se hace es verificar si el parametro viene del diccionario _DyDatos
                //Si viene del parametro que esta enviando el usuaro entonces el valor se toma de _DyDatos
                //Se hacen revisiones especiales que se pueden tomar de la sesion como el nombre del usuario y el id
                //Si no esta simplemente se dejara el valor de nulo
                if (_DyDatos.ContainsKey(nombreparametro))
                {
                    dyParametros[nombreparametro] = _DyDatos[nombreparametro];
                }
                else if (_DyDatos.ContainsKey(nombreparametroalterno))
                {
                    dyParametros[nombreparametro] = _DyDatos[nombreparametroalterno];
                }
                else if (nombreparametro == "idUsuarioConexion")
                {
                    dyParametros[nombreparametro] = Sezzion.idUsuario;
                }
 

            }


            return dyParametros;

        }
        public SqlParameter[] getSQLParameters(Dictionary<string, object> _DyDatos)
        {
            SqlParameter[] sqlParameters = new SqlParameter[_DyDatos.Count];

            int irow = 0;
            foreach (KeyValuePair<string, object> entry in _DyDatos)
            {
                sqlParameters[irow] = new SqlParameter(entry.Key, (object)Utils.getValueToSP(entry.Value));
                irow++;
            }

            return sqlParameters;

        }


    }
}