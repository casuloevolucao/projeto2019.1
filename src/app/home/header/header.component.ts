import { Component, OnInit, inject, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  onWindosScroll(e:Event){
    console.log(e)
    if(window.pageYOffset > 80){
      let element = document.getElementsByTagName('body')[0]
      element.classList.add('sticky')
    }else{
      let element = document.getElementsByTagName('body')[0]
      element.classList.remove('sticky')
    }
  }
}
