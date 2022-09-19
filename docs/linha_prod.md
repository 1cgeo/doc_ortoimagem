---
sidebar_position: 1
title: 'Linha de Produção'
---

São definidos dois tipos de produtos, a Carta Ortoimagem e o Conjunto de Dados Geoespaciais Vetoriais para Carta Ortoimagem, que são os dados vetoriais utilizados para a construção da Carta Ortoimagem, sendo assim um subconjunto do produto CDGV já previsto na ET-PCDG. Tais dados vetoriais podem ser requisitados pelos clientes, e dessa forma devem ser disponibilizados via BDGEx.

# Definições

A produção de cartas ortoimagem é dividida em duas linhas de produção:
* Conjunto de dados geoespaciais vetoriais para Carta Ortoimagem - ET-EDGV 3.0: onde os dados vetoriais necessários para a produção da carta ortoimagem são gerados.
* Carta Ortoimagem: onde a carta ortoimagem matricial é gerada.

## Conjunto de dados geoespaciais vetoriais para Ortoimagem – ET-EDGV 3.0

A linha de produção do CDGV para Carta Ortoimagem é composta das seguintes fases: Preparo, Extração, Validação e Disseminação.

* [Preparo](./fluxo_trabalho_cdgv/preparo): dividido em três subfases com o objeito de preparar insumos básicos para a execução da linha de produção.
    * Preparo das imagens: definição da imagem do projeto, *pansharpening*, georreferenciamento, equalização, etc.
    * Preparo da altimetria: definição do MDT a ser utilizado, geração das curvas de nível.
    * Coleta de insumo externo: coleta de informações relevantes, matricial, vetorial ou tabular, para uso como insumo no processo de produção. Essa informação poderá ser armazenada nas camadas autilizares de insumo exertno do banco de dados.
* [Extração](./fluxo_trabalho_cdgv/extracao): fase principal do processo e tem por finalidade construir o CDGV a partir da fotointerpretação e compilação de insumos, a imagem abaixo apresenta as subfases da Extração.
* [Validação](./fluxo_trabalho_cdgv/validacao): finalidade de realizar um controle de qualidade direto interno e a correção de erros verificados, realizando de forma automática uma inspeção completa da consistência lógica de um conjunto de dados geoespaciais vetoriais, é dividida nas seguintes subfases.
    * Validação nível produto: executada no enquadramento do produto;
    * Validação da ligação: executada no enquadramento do produto somado aos produtos vizinhos de forma a garantir a consistência da continuidade dos dados.
* [Disseminação](./fluxo_trabalho_cdgv/disseminacao): consiste na geração dos metadados, conversão e exportação para o formato *shapefile* na modelagem EDGV 3.0, e carregamento no BDGEx.

## Carta Ortoimagem

A linha de produção Carta Ortoimagem é composta das seguintes fases: Preparo, Edição e Disseminação.

* [Preparo](./fluxo_trabalho_carta_orto/preparo): criar um banco contíguo de edição a partir dos dados vetoriais contínuos do banco de extração. Possui apenas uma subfase, denominada Preparo para Edição.
* [Edição](./fluxo_trabalho_carta_orto/edicao): aplicar generalização cartográfica compatível com a escala de uso do produto impresso. Possui apenas uma subfase, também denominada Edição, onde é utilizada todas as classes previstas na EDGV 3.0 Orto, incluindo as classes auxiliares de edição.
* [Disseminação](./fluxo_trabalho_carta_orto/disseminacao): geração de metadados, geração do pdf e geotiff, e carreamento no BDGEx.
