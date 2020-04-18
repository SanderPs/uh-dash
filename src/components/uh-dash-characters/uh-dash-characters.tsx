import { Component, Listen, h, State } from '@stencil/core';
import { uhCharacters } from './uh-characters';

@Component({
  tag: 'uh-dash-characters',
  styleUrl: 'uh-dash-characters.scss'
})
export class MyName {

  @State() characters: any[] = [];
  @State() showStroke: string;
  @State() showRad: string;

  render() {
    return <div>
      <div class="characters-header">
        <stroke-list></stroke-list>
      </div>
      <div class="characters-wrapper">
        {this.characters.map((item) => {
          return (this.showStroke && (this.showStroke==item[0])) ?
          [
            <div key={'charhdr-' + item[0]} class="char hdr">
              {item[0]}
            </div>
          ].concat(
            this.convertToChar(Object.values(item[1]), item[0])
          )
          : '';
        })}
      </div>
    </div>

  }

  @Listen('strokeClicked', {target: 'body'})
  strokeClicked(event: CustomEvent) {
    this.showStroke = event.detail;
    this.characters = Object.entries(uhCharacters[this.showRad])
  }

  @Listen('radSelected', { target: 'parent' })
  radSelected(event: CustomEvent) {

    if (event.detail) {
      this.characters = Object.entries(uhCharacters[event.detail]);
      this.showRad = event.detail;
      this.showStroke = '0';
    }
    else {
      this.characters = [];
      this.showRad = '';
      this.showStroke = '';
    }
  }

  convertToChar(chars: number[], strokes: string): string[] {
    return chars ? chars.map(cp => {
      return <div key={cp} class={"char stroke-" + strokes} onClick={() => this.selectChar(cp)}>
        {String.fromCharCode(cp)}
      </div>
    }) : [];
  }

  selectChar(cp: number) {
    console.log(cp);
  }

}