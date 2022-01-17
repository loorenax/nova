var _LOCALE_ = 'es';
var _CERRAR_ = 'Cerrar';
var _CLASS_BTN_DEFAULT = 'btn-default';
var Resultado_Controles_X_Agrupador = [];
var _PROBLEMA_ = 'Problema';
var _RESTRICCION_ = 'RESTRICCION';
var _SOLUCION_ = 'Solución';
var _INDEFINIDO_ = 'undefined';
var _DEFAULT_OPCION_CMB_ = '<-SELECCIONE->';
var _DEFAULT_OPCION_CMB_TODOS_ = 'Todos';

var _CLASS_CHECKED_ = `icon icon-checkbox-checked`;
var _CLASS_UNCHECKED_ = `icon icon-checkbox-unchecked`;

var _OK_ = 'OK';
var _RESTRICCION_ = 'RESTRICCION';
var _ERROR_ = 'ERROR';
const moonLanding = new Date('July 20, 69 00:20:18');
var _ANIO_ACTUAL_ = moonLanding.getFullYear();

var formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    // the default value for minimumFractionDigits depends on the currency
    // and is usually already 2
});

//var _PAGINA_PRINCIPAL_ = '../dist/blak.html';
var _PAGINA_PRINCIPAL_ = '../dist/Nova.aspx';
var _PAGINA_LOGIN_ = '../dist/page_login.html';

function fg_mensaje_problema_tecnico(e) {

    bootbox.dialog({
        message: 'Existe un problema ténico, por favor espere e intente nuevamente o avise a soporte.',
        title: '<span style="color:white;">' + 'Problema técnico' + '</span>',
        locale: _LOCALE_,
        closeButton: true,
        onEscape: true,
        buttons: [{
            label: _CERRAR_,
            className: _CLASS_BTN_DEFAULT,
            callback: function () { }
        }]
    }).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-negro');//esta linea es para que el encabezado sea negro    


    var name_funcion = 'FN NO ESPECIFICADA: ';
    if (arguments.callee != undefined) {
        if (arguments.callee.caller != undefined) {
            if (arguments.callee.caller.name != undefined) {
                name_funcion = arguments.callee.caller.name + ': ';
            }
        }
    }


    console.log(`funcion: ${name_funcion}`);
    if (e != null) {
        console.log(`Error: ${e.message}`);
        console.log(`Trace: ${e}`);
    }

}

/**
 * Metodo que muestra mensaje de pregunta; muestra la pregunta y espera se le indica que funcion ejecutar cuando la respuesta sea verdadera
 * @param {any} _mensaje_aviso Indique el mensaje a mostrar, la pregunta ¿Esta seguro de continuar? ya este incluida en el metodo
 * @param {any} _nombre_funcion_ejecutar Indique el nombre de la funcion a ejecutar en caso de que el Login acepte 
 */
function fg_mensaje_pregunta(_mensaje_aviso, _nombre_funcion_ejecutar_true, _nombre_funcion_ejecutar_false) {
    bootbox.confirm({
        title: '<span style="color:white;">' + "Pregunta" + '</span>',
        message: '<div class="row">'
            + '<div class="col-md-2"><i class="fal fa-question-circle mensaje-pregunta" style="font-size:40px;"></i>' + '</div>'
            + '<div class="col-md-10"><label class="etiqueta-mensajes" style="font-size:18px;">' + _mensaje_aviso + '</label>'
            + '<br><label class="etiqueta-mensajes" style="font-size:18px;" >' + '¿Esta seguro de continuar?' + '</label>'
            + '</div>'
            + '</div>',

        buttons: {

            confirm: {
                label: '<i class="fal fa-check"></i> SI',
                className: _CLASS_BTN_SUCCESS
            },
            cancel: {
                label: '<i class="fal fa-times"></i> NO',
                className: _CLASS_BTN_DANGER
            }
        },
        callback: function (result) {
            if (result == true) {
                var fn = window[_nombre_funcion_ejecutar_true];
                if (typeof fn === 'function') {
                    fn();
                }
            }
            else {
                var fn = window[_nombre_funcion_ejecutar_false];
                if (typeof fn === 'function') {
                    fn();
                }

            }
        }
    }).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-danger').find('.modal-title').addClass('float-left');//esta linea es para que el encabezado sea negro   

    //}).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-danger').find('.modal-title').addClass('float-left');//esta linea es para que el encabezado sea negro   

}

