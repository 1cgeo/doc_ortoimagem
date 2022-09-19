---
sidebar_position: 1
title: 'Extração'
description: 'Descrição das Subfases da Extração'
---

# Definições

* A extração tem por finalidade construir o CDGV a partir da fotointerpretação e compilação de insumos. Ela é realizada no banco de dados de extração onde não são aplicadas regras de generalização cartográfica de forma a preservar a acurácia posicional dos vetores. Dessa forma para os dados vetoriais é utilizado o critério de densidade de um (1) metro independentemente da escala.
* [Acesseo dos critérios de extração por classe prevista na EDGV 3.0 Orto.](./anexo_g.md)
* Durante a fase de Extração devem ser utilizadas rotinas de identificação de erros geométricos, de atributos e de relacionamentos, de modo que não restem erros durante a fase de Validação, que se torna uma fase de controle de qualidade.

## Descrição das Subfases

* A subfase de **Ferrovias** abrange somente a classe *infra_ferrovia_l*.
* A subfase **Hidrografia e Curva de Nível** abrange as seguintes classes: *cobter_massa_dagua_a*, *elemnat_trecho_drenagem_l*, *elemnat_ilha_a*, *elemnat_ilha_p*, *elemnat_terreno_sujeito_inundacao_a*, *elemnat_curva_nivel_l*, *elemnat_elemento_hidrografico_a*, *elemnat_elemento_hidrografico_l*, *elemnat_elemento_hidrografico_p*, *elemnat_ponto_cotado_p* (e classes de delimitador e centroide se for o caso).
* A subfase **Vias de Deslocamento** abrange as seguintes classes: *infra_via_deslocamento_l* e classes referentes a subfase de Ferrovias.
* A subfase **Limites Especiais e Legais** abrange as seguintes classes: *edicao_area_sem_dados_a*, *llp_limite_legal_l*, *llp_limite_especial_l*, *llp_limite_especial_a*, *llp_unidade_conservacao_a*, *llp_unidade_conservacao_l*, *llp_terra_indigena_a*, *llp_terra_indigena_l*, *llp_area_pub_militar_a*, *llp_area_pub_militar_l* e classes referentes as subfases de Via de deslocamento e Hidrografia e Curva de Nível.
* A subfase **Localidades** e elementos fisiográficos abrange as seguintes classes: *elemnat_toponimo_fisiografico_natural_l*, *elemnat_toponimo_fisiografico_natural_p*, *llp_localidade_p*, *llp_aglomerado_rural_p*, *llp_nome_local_p* e classes referentes a Subfase de Hidrografia e Curva de Nível.
* A subfase **Planimetria** abrange as seguintes classes: *infra_elemento_energia_a*, *constr_extracao_mineral_a*, *infra_pista_pouso_a*, *infra_pista_pouso_l*, *infra_elemento_energia_l*, *infra_elemento_infraestrutura_a*, *infra_elemento_infraestrutura_l*, *infra_elemento_infraestrutura_p*, *infra_elemento_energia_p*, *constr_extracao_mineral_p*, *infra_pista_pouso_p* e classes referentes as subfases Via de deslocamento e Hidrografia.
* A subfase **Verificação Final** abrange as classes previstas nas subfases de Planimetria, Localidades e Limites Especiais e Legais, e *elemnat_ponto_cotado_p*.