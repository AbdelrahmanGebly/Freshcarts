import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavBlankComponent,RouterOutlet,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  constructor(private _Renderer2:Renderer2){}
  @ViewChild('topButton') topBtn!:ElementRef;
  @HostListener('window:scroll')
  onScroll():void{
    if(scrollY > 500){
      this._Renderer2.removeClass(this.topBtn.nativeElement,'d-none');
    }else{
      this._Renderer2.addClass(this.topBtn.nativeElement,'d-none');
    }
  }
  goToUp():void{
    scrollTo(0,0);
  }
}
