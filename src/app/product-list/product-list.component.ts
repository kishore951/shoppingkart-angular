import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }



  fetchData=()=>{
    this.myapi.viewShop().subscribe(
      (data)=>{
        this.productData=data
      }    )
  }

  productData:any=[]

  ngOnInit(): void {
  }

}
