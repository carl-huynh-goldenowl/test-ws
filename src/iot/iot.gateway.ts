import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { IncomingMessage } from 'http';

@WebSocketGateway({
  transport: ['websocket'],
  path: 'iot',
})
export class IotGateway implements OnGatewayConnection, OnGatewayDisconnect {
  async handleConnection(client: WebSocket, args: IncomingMessage) {
    console.log('🚀 ~ file: iot.gateway.ts:9 ~ IotGateway ~ client:', client);
  }

  handleDisconnect() {
    console.log('handle close');
  }
}
