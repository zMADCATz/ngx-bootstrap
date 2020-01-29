import { Component } from '@angular/core';
import { PopoverConfig } from 'ngx-bootstrap-th/popover';

// such override allows to keep some initial values

export function getPopoverConfig(): PopoverConfig {
  return Object.assign(new PopoverConfig(), {
    placement: 'right',
    container: 'body',
    triggers: 'focus',
    delay: 500
  });
}

@Component({
  selector: 'demo-popover-config',
  templateUrl: './config.html',
  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]
})
export class DemoPopoverConfigComponent {}
