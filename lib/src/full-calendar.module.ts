import { NgModule } from '@angular/core';
import { globalPlugins, PluginDef } from '@fullcalendar/core';
import { FullCalendarComponent } from './fullcalendar.component';

@NgModule({
  declarations: [FullCalendarComponent],
  imports: [],
  exports: [FullCalendarComponent]
})
export class FullCalendarModule {

  static registerPlugins(plugins: PluginDef[]) {
    globalPlugins.push(...plugins);
  }

}
