---
sidebar_position: 1
title: 'Edição'
description: 'Descrição das Etapas de Edição'
---

Para a edição de Cartas Ortoimagem, deve ser utilizado o plugin Ferramentas de Edição, que tem como finalidade exportar o produto Carta Ortoimagem em PDF/Geotiff, utilizando o JSON de configuração. Para isso é necessário que o produto já esteja editado, ou seja, já realizado o posicionamento dos rótulos e símbolos e já realizado o processo de generalização cartográfica de modo a otimizar a legibilidade. Os atributos adicionais da EDGV 3.0 Orto permitem que seja realizada uma edição manual ou automática da Carta Ortoimagem. O plugin Ferramentas de Edição deve ser utilização em um projeto em branco.  

O gerente do projeto deve definir se a edição será realizada de forma automática ou semiautomática, conforme a necessidade do projeto.  

## Atributos EDGV 3.0 Orto

* **texto_edicao**: Atributo que é utilizado para definir o texto que será apresentado como rótulo. Pode ser utilizado o caractere | para realizar uma quebra de linha.
* **label_x e label_y**: Atributos que permitem modificar a posição do rótulo utilizando as ferramentas nativas do QGIS.
* **justificativa_txt**: Atributo que permite definir a justificativa do rótulo. Valores possíveis: esquerda, centro e direita.
* **visivel**: Atributo que indica se a feição e seu rótulo é visível ou não na carta principal.
* **simb_rot**: Atributo que define a rotação do símbolo.
* **espacamento**: Atributo que define o espaçamento entre letras. Utilizado por exemplo para rótulos de Serra.
* **tamanho_txt**: Atributo que define o tamanho do texto.
* **estilo_fonte**: Estilo da fonte, com valores possíveis: Regular, Italic, Bold, Light, Condensed, Condensed Light.
* **cor**: Cor em hex da fonte.
* **cor_buffer**: Cor em hex do buffer.
* **tamanho_buffer**: Tamanho do buffer em milímetros.
* **sobreposto**: Utilizado no contexto das classes Unidade Conservação, Terra Indígena, Área Militar e Limite Legal, para mudar a representação linear para o modo intercalado por estar sobreposta a outra feição.
* **exibir_rotulo_aproximado**: Utilizado no contexto das classes Unidade Conservação, Terra Indígena, Área Militar e Limite Legal, para apresentar o texto "APROXIMADO" sobre a linha de limite.
* **populacao**: Utilizado no contexto da classe Localidade para definir o tamanho de fonte de Capital/Cidade.

## Classes EDGV 3.0 Orto

