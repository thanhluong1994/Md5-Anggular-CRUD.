import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
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

  update() {
    this.productService.update(this.idControl.value, this.productForm.value).subscribe(() => {
    });
    this.router.navigateByUrl('/');
  }
}

