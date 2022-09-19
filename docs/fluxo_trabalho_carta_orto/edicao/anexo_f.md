---
sidebar_position: 6
title: 'Utilização do Ferramentas de Edição'
description: 'Exemplos de arquivos JSON e uso do Ferramentas de Edição'
---

# Recomendações
Para utilização do plugin Ferramentas de Edição é recomendável a utilização do QGIS 3.24 com linguagem American English, e é necessária a instalação das seguintes fontes:
* Noto Sans Condensed Light
* Noto Sans Condensed Light Italic

# Atributos do JSON
| **Atributo**                    | **Atributo no JSON**                       | **Características / Exemplos**                                                                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Índice de nomenclatura          | inom                                       | Ex: SF-22-Y-C-I-1. No caso de cartas Não-SCN esse atributo não é utilizado.                                                                                                                                                                       |
| Escala                          | escala                                     | Quando o _inom_ não é indicado, este atributo deve ser utilizado para indicar a escala do produto. Valores possíveis: 25000, 50000, 100000, 250000                                                                                                |
| Centro da carta                 | center                                     | Quando o _inom_ não é indicado, este atributo deve ser utilizado para indicar a localização do centro do produto. Possui dois atributos: longitude e latitude                                                                                     |
| Latitude                        | center/latitude                            | Latitude, em graus decimais, da coordenada do centro da carta. Ex: 1.5                                                                                                                                                                            |
| Longitude                       | center/longitude                           | Longitude, em graus decimais, da coordenada do centro da carta. Ex: -63.2                                                                                                                                                                         |
| Nome                            | nome                                       | Ex: Rio Laranjaí. Em caso de MI sem nome podemos utilizar seu MI: "MI-2753-1", por exemplo                                                                                                                                                        |
| Cabeçalho                       | cabecalho                                  | Atributo opcional. Caminho do arquivo no formato QPT que é inserido na parte superior esquerda da carta.                                                                                                                                          |
| Créditos                        | projeto                                    | Atributo opcional. Caminho do arquivo no formato QPT que é inserido na parte inferior esquerda da carta.                                                                                                                                          |
| Direitos de reprodução          | direitos\_reproducao                       | Atributo opcional. Caminho do arquivo no formato QPT que é inserido na parte inferior esquerda da carta, abaixo dos créditos.                                                                                                                     |
| Acesso à informação             | acesso\_informacao                         | Atributo opcional. Caminho do arquivo no formato QPT que é inserido na parte inferior direita da carta.                                                                                                                                           |
| Território internacional        | territorio\_internacional                  | Atributo opcional. Define se o produto engloba alguma área internacional. Valores possíveis: _true_ ou _false_                                                                                                                                    |
| Acesso restrito                 | acesso\_restrito                           | Atributo opcional. Define se o produto é de acesso restrito. Valores possíveis: _true_ ou _false_                                                                                                                                                 |
| Classes complementares          | classes\_complementares                    | Atributo opcional. Lista com classes opcionais a serem mostradas na carta. As classes definidas aqui, junto com as classes obrigatórias, serão renderizadas na carta. Ex: \["elemnat\_ponto\_cotado\_p","infra\_pista\_pouso\_l"\]                |
| Imagens utilizadas              | imagens                                    | Lista com as imagens utilizadas. Possui atributos _caminho\_imagem_, _caminho\_estilo_ e _epsg_                                                                                                                                                   |
| Caminho da imagem               | imagens/caminho\_imagem                    | Caminho absoluto da imagem. Ex: E:\\carta\_ortoimagem\\imagem.tiff                                                                                                                                                                                |
| Caminho do estilo               | imagens/caminho\_estilo                    | Atributo opcional que define o caminho para o estilo da imagem em QML. Ex: E:\\carta\_ortoimagem\\estilo\_imagem.qml                                                                                                                              |
| EPSG da imagem                  | imagens/epsg                               | Número que define o EPSG. Ex: 4326                                                                                                                                                                                                                |
| DPI de exportação               | dpi                                        | Opcional. Define a resolução da exportação do pdf e geotiff. Valor padrão: 400 DPI                                                                                                                                                                |
| Conexão do banco de dados       | banco                                      | Definição da conexão com banco de dados. Possui atributos _servidor_, _porta_, _nome_                                                                                                                                                             |
| Servidor                        | banco/servidor                             | Servidor no formato de texto. Ex: "99.125.798.86"                                                                                                                                                                                                 |
| Porta                           | banco/porta                                | Porta no formato de texto. Ex: "5432"                                                                                                                                                                                                             |
| Nome                            | banco/nome                                 | Nome do banco de dados                                                                                                                                                                                                                            |
| Descrição das fases             | fases                                      | Lista com as informações sobre as fases de produção e respectivos executantes. Possui atributos _nome_ e _executantes_                                                                                                                            |
| Nome da fase                    | fases/nome                                 | Ex: Imageamento, Processamento Digital de Imagens, Aquisição Vetorial, Validação, Edição                                                                                                                                                          |
| Executantes                     | fases/executantes                          | Lista com os executantes de uma determinada fase. Possui atributos _nome_ e _ano_                                                                                                                                                                 |
| Nome do executante              | fases/executantes/nome                     | Ex: Diretoria de Serviço Geográfico - 1º CGEO                                                                                                                                                                                                     |
| Ano de execução                 | fases/executantes/ano                      | Ex: 2020                                                                                                                                                                                                                                          |
| Descrição dos sensores          | sensores                                   | Lista com a descrição dos sensores utilizados. Possui atributos _tipo_, _plataforma_, _nome_, r_esolucao_, _bandas_ e _nivel\_produto_                                                                                                            |
| Tipo de sensor                  | sensores/tipo                              | Ex: Multiespectral                                                                                                                                                                                                                                |
| Plataforma                      | sensores/plataforma                        | Ex: Orbital, Aerotransportada                                                                                                                                                                                                                     |
| Nome de sensor                  | sensores/nome                              | Ex: Worldview-2, Worldview-3, Sentinel 2, CBERS-4A                                                                                                                                                                                                |
| Resolução geométrica            | sensores/resolucao                         | Ex: 0,50 m                                                                                                                                                                                                                                        |
| Bandas utilizadas               | sensores/bandas                            | Composição de bandas utilizada. Ex: 5-3-2                                                                                                                                                                                                         |
| Nível do produto                | sensores/nivel\_produto                    | Ex: Standard, WPM-L4                                                                                                                                                                                                                              |
| Informações técnicas do produto | info\_tecnica                              | Informações técnicas sobre o produto.Possui atributos _pec\_planimetrico_, _pec\_altimetrico_, _datum\_vertical_, _origem\_dados\_altimetricos_, _especificacao\_representacao_                                                                   |
| PEC Planimétrico                | info\_tecnica/pec\_planimetrico            | Ex: "A"                                                                                                                                                                                                                                           |
| PEC Altimétrico                 | info\_tecnica/pec\_altimetrico             | Ex: "A"                                                                                                                                                                                                                                           |
| Datum Vertical                  | info\_tecnica/datum\_vertical              | Ex: "Imbituba - Santa Catarina"                                                                                                                                                                                                                   |
| Origem dos dados altimétricos   | info\_tecnica/origem\_dados\_altimetricos  | Ex: "Cartas topográficas na escala 1:50.000"                                                                                                                                                                                                      |
| Especificação de representação  | info\_tecnica/especificacao\_representacao | Atributo opcional. Define a especificação que foi seguida para a representação dos dados geoespaciais. Valor padrão: ET-RDG versão preliminar                                                                                                     |
| Dados de terceiros              | info\_tecnica/dados\_terceiros             | Dados de terceiros utilizados na construção do produto. Ex: \["Terras indígenas: FUNAI", "Unidades de conservação: ICMBio"\]                                                                                                                      |
| Observação sobre homologação    | info\_tecnica/observacao\_homologacao      | Atributo opcional. Define se a observação sobre os limites estarem sujeitos a homologação do órgão. Valores possíveis: _true_ ou _false_. O valor padrão é _true_                                                                                 |
| Exibir curva auxiliar           | info\_tecnica/exibir\_curva\_auxiliar      | Atributo opcional. Indica se as curvas auxiliares devem ser exibidas ou não. Também adiciona na informação técnica informação sobre a equidistância da curva auxiliar. Valores possíveis: 1 (_true_) ou 0 (_false_). O valor padrão é 0 (_false_) |
| Equidistância                   | info\_tecnica/equidistancia\_personalizada | Atributo opcional. Substitui o valor padrão de equidistância da curva para o valor especificado. Os valores padrão são 10 para 1:25.000, 20 para 1:50.000, 40 para 1:100.000, 100 para 1:250.000.   


