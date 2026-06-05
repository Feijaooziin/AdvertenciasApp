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
            padding: 12px;
            min-height: 95vh;
            position: relative;
            box-sizing: border-box;
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
            margin-top: 16px;
            text-align: justify;
            line-height: 1.5;
          }

          .assinaturas {
            margin-top: 80px;
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
            width: 90%;
            margin: 0 auto;
          }

          .nome-assinatura {
            border: 1px solid #000;
            border-top: none;
            padding: 4px;
            font-weight: bold;
          }

          .cargo-assinatura {
            border: 1px solid #000;
            border-top: none;
            padding: 4px;
            font-size: 10px;
          }

          .testemunhas {
            margin-top: 60px;
            display: table;
            width: 100%;
          }

          .testemunha {
            display: table-cell;
            width: 50%;
            text-align: center;
          }

          .lgpd {
            position: absolute;
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 8px;
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
                        ${
                          data.admissao
                            ? data.admissao.toLocaleDateString("pt-BR")
                            : ""
                        }
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

                <div class="box">
                    Em face de seu proceder, estamos lhe aplicando a
                    ${data.numeroAdvertencia}ª
                    ${data.tipoDocumento.toLowerCase()}
                    em razão dos fatos descritos acima,
                    ocorridos em
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

                <p style="margin-top: 40px;">
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

          <div class="testemunhas">
            <div class="testemunha">
              <div class="linha"></div>

              <p>TESTEMUNHA</p>
            </div>

            <div class="testemunha">
              <div class="linha"></div>

              <p>TESTEMUNHA</p>
            </div>
          </div>

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
