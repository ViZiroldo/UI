import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Function } from 'src/app/shared';
import { FunctionService } from '../services/function.service';

@Component({
  selector: 'app-insert-edit-function',
  templateUrl: './insert-edit-function.component.html',
  styleUrls: ['./insert-edit-function.component.css']
})
export class InsertEditFunctionComponent implements OnInit {
  @ViewChild('formFunc') formFunc!: NgForm;
  isNewFunc: boolean = true;
  func: Function = new Function();
  id!: string;
  isLoading!: boolean;

  constructor(
    private funcService: FunctionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.func = new Function();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewFunc = !this.id;

    if (!this.isNewFunc) {
      this.funcService.getById(+this.id).subscribe(
        func => {
          this.func = func;
          this.func.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formFunc.form.valid) {
      if (this.isNewFunc) {
        this.funcService.insert(this.func).subscribe(
          func => {
            this.isLoading = false;
            this.router.navigate(["/functions"]);
          }
        )
      }
    }
    else {
      this.funcService.update(this.func).subscribe(
        func => {
          this.isLoading = false;
          this.router.navigate(["/functions"]);
        }
      )
    }
    this.isLoading = false;
  }
}
