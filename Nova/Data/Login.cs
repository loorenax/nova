using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Nova.Data
{
    public class Login
    {
        private Cnxn cnxn = new Cnxn();
        public DataSet getAutencacion(string _Login, string _Password)
        {
            string password = Utils.EncryptarCadena(_Password);
            SqlCommand cmd = new SqlCommand("getAutenticacion", new SqlConnection(Cnxn.sCon));
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandTimeout = 99999;

            cmd.Parameters.Add("@login", SqlDbType.VarChar).Value = _Login;
            cmd.Parameters.Add("@password", SqlDbType.VarChar).Value = password;

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds;

        }
       
    }
}