Classe | Observação
| ------ | ------ |
edicao_texto_generico_p | Classe utilizada para inserir textos de forma manual. Possui diversos atributos que permitem modificar as configurações de rótulo. Apresentado na carta principal ou na carta mini conforme o atributo *carta_simbolizacao*
edicao_texto_generico_l | Classe utilizada para inserir textos de forma manual. Possui diversos atributos que permitem modificar as configurações de rótulo. Apresentado na carta principal ou na carta mini conforme o atributo *carta_simbolizacao*
constr_extracao_mineral_p | Não é apresentada na mini carta.
constr_extracao_mineral_a | Não é apresentada na mini carta
edicao_identificador_trecho_rod_p | Classe auxiliar utilizada para representar o identificador de trecho rodoviário para rodovias federais e estaduais. Apresentado na carta principal ou na carta mini conforme o aributo *carta_simbolizacao*
edicao_simb_torre_energia_p | Classe auxiliar utilizada para representar os simbolos de torre de energia em uma linha de energia. Não é apresentada na mini carta
elemnat_elemento_hidrografico_p | Não é apresentada na mini carta
elemnat_elemento_hidrografico_l | Não é apresentada na mini carta
elemnat_elemento_hidrografico_a | Não é apresentada na mini carta
elemnat_toponimo_fisiografico_natural_p | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
elemnat_toponimo_fisiografico_natural_l | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
elemnat_ilha_p | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
elemnat_ilha_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
elemnat_ponto_cotado_p | Não é apresentada na mini carta. A atributo *cota_mais_alta* indica qual é o ponto cotado mais alto do produto, que é apresentado com um rótulo maior
infra_elemento_energia_p | Não é apresentada na mini carta
infra_elemento_energia_a | Não é apresentada na mini carta
infra_elemento_infraestrutura_p | Não é apresentada na mini carta
infra_pista_pouso_p | Não é apresentada na mini carta
infra_pista_pouso_l | Não é apresentada na mini carta
infra_pista_pouso_a | Não é apresentada na mini carta
llp_aglomerado_rural_p | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
llp_nome_local_p | Não é apresentada na mini carta
edicao_simb_cota_mestra_l | Utilizado para posicionar manualmente os textos de cota mestra da curva de nível caso necessário
elemnat_curva_nivel_l | Não é apresentada na mini carta
elemnat_trecho_drenagem_l | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*. Simbologia é apresentada na carta principal e pode também ser apresentado na carta mini utilizando o atributo *simbolizar_carta_mini*.
infra_via_deslocamento_l | Simbologia é apresentada na carta principal e pode também ser apresentado na carta mini utilizando o atributo *simbolizar_carta_mini*.
infra_elemento_energia_l | Não é apresentada na mini carta
infra_ferrovia_l | Simbologia é apresentada na carta principal e pode também ser apresentado na carta mini utilizando o atributo *simbolizar_carta_mini*.
elemnat_terreno_sujeito_inundacao_a | Não é apresentada na mini carta
aux_area_sem_dados_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
cobter_massa_dagua_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
edicao_area_pub_militar_l | O atributo *sobreposto* é utilizado quando o limite coincide com outro elemento da carta. A simbologia não é tracejada na carta mini. O atributo "exibir_rotulo_aproximado* é utilizado para definir exibir o rótulo *APROXIMADO* na carta principal quando a feição tiver geometria_aproximada = "sim"
edicao_terra_indigena_l | O atributo *sobreposto* é utilizado quando o limite coincide com outro elemento da carta. A simbologia não é tracejada na carta mini. O atributo "exibir_rotulo_aproximado* é utilizado para definir exibir o rótulo *APROXIMADO* na carta principal quando a feição tiver geometria_aproximada = "sim"
llp_unidade_conservacao_l | O atributo *sobreposto* é utilizado quando o limite coincide com outro elemento da carta. A simbologia não é tracejada na carta mini. O atributo "exibir_rotulo_aproximado* é utilizado para definir exibir o rótulo *APROXIMADO* na carta principal quando a feição tiver geometria_aproximada = "sim"
edicao_limite_legal_l | O atributo *sobreposto* é utilizado quando o limite coincide com outro elemento da carta. A simbologia não é tracejada na carta mini. O atributo "exibir_rotulo_aproximado* é utilizado para definir exibir o rótulo *APROXIMADO* na carta principal quando a feição tiver geometria_aproximada = "sim"
llp_area_pub_militar_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
llp_terra_indigena_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*
llp_unidade_conservacao_a | Rótulo é apresentado no carta principal e pode também ser apresentado na carta mini utilizando o atributo *rotular_carta_mini*


# Definição de Estilos
Durante o processo de edição podem ser utilizadas siglas e abreviaturas seguindo o padrão apresentado [aqui](./anexo_e.md).  

São definidos dois estilos distintos para a fase de edição: estilo de edição e o estilo de impressão. O estilo de impressão é a simbologia final do produto, seguindo as cores previstas em [Cores](./anexo_b.md) e o [Catálogo de Símbolos](./anexo_c.md). O estilo de edição é realizado durante a fase de edição, com o objetivo de aumentar a performance do QGIS, permitir visualizar objetivos não visíveis, exibir linhas que associam a geometria ao rótulo.

O plugin Ferramentas de Edição utiliza um JSON de configuração para realizar a configuração da exportação do PDF e Geotiff. A descrição do JSON e um exemplo de utilização podem ser acessados [aqui](./anexo_f.md). As informações marginais são geradas de forma automática seguindo o [padrão de folha modelo.](./anexo_d.md)

## Padronização de Nomes dos Produtos
* O produto normalmente será nomeado em referência a feição natural ou cultural de maior relevância contida na região do produto.
* O nome do produto deve ser único sempre que possível.
* Nome de feições culturais têm maior preferência em relação a feições naturais, porém, se uma feição natural é mais conhecida que qualquer feição cultural contida no produto o nome da feição natural deve ser a escolhida.
* Nomes de rios, serras e outras feições que se estendem por diversos produtos devem ser evitados.
* Quando a feição de maior relevância é dividida na região de mais de um produto, deve ser escolhido um dos produtos para receber o nome da feição e produtos adjacentes que contenham porções da feição podem ser utilizados os sufixos  “-N”, “-S”, “-E”, “-O”, “-NE”, “-NO”, “-SE”, “-SO”.
* Quando nenhum nome puder ser determinado deve ser utilizado o MI, por exemplo “MI-2906-1-NE”.
* Nome dos produtos em diferentes escalas devem ser coerentes sempre que possível. Um dos nomes da 1:100,000 deve ser o nome da 1:250,000 correspondente, e analogamente para as outras escalas.

# Observações
* Se a região possui uma alta densidade de curvas de nível que dificulte a interpretação dos objetos na Carta Ortoimagem, a equidistância do produto pode ser modificada.
* [Acesso a padronização de Siglas e Abreviaturas.](./anexo_e.md)
* [Acesso aos critérios de escolha de tamanho de rótulo a serem utilizdos na fase de Edição.](./anexo_h.md)