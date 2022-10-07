import firestore from '@react-native-firebase/firestore'
import { ITraveller } from '../../types'

export const createTraveller = (traveller: ITraveller) =>
  firestore().collection('travellers').add(traveller)

export const updateTraveller = (travellerId: string, traveller: ITraveller) =>
  firestore().collection('travellers').doc(travellerId).update(traveller)

export const removeTraveller = (travellerId: string) =>
  firestore().collection('travellers').doc(travellerId).delete()
