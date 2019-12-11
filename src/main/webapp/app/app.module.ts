import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AdssubSharedModule } from 'app/shared/shared.module';
import { AdssubCoreModule } from 'app/core/core.module';
import { AdssubAppRoutingModule } from './app-routing.module';
import { AdssubHomeModule } from './home/home.module';
import { AdssubEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AdssubSharedModule,
    AdssubCoreModule,
    AdssubHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AdssubEntityModule,
    AdssubAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class AdssubAppModule {}
