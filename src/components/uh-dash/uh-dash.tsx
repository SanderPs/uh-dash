import { Component, Host, h } from '@stencil/core';

@Component({ 
    tag: 'uh-dash',
    styleUrl: 'uh-dash.scss' 
})
export class UhDash {
    render() {
        return (
            <Host>
                <uh-dash-editor></uh-dash-editor>
                <uh-dash-characters></uh-dash-characters>
                <uh-dash-radicals></uh-dash-radicals>
            </Host>
        );
    }
}