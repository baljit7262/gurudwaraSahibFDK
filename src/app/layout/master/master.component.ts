import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.scss"],
})
export class MasterComponent implements OnInit {
  showFiller = false;
  menu = false;
  clock = false;
  setting = false;
  inventory = false;
 
  constructor(
    private nav: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
   
  }

}
