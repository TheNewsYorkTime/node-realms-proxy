const { Authflow: PrismarineAuth } = require('prismarine-auth')
const { RealmAPI } = require('prismarine-realms')
authflow = new PrismarineAuth()

  const api = RealmAPI.from(authflow, 'bedrock')

  const getRealms = async () => {
    const realms = await api.getRealms()
    debug('realms', realms)
    if (!realms.length) throw Error('Couldn\'t find any Realms for the authenticated account')
    return realms
  }
  
  realms.forEach((realm) => console.log(`Realm name is ${realm.name}, Realm ID is ${realm.id}`));
