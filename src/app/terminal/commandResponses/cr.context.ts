import { Player } from '../player';

export class CR_Context {
  private player = Player.getInstance();
  private response: { text: any; style: any }[] = [
    {
      style: 'block',
      text: `Você está em uma sala de nível "${this.player.unit.data.status}" com ${this.player.unit.exits.length} portas de saída, sendo elas:`,
    },
  ];

  getResponse() {
    return this.response;
  }
}
