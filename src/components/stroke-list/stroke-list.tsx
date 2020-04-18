import { Component, State, Listen, Host, h } from '@stencil/core';
import { uhCharacters } from './../uh-dash-characters/uh-characters';

@Component({
    tag: 'stroke-list',
    styleUrl: 'stroke-list.scss'
})
export class StrokeList {
    @State() possibleStrokes: any[] = [];
    @State() showStroke: string | null = '0';

    render() {
        return <Host>
            {this.possibleStrokes.map(k => {
                return (
                    <stroke-button key={'stroke-' + k} stroke={k}
                        class={{ 'activated': (this.showStroke == k) }}
                        onClick={() => this.selectStroke(k)}
                    >
                    </stroke-button>
                );
            })}
        </Host>
    }

    @Listen('radSelected', { target: 'body' })
    radSelected(event: CustomEvent) {
        if (event.detail) {
            if (uhCharacters[event.detail]) {
                this.possibleStrokes = Object.keys(uhCharacters[event.detail]);
                this.selectStroke('0');
            }
            else {
                this.possibleStrokes = [];
            }
        }
    }

    selectStroke(k: string) {
        this.showStroke = k;
    }
}