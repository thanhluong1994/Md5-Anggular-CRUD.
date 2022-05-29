import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product: Product = {};
productForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  price: new FormControl(),
  quantity: new FormControl()
});

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  get idControl() {
    return this.productForm.get('id');
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  // Template
// createProduct(form) {
//     this.productService.create(form.value);
//     form.resetForm();
//     // this.router.navigateByUrl('/');
// }

  // Reactive
  createProductUsingReactiveForm() {
this.productService.create(this.productForm.value).subscribe(() => {
  this.productForm.reset();
});

  }
}
