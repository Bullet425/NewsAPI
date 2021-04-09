import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
import { UserService } from './../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'authenticationForm',
    templateUrl: './authenticationForm.component.html',
    styleUrls: ["./authenticationForm.component.css"],
})

export class AuthenticationForm{
    result;
    constructor(private userService: UserService){}

    ngOnInit(){
    }
       
    loginForm = new FormGroup({
         username: new FormControl('', Validators.required),
         password: new FormControl('', Validators.required)
    })

    send(values){
        if(values.username === 'javier' && values.password === 'password'){
            this.result = 'Success'
        }else{
            this.result = 'Fail'
        }
    }
}