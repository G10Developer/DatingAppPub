import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  user: User;
  idName: any = 'id';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor( 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
    ];

    this.galleryImages = [
      {
          small: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          medium: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          big: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
      },
      {
          small: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          medium: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          big: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
      },
      {
          small: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          medium: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
          big: 'https://res.cloudinary.com/dmvxctam7/image/upload/v1600986180/wdgbkjjwhxe7y8v6brqv.jpg',
      }
  ];
    // this.galleryImages = this.getImages();
   
  }

  getImages(){
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

}
