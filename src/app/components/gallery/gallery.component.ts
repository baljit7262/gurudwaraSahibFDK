import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void {
  }

  public _albums = [];
   captionText:any = [
    "first photo",
    "secon photo",
    "srg photo",
    "fshryu photo",
  ]

  constructor(public _lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src = '../../../assets/images/gallery/' + i + '.jpeg';
      const caption = this.captionText[i - 1];
      const thumb = '../../../assets/images/gallery/' + i + '-thumb.jpeg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
  }
 
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
