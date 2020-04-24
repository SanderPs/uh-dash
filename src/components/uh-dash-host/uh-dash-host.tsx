import { Component, Host, h } from '@stencil/core';
//import './../../global/app.scss';

@Component({ 
    tag: 'uh-dash',
    styleUrl: 'uh-dash-host.scss' 
})
export class UhDash {
    render() {
        return (
            <Host>
                <chinese-editor></chinese-editor>
                <uh-dash-characters></uh-dash-characters>
                <uh-dash-radicals></uh-dash-radicals>
            </Host>
        );
    }
}