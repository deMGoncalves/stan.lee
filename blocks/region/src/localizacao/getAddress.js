const snapshot = {
  postalCode: "04678020",
  city: "São Paulo",
  state: "SP",
  country: "BRA",
  street: "Rua Professor Djalma Bento",
  number: "",
  neighborhood: "Jardim Luanda",
  complement: "",
  reference: "",
  geoCoordinates: [
    -46.68106460571289,
    -23.66632652282715
  ]
}

export default (location) =>
  new Promise((resolve) => {
    
    if ('vtexjs' in window) {
      vtexjs.checkout.getAddressInformation(location)
      .done((result) => 
        resolve(result)
      )
    }else{
      resolve(snapshot)
    }
    
  })
