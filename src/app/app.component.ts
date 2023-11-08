import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit{
  

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);

    const element = document.querySelector('.element-centrable');

    gsap.to(element, {
      y: '50%',
      translateX: '-50%',
      top: '30%',
      left: '50%',
      position: 'fixed',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        scrub: true
      }
    });

    // animate words
        gsap.from('.deplacer', {
                  scrollTrigger: {
                      trigger: '.deplacer',
                      start: 'top 40%',
                      end: 'top top',
                      scrub: true,
                    
                  },
                  x:-210,
        })       
        gsap.to('.disparait', {
                  scrollTrigger: {
                      trigger: '.disparait',
                      start: 'top 30%',
                      end: 'bottom top',
                      scrub: true,
                  

                  },
                  opacity: 0,
                 
        })             
        gsap.to('.grandir', {
                  scrollTrigger: {
                      trigger: '.grandir',
                      start: 'bottom 20%',
                      end: 'bottom top',
                      scrub: true,
                     
                  },
                  
                  scale: 15,
                  duration:2,
                  stagger: 0.1
        })       
        gsap.to('.tourner', {
                  scrollTrigger: {
                      trigger: '.tourner',
                      start: 'top 10%',
                      end: 'bottom top',
                      scrub: true,
                  },
                  
                  rotate: 180,
                  duration:2,
                  x:-10,
                  borderRadius:0,
                  stagger: 0.1,
                  
        })       
        gsap.to('.hello-apparait', {
                  scrollTrigger: {
                      trigger: '.hello-apparait',
                      start: 'top center',
                      end: 'bottom top',
                      scrub: true,
                      pin:'.hello-apparait'
                  },
                  
                  scale:2,
                  // y: '50%',
                  // // translateX: '-50%',
                  // top: '30%',
                  // left: '50%',
                  // position: 'fixed',
                  
        })       
  }
}
