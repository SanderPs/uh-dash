import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'chinese-editor',
    styleUrl: 'chinese-editor.scss'
})
export class ChineseEditor {
    
    render() {
        return <Host>
            <chinese-textbox></chinese-textbox>
            <div style={{marginLeft:"10px", display:"inline-block"}}>
                <backspace-key></backspace-key>
            </div>
            </Host>
    }

}
