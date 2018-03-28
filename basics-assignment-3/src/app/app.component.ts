import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    display = true;
    changes = [];
    i = 1;

    changeDisplay() {
        this.display = !this.display;
        this.changes.push( ++this.i);
    }

    check() {
        if (this.i > 5) {
            return 'blue';
        }
    }
}
