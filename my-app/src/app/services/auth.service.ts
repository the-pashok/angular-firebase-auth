import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    snackbarConfig: MatSnackBarConfig = {
        duration: 4000,
        panelClass: 'my-snackbar',
        verticalPosition: "bottom",
        horizontalPosition: "center"
    };

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private snackbar: MatSnackBar
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
            const user = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.router.navigateByUrl('/user-page/' + user.user.uid);
            this.snackbar.open('Successfully logged in!', 'Close', this.snackbarConfig);
        } catch (e) {
            alert('Error! ' + e.message);
        }
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigateByUrl('/');
        this.snackbar.open('Successfully logged out!', 'Close', this.snackbarConfig);
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    async registerUser(email, password) {
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            this.snackbar.open('Successfully registered!', 'Close', this.snackbarConfig);
            this.router.navigateByUrl('/sign-in');
        } catch (e) {
            alert(e.message);
        }
    }
}
