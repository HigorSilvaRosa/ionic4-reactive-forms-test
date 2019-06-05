import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required, Validators.min(0)])],
    })
  }

  save() {
    this.loadingController.create({
      duration: 5000,
      message: 'Please wait...',
    }).then(loading => {
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.form.reset();
      }, 5000)
    });
  }

}
