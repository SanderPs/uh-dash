import { Component, Listen, h, State } from '@stencil/core';
import { uhCharacters } from './uh-characters';

@Component({
  tag: 'uh-dash-characters',
  styleUrl: 'uh-dash-characters.scss'
})
export class MyName {

  @State() characters: any[] = [];
  @State() possibleStrokes: any[] = [];
  @State() showStroke: number | null = null;

  render() {
    return <div>{this.showStroke}
      <div class="characters-header"> {this.possibleStrokes}</div>
      <div class="characters-wrapper">{this.characters}</div>
    </div>

  }


  @Listen('strokeClicked', {target: 'parent'})
  strokeClicked(event: CustomEvent) {
    this.showStroke = event.detail;
  }

  @Listen('radSelected', {target: 'parent'})
  log(event: CustomEvent) {

    // show characters:
      if (event.detail) {
          this.characters = Object.entries(uhCharacters[event.detail])
              .map((item) => {
                  return [
                  <div key={'charhdr-' + item[0]} class="rad-hdr rad ">
                      {item[0]}
                  </div>
                  ].concat(
                      this.convertToChar(Object.values(item[1]))
                  );
              });
      }
      else {
          this.characters = [];
      }

      // show available strokes in the header:
      if (event.detail) {
        if (uhCharacters[event.detail]) {
          this.possibleStrokes = Object.keys(uhCharacters[event.detail])
            .map((k) => { 
              return <stroke-button key={'stroke-' + k} stroke={k}
                class={{'activated': this.showStroke?.toString() == k}}
                ></stroke-button>});
        }
        else {
          console.log('no ', event.detail);
          this.possibleStrokes = [];
        }
      }
  }

  convertToChar(chars: number[]): string[] {
      console.log('chars: ', chars)
      return chars ? chars.map(cp => {
          return <div key={cp} class="rad" onClick={() => this.selectChar(cp)}>
          {String.fromCharCode(cp)}
        </div>
        }) : [];
  }

  selectChar(cp: number) {

  }

}