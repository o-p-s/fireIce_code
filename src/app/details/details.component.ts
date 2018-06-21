import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnDestroy {

  constructor(public dialogRef:MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

  onCloseConfirm():void{
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
