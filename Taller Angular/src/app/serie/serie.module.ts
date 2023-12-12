import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent, ListaSeriesComponent],
  exports: [SerieComponent, ListaSeriesComponent]
})
export class SerieModule { }
