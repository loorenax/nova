var PAGECONTROLS;

$(document).ready(function () {


    PAGECONTROLS = fg_setIFRAMEControls('js-login');
    $("#js-login-btn").click(function (event) {

        // Fetch form to apply custom Bootstrap validation
        var form = $("#js-login")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        else {
            getAutenticacion();
        }

        form.addClass('was-validated');
        
    });
});

function getAutenticacion() {
    try {

        var obj_filtros = Object();
        obj_filtros.login = PAGECONTROLS.controls.username.value;
        obj_filtros.password = PAGECONTROLS.controls.password.value;

        var ruta = '../Services/WSLogin.asmx/getAutenticacion';
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


                    location.href = _PAGINA_PRINCIPAL_;
                }
                else if (mensaje_servidor.Estatus == 'RESTRICCION') {

                    event.preventDefault();
                    PAGECONTROLS.controls.password.value = '';
                    var cntpadre = PAGECONTROLS.controls.password.parentElement;
                    cntpadre.getElementsByClassName('invalid-feedback')[0].innerHTML = mensaje_servidor.Mensaje;

                }
                else {
                    fg_mensaje_problema_tecnico(mensaje_servidor);
                }

            }
            , error: function (error) {
                fg_mensaje_problema_tecnico(error);
            }
        });
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }
}

