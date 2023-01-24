import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { BagComponent } from './bag/bag.component';
import { DilogComponentComponent } from './dilog-component/dilog-component.component';





@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShoppingItemComponent,
    BagComponent,
    DilogComponentComponent,
  ],
  entryComponents : [DilogComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
