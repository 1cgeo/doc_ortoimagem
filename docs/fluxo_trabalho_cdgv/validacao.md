---
sidebar_position: 4
title: 'Validação'
description: 'Descrição das Subfases da Validação'
---

# Definições

* A fase de Validação tem por finalidade realizar um controle de qualidade direto interno e a correção dos erros verificados, realizando de forma automática uma inspeção completa da consistência lógica de um conjunto de dados geoespaciais vetoriais.  
* Durante a fase de Extração, tais erros já são verificados e corrigidos, desta forma a fase de Validação atua como um controle de qualidade. Assim, na fase de validação são somente executadas rotinas de verificação, não contendo rotinas de modifição do dado vetorial.  
* A fase de validação em tese não deve encontrar apontamentos, uma vez que estes devem ter sido identificados e corrigidos durante a fase de extração. Desta forma, essa fase da produção pode ser realizada até mesmo pelo Gerente do Projeto ou outros Engenheiros Cartógrafos.  
* A fase de validação é dividida na validação em nível de produto, que é executada no enquadramento do projeto, e validação na ligação, que é executada no enquadramento do produto somado aos produtos vizinhos de forma a garantir a consistência da continuidade dos dados.

## Conjunto de Rotinas

* Conjunto de rotinas de validade geométrica:
    * Geometrias inválidas.
    * Geometrias nulas.
    * Geometrias com mais de uma parte.
    * Feições duplicadas.
    * Ângulo pequeno (<10º) dentro da feição.
* Conjunto de rotinas de verificação de linha:
    * Vértices não compartilhados em interseções.
    * Vértices não compartilhados em arestas compartilhadas.
    * Vértices próximos a arestas.
    * Ângulo pequeno (<10º) entre feições.
    * Sequência de vértices em Z.
    * Sobreposição dentro da mesma classe.
    * Ponta livre de linhas em relação a moldura.
    * Linhas dentro de uma mesma camada devem estar conectadas corretamente.
    * Linhas seccionadas sem motivo.
    * Linhas devem estar segmentadas no encontro de 2 ou mais linhas da mesma classe.
    * Linhas menores que a tolerância (versão para ponta livre e versão para qualquer linha).
* Conjunto de rotinas de verificação de áreas:
    * Vértices não compartilhados em interseções.
    * Vértices não compartilhados em arestas compartilhadas.
    * Vértices próximos a arestas.
    * Ângulo pequeno (<10º) entre feições.
    * Sequência de vértices em Z.
    * Área menor que a tolerância.
    * Identifica sobreposições dentro da mesma classe.
    * Vértices próximos a moldura.
    * Áreas adjacentes com mesmos atributos devem estar mescladas.
    * Buracos menores que a tolerância.
* Conjunto de rotinas de validade dos relacionamentos, como:
    * Verificar direcionamento de redes de drenagem.
    * Consistência entre hidrografia e curva de nível.
    * Curvas de nível faltando, intersecções incorretas.
    * Pontos cotados fora da equidistância.
* Conjunto de rotinas de verificação de atributos, como combinação inválida e erros ortográficos.
* Conjunto de rotinas de verificação da ligação.