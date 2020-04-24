import { Component, Host, Listen, h, State } from '@stencil/core';
import { utf16 } from './../../../utils/utils';

@Component({
    tag: 'chinese-textbox',
    styleUrl: 'chinese-textbox.scss'
})
export class ChineseTextbox {
    @State() text: number[] = [];

    render() {
        return <Host>
            {this.text.map(i => {return <div>{utf16(i)}</div>})}
            </Host>
    }

    @Listen('onCharSelected', {target: 'body'})
    strokeClicked(event: CustomEvent) {
        // this.text.push(event.detail);
        this.text = [
            ...this.text,
            event.detail
          ]
    }

    @Listen('backspaceClicked', {target: 'body'})
    backspaceClicked() {
        this.text = this.text.slice(0,-1)
    }
}
