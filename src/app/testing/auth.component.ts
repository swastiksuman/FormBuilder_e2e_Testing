import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    template: '<h1>Login</h1>'
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) { }

    needsLogin(){
        return !this.auth.isAuthenticated();
    }

    ngOnInit(){

    }
}