import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared';
import { TeamModule } from './team/team.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamModule,
    SharedModule,
    NgbModule,
    AuthModule,
    UserModule,
    PlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
