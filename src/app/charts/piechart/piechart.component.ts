import {Component, OnInit} from '@angular/core';

import {Chart} from '../../../../node_modules/chart.js';
import {GamesApiService} from '../../games-api.service';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  chart: any;

  results: [any];

  // data = [10, 15];

  constructor(private gamesApi: GamesApiService) {
  }

  ngOnInit() {

    this.gamesApi.getGamesResults()
      .subscribe(
        response => {
          this.results = this.gamesApi.nextCallback(response, 'Getting game results');
          // initialize piechart with given results
          this.init(this.results);
        },
        error => this.gamesApi.errorCallback(error)
      );


  }

  private init(data) {
    console.log(data);

    let wins = 0;
    let losses = 0;

    // todo: martelada ;(
    for (let i = 0; i < data.length; i++) {
      const result = data[i];
      if (result === 1) {
        wins++;
      } else if (result === 2) {
        losses++;
      }
    }

    this.chart = new Chart('piechart', {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ['Win', 'Loss'],
        datasets: [{
          label: 'Wins & Losses',
          backgroundColor: ['rgb(125, 255, 120)', 'rgb(255, 99, 132)'],
          data: [wins, losses],
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

}
