import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/shared';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-inser-edit-group',
  templateUrl: './inser-edit-group.component.html',
  styleUrls: ['./inser-edit-group.component.css']
})
export class InsertEditGroupComponent implements OnInit {
  @ViewChild('formGroup') formGroup!: NgForm;
  isNewGroup: boolean = true;
  group: Group = new Group();
  id!: string;
  isLoading!: boolean;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.group = new Group();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewGroup = !this.id;

    if (!this.isNewGroup) {
      this.groupService.getById(+this.id).subscribe(
        group => {
          this.group = group;
          this.group.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formGroup.form.valid) {
      if (this.isNewGroup) {
        this.groupService.insert(this.group).subscribe(
          group => {
            this.isLoading = false;
            this.router.navigate(["/groups"]);
          }
        )
      }
    }
    else {
      this.groupService.update(this.group).subscribe(
        group => {
          this.isLoading = false;
          this.router.navigate(["/groups"]);
        }
      )
    }
    this.isLoading = false;
  }
}
