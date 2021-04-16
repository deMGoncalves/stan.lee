import h from '@cea/h'
import * as f from '@cea/f'
import * as ui from '@cea/review/src/uikit'
import style from './style.css'

export default (produto) =>
  <div className={style.produto}>
    <ui.H2 className={style.tituloModulo} size='body' color='black'>
      <span className={style.tituloModulo__span}>opiniões de quem já comprou</span>
    </ui.H2>

    <div className={style.informacoesGerais}>
      <div className={style.avaliacaoGeral}>
        <span className={style.nota}>{ produto.nota }</span>
        <span className={style.estrela}>{ produto.estrela }</span>
        { produto.quantidade }
      </div>

      <ui.Show if={f.not(f.test(/^0/, produto.recomendacao))}>{ produto.recomendacao }</ui.Show>
    </div>

    <div className={style.avaliacoes}>
      { produto.filtro }
      <ui.Show if={f.prop('avaliacoes[0]', produto) === 'Loading'}><ui.Loading /></ui.Show>
      <ui.Show if={f.not(f.prop('avaliacoes[0]', produto) === 'Loading')}>{ produto.avaliacoes }</ui.Show>
    </div>

    <ui.Show if={f.lte(produto.visivel, f.or(produto.avaliacoes, []).length)}>
      <button className={style.maisAvaliacao} onClick_stop={() => produto.verMais(produto.visivel)}>mais avaliações</button>
    </ui.Show>

    <ui.P className={style.textoLegal} size='xSmall' color='blackLight'>
      avaliações reais, auditadas por:
      <img className={style.imagem} src='https://cea.vteximg.com.br/arquivos/logo-trustvox.png' />
    </ui.P>
  </div>
