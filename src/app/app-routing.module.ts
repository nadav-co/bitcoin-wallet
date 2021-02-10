import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { contactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  {path:'', canActivate: [AuthGuard], children: [
    { path: 'edit/contact/:contactId', resolve: { contact: contactResolverService }, component: ContactEditComponent },
    { path: 'edit/contact', component: ContactEditComponent },
    { path: 'contact/:contactId',resolve: { contact: contactResolverService }, component: ContactDetailsComponent },
    { path: 'contact', component: ContactsComponent },
    { path: '', component: HomeComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
