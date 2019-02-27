import firebase from 'firebase'
const Timestamp = firebase.firestore.Timestamp

export const TimestampNow = () => TimestampFromDate(new Date)
export const TimestampFromDate = (date) => Timestamp.fromMillis(date.getTime())