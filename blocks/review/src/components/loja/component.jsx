import h from '@cea/h'
import { H2, P } from '@cea/review/src/uikit'
import style from './style.css'

export default (loja) =>
  <div className={style.loja}>
    <H2 size='body' color='black'>opiniões de quem já comprou</H2>
    <div className={style.informacoesGerais}>
      <div className={style.avaliacaoGeral}>
        <P className={style.texto} size='small' color='black'>a Trustvox certifica que a nota média da C&amp;A é</P>
        <span className={style.nota}>{ loja.nota }</span>
        <span className={style.estrela}>{ loja.estrela }</span>
        { loja.quantidade }
        <P className={style.textoAviso} size='xSmall' color='blackLight'>esta loja se preocupa tanto com você consumidor que contratou uma empresa independente para auditar as avaliações da loja. Legal, né? :)</P>
        <P className={style.textoLegal} size='xSmall' color='blackLight'>
          avaliações reais, auditadas por:
          <img className={style.imagem} src='https://cea.vteximg.com.br/arquivos/logo-trustvox.png' />
        </P>
      </div>
    </div>
  </div>
