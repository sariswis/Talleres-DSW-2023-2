import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  series: Array<Serie> = [];
  average: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.average = 0;
      this.series.forEach((serie) => {
        this.average += serie.seasons;
      });
      this.average = this.average / series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
