import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/signup/signup.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule, MatMenuModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material' ;
import { MatSelectModule } from '@angular/material/select';
import { StudentToolbarComponent } from './toolbars/studenttoolbar/studenttoolbar.component';
import { TeacherToolbarComponent } from './toolbars/teachertoolbar/teachertoolbar.component';
import { AdminToolbarComponent } from './toolbars/admintoolbar/admintoolbar.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { AssignmentsComponent } from './teacher/assignments/view-assignments/assignments.component';
import { HttpModule } from '@angular/http';
import { AssignmentService } from './teacher/service/assignment.service';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddAssignmentComponent } from './teacher/assignments/add-assignment/add-assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    AdminComponent,
    StudentToolbarComponent,
    TeacherToolbarComponent,
    AdminToolbarComponent,
    TeacherComponent,
    StudentComponent,
    CompareValidatorDirective,
    AssignmentsComponent,
    AddAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  providers: [UserService, AssignmentService, AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent],
  entryComponents: [AddAssignmentComponent],
})

export class AppModule { }