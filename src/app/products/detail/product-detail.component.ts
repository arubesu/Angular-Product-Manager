import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  title: string = 'Product Detail';

  constructor(private route: ActivatedRoute,
    private service: ProductService,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.title += ` ${id}`;
    this.getProduct(id);
  }

  getProduct(id) {
    this.service.getProductById(id).subscribe(product =>
      this.product = product);
  }

  onBack() {
    this.router.navigate(['products']);
  }

}
