import { Component, Event, EventEmitter, State, h } from '@stencil/core';
import { uhRadicals, IUnihanRadicals } from './uh-radicals';

@Component({
  tag: 'uh-dash-radicals',
  styleUrl: 'uh-dash-radicals.scss'
})
export class UhDashRadicals {

  buttons = [];
  selectedButton: string;
  theList: IUnihanRadicals;
  @State() selectedRadical: number = null;

  @Event({
    eventName: 'radSelected'
  }) onRadSelected: EventEmitter;

  async componentWillRender() {
    this.theList = uhRadicals;
  }

  render() {
    this.buttons = []

    if (this.selectedRadical) {
      this.selectedButton = <div class="rad" onClick={() => this.unselectRad()}>
          {String.fromCharCode(this.theList[this.selectedRadical].trCJK)}
        </div>;

    } else {
      this.selectedButton = '';
      for (const [radId, rad] of Object.entries(this.theList)) {
        if (rad.newline) {
          this.buttons.push(<div class="rad-break"></div>)
        }
        if (rad.strokeHdr) {
          this.buttons.push(
            <div key={'hdr-' + radId} class="rad hdr">
              {rad.strokeHdr}
            </div>
          )
        }
        this.buttons.push(
          <div key={radId} title={radId.slice(0, -1)} class="rad" onClick={() => this.selectRad(parseInt(radId, 10))}>
            {String.fromCharCode(rad.trCJK)}
          </div>
        )
      }
    }
    return <div>
      <div class="radicals-header">
        {this.selectedButton}
      </div>
      <div class="radicals-wrapper">{this.buttons}</div>
    </div>
  }

  selectRad(radId: number) {
    this.selectedRadical = (this.selectedRadical === radId) ? null : radId;

    this.onRadSelected.emit(this.selectedRadical);
  }

  unselectRad() {
    this.selectedRadical = null;
  }
}
