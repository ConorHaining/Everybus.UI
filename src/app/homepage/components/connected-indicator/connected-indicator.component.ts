import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connected-indicator',
  templateUrl: './connected-indicator.component.html',
  styleUrls: ['./connected-indicator.component.scss']
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

enum ConnectionStatus {
  LIVE = 'LIVE',
  OFFLINE = 'OFFLINE'
}
