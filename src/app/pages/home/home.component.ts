import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {  }

  memes: string[] =['https://media1.tenor.com/images/d2c70f7f64587dc3b7c86ee06756fb4a/tenor.gif?itemid=4294979','http://i.imgur.com/oQ2yUwA.gif', 'https://i.gifer.com/7gMA.gif', 'https://66.media.tumblr.com/8b0615b57a7f46335ebbe68b156cdfbb/tumblr_my8bv1mSFw1rw1wnno2_400.gif','https://66.media.tumblr.com/3196ae9d9db4e26358194e4625cdbd5d/tumblr_n635f3Qt7M1rpe379o1_r1_500.gif', 'https://media.tenor.com/images/d320022232cbe60fb7f342be86806cfa/tenor.gif', 'https://i.gifer.com/SKbd.gif','https://media1.tenor.com/images/b204be74c21b48d8a4e2d49ea72d4154/tenor.gif?itemid=6211667','https://66.media.tumblr.com/a30b7298e8a9d5888cb505befe6c9404/tumblr_mk5qxmEAIl1rznay4o6_250.gif','https://vignette.wikia.nocookie.net/spongebob/images/f/fe/Eh_Eh_Eh_Eh..._SpongeBob.gif/revision/latest?cb=20120329023354']

  // mouseEnter(){
  //   document.getElementById('pic').src = this.memes[Math.floor(Math.random()*this.memes.length)]
  // }
  // mouseLeave(){
  //   document.getElementById('pic').src = this.memes[Math.floor(Math.random()*this.memes.length)]}

  ngOnInit() {  }
}