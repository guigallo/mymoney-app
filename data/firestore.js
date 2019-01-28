import { fireapp } from '../config/firebase';

export const firestore = fireapp.firestore();
firestore.settings({});

/**
 * Save document
 */
export const save = (user, collection, data, id = false) => {
  const col = firestore.collection(collection);
  const docToSave = id ? col.doc(id) : col.doc();

  docToSave
    .set({ ...data, author_id: user.uid })
    .then(() => 'Saved with success')
    .catch(err => console.log(err));
}

/**
 * Get all
 */
export const getAll = (user, collection) => firestore
  .collection(collection)
  .where('author_id', '==', user.uid)
  .get()
  .then(querySnapshot => {
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ id: doc.id, ...doc.data() })
    });
    return docs;
  })
  .catch(err => console.log(err));

/**
 * Get by id
 */
export const getById = (collection, id) => firestore
  .collection(collection)
  .doc(id)
  .get()
  .then(doc => ({ id: doc.id, ...doc.data() }))
  .catch(err => console.log(err));

/**
 * Delete by id
 */
export const deleteById = (collection, id) => firestore
  .collection(collection)
  .doc(id)
  .delete()
  .then(() => 'Deleted with success')
  .catch(err => console.log(err));