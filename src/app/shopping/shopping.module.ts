import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingAddModalComponent } from './components/shopping-add-modal/shopping-add-modal.component';
import { ShoppingEditModalComponent } from './components/shopping-edit-modal/shopping-edit-modal.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingAddModalComponent, ShoppingEditModalComponent],
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShoppingListComponent
  ],
  entryComponents: [
    ShoppingAddModalComponent,
    ShoppingEditModalComponent
  ]
})
export class ShoppingModule { }
