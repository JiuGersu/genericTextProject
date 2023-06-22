import { Units } from './units';

export class Player {
  private static _instance: Player = new Player();
  private units = new Units();

  public material = 0;
  public map = this.units.getMap();
  public unit = this.map['start'];
  public score: number = 3;
  public typeAccessString = '';
  public typeAccessId = 'root';
  public user: string = '';

  constructor() {
    if (Player._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.'
      );
    }
    Player._instance = this;
  }

  public static getInstance(): Player {
    return Player._instance;
  }

  public newGame() {
    this.typeAccessString = ':~$';
    this.typeAccessId = 'root';
    this.user = `QuBits-gersu-deck/${this.typeAccessString} `;
  }

  public changeUser(
    access: string,
    accessId: 'root' | 'aint' | 'zia',
    userName?: string
  ) {
    console.log('felicidade');
    if (this.typeAccessId !== 'root') {
      this.typeAccessString = ':~ ' + access + '$ ';
    } else {
      this.typeAccessString = ':~$';
    }
    this.typeAccessId = accessId;
    if (userName) {
    } else {
      this.user = `QuBits-gersu-deck/${this.typeAccessString} `;
    }
  }
}
