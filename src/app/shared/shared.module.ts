import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialPipe } from './pipes/exponential.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveDoubleProductsPipe } from './pipes/remove-double-products.pipe';
import { CountingProductsPipe } from './pipes/counting-products.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    RemoveDoubleProductsPipe,
    CountingProductsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ], 
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    RemoveDoubleProductsPipe,
    CountingProductsPipe
  ]
})
export class SharedModule { }