function fg_mensaje_pregunta_especial(_mensaje_aviso, _pregunta_especial, _nombre_funcion_ejecutar_true, _nombre_funcion_ejecutar_false) {
    bootbox.confirm({
        title: '<span style="color:white;">' + "Pregunta" + '</span>',
        message: '<div class="row">'
            + '<div class="col-md-2"><i class="fal fa-question-circle mensaje-pregunta" style="font-size:40px;"></i>' + '</div>'
            + '<div class="col-md-10"><label class="etiqueta-mensajes" style="font-size:18px;">' + _mensaje_aviso + '</label>'
            + '<div class="col-md-10"><label class="etiqueta-mensajes font-weight-bold" style="font-size:14px;">' + _pregunta_especial + '</label>'
            //+ '<br><label class="etiqueta-mensajes" style="font-size:18px;" >' + '¿Esta seguro de continuar?' + '</label>'
            + '</div>'
            + '</div>',

        buttons: {

            confirm: {
                label: '<i class="fal fa-check"></i> SI',
                className: _CLASS_BTN_SUCCESS
            },
            cancel: {
                label: '<i class="fal fa-times"></i> NO',
                className: _CLASS_BTN_DANGER
            }
        },
        callback: function (result) {
            if (result == true) {
                var fn = window[_nombre_funcion_ejecutar_true];
                if (typeof fn === 'function') {
                    fn();
                }
            }
            else {
                var fn = window[_nombre_funcion_ejecutar_false];
                if (typeof fn === 'function') {
                    fn();
                }

            }
        }
    }).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-danger').find('.modal-title').addClass('float-left');//esta linea es para que el encabezado sea negro   

    //}).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-danger').find('.modal-title').addClass('float-left');//esta linea es para que el encabezado sea negro   

}


/**
 * Metodo que muestra un mensaje de tipo alert para indicar problemtaticas que debera de resolver el Login
 * @param {any} _Modulo_Configuracion Indique un modulo o titulo
 * @param {any} _Problema Descrba el problema
 * @param {any} _Restriccion Indique la restrción, no continuar o se cerrra la ventana por ejemplo.
 * @param {any} _Solucion Indique la solución para corregir el problema
 */
function fg_mensaje_aviso_restriccion(_Modulo_Configuracion, _Problema, _Restriccion, _Solucion) {
    bootbox.dialog({
        message: '<div class="row">'
            + '<div class="col-md-1"><i class="fal fa-exclamation-triangle mensaje-restriccion" style="font-size:32px;"></i>' + '</div>'
            + '<div class="col-md-11"><label class="etiqueta-mensajes"><strong>' + _PROBLEMA_ + "</strong>" + '</label>: &nbsp;&nbsp;' + _Problema
            + '<br><label class="etiqueta-mensajes"><strong>' + 'Restricción' + "</strong>" + '</label>: &nbsp;&nbsp;' + _Restriccion
            + '<br><label class="etiqueta-mensajes"><strong>' + _SOLUCION_ + "</strong>" + '</label>: &nbsp;&nbsp;' + _Solucion
            + '</div>'
            + '</div>',
        title: '<span style="color:white;">' + _Modulo_Configuracion + '</span>',
        locale: _LOCALE_,
        closeButton: true,
        buttons: [{
            label: _CERRAR_,
            className: _CLASS_BTN_DEFAULT,
            callback: function () { }
        }]
    }).find('.modal-header').removeClass('modal-header').addClass('modal-header-aviso-restriccion');//esta linea es para que el encabezado sea negro

    //}).css({ 'display': 'flex' }).find('.modal-header').removeClass('modal-header').addClass('modal-header-aviso-restriccion');//esta linea es para que el encabezado sea negro
}



