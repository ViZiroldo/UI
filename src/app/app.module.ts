import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule, Tournament } from './shared';
import { TeamModule } from './team/team.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';
import { GroupModule } from './group/group.module';
import { MatchModule } from './match/match.module';
import { TournamentModule } from './tournament/tournament.module';
import { FunctionModule } from './function/function.module';

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
    GroupModule,
    MatchModule,
    TournamentModule,
    FunctionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
