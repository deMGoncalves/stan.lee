import servicesUTM from './getOrderForm'

export default async function (utmCampaign, partner) {
  const { orderForm } = await servicesUTM?.find()

  orderForm?.sendAttachment(
    'marketingData',
    {
      ...orderForm.marketingData,
      utmSource: partner,
      utmCampaign: utmCampaign,
      utmMedium: utmCampaign === '' ? '' : 'minhacea'
    }
  )
}