/** Metodo para obtener un listado de los controles contenidos en un agrupador o div agrupador
 * @param {any} _HTMLCollention Indique la colección de elemento HTML
 */
function fg_controles_x_agrupador(_HTMLCollention) {
    //Iteramos cada elemento
    for (var i = 0; i < _HTMLCollention.length; i++) {
        var sigue = _HTMLCollention[i].tagName;

        //Verificamos si el elmento tiene un ID; se considerara que todos los elementos que tengan ID podran accesarse para obtener sus propiedades o generr un evento
        if (_HTMLCollention[i].id != undefined) {
            //Agregamos el control a array auxiliar
            Resultado_Controles_X_Agrupador.push(_HTMLCollention[i]);
        }
        //Verificamos si el elemento tiene mas elementos para tambien integrarlos en la lista
        if (_HTMLCollention[i].children != undefined) {

            //Si tiene mas elementos se invoca nuevamente a la funcion para recorlectar los controles
            fg_controles_x_agrupador(_HTMLCollention[i].children);
        }

    }
}

/**
 * Metodo para obtener un objeto con la lista de los controles que contiene el agrupador indicado
 * la lista ya contiene como tal los controles por lo que puede accesarse directamente a sus propiedades
 * @param {any} _Agrupador Indique el ID del control agrupador
 */
function fg_obtener_controles_agrupador(_Agrupador) {
    //Creamos el objeto que recibira la lista de los controles
    arreglo_Controles = new Object();

    //Es un arreglo auxiliar en el que almacenaremos transitivamente los controles
    Resultado_Controles_X_Agrupador = []; //Libero la variable
    var control_agrupador = document.getElementById(_Agrupador);
    if (control_agrupador != undefined) {

        //Obtenemos una lista de elementos del agrupador
        var Elementos_Agrupados = document.getElementById(_Agrupador).children;
        //Se va al metodo que realiza todo el proceso para ir recolectando los controles
        fg_controles_x_agrupador(Elementos_Agrupados);

        //El resultado de la recolección la pasamos al objecto para poder accesar los contoles en un estilo de clase
        for (var i = 0; i < Resultado_Controles_X_Agrupador.length; i++) {
            var control = Resultado_Controles_X_Agrupador[i];
            arreglo_Controles[control.id] = control;
        }

    }
    else {
        fg_mensaje_problema_tecnico(null);
    }

    Resultado_Controles_X_Agrupador = []; //Libero la variable

    return arreglo_Controles;
}

