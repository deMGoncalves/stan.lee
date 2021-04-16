import { paint } from '@cea/h'
import component from './component'
import Sucesso from '@cea/megafooter/src/lead/sucesso'

@paint(component)
export default class Form {
  constructor (lead) {
    this.email = ''
    this.genero = 'Feminino'
    this.lead = lead
    return this
  }

  alterarEmail (email) {
    this.email = email
    return this
  }

  alterarGenero (genero) {
    this.genero = genero
    return this
  }

  alterarMensagemErro (erro) {
    document.getElementById('formError').innerHTML = erro
    setTimeout(() => {
      document.getElementById('formError').innerHTML = ''
    }, 5000)
  }

  showLoading (isVisible) {
    isVisible ? document.getElementById('form__loading__block').style.visibility = 'visible' : document.getElementById('form__loading__block').style.visibility = 'hidden'
  }

  enviar () {
    this.showLoading(true)
    fetch('https://xtwnriuipb.execute-api.us-east-1.amazonaws.com/prod/cea/profile', {
      method: 'POST',
      body: JSON.stringify(
        {
          lead: 'leadssecond',
          email: this.email,
          gender: this.genero,
          cadastroOrigem: 'leadsnewsfooter10',
          isNewsletterOptIn: 'true',
          utmSourceOrigem: null,
          utmCampaignOrigem: null,
          utmMediumOrigem: null
        }
      )
    })
      .then(data => data.json())
      .then(data => {
        const isRegistered = data.results.older
        if (isRegistered) {
          this.showLoading(false)
          this.alterarMensagemErro('Seu e-mail já está cadastrado.')
        } else {
          this.showLoading(false)
          this.lead.alterarStatus(new Sucesso(this.lead))
        }
      })
      .catch(() => {
        this.showLoading(false)
        this.alterarMensagemErro('Serviço indisponível no momento.')
      })
    return this
  }
}
