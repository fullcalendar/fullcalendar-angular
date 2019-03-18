import { Component, OnInit } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options: OptionsInput;

  ngOnInit() {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    this.options = {
      editable: true,
      events: [{
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10'
      }],
      plugins: [ dayGridPlugin, interactionPlugin ]
    };
  }
  eventClick(model) {
    console.log(model);
  }
}
