import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  all_giphy: any;
  newForm: FormGroup;
  min_giphy: number = 18
  
  constructor(private api_serv: ApiServiceService,
    private fb: FormBuilder){}

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

}
