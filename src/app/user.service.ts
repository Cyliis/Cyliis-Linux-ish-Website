import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userUpdated = new BehaviorSubject<any>(null)

  provider = new GoogleAuthProvider();
  private auth = getAuth()

  db = getFirestore();

  login() {
    signInWithPopup(this.auth, this.provider)
    .then((result : any) => {
      this.userUpdated.next(result)
    });
  }

  init() {
    onAuthStateChanged(this.auth, async (user : any) => {
      if (user) {
        let userInfo = await this.getRealUser(user)
        if (userInfo) this.userUpdated.next(userInfo)
        else this.createUser(user) 
      }
      else this.userUpdated.next(false)
    })
    return this.auth.currentUser
  }

  getUser() {
    return this.userUpdated.value
  }

  logout() {
    signOut(this.auth)
    this.userUpdated.next(false)
  }

  async getRealUser(user : any) {
    let userData : any = false
    let queryData = query(collection(this.db, "users"), where("email", "==", user.email))
    let data = await getDocs(queryData)
    data.forEach((el : any) => {
      if (el.data()) {
        userData = el.data()
        userData.id = el.id
      }
    })
    console.log(userData)
    return userData
  }

  async nextChessLevel() {
    let user = this.getUser()
    await updateDoc(doc(this.db, `users/${user.id}`), {
      chessLevel : user.chessLevel + 1
    })
    user.chessLevel++
    this.userUpdated.next(user)
  }

  async nextDecodeLevel() {
    let user = this.getUser()
    await updateDoc(doc(this.db, `users/${user.id}`), {
      decodeLevel : user.decodeLevel + 1
    })
    user.decodeLevel++
    this.userUpdated.next(user)
  }

  async createUser(user : any) {
    await addDoc(collection(this.db, "users"), {
      username: user.displayName,
      email: user.email,
      uid: user.uid,
      chessLevel: 0,
      decodeLevel: 0,
    });
  }
}
