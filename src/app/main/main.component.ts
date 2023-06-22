import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Commands } from '../terminal/commands';
import { Player } from '../terminal/player';
import { Units } from '../terminal/units';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  log: { input: any; response: { style: string; text: string }[] } | any;
  mainInput = new FormControl('');
  hasStarted = true;
  commandClass = new Commands();
  player = Player.getInstance();
  preText = this.player.user;
  units = new Units();

  constructor() {
    this.player.newGame();
    this.player = Player.getInstance();
    this.preText = this.player.user;
  }

  ngOnInit() {
    console.log(this.units);
  }

  // aparicoes de bixo sao cards

  inputHandler(event: KeyboardEvent) {
    const inputValue = this.mainInput.value;
    console.log(event.key);

    switch (event.key) {
      case 'Enter':
        if (inputValue == 'clear') {
          this.log = [];
          this.mainInput.reset();
        } else {
          this.animate();
        }
        break;
    }
  }

  timeNow() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  animate() {
    this.log = {};
    const saveInputValue = this.mainInput.value;
    this.mainInput.reset();
    setTimeout(() => {
      this.preText = this.player.user;
      this.mainInput.setValue(saveInputValue);
      this.checkInput();
    }, 50);
  }

  checkInput() {
    let inputValue: any = this.mainInput.value;
    let arrayOfKeyWords = inputValue.trim().split(' ');
    let log: any = {};
    let defaultInput = this.timeNow() + ` @${this.preText} ${inputValue}`;
    let command = this.commandClass.commands[arrayOfKeyWords[0]];
    if (command) {
      if (command['hasChild']) {
        alert('agora fico um pouco mais cabeça');
      } else {
        log = {
          input: defaultInput,
          response: command.response,
        };
        if (command['event']) {
          command.event();
        }
      }
    } else {
      log = {
        input: defaultInput,
        response: [
          {
            style: 'block',
            text: 'Desculpe, mas o comando digitado não pode ser encontrado ou não existe :(',
          },
          {
            style: 'block',
            text: 'Considere digitar o comando "help" para receber ajuda ou "context" para saber o contexto em que se encontra no momento.',
          },
        ],
      };
    }
    this.mainInput.reset();
    setTimeout(() => {
      this.log = log;
    }, 300);
    console.log(this.log);
    window.scrollTo(0, document.body.scrollHeight);
  }
}
