const headers = new Headers()
headers.append('x-server-origin', 'minhacea.mais')

export default function findUser (user, partner = 'mais') {
  return fetch(getEndpoint(partner, user), { method: 'GET', headers: headers })
    .then(response => response.json())
    .then(users => users.shift())
    .then(userData =>
      (partner === 'mais' && (userData === undefined || Object.keys(userData).length === 0))
        ? findUser(user, 'ApolloUp')
        : (userData === undefined || Object.keys(userData).length === 0) ? null : setPartner(userData, partner)
    )
    .catch(error => console.log(`[Stan Lee] Pixel / Reseller / getUser: ${error}`))
}

function setPartner (user, partner) {
  user.partner = partner
  return user
}

function getEndpoint (partner, user) {
  // TODO: Usar OneOff...
  return (partner === undefined || partner === 'mais')
    ? `https://apicea.mais.com.br/api/MinhaCea/FindDataByDomain/${user}/${user}`
    : `https://www.apolloup.com.br/alto/promotores/08522b4b/${user}`
}
