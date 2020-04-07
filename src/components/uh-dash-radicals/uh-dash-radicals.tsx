import { Component, h } from '@stencil/core';
import { uhRadicals, IUnihanRadicals } from './../../services/uh-radicals';

@Component({
  tag: 'uh-dash-radicals',
  styleUrl: 'uh-dash-radicals.css',
  shadow: true
})
export class UhDashRadicals {

  items = [];
  theList: IUnihanRadicals;

  async componentWillRender() {
    this.theList = uhRadicals;
  }

  render() {
    this.items = []

    for (const item of Object.keys(this.theList)) {
      if (this.theList[item].newline) {
        this.items.push(<div class="rad-break"></div>)
      }
      if (this.theList[item].strokeHdr) {
        this.items.push(
          <div key={'hdr-' + item} class="rad rad-hdr">
            {this.theList[item].strokeHdr}
          </div>
        )
      }
      this.items.push(
        <div key={item} class="rad">
          {String.fromCharCode(this.theList[item].trCJK)}
        </div>
      )
    }

    return <div>
      <div class="radicals-header">header</div>
      <div class="radicals-wrapper">{this.items}</div>
    </div>
  }
}
