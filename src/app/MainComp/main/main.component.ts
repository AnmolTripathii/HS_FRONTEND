import { Component } from '@angular/core';
import { ScrollcardComponent } from '../../Comp/scrollcard/scrollcard.component';
import { AstrologercardsComponent } from '../../Comp/astrologercards/astrologercards.component';
import { FaqComponent } from '../../Comp/faq/faq.component';
import { HerosectionComponent } from '../../Comp/herosection/herosection.component';
import { SignupComponent } from '../../AuthComp/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from '../../hero/hero.component';
import { DailyHoroscopeComponent } from '../../daily-horoscope/daily-horoscope.component';
import { OtherServicesComponent } from '../../other-services/other-services.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ScrollcardComponent,HeroComponent,AstrologercardsComponent,FaqComponent,HerosectionComponent,HttpClientModule,DailyHoroscopeComponent,OtherServicesComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
