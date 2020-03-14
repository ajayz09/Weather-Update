import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '././pages/home/home.component';
import { MapContentComponent } from '././pages/map-content/map-content.component';
import { HttpClientModule } from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { WeatherForecastService} from '././services/weather-forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'your api key'
    })
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
