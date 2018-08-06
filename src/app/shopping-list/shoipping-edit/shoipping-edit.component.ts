import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {injectElementRef} from '@angular/core/src/render3';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shoipping-edit',
  templateUrl: './shoipping-edit.component.html',
  styleUrls: ['./shoipping-edit.component.css']
})
export class ShoippingEditComponent implements OnInit {

  @ViewChild('ingName') ingNameELementRef: ElementRef;
  @ViewChild('ingAmount') ingAmountELementRef: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredients() {
    const ingName = this.ingNameELementRef.nativeElement.value;
    const ingAmount = this.ingAmountELementRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredientAdded.emit(newIngredient);
  }
}
