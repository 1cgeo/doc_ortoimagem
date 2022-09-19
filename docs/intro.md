---
sidebar_position: 1
title: 'Introdução'
---

# Introdução

O produto Carta Ortoimagem surge como uma alternativa as Cartas Topográficas em meio a necessidade de prover informações, em tempo hábil e atualizadas, as OM requisitantes.

Nesse contexto, e com experiências obtidas com a participação nos programas MGCP e TREX, foi proposto um conjunto de documentações técnicas por produto, que descrevessem todos os procedimentos necessários para a geração do produto e que fossem permanentemente atualizadas através de reuniões periódicas.

As padronizações aqui apresentadas estão restritas ao Mapeamento de Pequenas Escalas (1:250.000, 1:100.000, 1:50.000 e 1:25.000), e está restrita à Cartas Ortoimagem como produto subsidiário e acessório do Sistema Cartográfico Nacional, não abragendo assim os produtos temáticos.

# Objetivo

Ser uma alternativa rápida e de baixo custo quando comparada a produção de Cartas Topográficas. O produto consegue atingir um custo reduzido pois restringe as feições que serão apresentadas no produto, reduzindo assim a fase de extração, que é a fase que possui uma maior demanda de horas de trabalho.

Para isso, foram definidos um conjunto de classes obrigatórias e opcionais que permitam manter o conceito de produto rápido e de baixo custo, enquanto respeita as principais toponímias da região.

## Classes Obrigatórias

|              **Elemento**              | **Classe conforme EDGV 3.0 Orto** | **Geometria** |                                        **Descrição**                                        |
|:--------------------------------------:|:---------------------------------:|:-------------:|:------------------------------------------------------------------------------------------:|
| Capitais, Cidades e Vilas              | llp_localidade                    | Ponto         | -                                                                                          |
| Rodovias                               | infra_via_deslocamento            | Linha         | Somente vias estaduais e federais                                                          |
| Identificador trecho rodoviário        | edicao_identificador_trecho_rod   | Ponto         | Somente vias estaduais e federais                                                          |
| Ferrovias                              | infra_ferrovia                    | Linha         | -                                                                                          |
| Lagos, represas, baías, oceano         | cobter_massa_dagua                | Área          | Somente elementos com nome                                                                 |
| Rios e Canais representáveis em escala | cobter_massa_dagua                | Área          | Somente elementos com nome                                                                 |
| Rios e Canais                          | elemnat_trecho_drenagem           |  Linha        | Somente trechos com nome                                                                   |
| Áreas sem dados                        | area_sem_dados             | Área          | Polígonos que representam área fora do Brasil ou regiões no Brasil sem cobertura de imagem |

## Classes Opcionais

