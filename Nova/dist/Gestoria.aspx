<%@ Page Title="" Language="C#" MasterPageFile="~/dist/MasterPage.Master" AutoEventWireup="true" CodeBehind="Gestoria.aspx.cs" Inherits="Nova.dist.Gestoria" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .panel-content .form-group {
            margin-bottom: 10px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-wrapper">
        <div class="page-inner">
            <div class="page-content-wrapper">

                <main id="js-page-content" role="main" class="page-content">
                    <%-- BEGIN subheader --%>
                    <div class="subheader">
                        <h1 class="subheader-title">
                            <i class='subheader-icon fal fa-edit'></i>Captura de Gestoría
                                <small>Registro de datos generales y de su credencial de elector por personal de gestoría.</small>
                        </h1>
                    </div>
                    <%-- END subheader --%>

                    <%-- Panel de busqueda de personas en la lista nominal --%>
                    <div id="pnlBusquedaListaNominal" class="panel">
                        <div class="panel-hdr">
                            <h2>Búsqueda previa en lista nominal.<span class="fw-300 mr-3"><i></i></span></h2>
                            <div class="panel-toolbar">
                                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                            </div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <form id="form_Busqueda">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_LNMunicipio">Municipio</label>
                                                <select class="form-control" required id="Cmb_LNMunicipio"></select>
                                                <div class="invalid-feedback">Debe seleccionar un estado.</div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_LNnombreCompleto">Nombre Completo</label>
                                                <%--<input type="text" class="form-control" id="Txt_LNnombreCompleto" required>--%>
                                                <select class="select2 form-control w-100" id="Cmb_Nombres"></select>
                                                <div class="invalid-feedback">
                                                    Escriba el nombre de la persona que quiere buscar en la lista nominal.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <form id="form_Captura">

                        <%-- Sección de captura Datos Generales --%>
                        <div id="pnlDatosGenerales" class="panel">
                            <div class="panel-hdr">
                                <h2>Datos generales<span class="fw-300 mr-3"><i></i></span></h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_nombres">Nombre</label>
                                                <input type="text" class="form-control" id="Txt_nombres" required>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_primerApellido">Apellido Paterno</label>
                                                <input type="text" class="form-control" id="Txt_primerApellido" required>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_segundoApellido">Apellido Materno</label>
                                                <input type="text" class="form-control" id="Txt_segundoApellido">
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <label class="form-label">Sexo</label>
                                            <div class="frame-wrap">
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" class="custom-control-input" id="Rdo_sexoFemenino" name="radioSexo" value="Femenino" checked>
                                                    <label class="custom-control-label" for="Rdo_sexoFemenino">Femenino</label>
                                                </div>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" class="custom-control-input" id="Rdo_sexoMasculino" name="radioSexo" value="Masculino">
                                                    <label class="custom-control-label" for="Rdo_sexoMasculino">Masculino</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="date_fechaNacimiento">Fecha de Nacimiento</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" id="date_fechaNacimiento" required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text fs-xl">
                                                            <i class="far fa-calendar-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_curp">CURP</label>
                                                <input type="text" class="form-control" id="Txt_curp" required>
                                                
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_celular">Celular</label>
                                                <input type="text" class="form-control" id="Txt_celular" required>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_telefono">Télefono</label>
                                                <input type="text" class="form-control" id="Txt_telefono" required>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_correoElectronico">Correo Electrónico</label>
                                                <input type="email" class="form-control" id="Txt_correoElectronico" required>
                                                
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <%-- Dirección --%>
                        <div id="pnlDireccion" class="panel">
                            <div class="panel-hdr">
                                <h2>Dirección<span class="fw-300 mr-3"><i></i></span></h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_calle">Calle</label>
                                                <input type="text" class="form-control" id="Txt_calle">
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_numExt">Num.Ext.</label>
                                                <input type="text" class="form-control" id="Txt_numExt">
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_numInterior">Num.Interior</label>
                                                <input type="text" class="form-control" id="Txt_numInterior">
                                                
                                            </div>
                                        </div>


                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_colonia">Colonia</label>
                                                <input type="text" class="form-control" id="Txt_colonia">
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_municipio">Municipio</label>
                                                <select class="form-control" id="Cmb_municipio"></select>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_codigoPostal">Código Postal</label>
                                                <input type="text" class="form-control" id="Txt_codigoPostal">
                                                
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <%-- Datos Electorales --%>
                        <div id="pnlDatosElectorales" class="panel">
                            <div class="panel-hdr">
                                <h2>Datos electorales<span class="fw-300 mr-3"><i></i></span></h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_claveElector">Clave de Elector</label>
                                                <input type="text" class="form-control" id="Txt_claveElector" required>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_distritoFederal">Distrito Federal</label>
                                                <input type="text" class="form-control" id="Txt_distritoFederal">
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_distritoLocal">Distrito Local</label>
                                                <input type="text" class="form-control" id="Txt_distritoLocal">
                                                
                                            </div>
                                        </div>


                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_seccion">Sección</label>
                                                <input type="text" class="form-control" id="Txt_seccion">
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <%-- Gestoría --%>
                        <div id="pnlDatosGestoria" class="panel">
                            <div class="panel-hdr">
                                <h2>Datos electorales<span class="fw-300 mr-3"><i></i></span></h2>
                                <div class="panel-toolbar">
                                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                    <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                </div>
                            </div>
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_origen">Origen</label>
                                                <select class="form-control" id="Cmb_origen"></select>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_tipoGestoria">Tipo de Gestoría</label>
                                                <select class="form-control" id="Cmb_tipoGestoria"></select>
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_cuantificacion">Cuantificación</label>
                                                <input type="number" class="form-control" id="Txt_cuantificacion">
                                                
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_estatus">Estatus</label>
                                                <select class="form-control" id="Cmb_estatus"></select>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label" for="Txt_comentarios">Comentarios</label>
                                                <textarea class="form-control" id="Txt_comentarios" rows="5"></textarea>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-end">
                                            <div class="form-group">
                                                <label class="form-label" for="Cmb_diputados">Diputados</label>
                                                <select class="form-control" id="Cmb_diputados"></select>
                                                
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-end">
                                            <div class="form-group">
                                                <div class="custom-control custom-switch">
                                                    <input type="checkbox" class="custom-control-input" id="Chk_afinidad" checked>
                                                    <label class="custom-control-label" for="Chk_afinidad">Afinidad</label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </main>
                <!-- BEGIN Page Footer -->
                <footer class="page-footer" role="contentinfo">
                    <div class="d-flex align-items-center flex-1 text-muted">
                    </div>
                    <div>
                        <ul class="list-table m-0">
                            <li>
                                <button id="btn_Cancelar" type="button" class="btn btn-lg btn-danger waves-effect waves-themed">
						            <span class="fal fa-times mr-1"></span>
						            Cancelar
						        </button>
                            </li>
                            <li class="pl-3 pr-5">
                                <button id="btn_Guardar" type="button" class="btn btn-lg btn-primary waves-effect waves-themed">
                                    <span class="fal fa-save mr-1"></span>
                                    Guardar
                                </button>
                            </li>
                        </ul>
                    </div>
                </footer>




            </div>
        </div>
    </div>
    <script src="../jscustom/Gestoria.js"></script>
</asp:Content>
