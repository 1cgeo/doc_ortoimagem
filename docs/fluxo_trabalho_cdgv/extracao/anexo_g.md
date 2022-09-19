---
sidebar_position: 2
title: 'Critérios de Extração por Classe'
description: 'Critérios de Extração por Classe'
---

**cobter_massa_dagua**  
Somente massas d’água com nome devem ser adquiridas.

**trecho_drenagem**  
Somente trechos de drenagem com nome devem ser adquiridos.

**via_deslocamento**  
Somente rodovias federais e estaduais devem ser adquiridas. Para representar os identificadores de trecho rodoviário deve ser utilizada a classe identificador_trecho_rod. 

**ferrovia**  
Todas as ferrovias, inclusive não operacionais, devem ser adquiridas.

**curva_nivel**  
Curvas de nível deverão ser criadas na fase de Preparo, e durante a fase de Extração são corrigidos para estarem em conformidade com a hidrografia. 
A equidistância de trabalho durante a Extração deve ser a definida para a escala, e caso a equidistância seja modificada para fins de edição isso somente será feito via estilização das curvas.

**ponto_cotado**  
Pontos cotados deverão ser criados na fase de Extração, mais especificamente na subfase de Verificação Final, e serão tratados diferentemente do previsto na cartografia legada com o T34-700. O número de pontos cotados será menor e seu posicionamento será mais definido em feições do terreno que podem ser facilmente identificáveis.
* Pontos cotados terão cota inteira e não há necessidade de forçar mudança de cota se ele tiver cota na mesma equidistância que a curva de nível.
* Em regiões com grande variação de altitude (superior a 250 metros) deve ser utilizados entre 50 e 150 pontos cotados. Em regiões com variação inferior a 250 metros deve ser utilizado entre 25 e 75 pontos cotados.
* O espaçamento mínimo entre pontos cotados deve ser 20 mm e o máximo ser 200 mm.
* O ponto mais alto e mais baixo do produto devem ser identificado como ponto cotado.
* Pontos cotados devem ser inseridos na seguinte prioridade:
    *  Feições naturais com nome;
    *  Cocurutos proeminentes (alta variação de elevação, não somente uma curva fechada), e em depressões significativas;
    *  Interseções entre rodovias principais ou ferrovias em regiões onde o terreno é pouco movimentado sem feições naturais proeminentes;
    *  Interseções entre rodovias de menor importância em regiões sem rodovias principais;
    *  Interseções entre transporte e hidrografia permanente em regiões com rede rodoviária esparsa;
    *  Interseções entre hidrografia; e
    *  Grandes áreas planas.

**ilha**  
Somente Ilhas com nome serão adquiridas.

**toponimo_fisiografico_natural**  
Somente elementos fisiográficos com nome serão adquiridos.

**pista_pouso**  
Helipontos devem ser adquiridos utilizando a geometria ponto, e pistas de pouso conforme as regras de aquisição da ET-ADGV. Pistas de taxi não serão adquiridas.

**limite_legal**  
Somente limites estaduais e internacionais devem ser adquiridos. A informação deve ser extraída de fontes oficiais e deve ser conformado com a imagem e dados vetoriais extraídos.  O limite será aproximado.

**aglomerado_rural**  
Sem observações particulares.

**nome_local**  
Sem observações particulares.

**localidade**  
Sem observações particulares.

**area_pub_militar**  
Primeiramente deve ser adquirido a geometria polígono com o nome da área pública militar e então deve ser adquirida a geometria linha, indicando se o limite é sobreposto com outros elementos ou não. O limite será aproximado.

**terra_indigena**  
Primeiramente deve ser adquirido a geometria polígono com o nome da terra indígena e então deve ser adquirida a geometria linha, indicando se o limite é sobreposto com outros elementos ou não. O polígono de terra indígena virá de fontes oficiais e deve ser conformado com a imagem e dados vetoriais extraídos. O limite será aproximado.

**unidade_conservacao**  
Primeiramente deve ser adquirido a geometria polígono com o nome da unidade de conservação e então deve ser adquirida a geometria linha, indicando se o limite é sobreposto com outros elementos ou não. O polígono de unidade de conservação virá de fontes oficiais e deve ser conformado com a imagem e dados vetoriais extraídos. O limite será aproximado.

**area_sem_dados**  
Deve ser utilizado em regiões que não serão mapeadas, como regiões fora do Brasil, ou regiões com indisponibilidade de imagens.

**extracao_mineral**  
Mesmo elementos de extração mineral com nome desconhecido devem ser adquiridas.

**elemento_hidrografico** – *corredeira*  
Somente corredeiras com nome serão adquiridas.

**elemento_hidrografico** – *queda d’água*  
Somente quedas d’água com nome serão adquiridas.

**terreno_sujeito_inundacao**  
Sem observações particulares.

**elemento_energia** – *linha de transmissão de energia*  
Somente linhas de transmissão de energia serão adquiridas. Para representar as torres de energia na simbologia deve ser utilizada a classe simb_torre_energia.

**elemento_energia** – *subestação de energia*  
Mesmo subestações de energia com nome desconhecido devem ser adquiridas.

**elemento_infraestrutura** – *atracadouro*  
Somente atracadouros de grande porte devem ser adquiridos. Mesmo atracadouros com nome desconhecido devem ser adquiridos.