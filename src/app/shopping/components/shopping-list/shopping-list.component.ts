import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingItem } from '../../models/shoppingItem';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingAddModalComponent } from '../shopping-add-modal/shopping-add-modal.component';
import { ShoppingEditModalComponent } from '../shopping-edit-modal/shopping-edit-modal.component';

@Component({
  selector: 'cf-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<ShoppingItem>;

  constructor(private shoppingService: ShoppingService, public dialog: MatDialog) {
    this.displayedColumns = ['name', 'quantity', 'actions'];

  }

  ngOnInit() {
    this.getShoppingList();
  }

  private getShoppingList() {
    this.shoppingService.getShopping().subscribe((shoppings: ShoppingItem[]) => {
      this.dataSource = new MatTableDataSource<ShoppingItem>(shoppings);
    });
  }


  addShoppingItem() {
    const dialogRef = this.openAddShoppingItem();
    this.handleAddFinish(dialogRef);
  }

  private openAddShoppingItem() {
    return this.dialog.open(ShoppingAddModalComponent, {
      width: '300px',
    });
  }

  private handleAddFinish(dialogRef) {
    dialogRef.afterClosed().subscribe((shoppingItemToAdd: ShoppingItem) => {
      if (shoppingItemToAdd !== undefined) {
        this.shoppingService.add(shoppingItemToAdd);
        this.getShoppingList();
      }
    });
  }

  editShoppingItem(shoppingItemToEdit: ShoppingItem) {
    const dialogRef = this.openEditShoppingItem(shoppingItemToEdit);
    this.handleEditFinish(dialogRef);
  }

  private openEditShoppingItem(shoppingItemToEdit: ShoppingItem) {
    return this.dialog.open(ShoppingEditModalComponent, {
      width: '300px',
      data: { ...shoppingItemToEdit }
    });
  }

  private handleEditFinish(dialogRef) {
    dialogRef.afterClosed().subscribe((editedShoppingItem: ShoppingItem) => {
      if (editedShoppingItem !== undefined) {
        this.shoppingService.edit(editedShoppingItem).subscribe();
        this.getShoppingList();
      }
    });
  }

  deleteShoppingItem(shoppingItemToDelete: ShoppingItem) {
    this.shoppingService.delete(shoppingItemToDelete).subscribe(() => {
      this.getShoppingList();
    });
  }
}