Observação: Produtos em Território Internacional podem ser totalmente fora do Brasil ou em cartas de fronteira onde dados internacionais são apresentados. Os quadros de Localização da Folha e Divisão Político-Administrativa, e os textos de regição da folha e origem dos dados geoespaciais fornecidos por terceiros são alterados.

## Exemplo de JSON do produto:
```
{
    "inom": "SF-22-Y-C-I-1-NE",
    "nome": "MI-2753-1-NE",
    "imagens": [
        {
            "caminho_imagem": "E:\\ortoimagem\\495_mosaico_rgb.ecw",
            "epsg": "4326"
        }
    ],
    "banco": {
        "servidor": "localhost",
        "porta": "5432",
        "nome": "cartaortoimagem_50k_31982_edgv3orto"
    },
    "fases": [
        {
            "nome": "Imageamento",
            "executantes": [
                {
                    "nome": "DigitalGlobe, Inc.",
                    "ano": "2016"
                }
            ]
        },
        {
            "nome": "Processamento Digital de Imagens",
            "executantes": [
                {
                    "nome": "Diretoria de Serviço Geográfico - 1º CGEO",
                    "ano": "2020"
                }
            ]
        },
        {
            "nome": "Aquisição Vetorial",
            "executantes": [
                {
                    "nome": "Diretoria de Serviço Geográfico - 1º CGEO",
                    "ano": "2020"
                }
            ]
        },
        {
            "nome": "Validação",
            "executantes": [
                {
                    "nome": "Diretoria de Serviço Geográfico - 1º CGEO",
                    "ano": "2020"
                }
            ]
        },
        {
            "nome": "Edição",
            "executantes": [
                {
                    "nome": "Diretoria de Serviço Geográfico - 1º CGEO",
                    "ano": "2020"
                }
            ]
        }
    ],
    "sensores": [
        {
            "tipo": "Multiespectral",
            "plataforma": "Orbital",
            "nome": "WorldView-2",
            "resolucao": "0,50 m",
            "bandas": "5-3-2",
            "nivel_produto": "Standard"
        }
    ],
    "info_tecnica": {
        "pec_planimetrico": "A",
        "pec_altimetrico": "A",
        "datum_vertical": "Imbituba - Santa Catarina",
        "origem_dados_altimetricos": "GLO-30 com correção do efeito do dossel vegetativo",
        "dados_terceiros":[
            "Terras indígenas: FUNAI**",
            "Unidades de conservação: IBAMA**",
            "Modelo geoidal: MAPGEO2015 - IBGE"
        ]
    }
}
```