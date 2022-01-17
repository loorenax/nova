<%@ Page Title="" Language="C#" MasterPageFile="~/dist/MasterPage.Master" AutoEventWireup="true" CodeBehind="Reportes.aspx.cs" Inherits="Nova.dist.Reportes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <style>
        .card-gestoria img {
            height: 150px;
            width: 130px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 30%;
            padding: 5px;
        }

        .panel-tag h1 {
            margin-right: 10px;
            color: #090909;
        }

        .panel-tag .fal {
            font-size: 1.5rem;
            margin-left: 10px;
        }

        .fixed-table-header thead {
            background: #2b4c81;
            color: #ffffff;
        }

        .btn-select-row {
            padding: 0px;
        }

            .btn-select-row .fal {
                font-size: 1.25rem;
            }
    </style>

    <script src="../jscustom/Reportes.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-wrapper">
        <div class="page-inner">
            <div class="page-content-wrapper">

                <main id="js-page-content" role="main" class="page-content">
                    <%-- BEGIN subheader --%>
                    <div class="subheader">
                        <h1 class="subheader-title">
                            <i class='subheader-icon fal fa-edit'></i>Reporte de Gestoría
                                <small></small>
                        </h1>
                    </div>
                    <%-- END subheader --%>
                    <%-- Ficha --%>
                    <div id="pnlFicha" class="panel">
                        <div class="panel-hdr">
                            <h2>Resumen Gestoría<span class="fw-300 mr-3"><i></i></span></h2>
                            <div class="panel-toolbar">
                                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                            </div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-4 ">
                                        <div class="card card-gestoria">
                                            <img id="ficha_urlFoto" src="img/demo/avatars/avatar-b.png" alt="...">
                                            <div class="card-body">
                                                <h3 id="ficha_nombreDiputado" class="text-center">Almendra Espinoza Cuevas</h3>
                                                <div class="w-100 text-center">
                                                    <span class="fw-300">Partido: </span><strong id="ficha_partido" class="fw-600 fs-md ml-2">PRI</strong>
                                                    <span class="fw-300 ml-5">Distrito Local: </span><strong id="ficha_distritoLocal" class="fw-600 fs-md ml-2">2</strong>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-8 h-100 mt-auto mb-auto">
                                        <div class="card">
                                            <div class="card-body row">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div class="panel-tag d-flex align-items-center">
                                                        <h1 id="ficha_conteoGestoria">10</h1>
                                                        <strong class="text-muted">GESTIONES</strong>
                                                        <i class="fal fa-chalkboard-teacher"></i>
                                                    </div>

                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div class="panel-tag d-flex align-items-center">
                                                        <h1 id="ficha_conteoResueltas">5</h1>
                                                        <strong class="text-muted">RESUELTAS</strong>
                                                        <i class="fal fa-check"></i>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div class="panel-tag d-flex align-items-center">
                                                        <h1 id="ficha_conteoPendientes">2</h1>
                                                        <strong class="text-muted">PENDIENTES</strong>
                                                        <i class="fal fa-tasks"></i>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div class="panel-tag d-flex align-items-center">
                                                        <h1 id="ficha_conteoCuantificacion">3</h1>
                                                        <strong class="text-muted">PENDIENTES</strong>
                                                        <i class="fal fa-chart-line"></i>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>





                    <%-- Listado --%>
                    <div id="pnlListado" class="panel">
                        <div class="panel-hdr">
                            <h2>Gestorias<span class="fw-300 mr-3"><i></i></span></h2>
                            <div class="panel-toolbar">
                                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                            </div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <table id="Grid_Listado" data-toolbar="#toolbar" data-search="true" class="table table-sm table-striped w-auto table-fixed"></table>
                            </div>
                        </div>
                    </div>

                </main>
                <!-- BEGIN Page Footer -->

            </div>
        </div>
    </div>


</asp:Content>
