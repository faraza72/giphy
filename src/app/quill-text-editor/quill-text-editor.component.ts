import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiphyPopupComponent } from '../giphy-popup/giphy-popup.component';

@Component({
  selector: 'app-quill-text-editor',
  templateUrl: './quill-text-editor.component.html',
  styleUrls: ['./quill-text-editor.component.css']
})
export class QuillTextEditorComponent implements OnInit {

  public editorOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      // ['blockquote', 'code-block'],

      // // [{ 'header ': 1 }, { 'header': 2 }],               // custom button values
      // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      // [{ 'font': [] }],
      // [{ 'align': [] }],

      // ['clean'],                                         // remove formatting button

      // ['link', 'image', 'video']                         // link and image, video
      [{'giphy': 'G'}]
    ]
  };

  quillEditorRef: any;
  selected_giphy: any;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginModal(userData) {
		const mat_seledcted_giphy = this.matDialog.open(GiphyPopupComponent, {
			width: '800px',
			// data: { datakey: userData.value },
			// disableClose: true
    });
    
    let giphySUb = mat_seledcted_giphy.componentInstance.giphy_event.subscribe((data) => {
      // do something
      console.log("Giphy in editor", data)
      this.selected_giphy = data
		});

		mat_seledcted_giphy.afterClosed().subscribe(() => {
			giphySUb.unsubscribe();
		});
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    console.log(this.quillEditorRef)
    const toolbar = editorInstance.getModule('toolbar');
    console.log("toolbar :>>>>>", toolbar)
    toolbar.addHandler('image', this.giphyHandler);
  }

  giphyHandler = (giphy) => {
    console.log("Giphy", giphy);
    
    const range = this.quillEditorRef.getSelection();
    const img = '<div> <img src="https://image.flaticon.com/icons/png/128/126/126477.png" height="50"/> </div>';
    this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  }

}
