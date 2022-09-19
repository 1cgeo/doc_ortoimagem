---
sidebar_position: 2
title: 'Preparo'
description: 'Descrição das Subfases do Preparo'
---

# Definição

A fase de preparo da linha de produção de CDGV para Carta Ortoimagem consiste no preparo das imagens, no preparo da altimetria e na coleta de insumos externos.

## Escolha das Imagens

Durante o Preparo das Imagens o Gerente do Projeto deve definir a imagem a ser utilizada baseado nas necessidades do clinte e na disponibilidade de imagens no acervo. Em geral, as seguintes imagens devem ser utilizadas, de acordo com a escala:
* Escala 1:250.000: Sentinel 2A (10m) ou superior;
* Escala 1:100.000: Sentinel 2A (10m) ou superior;
* Escala 1:50.000: CBERS 4A WPM L4 (2m) ou superior; e
* Escala 1:25.000: Geoeye-1 (0,5m), Worldview-2 (0,5m), Worldview-3 (0,3cm); ou superior

## Critérios de Seleção das Imagens

* Cobertura de nuvens, defeitos e *no-data*: deverá ser garantido que os objetos de interesse do cliente sejam identificáveis e que a cobertura de nuvem seja a mínima possível. Várias cenas podem ser compostas de forma a minimizar a cobertura de nuvens. No caso da CBERS 4A deve-se considerar utilizar imagens WPM L2 no caso de necessidade de complementação de imagens WPM L4, porém as imagens WPM L2 possuem acurácia posicional inferior e devem ser georreferenciadas.
* Acurácia posicional absoluta: deve ser garantida, tendo em vista que o PEC do produto será determinado de forma indireta baseada na acurácia posicional do insumo. Imagens como CBERS 4A possuem distorção radial, isso deve ser atentado durante o controle de qualidade.
* Acurácia posicional relativa: deve ser garantido que a diferença de georreferenciamento entre cenas não afete a geração do mosaico. Caso necessário deve ser realizado o registro entre cenas.
* Cor da cena e entre cenas: devem estar mais próximo possível da cor natural, proporcionando o máximo de interpretabilidade para o usuário. A cor entre cenas deve ser corrigida sempre que possível.
* Licenciamento: o da imagem utilizada deve ser compatível com o licenciamento desejado do produto.

## Preparo da Altimetria

Durante o Preparo da Altimetria o Gerente do Projeto deve definir o MDT a ser utilizado para extração de curvas de nível e pontos cotados baseado nas necessidades do cliente e na disponibilidade de modelos no acervo. Em geral, os seguintes modelos devem ser utilizados considerando o licenciamento do projeto:
* GLO-30: MDS de 30 metros com licenciamento próprio, disponível [aqui](https://docs.sentinel-hub.com/api/latest/static/files/data/dem/resources/license/License-COPDEM-30.pdf). É necessário informar a fonte *(by attribution)*. A altimetria deve ser pós-processada para reduzir de MDS para MDT.
* FABDEM: Versão do GLO-30 reduzida para MDT. Possui licenciamento *Creative Commons Attribution-NonCommercial-ShareALike 4.0 International*

### Geração de Curvas de Nível

Para a geração das curvas de nível, os seguintes passos devem ser realizados:
* Correção da referência altimétrica, de EGM2008 para Imbituba ou Santana, conforme o caso.
* Suavização do MDT utilizando um filtro 5x5 de passa baixa.
* Extração de curva de nível utilizando a equidistância conforme a escala, 10 para 1:25.000, 20 para 1:50.000, 40 para 1:100.000, 100 para 1:250.000.
* Suavização das curvas geradas e eliminação de curvas fechadas pequenas (8mm na escala).
* Carregamento no banco de dados.

Observações:
* A geração de pontos cotados ocorre durante a fase de Extração.

## Coleta de Insumo Externo

A coleta de insumo externos tem por objetivo compilar informações relevantes, sejam elas **matriciais, vetoriais ou tabulares**, para uso como insumo no processo de extração. No caso dos dados vetoriais eles podem ser armazenados nas camadas auxiliares de insumo no banco de dados do projeto, ou em um banco de dados centralizado de insumos.

As fontes de dados utilizadas devem ser **oficiais e autoritativas**. Caso se julgue que um insumo em particular não é confiável ele deve ser confirmado utilizado mais de uma fonte, atentando-se sempre quanto ao licenciamento dos dados.