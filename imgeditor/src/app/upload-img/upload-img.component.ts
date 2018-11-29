// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { DispalyComponent } from '../dispaly/dispaly.component';
import { from } from 'rxjs';
import { SharingdataService } from '../sharingdata.service';

// import { AngularCropperjsComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit{
  imageUrl:any = null;
  constructor(private sharingdata:SharingdataService) { }

  ngOnInit() {
    
  }
  // cropperjs setting

  reset() {
    this.imageUrl = null;
  }
  /**
   * 
   * @param fileInput data file when select new image
   */
  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      this.reset();
      reader.onload = function (e : any) {
          //$('#preview').attr('src', e.target.result);
          // console.log(e.target.result);
          this.imageUrl = e.target.result;
          this.sharingdata.imgUrl=this.imageUrl;
      }.bind(this);
      
      
      reader.readAsDataURL(fileInput.target.files[0]);
     
    }
  }
}
