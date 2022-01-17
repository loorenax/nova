var PAGECONTROLS;
var DtListaNominal;

document.addEventListener('DOMContentLoaded', function () {

    fg_format_label_required('form_Captura');
    PAGECONTROLS = fg_setIFRAMEControls('js-page-content');
    $('.select2').select2();

    $('#date_fechaNacimiento').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });
    $('#Cmb_Nombres').on('select2:select', function (e) {
        var data = e.params.data;
        var row = fg_GetRow(DtListaNominal, 'idListaNominal', data.id);
        PAGECONTROLS.controls.Txt_nombres.value = row.nombres;
        PAGECONTROLS.controls.Txt_primerApellido.value = row.primerApellido;
        PAGECONTROLS.controls.Txt_segundoApellido.value = row.segundoApellido;
        PAGECONTROLS.controls.Txt_calle.value = row.calle;
        PAGECONTROLS.controls.Txt_claveElector.value = row.claveElector;
    });


    PAGECONTROLS.controls.btn_Guardar.addEventListener('click', btn_Guardar_Click);
    PAGECONTROLS.controls.btn_Cancelar.addEventListener('click', btn_Cancelar_Click);
    
    getListaNominalSimple();
    cargarCatalogosIniciales();

})

function getListaNominalSimple() {
    try {

        var obj_filtros = Object();

        var ruta = '../Services/WSGestorias.asmx/getListaNominalSimple';
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

                if (mensaje_servidor.Estatus == _OK_) {
                    var ds = JSON.parse(mensaje_servidor.Str_Respuesta_1);

                    DtListaNominal = ds.listaNominal;
                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_Nombres, 'idListaNominal', 'nombreCompleto', ds.listaNominal, true);

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
function cargarCatalogosIniciales() {
    try {

        var obj_filtros = Object();

        var ruta = '../Services/WSGestorias.asmx/getCatalogosIniciales';
        var $data = JSON.stringify({ 'Parametros': JSON.stringify(obj_filtros) });

        $.ajax({
            type: 'POST',
            url: ruta,
            data: $data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            success: function (datos) {

                var mensaje_servidor = JSON.parse(datos.d);

                if (mensaje_servidor.Estatus == _OK_) {
                    var ds = JSON.parse(mensaje_servidor.Str_Respuesta_1);

                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_LNMunicipio, 'idMunicipio', 'nombreMunicipio', ds.municipios, true);
                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_municipio, 'idMunicipio', 'nombreMunicipio', ds.municipios, true);

                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_diputados, 'idDiputado', 'nombreDiputado', ds.diputados, true);
                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_estatus, 'idEstatus', 'nombreEstatus', ds.estatusGestorias, true);
                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_origen, 'idOrigen', 'nombreOrigen', ds.origenes, true);
                    
                    fg_cargar_combo_from_List(PAGECONTROLS.controls.Cmb_tipoGestoria, 'idTipoGestoria', 'nombreTipoGestoria', ds.tipoGestorias, true);
                                                                                
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

function btn_Guardar_Click() {
    try {

        var form = $("#form_Captura")
        if (fg_valida_captura_seccion(PAGECONTROLS.controls.form_Captura.id)) {

            var obj_datos = fg_Get_Object_Control_Valor(PAGECONTROLS.controls.form_Captura.id);
            obj_datos.sexo = (PAGECONTROLS.controls.Rdo_sexoFemenino.checked ? PAGECONTROLS.controls.Rdo_sexoFemenino.value : PAGECONTROLS.controls.Rdo_sexoMasculino.value);
            obj_datos.afinidad = (PAGECONTROLS.controls.Chk_afinidad.checked ? 'Afín' : 'No Afín');

            var ruta = '../Services/WSGestorias.asmx/setPersona';
            var $data = JSON.stringify({ 'Parametros': JSON.stringify(obj_datos) });

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
                    if (mensaje_servidor.Estatus == _OK_) {

                        var ds_result = JSON.parse(mensaje_servidor.Str_Respuesta_1);

                        var result = fg_evaluar_result(ds_result.result);

                        if (result) {
                            form.removeClass('was-validated');
                            //fg_alert_aviso_exitoso('Se guardo el registro exitosamente', 'form_Captura');
                            fg_limpiar_controles('form_Captura');
                            PAGECONTROLS.controls.Rdo_sexoFemenino.checked = true;
                            PAGECONTROLS.controls.Chk_afinidad.checked = true;
                        }


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
        form.addClass('was-validated');

        

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }
}
function btn_Cancelar_Click() {
    fg_limpiar_controles('form_Captura');
}