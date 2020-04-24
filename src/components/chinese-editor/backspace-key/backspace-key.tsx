import { Component, Host, Event, EventEmitter, h } from '@stencil/core';

@Component({
    tag: 'backspace-key',
    styleUrl: 'backspace-key.scss'
})
export class BackspaceKey {
    // icon from: https://iconsvg.xyz/

    @Event({}) backspaceClicked: EventEmitter;

    render() {
        return <Host onClick={() => this.thisBackspaceClicked()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
            </Host>
    }

    thisBackspaceClicked() {
        this.backspaceClicked.emit();
    }
}