function fg_setIFRAMEControls(_Agrupador) {
    try {

        var CONTROLES = new Object();
        CONTROLES.controls = fg_obtener_controles_agrupador(_Agrupador);
        CONTROLES.this = document.getElementById(_Agrupador);

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return CONTROLES;
}

function fg_isEmptyOrNull(str) {
    return (!str || 0 === str.length);
}
function fg_valida_captura_seccion(_Agrupador) {

    var resultado = true;
    var _output = new Object();
    _output.Estatus = true;
    _output.Mensaje = '';
    $('.span-error').remove(); //Limpiar los span
    if (_Agrupador !== _INDEFINIDO_) {
        var controles_Agrupador = fg_obtener_controles_agrupador(_Agrupador);
        $.each(controles_Agrupador, function (key, value) {
            if (!fg_isEmptyOrNull(value.id)) {

                var selector = '#' + value.id;
                var selector_id = value.id;

                if ($(selector)[0] != undefined) {

                    if ($(selector)[0].required && value.hidden == false) {

                        if (fg_isEmptyOrNull($(selector)[0].value.toString().trim())) {

                            if ($(selector)[0].id.indexOf('Search_') > -1) {
                                selector = '#' + $(selector)[0].id.replace('Search_', 'Btn_');
                            }

                            var mostrado_en_el_parent = false;
                            var elemento = document.getElementById(selector_id);
                            if (elemento != null) {
                                if (elemento.parentElement.className.indexOf('input-group') != -1
                                    || elemento.parentElement.className.indexOf('main-input-container') != -1
                                ) {

                                    $(elemento.parentElement).after('<span  class="span-error">Dato obligatorio</span>');
                                    mostrado_en_el_parent = true;
                                }
                            }

                            if (!mostrado_en_el_parent) {
                                $(selector).after('<span  class="span-error">Dato obligatorio</span>');
                            }

                            if ($(selector)[0].disabled == true) {
                                $(selector)[0].disabled = false;
                            }
                            resultado = false;
                        }
                    }
                }
            }
        });
    }
    else {
        fg_mensaje_problema_tecnico(null);
    }

    return resultado;
}

function fg_cargar_combo_from_List(_cmb, _value, _descripcion, _dt, _con_seleccione) {
    try {

        var obj = _dt;

        ///Inicialimos las opciones
        var options = '';

        if (_con_seleccione) { //Si se indica que debe tener el elemento "Seleccione" se agrega la opción
            var options = '<option value="">' + _DEFAULT_OPCION_CMB_ + '</option>';
        }

        $(_cmb).empty();
        $(_cmb).append(options);

        $.each(obj, function (key, value) {
            var value_ID = value[_value];

            if (!fg_isEmptyOrNull(value_ID)) {
                if (value_ID.indexOf != undefined) {
                    if (value_ID.indexOf(' ') != -1) {
                        value_ID = value[_value].split(' ').join('_');
                    }
                }
                ///construimos la lista de opciones
                $(_cmb).append('<option value=' + value_ID + '>' + value[_descripcion] + '</option>');
            }



        });

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);

    }

}
function fg_switch_buttons_listado(_strBtnGpo, _btnClick) {

    var tool = new Object();
    tool.controls = fg_obtener_controles_agrupador(_strBtnGpo);

    //Primero reseteamos la clase a todos los buttons del grupo; se esperan todos apliquen el mismo criterio de cambio de listado
    $.each(tool.controls, function (key, value) {
        if (value.tagName == 'BUTTON') {
            console.log(value.classList.value);
            value.classList = 'btn bg-segundo-plano btn-block';
        }
    })

    _btnClick.classList = 'btn bg-primer-plano  btn-block';
}

function fg_validarEmail(valor) {
    var esValido = false;
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
        esValido = true;
    } else {
        esValido = false;
    }

    return esValido;
}

