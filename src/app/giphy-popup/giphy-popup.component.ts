import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-giphy-popup',
  templateUrl: './giphy-popup.component.html',
  styleUrls: ['./giphy-popup.component.css']
})
export class GiphyPopupComponent implements OnInit {

  giphy_event = new EventEmitter()
  all_giphy: any;
  newForm: FormGroup;
  min_giphy: number = 18
  
  constructor(private api_serv: ApiServiceService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GiphyPopupComponent>
  ){}

  ngOnInit(){
    
    console.log("Hiiiiii")

    this.newForm = this.fb.group({
      giphy_name: ['', Validators.required],
    });
  }

  getAllGiphy(){
    let self = this;
    let giphy_to_serach = self.newForm.get('giphy_name'). value
    console.log("==================", giphy_to_serach)
    this.api_serv.getGiphy(giphy_to_serach).subscribe(data=>{
      console.log("Data from API Service", data)
      self.all_giphy = data
    })
  }

  showMore(){
    this.min_giphy = this.min_giphy + 18
  }

  selectGiphy(giphy){
    console.log("Selected Giphy : ", giphy)
    this.giphy_event.emit(giphy)
    this.dialogRef.close()
  }

}
