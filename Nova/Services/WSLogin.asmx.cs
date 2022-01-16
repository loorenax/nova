using LitJson;
using Nova.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

namespace Nova.Services
{
    /// <summary>
    /// Summary description for WSLogin
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WSLogin : System.Web.Services.WebService
    {
        Login dat = new Login();
        
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getAutenticacion(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, string> obj_parametros = deserializar_json.Deserialize<Dictionary<string, string>>(Parametros);
                DataSet ds = dat.getAutencacion(obj_parametros["login"].ToString(), obj_parametros["password"].ToString());

                if (ds.Tables.Count > 1)
                {

                    string codigo = Guid.NewGuid().ToString();

                    Sezzion.idUsuario = ds.Tables[1].Rows[0]["idUsuario"].ToString();
                    Sezzion.login = ds.Tables[1].Rows[0]["login"].ToString();
                    Sezzion.nombreCompleto = ds.Tables[1].Rows[0]["nombreCompleto"].ToString();

                    ms.Estatus = Utils._OK_;
                }
                else
                {
                    ms.Estatus = ds.Tables[0].Rows[0]["Estatus_Procedimiento"].ToString();
                    ms.Mensaje = ds.Tables[0].Rows[0]["Mensaje_Procedimiento"].ToString();
                }
            }
            catch (Exception Ex)
            {
                ms.Estatus = Utils._ERROR_;
                ms.Mensaje = Ex.Message;
                Utils.problems(Ex);
            }
            finally
            {
                Json_Resultado = JsonMapper.ToJson(ms);
            }


            return Json_Resultado;


        }
    }
}
