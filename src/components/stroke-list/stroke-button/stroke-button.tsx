import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
    tag: 'stroke-button',
    styleUrl: 'stroke-button.scss'
})
export class StrokeButton {
    @Prop() stroke: string;
    @Event({
        eventName: 'strokeClicked'
      }) onStrokeClicked: EventEmitter;

    render() {
        return <Host class="stroke-button" onClick={() => this.selectStroke()}>{this.stroke}</Host>
    }


    selectStroke() {
        this.onStrokeClicked.emit(this.stroke);
        let x = document.querySelector('.char');

        for (const key in x) {
            if (x.hasOwnProperty(key)) {
                const element = x[key];
                element.style.display = 'none';
            }
        }
    }
}