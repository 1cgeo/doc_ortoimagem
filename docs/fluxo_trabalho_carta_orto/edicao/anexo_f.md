---
sidebar_position: 6
title: 'Utilização do Ferramentas de Edição'
description: 'Exemplos de arquivos JSON e uso do Ferramentas de Edição'
---

Para utilização do plugin Ferramentas de Edição é recomendável a utilização do QGIS 3.24 com linguagem American English, e é necessária a instalação das seguintes fontes:



# Atributos do JSON
Atributo | Atributo no JSON | Características / Exemplos
| ------ | ------ | ------ |
Tipo de produto | tipo_produto | Preencher com "Carta Ortoimagem".
Índice de nomenclatura | inom | Ex: SF-22-Y-C-I-1. No caso de cartas Não-SCN esse atributo não é utilizado.
Escala | escala | Quando o *inom* não é indicado, este atributo deve ser utilizado para indicar a escala do produto. Valores possíveis: 25000, 50000, 100000, 250000
Centro da carta | center | Quando o *inom* não é indicado, este atributo deve ser utilizado para indicar a localização do centro do produto. Possui dois atributos: longitude e latitude
Latitude | center/latitude | Latitude, em graus decimais, da coordenada do centro da carta. Ex: 1.5
Longitude | center/longitude | Longitude, em graus decimais, da coordenada do centro da carta. Ex: -63.2
Nome | nome | Ex: Rio Laranjaí. Em caso de MI sem nome podemos utilizar seu MI: "MI-2753-1", por exemplo
Cabeçalho | cabecalho | Atributo opcional. Caminho do arquivo no formato qpt que é inserido na parte superior esquerda da carta. Verificar [exemplo](https://github.com/dsgoficial/ferramentas_edicao/blob/master/modules/mapBuilder/resources/products/common/header.qpt)
Créditos | projeto | Atributo opcional. Caminho do arquivo no formato qpt que é inserido na parte inferior esquerda da carta. Verificar [exemplo](https://github.com/dsgoficial/ferramentas_edicao/blob/master/modules/mapBuilder/resources/products/common/creditsDSG.qpt)
Direitos de reprodução | direitos_reproducao | Atributo opcional. Caminho do arquivo no formato qpt que é inserido na parte inferior esquerda da carta, abaixo dos créditos. Verificar [exemplo](https://github.com/dsgoficial/ferramentas_edicao/blob/master/modules/mapBuilder/resources/products/common/reproductionRights.qpt)
Acesso à informação | acesso_informacao | Atributo opcional. Caminho do arquivo no formato qpt que é inserido na parte inferior direita da carta. Verificar [exemplo](https://github.com/dsgoficial/ferramentas_edicao/blob/master/modules/mapBuilder/resources/products/common/bdgexAcessInfo.qpt)
Território internacional | territorio_internacional | Atributo opcional. Define se o produto engloba alguma área internacional. Valores possíveis: *true* ou *false*
Acesso restrito | acesso_restrito | Atributo opcional. Define se o produto é de acesso restrito. Valores possíveis: *true* ou *false*
Classes complementares | classes_complementares | Atributo opcional. Lista com classes opcionais a serem mostradas na carta. As classes definidas aqui, junto com as classes obrigatórias, serão renderizadas na carta. Ex: ["elemnat_ponto_cotado_p","infra_pista_pouso_l"]
Imagens utilizadas | imagens | Lista com as imagens utilizadas. Possui atributos *caminho_imagem*, *caminho_estilo* e *epsg*
Caminho da imagem | imagens/caminho_imagem | Caminho absoluto da imagem. Ex: E:\\\\carta_ortoimagem\\\\imagem.tif
Caminho do estilo | imagens/caminho_estilo | Atributo opcional que define o caminho para o estilo da imagem em QML. Ex: E:\\carta_ortoimagem\\estilo_imagem.qml
EPSG da imagem | imagens/epsg | Número que define o EPSG. Ex: 4326
MDE  para o Diagrama de elevação | mde_diagrama_elevacao| Possui atributos caminho_mde e epsg
Caminho da MDE| mde_diagrama_elevacao/caminho_mde | Caminho absoluto do MDE. Ex: E:\\\\carta_ortoimagem\\\\mde.tif
EPSG do MDE| mde_diagrama_elevacao/epsg | Número que define o EPSG. Ex: 4326
DPI de exportação | dpi | Opcional. Define a resolução da exportação do pdf e geotiff. Valor padrão: 400 DPI
Conexão do banco de dados | banco | Definição da conexão com banco de dados. Possui atributos *servidor*, *porta*, *nome*
Servidor | banco/servidor | Servidor no formato de texto. Ex: "99.125.798.86"
Porta | banco/porta | Porta no formato de texto. Ex: "5432"
Nome | banco/nome | Nome do banco de dados
Descrição das fases | fases | Lista com as informações sobre as fases de produção e respectivos executantes. Possui atributos *nome* e *executantes*
Nome da fase | fases/nome | Ex: Imageamento, Processamento Digital de Imagens, Aquisição Vetorial, Validação, Edição
Executantes | fases/executantes | Lista com os executantes de uma determinada fase. Possui atributos *nome* e *ano*
Nome do executante | fases/executantes/nome | Ex: Diretoria de Serviço Geográfico - 1º CGEO
Ano de execução | fases/executantes/ano | Ex: 2020
Descrição dos sensores | sensores | Lista com a descrição dos sensores utilizados. Possui atributos *tipo*, *plataforma*, *nome*, *resolucao*, *bandas* e *nivel_produto*
Tipo de sensor | sensores/tipo | Ex: Multiespectral
Plataforma | sensores/plataforma | Ex: Orbital, Aerotransportada
Nome de sensor | sensores/nome | Ex: Worldview-2, Worldview-3, Sentinel 2, CBERS-4A
Resolução geométrica | sensores/resolucao | Ex: 0,50 m
Bandas utilizadas | sensores/bandas | Composição de bandas utilizada. Ex: 5-3-2
Nível do produto | sensores/nivel_produto | Ex: Standard, WPM-L4
Informações técnicas do produto | info_tecnica | Informações técnicas sobre o produto.Possui atributos *pec_planimetrico*, *pec_altimetrico*, *datum_vertical*, *origem_dados_altimetricos*, *especificacao_representacao*
PEC Planimétrico | info_tecnica/pec_planimetrico | Ex: "A"
PEC Altimétrico | info_tecnica/pec_altimetrico | Ex: "A"
Datum Vertical | info_tecnica/datum_vertical | Ex: "Imbituba - Santa Catarina"
Origem dos dados altimétricos | info_tecnica/origem_dados_altimetricos | Ex: "Cartas topográficas na escala 1:50.000"
Especificação de representação | info_tecnica/especificacao_representacao | Atributo opcional. Define a especificação que foi seguida para a representação dos dados geoespaciais. Valor padrão: MD33-C-01
Dados de terceiros | info_tecnica/dados_terceiros | Dados de terceiros utilizados na construção do produto. Ex: ["Terras indígenas: FUNAI", "Unidades de conservação: IBAMA"]
Observação sobre homologação | info_tecnica/observacao_homologacao | Atributo opcional. Define se a observação sobre os limites estarem sujeitos a homologação do órgão. Valores possíveis: *true* ou *false*. O valor padrão é *true*
Exibir curva auxiliar | info_tecnica/exibir_curva_auxiliar| Atributo opcional. Indica se as curvas auxiliares devem ser exibidas ou não. Também adiciona na informação técnica informação sobre a equidistância da curva auxiliar. Valores possíveis: 1 (*true*) ou 0 (*false*). O valor padrão é 0 (*false*)
Equidistância| info_tecnica/equidistancia_personalizada | Atributo opcional. Substitui o valor padrão de equidistância da curva para o valor especificado. Os valores padrão são 10 para 1:25.000, 20 para 1:50.000, 40 para 1:100.000, 100 para 1:250.000.   

Produtos em Território Internacional podem ser totalmente fora do Brasil ou em cartas de fronteira onde dados internacionais são apresentados. Os quadros de Localização da Folha e Divisão Político-Administrativa, e os textos de região da folha e origem dos dados geoespaciais fornecidos por terceiros são alterados.

Produtos de acesso restrito não possuem o QRCode para o BDGEx e apresentam em seu lugar a tarja de acesso restrito.

Para a articulação da imagem, os polígonos devem ser criados na cada edicao_articulacao_imagem_a da EDGV 3.0 Orto. A camada possui informação de nome_sensor, nome_abrev_sensor e data. O nome_abrev_sensor e a data (no formato MM/AAAA) são apresentados no diagrama.

## Exemplo de JSON do produto:
```
{
    "tipo_produto": "Carta Ortoimagem",
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

## Exemplo de JSON do produto com classes complementares:
```
{
    "tipo_produto": "Carta Ortoimagem",
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
    },
    "classes_complementares": [
      "elemnat_ponto_cotado_p",
      "elemnat_curva_nivel_l"
    ]
}
```