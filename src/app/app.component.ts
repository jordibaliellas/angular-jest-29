import { Component } from '@angular/core';
import { firstValueFrom, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-14-test';

  public async testFunction() {
    await firstValueFrom(of('').pipe(
      map(() => {
        throw 'error'
      })
    ))
  }
}
