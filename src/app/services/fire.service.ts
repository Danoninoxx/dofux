import { inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class FireService {

  firestore = inject(AngularFirestore);
  itemCollection!: AngularFirestoreCollection<any>;
  items$!: Observable<any[]>;
  auth = inject(AuthService);

  constructor() {
    this.itemCollection = this.firestore.collection(`users/${this.auth.userData.uid}/dofux`);
    this.items$ = this.itemCollection.valueChanges();
  }
}