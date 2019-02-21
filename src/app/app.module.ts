import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { WithLastnamePipe } from './shared/with-lastname.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsAgePipe } from './shared/as-age.pipe';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    WithLastnamePipe,
    AsAgePipe,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
