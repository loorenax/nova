using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nova.Data
{
    public class Sezzion
    {
        private static String S_idUsuario = "idUsuario";
        private static String S_login = "login";
        private static String S_nombreCompleto = "nombreCompleto";
        public static String idUsuario
        {
            get
            {
                if (HttpContext.Current.Session[Sezzion.S_idUsuario] == null)
                    return String.Empty;
                else
                    return HttpContext.Current.Session[Sezzion.S_idUsuario].ToString();
            }
            set
            {
                HttpContext.Current.Session[Sezzion.S_idUsuario] = value;
            }
        }
        public static String login
        {
            get
            {
                if (HttpContext.Current.Session[Sezzion.S_login] == null)
                    return String.Empty;
                else
                    return HttpContext.Current.Session[Sezzion.S_login].ToString();
            }
            set
            {
                HttpContext.Current.Session[Sezzion.S_login] = value;
            }
        }
        public static String nombreCompleto
        {
            get
            {
                if (HttpContext.Current.Session[Sezzion.S_nombreCompleto] == null)
                    return String.Empty;
                else
                    return HttpContext.Current.Session[Sezzion.S_nombreCompleto].ToString();
            }
            set
            {
                HttpContext.Current.Session[Sezzion.S_nombreCompleto] = value;
            }
        }

    }
}