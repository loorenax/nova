var MASTERCONTROLS;
$(document).ready(function () {
    MASTERCONTROLS = fg_setIFRAMEControls('bodyMasterPage');
    getSession();
});

function getSession() {
    try {

        var obj_filtros = new Object();

        var ruta = '../Services/WSLogin.asmx/getSession';
        var $data = JSON.stringify({ 'Parametros': JSON.stringify(obj_filtros) });

        $.ajax({
            type: 'POST',
            url: ruta,
            data: $data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            cache: false,
            success: function (datos) {

                var mensaje_servidor = JSON.parse(datos.d);
                console.log(mensaje_servidor);

                if (mensaje_servidor.Estatus == _OK_) {

                    MASTERCONTROLS.controls.Info_nombreCompleto.innerHTML = mensaje_servidor.nombreCompleto;
                    MASTERCONTROLS.controls.infoDDM_nombreCompleto.innerHTML = mensaje_servidor.nombreCompleto;
                    MASTERCONTROLS.controls.toolTipDDM_login.innerHTML = mensaje_servidor.login;

                    anclaAvatar.title = mensaje_servidor.nombreCompleto;
                    imgDDMFotoAvatar.alt = mensaje_servidor.nombreCompleto;

                }
                else if (mensaje_servidor.Estatus == 'RESTRICCION') {

                    location.href = _PAGINA_LOGIN_;

                }
                else {
                    location.href = _PAGINA_LOGIN_;
                }

            }
            , error: function (error) {
                fg_mensaje_problema_tecnico(error);
                location.href = _PAGINA_LOGIN_;
            }
        });
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
        location.href = _PAGINA_LOGIN_;
    }
}