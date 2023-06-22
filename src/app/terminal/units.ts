export class Units {
  s01 = {
    name: 'S-01',
    id: 's-01',
    status: 'secure',
  };

  u01 = {
    name: 'U-02',
    id: 's-01',
    status: 'unsecure',
  };

  u02 = {
    name: 'U-02',
    id: 's-01',
    status: 'unsecure',
  };

  constructor() {}

  getMap() {
    let map = {
      start: { data: this.s01, exits: [this.u01, this.u02] },
      u01: { data: this.u01, exits: [this.s01] },
      u02: { data: this.u02, exits: [this.s01] },
    };
    return map;
  }
}