|            				Elemento 			           |      				Classe 				conforme EDGV 3.0 Orto 			     |       				Geometria 			      |                                        				Descrição 			                                       |
|:------------------------------:|:---------------------------------------:|:---------------------:|:---------------------------------------------------------------------------------------:|
|  				Curvas 				de Nível 			              |  				elemnat_curva_nivel 			                   |  				Linha 			               |  				- 			                                                                                     |
|  				Pontos 				cotados 			               |  				elemnat_ponto_cotado 			                  |  				Ponto 			               |  				- 			                                                                                     |
|  				Aglomerados 				rurais 			           |  				llp_aglomerado_rural 			                  |  				Ponto 			               |  				- 			                                                                                     |
|  				Nomes 				locais 			                 |  				llp_nome_local 			                        |  				Ponto 			               |  				- 			                                                                                     |
|  				Serra, 				Morro, praia, etc 			     |  				elemnat_toponimo_fisiografico_natural 			 |  				Ponto 				e Linha 			       |  				Somente 				com nome 			                                                                      |
|  				Ilhas 			                        |  				elemnat_ilha 			                          |  				Ponto 				e Área 			        |  				Somente 				com nome 			                                                                      |
|  				Pistas 				de Pouso e Helipontos 			 |  				infra_pista_pouso 			                     |  				Ponto, 				Linha e Área 			 |  				- 			                                                                                     |
|  				Atracadouro/Terminal 			         |  				infra_elemento_infraestrutura 			         |  				Ponto, 				Linha e Área 			 |  				- 			                                                                                     |
|  				Subestação 				de Energia 			        |  				infra_elemento_energia 			                |  				Ponto 				e Área 			        |  				- 			                                                                                     |
|  				Trecho 				de energia 			            |  				infra_elemento_energia 			                |  				Linha 			               |  				Somente 				linhas de transmissão de energia 			                                              |
|  				Corredeiras 				e queda d’água 			   |  				elemnat_elemento_hidrografico 			         |  				Ponto 			               |  				Somente 				com nome 			                                                                      |
|  				Terreno 				sujeito inundação 			    |  				elemnat_terreno_sujeito_inundacao 			     |  				Área 			                |  				- 			                                                                                     |
|  				Extração 				mineral 			             |  				constr_extracao_mineral 			               |  				Ponto 				ou Área 			       |  				- 			                                                                                     |
|  				Limites 				legais 			               |  				llp_limite_legal 			                      |  				Linha 			               |  				Limites 				internacionais e estaduais. 			                                                   |
|  				Área 				pública militar 			         |  				llp_area_pub_militar 			                  |  				Linha 				e Área 			        |  				Limites 				de área militar (campos de instrução) 			                                         |
|  				Terra 				indígena 			               |  				llp_terra_indigena 			                    |  				Linha 				e Área 			        |  				Terra 				indígena conforme insumos oficiais (FUNAI) 			                                      |
|  				Unidade 				de conservação 			       |  				llp_unidade_conservacao 			               |  				Linha 				e Área 			        |  				Unidades 				de produção integral e unidades de uso sustentável conforme 				insumos oficiais 			 |

## Produção DSG/OMDS

Para fins de produção das OMDS/DSG, a não ser que exista um requisito específico do cliente, o seguinte conjunto de elementos será utilizado para a Carta Ortoimagem.

|------------------------------------------|----------------------------|--------------------------------|
|------------------------------------------|----------------------------|--------------------------------|
|  				Capitais, 				Cidades e Vilas 			              |  				Áreas 				sem dados 			          |  				Área 				pública militar 			         |
|  				Rodovias 			                               |  				Curvas 				de Nível 			          |  				Terra 				indígena 			               |
|  				Identificador 				trecho rodoviário 			        |  				Pontos 				cotados 			           |  				Unidade 				de conservação 			       |
|  				Ferrovias 			                              |  				Aglomerados 				rurais 			       |  				Pistas 				de Pouso e Helipontos 			 |
|  				Lagos, 				represas, baías, oceano 			         |  				Nomes 				locais 			             |  				Limites 				legais 			               |
|  				Rios 				e Canais representáveis em escala 			 |  				Serra, 				Morro, praia, etc 			 |  				   				 			                          |
|  				Rios 				e Canais 			                          |  				Ilhas 			                    |  				   				 			                          |

## Modelagem
De modo simplificar a modelagem para abranger somente as classes obrigatórias e opcionais foi definida uma modelagem específica para produção de cartas ortoimagem, a EDGV 3.0 Orto. Tal modelagem é um subconjunto da EDGV 3.0 Pro e segue os mesmos princípios para otimização da produção, como agrupamento de classes similares, remoção de classes e atributos que não são preenchidos pelas OMDS/DSG.

Os arquivos de modelagem *(SQL, Master File)* estão disponíveis no [repositório de modelagens da DSG](https://github.com/dsgoficial/modelagens). Para fins de disseminação será realizada uma conversão de EDGV 3.0 Orto para EDGV 3.0.

## Produtos SCN e Não-SCN
As Cartas Ortoimagem podem seguir o enquadramento do Sistema Cartográfico Nacional (SCN) ou não (enquadramento Não-SCN). Para os produtos Não-SCN a presente metodologia somente suporta deslocamentos dos enquadramentos SCN, preservando assim o tamanho previsto no SCN.

Para produtos SCN ou Não-SCN na metodologia atual a moldura deve ser definida com apenas 4 vértices (sem vértices intermediários). 