import { Component, ViewChildren, QueryList } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NestedMenu } from './nested-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nested-ngbdropdown';

  /** Get handle on cmp tags in the template */
  @ViewChildren('dd') dds: QueryList<NgbDropdown>;

  nestedMenu: NestedMenu = {
    root: [
      {
        label: 'Malaysia', children: [
          {
            label: 'Melaka', children: [
              { label: 'Macap', link: 'Macap' },
              { label: 'Ayer Keroh', link: 'Ayer Keroh' },
              { label: 'Jasin', link: 'Jasin' },
            ]
          },
          { label: 'Pulau Penang', link: 'Pulau Penang' },
          { label: 'Selangor', link: 'Selangor' },
        ]
      },
      {
        label: 'Singapore', children: [
          { label: 'Pulau Ujong', link: 'Pulau Ujong' },
          { label: 'Woodland', link: 'Woodland' },
          { label: 'Changi', link: 'Changi' },
        ]
      },
      {
        label: 'Thailand', children: [
          { label: 'Nakhon Ratchasima', link: 'Nakhon Ratchasima' },
          { label: 'Nakhon Sawan', link: 'Nakhon Sawan' },
          { label: 'Nakhon Si Thammarat', link: 'Nakhon Si Thammarat' },
        ]
      },
    ]
  }

  actionClick() {
    this.dds.forEach((dd) => {
      dd.close();
    })
  }


}
