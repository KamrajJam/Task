import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { AccordionComponent } from './accordion/accordion.component';
import { MatchCategoryComponent } from './match-category/match-category.component';
import { MatchListComponent } from './match-list/match-list.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarBannerComponent } from './sidebar-banner/sidebar-banner.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { InplayPopupComponent } from './inplay-popup/inplay-popup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CategoryListComponent,
    MainSliderComponent,
    AccordionComponent,
    MatchCategoryComponent,
    MatchListComponent,
    FooterComponent,
    SidebarBannerComponent,
    SocialIconsComponent,
    InplayPopupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
