import { Component, OnInit } from '@angular/core';
import { mind } from './services/notion';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  focusScore$ = mind.focus().pipe(
    map((focus) => {
      console.log(focus);
      return (focus.probability * 100)
    }),
    tap((focusScore) => {
      console.log(focusScore);
    })
  );

  calmScore$ = mind.calm().pipe(
    map((calm) => {
      console.log(calm);
      return (calm.probability * 100)
    }),
    tap((calmScore) => {
      console.log(calmScore);
    })
  );

  // accelerometerScore$ = mind. accelerometer().pipe(
  //   map((accelerometer) => {
  //     console.log(accelerometer);
  //     return (accelerometer.probability * 100)
  //   }),
  //   tap((accelerometerScore) => {
  //     console.log(accelerometerScore);
  //   })
  // );

  ngOnInit() {
    mind
      .login({
        email: environment.email,
        password: environment.password,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  }
}
