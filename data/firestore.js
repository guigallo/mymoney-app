import { fireapp as firebase } from '../config/firebase'

export const firestore = firebase.firestore()
firestore.settings({})

export const save = (user, collection, data, id = false) => 
  new Promise((resolve, reject) => {
    const col = firestore.collection(collection)
    const docToSave = id ? col.doc(id) : col.doc()

    docToSave
      .set({ ...data, author_id: user.uid })
      .then(() => resolve('Saved with success'))
      .catch(err => reject(err))
  })

export const getAll = (user, collection) => firestore
  .collection(collection)
  .where('author_id', '==', user.uid)
  .onSnapshot(querySnapshot => {
    const docs = []
    querySnapshot.forEach(doc => docs.push({ id: doc.id, data: doc.data() }))
    return docs
  })

export const getById = (collection, id) => firestore
  .collection(collection)
  .doc(id)
  .get()
  .then(doc => ({ id: doc.id, ...doc.data() }))
  .catch(err => console.log(err))

export const deleteById = (collection, id) => firestore
  .collection(collection)
  .doc(id)
  .delete()
  .then(() => 'Deleted with success')
  .catch(err => console.log(err))