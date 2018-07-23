import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { SelectionModel } from '../../../node_modules/@angular/cdk/collections';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pageTitle: string = "Admin";
  columnsToDisplay = ['select','productName', 'productCode', 'releaseDate',
  'description', 'price', 'imageUrl'];
  selection = new SelectionModel<any>(true, []);


  data = [ {
    "id": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
},
{
    "id": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
}]

dataSource = new MatTableDataSource(this.data);
  constructor() { }

  ngOnInit() {
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.data.forEach(row => this.selection.select(row));
  }

  test(event:MouseEvent){
    let action = event.target.innerText;
    switch(action){
      case 'Add':{
        console.log('Add...');
        break;
      }
      case 'Edit':{
        console.log('Edit...');
        break;
      }
      case 'Remove':{
        console.log('Remove...');
        break;
      }
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
