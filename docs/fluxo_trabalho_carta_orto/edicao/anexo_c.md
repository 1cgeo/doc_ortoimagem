---
sidebar_position: 3
title: 'Catálogo de Símbolos'
description: 'Símbolos utilizados na Carta Ortoimagem'
---


Este catálogo está dividido pelas categorias da EDGV e, em cada categoria, pelas classes instanciáveis conforme previsto na ADGV. A organização das tabelas é a seguinte:
1. Classe: na primeira linha da tabela consta a classe da EDGV que será representada, seguida do seu código. Algumas classes foram adicionadas apenas para fins de representação, ou seja, não existem na EDGV. Nesse caso, o código começa pelo número “3”;
2. Caso/especificação: cada classe possui diferentes representações cartográficas em função de suas propriedades geométricas ou convencionais:
    1. Caso (mandatório): essa coluna descreve os possíveis casos que podem ocorrer com determinada classe. Os casos se dividem em propriedades geométricas e convencionais, podendo ainda ocorrer algum caso relativo a outras classes no entorno. É possível que o caso inclua informações de escala;
        1. Texto (mandatório, se representável): apresenta as especificações para o texto da representação. Pode ocorrer alguma seleção de propriedades, como no caso dos símbolos. O normal é ocorrer apenas o “Texto”, trazendo na coluna seguinte as especificações do texto;
        2. Instruções complementares (opcional): chamada para algumas instruções complementares que devem ser observadas na representação;
        3. Exemplos (opcional): chamada para possíveis exemplos na coluna seguinte, mostrando a representação da classe, bem como agregando outras classes auxiliares, conforme orientações por escrito nos exemplos;
3. Especificação (mandatório): coluna que agrega as informações conforme as chamadas da primeira coluna;
    1. Símbolo (opcional): essa parte traz o símbolo que será usado para representar a classe em verdadeira grandeza. Pode ocorrer algum caso em que a classe não é representada, ou é representada apenas por texto;
    2. Detalhes (mandatório, se símbolo): essa parte da tabela apresenta os detalhes para construção do símbolo apresentado na seção correspondente. Os detalhes estão em escala ampliada 5:1, mas é possível que ocorra outro fator, que nesse caso será informado. Todas as distâncias estão em milímetros (mm);
    3. Propriedades do símbolo (mandatório se símbolo): essa parte da tabela descreve, de forma textual, como o símbolo deve aparecer.
    4. Posicionamento (opcional): essa parte descreve informações complementares para o posicionamento do símbolo em relação ao objeto. Caso omitida, o símbolo deve ser posicionado no centro do objeto;
    5. Especificações de texto (mandatório): traz detalhes sobre a construção dos rótulos que devem ser empregados na representação cartográfica;
        1) Valor (mandatório se texto): descreve o valor a ser empregado no rótulo, usando a notação de aspas duplas (“) para propriedades e aspas simples (‘) para valores literais. Caso o valor seja nulo ou vazio, o texto não será representado;
        2) Fonte (mandatório se texto): apresenta as especificações da fonte tipográfica a ser usada na representação do texto. Deve ser usada uma fonte sem serifa, sendo recomendada a Noto Sans. As propriedades da fonte são: peso (regular, condensed, light), cor (vide Anexo C), tamanho, decoração (itálico, negrito), caixa (baixa por padrão);
        3) Nota (opcional): uma nota com informações complementares para definir a representação texto do objeto.