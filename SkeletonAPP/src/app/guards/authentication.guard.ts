import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly loginService: LoginService
    ){ }
    async canActivate() {
        console.log('ejecutando guard!')
        const auth = await this.loginService.isAuthenticated();
        if (!auth) {
            console.log('usuario no autenticado!')
            await this.router.navigate(['/login']);
        }
        return auth;
    }
}