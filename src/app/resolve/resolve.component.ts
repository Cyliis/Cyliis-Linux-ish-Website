import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, filter, map, Subject, tap, timer } from 'rxjs';
import { resolve } from '../cl/resolve.data';
import { UserService } from '../user.service';
import { WindowsService } from '../windows.service';


@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent implements OnInit {

  constructor(private windowsService : WindowsService, private userService : UserService, private _snackBar: MatSnackBar) { }

  @ViewChild('input') inputRef!: ElementRef
  
  resolves = [...resolve]
  message$ = new BehaviorSubject<any>(undefined)

  user$ = this.userService.getUserUpdateListener().pipe(
    map((user) : any => {
      if (user?.resolveLevel == this.resolves.length){
        this.message$.next("You've finished typography")
        user.resolveLevel = 0
      }
      return user
    })
  )

  

  ngOnInit(): void {
    console.log('a')
  }

  onSubmit(form : NgForm, user : any) {
    let answer = form.form.value['answer'].trim().toLowerCase()
    if (!answer) return
    if (this.resolves[user.resolveLevel].answer().includes(answer.toLowerCase())) {
      this.userService.nextResolveLevel()
      if (user.resolveLevel == this.resolves.length - 1){
        this.windowsService.closeWindow('resolve')
        this._snackBar.open("You finished criptography", "", {duration : 3000});
      }
      this.message$.next("Correct!!!")
      form.reset()
    }
    else {
      this.message$.next("Wrong")
    }
  }

  onNext() {
    if (this.message$.value == "You've finished typography") return
    this.message$.next('')
  }
}
