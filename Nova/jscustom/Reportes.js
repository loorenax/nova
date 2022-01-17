var PAGECONTROLS;
var DtListado;


document.addEventListener('DOMContentLoaded', function () {

    PAGECONTROLS = fg_setIFRAMEControls('js-page-content');
    getListGestorias();

})

function getListGestorias() {
    try {

        var obj_filtros = Object();

        var ruta = '../Services/WSGestorias.asmx/getListGestorias';
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

                    loadGridCatalogo(ds.personas);
                    Btn_Seleccionar_Registro_Click(ds.personas[0].idPersona);
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
function loadGridCatalogo(_Dt) {
    try {
        var columnas = [], datas = [];
        Control_Grid_Activo = '#Grid_Listado';

        $(Control_Grid_Activo).bootstrapTable('destroy');

        columnas.push({
            field: 'idPersona', title: '', visible: true, sortable: true, width: '30', clickToSelect: false
            , formatter: function (value, row, key) {
                var indexRow = key;

                var template_button = fg_get_template_BtnSel('Btn_Sel', 'Btn_Seleccionar_Registro_Click', row.idPersona);

                return template_button;
            }
        });
        columnas.push({
            field: 'nombreCompleto', title: 'Nombre', visible: true, sortable: true, width: '200', clickToSelect: false, align: 'left'
        });
        columnas.push({
            field: 'claveElector', title: 'Clave de elector', visible: true, sortable: true, width: '150', clickToSelect: false, align: 'left'
        });
        columnas.push({
            field: 'calle', title: 'Calle', visible: true, sortable: true, width: '150', clickToSelect: false, align: 'left'
        });
        columnas.push({
            field: 'numExterior', title: 'No.Ext.', visible: true, sortable: true, width: '100', clickToSelect: false, align: 'right'
        });
        columnas.push({
            field: 'numInterior', title: 'No.Int.', visible: true, sortable: true, width: '100', clickToSelect: false, align: 'right'
        });
        columnas.push({
            field: 'nombreDiputado', title: 'Diputado', visible: true, sortable: true, width: '200', clickToSelect: false, align: 'left'
        });

        columnas.push({
            field: 'distritoFederal', title: 'DF', visible: true, sortable: true, width: '100', clickToSelect: false, align: 'right'
        });
        columnas.push({
            field: 'distritoLocal', title: 'DL', visible: true, sortable: true, width: '100', clickToSelect: false, align: 'right'
        });
        columnas.push({
            field: 'seccion', title: 'Sección', visible: true, sortable: true, width: '100', clickToSelect: false, align: 'right'
        });
        columnas.push({
            field: 'nombreOrigen', title: 'Origen', visible: true, sortable: true, width: '200', clickToSelect: false, align: 'right'
        });



        $(Control_Grid_Activo).bootstrapTable({
            height: 400,
            cache: false,
            striped: true,
            pagination: false,
            smartDysplay: true,
            search: true,
            //advancedSearch: true,
            searchOnEnterKey: false, //El método será ejecutado hasta que la tecla Enter sea presionada.
            showColumns: false,
            showFooter: true,

            minimunCountColumns: 2,
            clickToSelect: true,
            fixedColumns: true,
            columns: columnas
                ? columnas
                : [{ field: _Campos_ID, title: '', width: 0, align: 'center', valign: 'bottom', sortable: true, visible: true }]
        });

        //Crearmos el grid con las columnas

        if (_Dt !== null) {
            DtListado = _Dt;
            $(Control_Grid_Activo).bootstrapTable('load', _Dt);
        }

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

}
function Btn_Seleccionar_Registro_Click(_ID) {
    try {

        var row = fg_GetRow(DtListado, 'idPersona', _ID);

        PAGECONTROLS.controls.ficha_urlFoto.src = row.urlFoto;
        PAGECONTROLS.controls.ficha_nombreDiputado.innerHTML = row.nombreDiputado;

        PAGECONTROLS.controls.ficha_partido.innerHTML = row.partido;
        PAGECONTROLS.controls.ficha_distritoLocal.innerHTML = row.distritoLocal;
        PAGECONTROLS.controls.ficha_conteoGestoria.innerHTML = row.gestiones;
        PAGECONTROLS.controls.ficha_conteoResueltas.innerHTML = row.resueltas;
        PAGECONTROLS.controls.ficha_conteoPendientes.innerHTML = row.pendientes;
        PAGECONTROLS.controls.ficha_conteoCuantificacion.innerHTML = row.cuantificaciones;
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }
}
