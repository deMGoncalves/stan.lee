[voltar](../README.md)

Stan Lee
========
:star2: `Grandes códigos vem com grandes resposabilidades.` :star2:

## Mask
![Mask](https://s.aficionados.com.br/imagens/black-panther-vs-black-panther.jpg "Mask")

Estrutura de máscara para formatação de valores

## chamada em um input
Chame a máscara no input através do atributo mask='{nome da máscara}'
```bash
    <input mask='cep' /> # --> máscara para formatação de CEP
    <input mask='tel' /> # --> máscara para formatação de telefone
  ```

## chamada dentro do conteúdo html no component .jsx
import o component Mask e chame <Mask.{nome da máscara}>Valor a formatar </Mask.{nome da máscara}>
```bash
    import Mask from '@cea/mask'
    
    <Mask.cep>06455000</Mask.cep> # --> 06455-000
    <Mask.tel>1135852892</Mask.tel> # --> (11)3585-2892

  ```
## Máscaras disponíveis
```bash
    cep  # 06455000 --> 06455-000
    currency # 9990 --> 99,90 | 99.90 --> 99,90
    date # 25022021 --> 25/02/2021
    number # permite apenas números
    tel # 1135852892 --> (11)3585-2892 | 11991122333 --> (11)99112-2333
  ```

## Como adicionar novos patterns
Adicione o pattern desejado em shared\mask\src\patterns e adicione o nome no arquivo index.js na mesma pasta. Exemplo:
```bash
    shared\mask\src\patterns\mymask
    no index.js
    export { default as mymask } from './mymask'
  ```