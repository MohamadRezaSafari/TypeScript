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
    name: '',
  };
  categoryList: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productSrv.getAllProducts().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  toggleAlert() {
    this.isSidePanelVisible = !this.isSidePanelVisible;
  }
}
