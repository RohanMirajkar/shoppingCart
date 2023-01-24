
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DilogComponentComponent } from './dilog-component/dilog-component.component';
import { BagService } from './shared/services/bag-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [BagService]
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav

  constructor(private Observer : BreakpointObserver , public dialog: MatDialog){}

  ngAfterViewInit(){
    this.Observer.observe(['(max-width : 800px)']).subscribe(res =>{
      if(res.matches){
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(DilogComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
