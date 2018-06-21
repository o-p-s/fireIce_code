import { Component, OnInit, OnDestroy } from '@angular/core';
import { FireIceHttpService } from '../fire-ice-http.service';
import { MatDialog} from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public everything;
  public currentItem;
constructor(public fireIcehttpService:FireIceHttpService, public dialog:MatDialog) { } 
  ngOnInit() {
    this.everything=this.fireIcehttpService.getEverything();
  }

  openDialog(url:string){
    this.currentItem=this.fireIcehttpService.viewInformation(url).subscribe(
      res=>{
        let dialogRef=this.dialog.open(DetailsComponent,{
          width:'600px',
          data:res
        });
      },
      error=>{
        console.log("some error occured");
      }
    )
  }
  ngOnDestroy(): void {
    console.log("Home Component destructor is called")
  }
  
}
