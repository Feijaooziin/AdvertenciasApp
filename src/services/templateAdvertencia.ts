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
            font-size: 12pt;
            padding: 15px;
          }

          .container {
            border: 1.5px solid #000;
            padding: 12px;
            min-height: 95vh;
            position: relative;
            box-sizing: border-box;
          }

          .header-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            }

          .header-table td {
            border: 1px solid #000;
          }

          .logo-cell {
            width: 200px;
            height: 70px;
          }

          .title-cell {
            text-align: center;
            font-size: 18pt;
            font-weight: bold;
          }

          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
          }

          .table td {
            border: 1px solid #000;
            padding: 4px 6px;
            font-size: 12pt;
          }

          .label {
            width: 130px;
            font-weight: bold;
          }

          .box {
            margin-top: 16px;
            text-align: justify;
            line-height: 1.5;
            font-size: 12pt;
          }

          .assinaturas {
            margin-top: 60px;
            display: table;
            width: 100%;
          }

          .assinatura {
            display: table-cell;
            width: 50%;
            text-align: center;
            vertical-align: top;
          }

          .linha {
            border-top: 1px solid #000;
            width: 85%;
            margin: 0 auto 4px auto;
          }

          .nome-assinatura {
            border-top: none;
            padding: 4px;
            font-weight: bold;
            font-size: 12pt;
          }

          .cargo-assinatura {
            border-top: none;
            padding: 4px;
            font-size: 12pt;
          }

          .testemunhas {
            margin-top: 60px;
            width: 100%;
          }

        .testemunhas-table {
            margin-top: 80px;
            width: 100%;
            border-collapse: collapse;
        }

        .testemunhas-table td {
            width: 50%;
            text-align: center;
            vertical-align: top;
        }

          .testemunha {
            display: table-cell;
            width: 50%;
            text-align: center;
            vertical-align: top;
            font-size: 12pt;
          }

          .lgpd {
            position: absolute;
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 10pt;
            text-align: justify;
            line-height: 1.3;
          }

          .conteudo {
            min-height: 620px;
          }
        </style>
      </head>

      <body>
        <div class="container">
            <div class="conteudo">
                <table class="header-table">
                    <tr>
                        <td class="logo-cell">
                        <!-- Logo aqui futuramente -->
                        </td>

                        <td class="title-cell">
                        ${
                          data.tipoDocumento === "ADVERTENCIA"
                            ? "ADVERTÊNCIA DISCIPLINAR"
                            : "SUSPENSÃO DISCIPLINAR"
                        }
                        </td>
                    </tr>
                </table>

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
                        ${
                          data.admissao
                            ? data.admissao.toLocaleDateString("pt-BR")
                            : ""
                        }
                    </td>
                    </tr>
                </table>

                <div class="box" style="margin-top: 50px;">
                    Na conformidade da Consolidação das Leis do Trabalho,
                    fica aderida a ${
                      data.tipoDocumento === "ADVERTENCIA"
                        ? "advertência"
                        : "suspensão"
                    } pela falta abaixo discriminada:
                </div>

                <div class="box">
                    <strong>Motivos:</strong>

                    <ul style="margin-top: 8px;">
                    ${data.motivos.map((motivo) => `<li>${motivo}</li>`).join("")}
                    </ul>
                </div>

                <div class="box">
                    Em face de seu proceder, neste momento estamos lhe aplicando a
                    ${data.numeroAdvertencia}ª
                    ${
                      data.tipoDocumento === "ADVERTENCIA"
                        ? "advertência"
                        : "suspensão"
                    }
                    em razão de:

                    ${data.motivos.join(", ")}.

                    Referente ao ocorrido em
                    ${data.dataOcorrido.toLocaleDateString("pt-BR")}.
                </div>

                <div class="box">
                    A presente medida tem por finalidade orientá-lo
                    quanto ao cumprimento das normas internas da empresa,
                    ficando ciente de que a repetição de procedimentos
                    semelhantes poderá acarretar medidas disciplinares
                    mais severas, inclusive dispensa por justa causa,
                    nos termos da legislação trabalhista vigente.
                </div>

                <p style="margin-top: 30px;">
                    Favor dar seu ciente na cópia desta. <br>
                    ${data.cidade || "Pinhais"},
                    ${data.dataAssinatura.toLocaleDateString("pt-BR")}
                </p>
            </div>

          <div class="assinaturas">
            <div class="assinatura">
              <div class="linha"></div>

              <div class="nome-assinatura">
                COMFRIO TRANSPORTES EIRELI
              </div>

              <div class="cargo-assinatura">
                EMPREGADOR
              </div>
            </div>

            <div class="assinatura">
              <div class="linha"></div>

              <div class="nome-assinatura">
                ${data.funcionario}
              </div>

              <div class="cargo-assinatura">
                EMPREGADO
              </div>
            </div>
          </div>

        <table class="testemunhas-table">
            <tr>
                <td>
                <div class="linha"></div>
                <p>TESTEMUNHA</p>
                </td>

                <td>
                <div class="linha"></div>
                <p>TESTEMUNHA</p>
                </td>
            </tr>
        </table>

          <div class="lgpd">
            Nós da COMFRIO valorizamos a privacidade e a
            proteção dos seus dados pessoais. As informações
            contidas neste documento serão utilizadas
            exclusivamente para fins de registro e aplicação
            da medida disciplinar, observando os princípios
            estabelecidos pela Lei Geral de Proteção de Dados
            Pessoais (LGPD).
          </div>
        </div>
      </body>
    </html>
  `;
}
