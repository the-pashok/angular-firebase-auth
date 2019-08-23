import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        });
    }

    async login(email: string, password: string) {
        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.router.navigateByUrl('/user-page');
        } catch (e) {
            alert('Error! ' + e.message);
        }
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigateByUrl('/');
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    async registerUser(email, password) {
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        } catch (e) {
            alert(e.message);
        }
    }
}
