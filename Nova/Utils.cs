using Nova.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Nova
{
    public class Utils
    {
        public const string _OK_ = "OK";
        public const string _ERROR_ = "ERROR";
        public const string _RESTRICCION_ = "RESTRICCION";
        public const string _RESET_ = "RESET";
        public static object getValueToSP(object _Valor)
        {
            object resultado = DBNull.Value;
            if (_Valor == null)
            {
                // Regrese DBNUL.Value;
            }
            else if (!string.IsNullOrEmpty(_Valor.ToString()))
            {
                resultado = _Valor;
            }

            return resultado;
        }

        public static string EncryptarCadena(string inputString)
        {
            MemoryStream memStream = null;
            try
            {
                byte[] key = { };
                byte[] IV = { 12, 21, 43, 17, 57, 35, 67, 27 };
                //string encryptKey = "aXb2uy4z"; // MUST be 8 characters
                string encryptKey = "7k>3qt<9"; // MUST be 8 characters
                key = Encoding.UTF8.GetBytes(encryptKey);
                byte[] byteInput = Encoding.UTF8.GetBytes(inputString);
                DESCryptoServiceProvider provider = new DESCryptoServiceProvider();
                memStream = new MemoryStream();
                ICryptoTransform transform = provider.CreateEncryptor(key, IV);
                CryptoStream cryptoStream = new CryptoStream(memStream, transform, CryptoStreamMode.Write);
                cryptoStream.Write(byteInput, 0, byteInput.Length);
                cryptoStream.FlushFinalBlock();

            }
            catch (Exception ex)
            {
                problems(ex);
            }

            return Convert.ToBase64String(memStream.ToArray());
        }

        public static void cleanSession()
        {
            Sezzion.idUsuario = Sezzion.nombreCompleto = Sezzion.codigoSession = null;
            HttpContext.Current.Session.Clear();

        }

        public static string DesEncriptarCadena(string inputString)
        {
            MemoryStream memStream = null;
            try
            {
                byte[] key = { };
                byte[] IV = { 12, 21, 43, 17, 57, 35, 67, 27 };
                string encryptKey = "7k>3qt<9"; // MUST be 8 characters
                key = Encoding.UTF8.GetBytes(encryptKey);
                byte[] byteInput = new byte[inputString.Length];
                byteInput = Convert.FromBase64String(inputString);
                DESCryptoServiceProvider provider = new DESCryptoServiceProvider();
                memStream = new MemoryStream();
                ICryptoTransform transform = provider.CreateDecryptor(key, IV);
                CryptoStream cryptoStream = new CryptoStream(memStream, transform, CryptoStreamMode.Write);
                cryptoStream.Write(byteInput, 0, byteInput.Length);
                cryptoStream.FlushFinalBlock();
            }
            catch (Exception ex)
            {
                problems(ex);
            }

            Encoding encoding1 = Encoding.UTF8;
            return encoding1.GetString(memStream.ToArray());
        }

        public static Dictionary<string, object> DataSetToDictionaryArray(DataSet _Ds)
        {
            Dictionary<string, object> dy_resultado = new Dictionary<string, object>();

            int countTabla = 0;
            foreach (DataTable dt in _Ds.Tables)
            {
                List<Dictionary<string, object>> lst = new List<Dictionary<string, object>>();
                foreach (DataRow dr in dt.Rows)
                {
                    Dictionary<string, object> dyList = new Dictionary<string, object>();

                    foreach (DataColumn dc in dt.Columns)
                    {
                        dyList.Add(dc.ColumnName, dr[dc.ColumnName]);
                    }

                    lst.Add(dyList);
                }

                dy_resultado.Add(dt.TableName, lst);
                countTabla++;

            }


            return dy_resultado;
        }

        public static void problems(Exception _ex)
        {

            writeLogError(_ex, null);
        }
        public static void problems(string _mensaje)
        {
            writeLogError(null, _mensaje);
        }

        public static bool writeLogError(Exception _ex, string _msg)
        {
            bool Bol_Estatus = false;
            string Texto = string.IsNullOrEmpty(_msg) ? "" : _msg.Replace("_SALTO_", @"\n");

            System.Diagnostics.StackTrace stacktrace = new System.Diagnostics.StackTrace();
            string nombre_metodo = stacktrace.GetFrame(1).GetMethod().Name;
            if (stacktrace.GetFrames().Count() > 2)
            {
                nombre_metodo = stacktrace.GetFrame(2).GetMethod().Name;
            }

            string ruta = "";
            ruta = HttpContext.Current.Server.MapPath("~");

            string nombre_log = "Log_" + DateTime.Now.ToString("yyyyMMdd") + ".txt";
            string strFile = ruta + @"\Descargas\" + nombre_log;

            try
            {
                bool fileExists = File.Exists(strFile);

                using (StreamWriter writer = new StreamWriter(strFile, true))
                {
                    if (!fileExists)
                        File.Create(strFile);
                    writer.WriteLine(DateTime.Now.ToString("yyyyMMdd HH:mm:ss") + " " + nombre_metodo);
                    writer.WriteLine("  --> msg: " + Texto);

                    if (_ex != null)
                    {
                        writer.WriteLine("  --> source: " + (_ex != null ? _ex.Source.ToString() : "No indicado"));
                        writer.WriteLine("  --> stacktrace: " + (_ex != null ? _ex.StackTrace.ToString() : "No indicado"));
                    }
                }
            }
            catch (Exception exx)
            {
                string mes = exx.Message;
            }

            return Bol_Estatus;
        }
    }
}