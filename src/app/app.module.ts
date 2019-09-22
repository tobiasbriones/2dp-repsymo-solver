import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MrmComponent } from './ui/page/mrm/mrm.component';
import { WmComponent } from './ui/page/wm/wm.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ImComponent } from './ui/page/im/im.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { FormsModule } from '@angular/forms';
import { PageDocumentationComponent } from './ui/page/page-documentation/page-documentation.component';
import { TimeUnitSelectorComponent } from './ui/page/input/time-unit-selector/time-unit-selector.component';
import { ExampleStatementComponent } from './ui/page/example-statement/example-statement.component';
import { TabularInputComponent } from './ui/page/input/tabular-input/tabular-input.component';
import { OptionsBarComponent } from './ui/page/options-bar/options-bar.component';
import { TabularOutputComponent } from './ui/page/output/tabular-output/tabular-output.component';
import { ChainsResultComponent } from './ui/page/output/results/chains-result/chains-result.component';
import { InputPaneComponent } from './ui/page/input/input-pane/input-pane.component';
import { ChainItemComponent } from './ui/page/output/results/chain-item/chain-item.component';
import { TabularDynamicInputComponent } from './ui/page/input/tabular-dynamic-input/tabular-dynamic-input.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'im',
    component: ImComponent
  },
  {
    path: 'mrm',
    component: MrmComponent
  },
  {
    path: 'wm',
    component: WmComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MrmComponent,
    WmComponent,
    HeaderComponent,
    FooterComponent,
    ImComponent,
    AboutComponent,
    PageDocumentationComponent,
    TimeUnitSelectorComponent,
    ExampleStatementComponent,
    TabularInputComponent,
    OptionsBarComponent,
    TabularOutputComponent,
    ChainsResultComponent,
    InputPaneComponent,
    ChainItemComponent,
    TabularDynamicInputComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }