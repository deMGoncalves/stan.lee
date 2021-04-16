[voltar](../README.md)

Stan Lee
========
:star2: `Grandes códigos vem com grandes resposabilidades.` :star2:

## Account
![alt Account](https://www.24horas.cl/incoming/article1320000.ece/ALTERNATES/w700/america.jpg "Account")

Aqui seus dados estão seguros. <br />
Projeto responsável pela área do usuário logado.

### Testes
**Region**
Digitar no console do navegador

```javascript
  const megaheader = document.querySelector('cea-megaheader')
  megaheader.addEventListener('regionOpen', console.log.bind(null, 'OPEN'))

  // Liga e desliga
  megaheader.setAttribute('data-region-toggle', 'on')
  megaheader.setAttribute('data-region-toggle', 'off')

  // Endereco
  megaheader.setAttribute('data-region-address', 'av. do teste, numero 11')
  megaheader.setAttribute('data-region-address', '')
```