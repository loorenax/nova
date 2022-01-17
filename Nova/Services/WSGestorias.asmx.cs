using LitJson;
using Newtonsoft.Json;
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
    /// Summary description for WSGestorias
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WSGestorias : System.Web.Services.WebService
    {
        Gestorias dat = new Gestorias();

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getCatalogosIniciales(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                DataSet ds = dat.getCatalogosIniciales(obj_parametros);

                ms.Str_Respuesta_1 = JsonConvert.SerializeObject(ds);
                ms.Estatus = Utils._OK_;
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

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getBusquedaListaNominal(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                DataSet ds = dat.getBusquedaListaNominal(obj_parametros);

                ms.Str_Respuesta_1 = JsonConvert.SerializeObject(ds);
                ms.Estatus = Utils._OK_;
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

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getListaNominalSimple(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                DataSet ds = dat.getListaNominalSimple(obj_parametros);

                ms.Str_Respuesta_1 = JsonConvert.SerializeObject(ds);
                ms.Estatus = Utils._OK_;
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

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string setPersona(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                DataSet ds = dat.setPersona(obj_parametros);

                ms.Str_Respuesta_1 = JsonConvert.SerializeObject(ds);
                ms.Estatus = Utils._OK_;
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


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getListGestorias(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                DataSet ds = dat.gestoriasGetListGestorias(obj_parametros);

                ms.Str_Respuesta_1 = JsonConvert.SerializeObject(ds);
                ms.Estatus = Utils._OK_;
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

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string verificarWhatsApp(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();
            string respuesta = "NO";

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);
                
                if(obj_parametros["celular"].ToString().Length >= 10)
                {
                    Random rand = new Random();
                    int valor = rand.Next(1, 10);
                    respuesta = (valor < 5 ? "SI" : "NO");
                }

                ms.Str_Respuesta_1 = respuesta;
                ms.Estatus = Utils._OK_;
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

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string verificarFaceBook(string Parametros)
        {
            string Json_Resultado = string.Empty;
            MensajeServidor ms = new MensajeServidor();

            try
            {
                JavaScriptSerializer deserializar_json = new JavaScriptSerializer();
                Dictionary<string, object> obj_parametros = deserializar_json.Deserialize<Dictionary<string, object>>(Parametros);

                Random rand = new Random();
                int valor = rand.Next(1, 10);

                //De momento solo simulo la respuesta
                string respuesta = (valor < 5 ? "SI" : "NO");
                ms.Str_Respuesta_1 = respuesta;

                ms.Estatus = Utils._OK_;
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
