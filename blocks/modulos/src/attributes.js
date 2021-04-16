import h from '@cea/h'
import * as f from '@cea/f'

export default (self) => {
  function bannerUrl (key, side = '') {
    const banner = {
      desktop: f.or(self.dataset[`bannerDesktopImageUrl${side}`], self.dataset[`bannerTabletImageUrl${side}`], self.dataset[`bannerMobileImageUrl${side}`]),
      mobile: f.or(self.dataset[`bannerMobileImageUrl${side}`], self.dataset[`bannerTabletImageUrl${side}`], self.dataset[`bannerDesktopImageUrl${side}`]),
      tablet: f.or(self.dataset[`bannerTabletImageUrl${side}`], self.dataset[`bannerMobileImageUrl${side}`], self.dataset[`bannerDesktopImageUrl${side}`])
    }

    return banner[key]
  }

  const chains = {
    get backgroundColor () {
      var [colorA, colorB] = f.or(self.dataset.backgroundColor, '').split('|')

      colorA = f.or(colorA, 'transparent')
      colorB = f.or(colorB, colorA)

      return `linear-gradient(to right, ${colorA} 50%, ${colorB} 50%)`
    },

    get bannerAlignItems () {
      return f.or(self.dataset.bannerAlignItems, 'center')
    },

    get bannerDesktopImageUrl () {
      return bannerUrl('desktop')
    },

    get bannerDesktopImageUrlB () {
      return bannerUrl('desktop', 'B')
    },

    get bannerMobileImageUrl () {
      return bannerUrl('mobile')
    },

    get bannerMobileImageUrlB () {
      return bannerUrl('mobile', 'B')
    },

    get bannerTabletImageUrl () {
      return bannerUrl('tablet')
    },

    // get bannerTabletImageUrlB () {
    //   return bannerUrl('tablet', 'B')
    // },

    get bannerTitle () {
      if (f.isEmpty(self.dataset.bannerTitle)) return ''

      const [first, ...others] = f.or(self.dataset.bannerTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketOneButtons () {
      return f.or(self.dataset.bracketOneButtons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
        .slice(0, 6)
    },

    get bannerTabletImageUrlB () {
      return f.or(self.dataset.bannerTabletImageUrlB, self.dataset.bannerMobileImageUrlB, self.dataset.bannerDesktopImageUrlB)
    },

    get bracketOneCategory () {
      return f.or(self.dataset.bracketOneCategory, '_ND_BLOCK-ONE')
    },

    get bracketOneLink () {
      return f.or(self.dataset.bracketOneLink, '').split('|')
    },

    get bracketOneTitle () {
      const [first, ...others] = f.or(self.dataset.bracketOneTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketOneUtmiCampaign () {
      return `${this.utmiCampaignFallback}-BRACKET-ONE_${f.or(self.dataset.bracketOneUtmiCampaign, 'ND')}`
    },

    get bracketTwoButtons () {
      return f.or(self.dataset.bracketTwoButtons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
        .slice(0, 6)
    },

    get bracketTwoCategory () {
      return f.or(self.dataset.bracketTwoCategory, '_ND_BLOCK-TWO')
    },

    get bracketTwoLink () {
      return f.or(self.dataset.bracketTwoLink, '').split('|')
    },

    get bracketTwoTitle () {
      const [first, ...others] = f.or(self.dataset.bracketTwoTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketTwoUtmiCampaign () {
      return `${this.utmiCampaignFallback}-BRACKET-TWO_${f.or(self.dataset.bracketTwoUtmiCampaign, 'ND')}`
    },

    get bracketThreeButtons () {
      return f.or(self.dataset.bracketThreeButtons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
        .slice(0, 6)
    },

    get bracketThreeCategory () {
      return f.or(self.dataset.bracketThreeCategory, '_ND_BLOCK-THREE')
    },

    get bracketThreeLink () {
      return f.or(self.dataset.bracketThreeLink, '').split('|')
    },

    get bracketThreeTitle () {
      const [first, ...others] = f.or(self.dataset.bracketThreeTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketThreeUtmiCampaign () {
      return `${this.utmiCampaignFallback}-BRACKET-THREE_${f.or(self.dataset.bracketThreeUtmiCampaign, 'ND')}`
    },

    get bracketFourButtons () {
      return f.or(self.dataset.bracketFourButtons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
        .slice(0, 6)
    },

    get bracketFourCategory () {
      return f.or(self.dataset.bracketFourCategory, '_ND_BLOCK-FOUR')
    },

    get bracketFourLink () {
      return f.or(self.dataset.bracketFourLink, '').split('|')
    },

    get bracketFourTitle () {
      const [first, ...others] = f.or(self.dataset.bracketFourTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketFourUtmiCampaign () {
      return `${this.utmiCampaignFallback}-BRACKET-FOUR_${f.or(self.dataset.bracketFourUtmiCampaign, 'ND')}`
    },

    get bracketFiveButtons () {
      return f.or(self.dataset.bracketFiveButtons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
        .slice(0, 6)
    },

    get bracketFiveCategory () {
      return f.or(self.dataset.bracketFiveCategory, '_ND_BLOCK-FIVE')
    },

    get bracketFiveLink () {
      return f.or(self.dataset.bracketFiveLink, '').split('|')
    },

    get bracketFiveTitle () {
      const [first, ...others] = f.or(self.dataset.bracketFiveTitle, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get bracketFiveUtmiCampaign () {
      return `${this.utmiCampaignFallback}-BRACKET-FIVE_${f.or(self.dataset.bracketFiveUtmiCampaign, 'ND')}`
    },

    get brands () {
      return f.or(self.dataset.brands, '')
        .split(';')
        .filter(b => !!b)
        .map(b => b.split('|'))
    },

    get button () {
      return self.dataset.button
        ? f.or(self.dataset.button, '').split('|') : []
    },

    get buttons () {
      const buttonsData = f.or(self.dataset.buttons, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))

      return self.dataset.noSlice ? buttonsData : buttonsData.slice(0, 6)
    },

    get categories () {
      return f.or(self.dataset.categories, '')
        .split(';')
        .filter(c => !!c)
        .map(c => c.split('|'))
    },

    get category () {
      return f.or(self.dataset.category, '_ND')
    },

    get collections () {
      return f.or(f.prop('dataset.collections', self), '')
        .split(';')
        .filter(c => !!c)
        .map(c => c.trim().split('|'))
    },

    get colorTransform () {
      return f.test(/^inverse$/, self.dataset.colorTransform) ? 'inverse' : 'black'
    },

    get device () {
      return f.test(/^(mobile|desktop|both)$/, self.dataset.device) ? self.dataset.device : 'both'
    },

    get homeName () {
      return f.or(location.pathname.slice(1), 'home-principal').toUpperCase()
    },

    get link () {
      return f.or(self.dataset.link, '').split('|')
    },

    get moduloName () {
      return f.or(self.tagName, 'ND')
    },

    get moreLink () {
      return f.isEmpty(self.dataset.moreLink)
        ? []
        : f.or(self.dataset.moreLink, '').split('|')
    },

    get n () {
      return f.or(self.dataset.n, ['One'])
    },

    get posts () {
      return f.or(self.dataset.posts, '')
        .split(';')
        .filter(b => !!b)
        .map(b => b.trim().split('|'))
    },

    get order () {
      return 'P' + [].slice.call(document.querySelectorAll('[data-order]')).indexOf(self)
    },

    get position () {
      return f.or(self.dataset.position, 'middle')
    },

    get products () {
      return f.or(self.dataset.products, '')
        .split(';')
        .filter(link => !!link)
        .map(link => link.split('|'))
    },

    get queridinhas () {
      return f.or(self.dataset.queridinhas, '')
        .split(';')
        .filter(item => !!item)
        .map(item => item.split('|'))
    },

    get title () {
      if (f.isEmpty(self.dataset.title)) return ''

      const [first, ...others] = f.or(self.dataset.title, '').split(/\[br\]/)
      return others.reduce((titles, second) => titles.concat(<br />, second), [first])
    },

    get utmiCampaign () {
      return `${this.utmiCampaignFallback}_${f.or(self.dataset.utmiCampaign, 'ND')}`
    },

    get utmiCampaignFallback () {
      return `${this.homeName}_${this.moduloName}_${this.order}`
    },

    get webview () {
      return f.test(/yes/, f.or(self.dataset.webview, 'yes'))
    }
  }

  return new Proxy(self.dataset, {
    get (target, key) {
      return f.prop(key, f.has(key, chains) ? chains : target)
    }
  })
}
