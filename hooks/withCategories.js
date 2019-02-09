import { firestoreConnect, populate, isLoaded, isEmpty, withFirestore, firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import {
  compose,
  withProps,
  withHandlers,
  lifecycle,
  withContext,
  getContext,
  withState
} from 'recompose'

export default compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth, search }) => {
    //const query = [['author_id', '==', auth.uid]];
    //search === '' ? null : query.push(['name', '==', search])

    return [{
      collection: 'categories',
      //where: query,
      orderBy: ['name', 'asc'],
      storeAs: 'allCategories',
    }]
  }),
  connect(({ firestore }) => ({ categories: firestore.data.allCategories })),
  withProps(({categories}) => ({
    categories,
    isLoaded: isLoaded(categories),
    isEmpty: isEmpty(categories)
  }))
)