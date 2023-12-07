import { Component } from '@angular/core';
import { FileuploadsService } from '../fileuploads.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  constructor(private fileuploadservice : FileuploadsService){}


  ok()
  {
    alert("Upload"); 
    console.log('Hello');
  }
}
