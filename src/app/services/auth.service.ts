import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAuthenticated(): boolean{
        return !!localStorage.getItem('token');
    }

    sum(first: number, second: number): number {
        return first + second;
    }
}
