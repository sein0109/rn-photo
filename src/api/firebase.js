import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../env.js';

export const initFirebase = () => {
     return initializeApp(firebaseConfig);
};