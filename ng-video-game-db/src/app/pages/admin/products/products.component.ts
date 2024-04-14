import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbAlertModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = true;
  product: any = {
    id: 0,
    title: '',
  };
  categoryList: any[] = [];
  productList: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getProducts() {
    this.productSrv.getCategories().subscribe((res: any) => {
      this.productList = res;
    })
  }

  getCategories() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.categoryList = res;
      // console.log(res[3]);
    })
  }

  onSave() {
    this.productSrv.saveProduct(this.product).subscribe((res: any) => {
      debugger;
      if(res.result) {
        alert('Product created');
        this.getProducts();
      }else {
        alert(res.message)
      }
    })
  }

  toggleAlert() {
    this.isSidePanelVisible = !this.isSidePanelVisible;
  }
}
