import { paint, repaint } from '@cea/h'
import radio from '@cea/radio'
import component from './component'
import Modal from './modal'

const oneOff = Symbol('oneOff')
@paint(component)
class Services {
  get className () {
    return this[oneOff].className
  }

  get list () {
    return [
      { name: 'BBB21', url: 'https://www.cea.com.br/bbb', icon: '' },
      { name: 'baixe o app', url: 'https://appcea.onelink.me/2RmC/servicebar', icon: '' },
      { name: 'central de atendimento', url: 'https://atendimentocea.zendesk.com/hc/pt-br', icon: 'sac' },
      { name: 'compre pelo Whatsapp', url: 'https://wa.me/551135852892', icon: 'whatsapp' },
      { name: 'cartão C&A: 4004-0127', url: 'https://www.bradescard.com.br/SiteBradescard/cea', icon: 'card' },
      { name: 'acompanhar meu pedido', url: 'https://www.cea.com.br/_secure/minha-conta#/pedidos', icon: 'details' },
      { name: 'solicitar devolução de pedido', url: 'https://www.cea.com.br/_secure/minha-conta#/pedidos', icon: 'turnback' },
      { name: 'encontrar lojas', url: 'http://www.cea.com.br/lojas', icon: 'stores' },
      { name: 'C&A&VC', url: 'https://www.cea.com.br/evc-programa-de-relacionamento', icon: 'ceavc' },
      { name: 'venda na C&A', url: 'https://www.cea.com.br/galeria-venda-aqui', icon: 'vendacea' }
    ]
  }

  get modal () {
    return this[oneOff].modal
  }

  constructor (props) {
    this[oneOff] = { ...props }
    this[oneOff].modal = new Modal(this)
    return this
  }

  @repaint
  open () {
    radio.emit('services', { event: 'open' })
    return this
  }
}

export default Services
