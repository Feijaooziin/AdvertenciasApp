import { AdvertenciaData } from "../types/advertencia";

export function gerarHtmlAdvertencia(data: AdvertenciaData) {
  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />

    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 12px;
        padding: 15px;
      }

      .container {
        border: 1px solid #000;
        padding: 10px;
      }

      .header {
        display: flex;
        border: 1px solid #000;
        height: 60px;
      }

      .logo {
        width: 150px;
        border-right: 1px solid #000;
      }

      .titulo {
        flex: 1;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        padding-top: 18px;
      }

      .table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }

      .table td {
        border: 1px solid #000;
        padding: 6px;
      }

      .label {
        width: 120px;
        font-weight: bold;
      }

      .box {
        border: 1px solid #000;
        margin-top: 10px;
        padding: 10px;
        text-align: justify;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <div class="header">
        <div class="logo"></div>

        <div class="titulo">
          ${data.tipoDocumento}
        </div>
      </div>

      <table class="table">
        <tr>
          <td class="label">
            EMPREGADOR:
          </td>

          <td>
            COMFRIO TRANSPORTES EIRELI
          </td>
        </tr>

        <tr>
          <td class="label">
            FUNCIONÁRIO:
          </td>

          <td>
            ${data.funcionario}
          </td>
        </tr>

        <tr>
          <td class="label">
            ADMISSÃO:
          </td>

          <td>
            ${data.admissao ? data.admissao.toLocaleDateString("pt-BR") : ""}
          </td>
        </tr>
      </table>

      <div class="box">
        Na conformidade da Consolidação das Leis do Trabalho,
        fica aplicada a medida disciplinar abaixo descrita.
      </div>

      <div class="box">
        Motivos:

        <ul>
          ${data.motivos.map((motivo) => `<li>${motivo}</li>`).join("")}
        </ul>
      </div>

    </div>
  </body>
  </html>
  `;
}
