/**
 * Created by: MetaMagic
 * Date: 21/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'itemadd',
  templateUrl: 'itemadd.component.html'
})
export class ItemaddComponent implements OnInit{
  itemaddModel:ItemaddModel;
 
  constructor(private http: HttpClient) {
    this.itemaddModel=new ItemaddModel();
       }
        onBlur_itemCode(eventData:any){} 
      input_itemCode(eventData:any){} 
      focus_itemCode(eventData:any){} 
        onBlur_itemName(eventData:any){} 
      input_itemName(eventData:any){} 
      focus_itemName(eventData:any){} 
        onBlur_descTxt(eventData:any){} 
      input_descTxt(eventData:any){} 
      focus_descTxt(eventData:any){} 
        onBlur_quantity(eventData:any){} 
      input_quantity(eventData:any){} 
      focus_quantity(eventData:any){} 
        onBlur_price(eventData:any){} 
      input_price(eventData:any){} 
      focus_price(eventData:any){} 
        onClick_addBtn(eventData:any){} 
    ngOnInit(){
  }
 

   
}
export class ItemaddModel{
  itemCode: string;  itemName: string;  descTxt: string;  quantity: number;  price: number; }
