import h from '@cea/h'
import define from '@cea/modulos/src/define'
import style from './style.css'
import inLineColor from './inLineColor'

define('hashtag-highlight', ({ self }) =>
  <section className={style.hashtagHighlight}>
    <h2 className={style.hashtagHighlight__hashtag} style={inLineColor(self.hashtagColor)}>{self.hashtag}</h2>
    <h3 className={style.hashtagHighlight__title} style={inLineColor(self.titleColor)}>{self.title}</h3>
    <p className={style.hashtagHighlight__text} style={inLineColor(self.textColor)}> {self.text}</p>
  </section>
)
