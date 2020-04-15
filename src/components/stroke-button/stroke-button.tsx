import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

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
        return <div onClick={() => this.selectStroke()}>{this.stroke}</div>
    }


    selectStroke() {
        this.onStrokeClicked.emit(this.stroke);
    }
}