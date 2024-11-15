import { Routes } from '@angular/router';
import { MainComponent } from './MainComp/main/main.component';
import { BookpoojaComponent } from './Pages/bookpooja/bookpooja.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { AstromallComponent } from './Pages/astromall/astromall.component';

import { ChatastroComponent } from './Pages/chatastro/chatastro.component';

import { LoginComponent } from './AuthComp/login/login.component';
import { SignupComponent } from './AuthComp/signup/signup.component';
import { AdminComponent } from './AdminComp/admin/admin.component';
import { ErrorComponent } from './Comp/error/error.component';



export const routes: Routes = [
    { path: '', title: "Home", component: MainComponent },
    { path: 'bookpooja', title: "BookPooja", component: BookpoojaComponent },
    { path: 'astromall', title: "AstrolMall", component: AstromallComponent },
    { path: 'chatastro', title: "Chatastro", component: ChatastroComponent },
    { path: 'blog', title: "Blog", component: BlogComponent },
    { path: 'login', title: "Login", component: LoginComponent },
    { path: 'signup', title: "SignUp", component: SignupComponent },
    { path: 'admin', title: "SignUp", component: AdminComponent },
    { path: '**', title: "Page not found", component: ErrorComponent
    },
];
