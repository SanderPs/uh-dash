import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'uh-dash-editor',
    styleUrl: 'uh-dash-editor.scss'
})
export class Editor {
    
    render() {
        return <Host>
            <chinese-textbox></chinese-textbox>
            <div style={{marginLeft:"10px", display:"inline-block"}}>
                <backspace-key></backspace-key>
            </div>
            </Host>
    }

}
