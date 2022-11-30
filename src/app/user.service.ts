import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

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

  async nextResolveLevel() {
    let user = this.getUser()
    await updateDoc(doc(this.db, `users/${user.id}`), {
      resolveLevel : user.resolveLevel + 1
    })
    user.resolveLevel++
    this.userUpdated.next(user)
  }

  async createUser(user : any) {
    let userInfo = {
      username: user.displayName,
      email: user.email,
      uid: user.uid,
      codes : {},
      chessLevel: 0,
      resolveLevel: 0,
    }
    await addDoc(collection(this.db, "users"), userInfo);
    this.userUpdated.next(userInfo)
  }

  async setCode(code : "any") {
    let user = this.getUser()
    user.codes[code] = true
    await updateDoc(doc(this.db, `users/${user.id}`), {codes : user.codes})
  }

  getUserState(user : any) {
    let points = 0
    points += user.chessLevel * 20
    if (user.resolveLevel < 7) {
      points += user.resolveLevel * 10
    }
    if (user.resolveLevel >= 7) {
      points += 140
      if (user.resolveLevel > 8) points += 40
      if (user.resolveLevel > 8) {
        points += (user.resolveLevel - 7) * 60
      }
    }
      Object.keys(user.codes).forEach(() => points += 20)
    return `<pre>${user.username}: <span class="mark">${points}</span> points</pre>`
  }

  async getCodes() {
    let res: any = [];
    (await getDocs(query(collection(this.db, 'codes')))).forEach((el : any) => res = el.data().codes)
    return res
  }

  async getLogs() {
    let res : any = ''
    let users = await getDocs(query(collection(this.db, `users`)))
    users.forEach((user) => {
      res += this.getUserState(user.data())
    })
    return res
  }
}