function fg_ChekClik(_btn) {

    if (_btn.innerHTML.indexOf(_CLASS_CHECKED_) != -1) {


        _btn.innerHTML = _btn.innerHTML.split(_CLASS_CHECKED_).join(_CLASS_UNCHECKED_);
    } else {

        _btn.innerHTML = _btn.innerHTML.split(_CLASS_UNCHECKED_).join(_CLASS_CHECKED_);
    }

}
function fg_isChecked_BtnChk(_BtnChk) {

    var ischeked = true;
    try {

        ischeked = (_BtnChk.innerHTML.indexOf(_CLASS_CHECKED_) != -1);

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return ischeked;
}

function fg_resultOK(_result) {

    var resultadoOK = false;

    try {

        if (_result != null) {
            if (_result.length > 0) {

                if (_result[0].Estatus_Procedimiento == _OK_) {
                    resultadoOK = true;
                }
                else if (_result[0].Estatus_Procedimiento == _RESTRICCION_) {
                    fg_mensaje_aviso_restriccion('Restricción'
                        , _result[0].Mensaje_Procedimiento
                        , 'No puede continuar.'
                        , _result[0].Solucion_Procedimiento
                    );
                }
                else {
                    console.log(`Error: ${_result[0].Mensaje_Procedimiento}`);
                    fg_mensaje_problema_tecnico(null);
                }

            }
            else {
                console.log(`Error: Al parecer fue el servicio ya que el resul no trae elementos.`);
                fg_mensaje_problema_tecnico(null);
            }

        }
        else {

            console.log(`Error: Al parecer fue el servicio ya que el resul llego nulo.`);
            fg_mensaje_problema_tecnico(null);
        }

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return resultadoOK;
}
function fg_evaluar_result(_Dt_Result, _Mostrar_Aviso_Exitoso) {

    var continuar = true;

    try {

        if (_Dt_Result[0].Estatus_Procedimiento == _OK_) {
            if (_Mostrar_Aviso_Exitoso) {
                fg_alert_aviso_exitoso(_Dt_Result[0].Mensaje_Procedimiento);
            }

        }
        else if (_Dt_Result[0].Estatus_Procedimiento == _RESTRICCION_) {
            continuar = false;
            fg_mensaje_aviso_restriccion('Proceso', _Dt_Result[0].Mensaje_Procedimiento, 'No puede continuar.', _Dt_Result[0].Solucion_Procedimiento);
        }
        else {
            continuar = false;
            fg_mensaje_problema_tecnico_db();
        }

    }
    catch (e) {
        continuar = false;
        fg_mensaje_problema_tecnico(e);
    }

    return continuar;
}

function fg_validarRFC(_rfc) {
    var valido = false;
    try {
        var strCorrecta;
        strCorrecta = _rfc;
        if (_rfc.length == 12) {
            var valid = '^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
        } else {
            var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
        }
        var validRfc = new RegExp(valid);
        var matchArray = strCorrecta.match(validRfc);
        if (matchArray == null) {
            valido = false;
        }
        else {
            valido = true;
        }
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return valido;
}

function fg_mostrar_error(_Control, _Msg_Error) {

    try {
        $(_Control).after(`<span  class="span-error">${_Msg_Error}</span>`);

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }
}


function fg_format_label_required(_Agrupador) {
    var obj_datos = new Object();

    try {

        var page_controls = fg_obtener_controles_agrupador(_Agrupador);

        $.each(page_controls, function (key, value) {

            var control = value;
            var divagrupados = control.parentElement;

            if (divagrupados.className.indexOf('form-group') != -1) {
                var lbls = divagrupados.getElementsByClassName('form-label');
                if (lbls.length > 0) {
                    var lbl = lbls[0];
                    if (lbl != null) {
                        var etiqueta = lbl.innerHTML.split('*').join(''); //nos aseguramos que este limpia

                        if (control.required) {
                            lbl.innerHTML = '*' + etiqueta;
                        }
                        
                    }

                }
            }
        })
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

}

function fg_Get_Object_Control_Valor(_Agrupador, _Sufijo) {
    var obj_datos = new Object();

    try {

        var page_controls = fg_obtener_controles_agrupador(_Agrupador);

        $.each(page_controls, function (key, value) {

            var control = value;
            if (!fg_isEmptyOrNull(control.id)) {

                if (control.id.indexOf('Txt_') != -1
                    || control.id.indexOf('Cmb_') != -1
                    || control.id.indexOf('ChkFalso_') != -1
                    || control.id.indexOf('BtnChk_') != -1
                    || control.id.indexOf('date_') != -1
                    || control.id.indexOf('Rdo_') != -1
                    || control.id.indexOf('Chk_') != -1
                ) {

                    var valor_entrada;

                    //En este proceso limpiamos el prefijo que indentifica el tipo de control
                    var nombre_campo = (control.id.split('Txt_').join(''));
                    nombre_campo = nombre_campo.split('Cmb_').join('');
                    nombre_campo = nombre_campo.split('ChkFalso_').join('');
                    nombre_campo = nombre_campo.split('BtnChk_').join('');
                    nombre_campo = nombre_campo.split('date_').join('');
                    nombre_campo = nombre_campo.split('Rdo_').join('');
                    nombre_campo = nombre_campo.split('Chk_').join('');


                    //Le quitamos el sufijo
                    //Ejemplo: Existen dos secciones de Filtro una dice Txt_Busqueda_Clave_Historico; Sufijo _Historico y otro dice Txt_Busqueda_Clave_Catalogo_Final Sufijo _Catalogo_Final
                    // Pero el parametro que realmente esta esperando el sp es Busqueda_Clave
                    if (!fg_isEmptyOrNull(_Sufijo)) {
                        nombre_campo = nombre_campo.split('_' + _Sufijo).join('');
                    }

                    //nombre_campo = 'P_' + nombre_campo;
                    //Filtramos para determinar de que manera tomaremos el valor
                    //Los BtnChk_ son botones que simulan ser un Check Box y que nos daran un valor de SI o NO
                    if (control.id.indexOf('BtnChk_') != -1) {
                        valor_entrada = fg_getValue_BtnChk(control);
                    }
                    else {
                        valor_entrada = control.value;
                    }


                    //Alimentamos el objeto con un Key con el nombre del Campo que obtuvimos de limpiar el id del contro y el value, Valor que tiene seleccionado o marcado el control
                    obj_datos[nombre_campo] = valor_entrada;

                }

            }
        })
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return obj_datos;
}

function fg_alert_aviso_exitoso(_Mensaje, _Agrupador) {
    //$.alert('<i class="fal fa-check" style="color:#4CAF50; font-size:24px"></i>&nbsp;&nbsp;<strong style="color:#4CAF50; font-size:18px">' + _Mensaje + '</strong>', { type: 'success' });


    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-success' + ' alert-dismissible" role="alert">' + _Mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    var agrupador = document.getElementById(_Agrupador);

    agrupador.append(wrapper);

}
function fg_alert_aviso_advertencia(_Mensaje) {
    $.alert('<i class="glyphicon glyphicon-alert" style="color:#8a6d3b; font-size:24px"></i>&nbsp;&nbsp;<strong style="color:#8a6d3b; font-size:18px">' + _Mensaje + '</strong>', { type: 'warning' });
}
function fg_limpiar_controles(_Agrupador) {

    var resultado = true;
    var _output = new Object();
    _output.Estatus = true;
    _output.Mensaje = '';
    $('.span-error').remove(); //Limpiar los span
    if (_Agrupador !== _INDEFINIDO_) {
        var controles_Agrupador = fg_obtener_controles_agrupador(_Agrupador);
        $.each(controles_Agrupador, function (key, value) {

            if (!fg_isEmptyOrNull(value.id)) {
                var selector = '#' + value.id;
                if ($(selector)[0] != undefined) {

                    if ($(selector)[0].tagName.toLowerCase() == 'select') {
                        $(selector)[0].selectedIndex = 0;
                    }
                    else {
                        if ($(selector)[0].type != 'radio') {
                            $(selector)[0].value = '';
                        }
                        
                    }
                }
            }

        });
    }
    else {
        fg_mensaje_problema_tecnico(null);
    }

    return resultado;
}

function fg_get_template_BtnSel(_Prefijo_Btn, _Nombre_Evento, _ID) {

    var tag_template = ``;

    try {

        tag_template = `<button id="${_Prefijo_Btn}_${_ID.toString()}" type="button" class="btn btn-block bg-transparent btn-select-row" onclick="${_Nombre_Evento}(${_ID});"><i class="fal fa-check-circle"></i></button>`;
    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return tag_template;
}
function fg_GetRow(_Dt, _Campo, _Valor) {

    var resultado;
    try {

        $.each(_Dt, function (key, value) {
            if (value[_Campo] == _Valor) {
                resultado = value;
                return false;
            }
        })

    }
    catch (e) {
        fg_mensaje_problema_tecnico(e);
    }

    return resultado;
}