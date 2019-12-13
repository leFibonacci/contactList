import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { WithLastnamePipe } from './shared/with-lastname.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsAgePipe } from './shared/as-age.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DigitOnlyDirective } from './digit-only.directive';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    WithLastnamePipe,
    AsAgePipe,
    EditUserComponent,
    DigitOnlyDirective,
    ImageSelectorComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
