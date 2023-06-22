import { CR_Context } from './commandResponses/cr.context';
import { Player } from './player';

export class Commands {
  private player = Player.getInstance();
  public commands: any = {
    help: {
      hasChild: false,
      hasEvent: false,
      response: [
        {
          style: 'block',
          text: 'Em que posso te ajudar? :)))',
        },
      ],
    },

    context: {
      hasChild: false,
      hasEvent: false,
      response: new CR_Context().getResponse(),
    },

    loginZia: {
      hasChild: false,
      event: () => {
        this.player.changeUser('Zia', 'zia');
      },
      response: [
        {
          style: 'block',
          text: 'Fez link com sucesso! :)',
        },
      ],
    },
  };
  response: any = {};

  constructor() {}
}
