import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit
 {
 
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 10;
  showanimation = true;
  showContent='none'
  constructor() {
    this.lottieConfig = {
      path: 'assets/animations/tag.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  ngAfterViewInit() {
    setTimeout(() => {
      console.log(  )
      this.showanimation = false;
      setTimeout(() => {
        this.showContent = "block";

      }, 1000);
      
    }, 4000);
  }

  ngOnInit() {

  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
