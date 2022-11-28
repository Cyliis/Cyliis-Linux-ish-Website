import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { getDatabase, ref, update, push, onValue, get, remove, equalTo } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userUpdated = new BehaviorSubject<any>(null)

  provider = new GoogleAuthProvider();
  private auth = getAuth()
  
  private db = getDatabase();

  login() {
    signInWithPopup(this.auth, this.provider)
    .then((result : any) => {
      this.userUpdated.next(result)
    });
  }

  init() {
    onAuthStateChanged(this.auth, async (user : any) => {
      if (user) {
        console.log(user)
        this.userUpdated.next({...user})
        if (await this.userExists(user.uid)) console.log('a')
        // else this.createUser(user)
      }
      else this.userUpdated.next(false)
    })
    return this.auth.currentUser
  }

  getUser() {
    return this.userUpdated.value
  }


  async userExists(userId : any) {
    return !!(await get(ref(this.db, `users/${userId}`))).val()
  }

  logout() {
    signOut(this.auth)
    this.userUpdated.next(false)
  }

  createUser(data : any) {
    let user = {
      name : data.displayName,
      id : data.uid
    }
  }
}
