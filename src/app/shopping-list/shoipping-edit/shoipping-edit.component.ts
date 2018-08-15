import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shoipping-edit',
  templateUrl: './shoipping-edit.component.html',
  styleUrls: ['./shoipping-edit.component.css']
})
export class ShoippingEditComponent implements OnInit {

  @ViewChild('ingName') ingNameELementRef: ElementRef;
  @ViewChild('ingAmount') ingAmountELementRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.ingNameELementRef.nativeElement.value;
    const ingAmount = this.ingAmountELementRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
