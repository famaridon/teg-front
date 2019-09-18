import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useFactory: stompConfigFactory
    },{
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class StompModule {


}

function stompConfigFactory(): InjectableRxStompConfig  {
  return {
    // Which server?
    brokerURL: 'ws://127.0.0.1:8080/ws',

    // Headers
    // Typical keys: login, passcode, host
    connectHeaders: {
      login: 'guest',
      passcode: 'guest'
    },

    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeatIncoming: 0, // Typical value 0 - disabled
    heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 500 (500 milli seconds)
    reconnectDelay: 500,

    // Will log diagnostics on console
    // It can be quite verbose, not recommended in production
    // Skip this key to stop logging to console
    debug: (msg: string): void => {
      // console.log(new Date(), msg);
    }
  };
}
