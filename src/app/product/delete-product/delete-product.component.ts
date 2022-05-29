import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    quantity: new FormControl()
  });

  constructor(private productService: ProductService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getProductById(id);
    });
  }

  ngOnInit() {
  }

  get idControl() {
    return this.productForm.get('id');
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  getProductById(id) {
    this.productService.findById(id).subscribe((product: Product) => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name, [Validators.required]),
        price: new FormControl(product.price),
        quantity: new FormControl(product.quantity)
      });
    });
  }
delete() {
    this.productService.delete(this.idControl.value).subscribe(() => {
    });
    this.router.navigateByUrl('/');
}
}
