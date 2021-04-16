import * as f from '@cea/f'

export default (resumo) => {
  fetch('/checkout/cart/add?sku=' + resumo.sku + '&qty=1&seller=1&redirect=false&' + CEA.util.getSalesChannel(), {
    method: 'POST'
  })
    .then(() => {
      if ('vtexjs' in window) {
        vtexjs.catalog.getCurrentProductWithVariations().done((response) => {
          response.skus.forEach((skus) => {
            f.cond([f.equal(skus.sku, resumo.sku), () => {
              const listPriceItem = skus.bestPrice

              CEA.util.pushDataLayer({
                event: 'skuAddedToCart',
                skuId: resumo.sku,
                skuBestPrice: listPriceItem,
                quantity: '1'
              })
            }])
          })
        })

        f.cond([f.not(f.isNil(resumo.loja)), CEA.globals.cookies.set('itemDelivery' + resumo.sku.toString(), 'Retirada na Loja (' + resumo.loja + ')')])

        vtexjs.checkout.getOrderForm()
          .done((orderForm) => {
            const shippingData = orderForm.shippingData
            let itemIndex = ''

            if (!shippingData.address) {

            } else {
              f.cond([f.not(f.isNil(resumo.loja)), () => {
                shippingData.logisticsInfo.forEach((logisticInfo, index) => {
                  if (logisticInfo.itemId.toString() === resumo.sku.toString()) {
                    itemIndex = logisticInfo.itemIndex
                    shippingData.logisticsInfo[index].selectedDeliveryChannel = 'pickup-in-point'
                    shippingData.logisticsInfo[index].selectedSla = 'Retirada na Loja (' + resumo.loja + ')'
                  }
                })

                CEA.globals.cookies.set('itemDelivery' + itemIndex.toString(), 'pickup-in-point')

                vtexjs.checkout.sendAttachment('shippingData', shippingData)
              }])
            }
          })

        CEA.component.productKeepBuying(resumo.sku, document.getElementsByClassName('productName').text())
      }
    }).fail(() => {
      // jQuery.fancybox.open({
      // type:'html',
      //  content:'<div class="alert"><span class="alert-title">Atenção</span><p>Ocorreu um erro ao adicionar o produto na sua sacola. <br />Por favor, tente novamente.</p></div>'
      // });
    }).always(() => CEA.globals.loader.off())
}
