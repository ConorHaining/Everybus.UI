import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connected-indicator',
  templateUrl: './connected-indicator.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    role: 'status'
  }
})
export class ConnectedIndicatorComponent implements OnInit {
  status: ConnectionStatus = ConnectionStatus.LIVE;

  get isLive(): boolean {
    return this.status === ConnectionStatus.LIVE;
  }
  get isOffline(): boolean {
    return this.status === ConnectionStatus.OFFLINE;
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('offline', this.updateNetworkStatus.bind(this));
    window.addEventListener('online', this.updateNetworkStatus.bind(this));
  }

  updateNetworkStatus($event: Event): void {
    if ($event.type === 'online') {
      this.status = ConnectionStatus.LIVE;
    }
    if ($event.type === 'offline') {
      this.status = ConnectionStatus.OFFLINE;
    }
  }

}

export enum ConnectionStatus {
  LIVE = 'LIVE',
  OFFLINE = 'OFFLINE'
}
