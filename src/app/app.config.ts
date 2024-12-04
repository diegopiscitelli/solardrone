import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"solardrone-test","appId":"1:797682030341:web:3760817f72d7bee729496c","storageBucket":"solardrone-test.firebasestorage.app","apiKey":"AIzaSyB8eaHD7K3gW4tTMln2ZDigwSEXsRKS19E","authDomain":"solardrone-test.firebaseapp.com","messagingSenderId":"797682030341"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
