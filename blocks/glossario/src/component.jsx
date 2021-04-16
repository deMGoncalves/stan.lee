import h from '@cea/h'
import style from './style.css'

export default (glossario) =>
  <section className={style.glossariomarcas}>
    <h1 className={style.glossariomarcas__h1}>Glossário <span className={style.glossariomarcas__span}>de marcas</span></h1>
    <div className={style.glossariomarcas__div}>
      <p className={style.glossariomarcas__p}> Procura por marcas de roupas, acessórios, beleza, decoração e mais, tudo em um só espaço? Então você está no lugar certo. A C&A trabalha com diversas marcas e com marcas parceiras também. Aqui você encontra tudo que é a sua cara, muito além do look. </p>
      <p className={style.glossariomarcas__p}> Separamos as marcas por suas letras iniciais, pra que você encontre o que precisa com mais praticidade. </p>
      {glossario.indice}
    </div>
    <div className={style.glossariomarcas__div}>
      {glossario.marcas}
    </div>
  </section>
