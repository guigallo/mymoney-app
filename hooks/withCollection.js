import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'recompose'

export default collection =>  {
  const storeName = `all${collection}`
  return compose(
    connect(({ firebase: { auth } }) => ({ auth })),
    firestoreConnect(({ auth }) => ([{
      collection,
      where: ['author_id', '==', auth.uid],
      storeAs: storeName,
    }])),
    connect(({ firestore }) => ({ [collection]: firestore.data[storeName] })),
  )
}

