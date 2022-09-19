---
sidebar_position: 2
title: 'Preparo'
description: 'Descrição das Subfases do Preparo'
---

# Definição

A fase de Preparo tem por finalidade criar um banco contíguo de edição a partir dos dados vetoriais contínuos do banco de extração. Possui apenas uma subfase denominada Preparo para Edição.

De modo a organizar a produção a seguinte divisão de banco de dados de produção deve ser feita:

* Utilizar um banco de dados contínuo por projeto, lote ou bloco para as fases de Extração e Validação. O produto Conjunto de Dados Vetoriais Geoespaciais será exportado a partir deste banco de dados. Este banco será denominado BD Extração. Não deve ser utilizado generalização cartográfica para fins de edição neste banco de forma a não comprometer a acurácia posicional dos vetores. Deste banco será derivado o produto Conjunto de dados geoespaciais vetoriais para Ortoimagem - ET-EDGV 3.0.
* Uma vez um Produto concluído no BD Extração ele deve ser recortado e inserido no BD Edição. O BD Edição deve ser contíguo (vetores recortados por Produto), e neste banco deve ser executada a fase de Edição, podendo ser feita generalização cartográfica, pois os vetores são somente para fins de edição (não devendo ser exportados). Deste banco será derivado o produto Carta Ortoimagem.

Ainda, deve-se considerar que:

* O vetor do BD Extração deve estar concluído ao ser recortado para o BD Edição. Ele deve atender todos os critérios de qualidade do produto de modo que durante a fase de Edição não existam erros referentes a Extração ou Validação.
* O controle de qualidade da fase de Edição deve ser somente relativa aos fins de legibilidade e seleção das informações de interesse, não sendo uma revisão do conteúdo do produto. 
* Caso seja encontrado um erro durante a fase de Edição ele deve ser corrigido também no BD Extração. Como existe essa duplicação de esforços deve ser evitado ao máximo que erros sejam propagados para o BD Edição.