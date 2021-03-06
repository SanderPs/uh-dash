/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BackspaceKey {
    }
    interface ChineseTextbox {
    }
    interface StrokeButton {
        "stroke": string;
    }
    interface StrokeList {
    }
    interface UhDash {
    }
    interface UhDashCharacters {
    }
    interface UhDashEditor {
    }
    interface UhDashRadicals {
    }
}
declare global {
    interface HTMLBackspaceKeyElement extends Components.BackspaceKey, HTMLStencilElement {
    }
    var HTMLBackspaceKeyElement: {
        prototype: HTMLBackspaceKeyElement;
        new (): HTMLBackspaceKeyElement;
    };
    interface HTMLChineseTextboxElement extends Components.ChineseTextbox, HTMLStencilElement {
    }
    var HTMLChineseTextboxElement: {
        prototype: HTMLChineseTextboxElement;
        new (): HTMLChineseTextboxElement;
    };
    interface HTMLStrokeButtonElement extends Components.StrokeButton, HTMLStencilElement {
    }
    var HTMLStrokeButtonElement: {
        prototype: HTMLStrokeButtonElement;
        new (): HTMLStrokeButtonElement;
    };
    interface HTMLStrokeListElement extends Components.StrokeList, HTMLStencilElement {
    }
    var HTMLStrokeListElement: {
        prototype: HTMLStrokeListElement;
        new (): HTMLStrokeListElement;
    };
    interface HTMLUhDashElement extends Components.UhDash, HTMLStencilElement {
    }
    var HTMLUhDashElement: {
        prototype: HTMLUhDashElement;
        new (): HTMLUhDashElement;
    };
    interface HTMLUhDashCharactersElement extends Components.UhDashCharacters, HTMLStencilElement {
    }
    var HTMLUhDashCharactersElement: {
        prototype: HTMLUhDashCharactersElement;
        new (): HTMLUhDashCharactersElement;
    };
    interface HTMLUhDashEditorElement extends Components.UhDashEditor, HTMLStencilElement {
    }
    var HTMLUhDashEditorElement: {
        prototype: HTMLUhDashEditorElement;
        new (): HTMLUhDashEditorElement;
    };
    interface HTMLUhDashRadicalsElement extends Components.UhDashRadicals, HTMLStencilElement {
    }
    var HTMLUhDashRadicalsElement: {
        prototype: HTMLUhDashRadicalsElement;
        new (): HTMLUhDashRadicalsElement;
    };
    interface HTMLElementTagNameMap {
        "backspace-key": HTMLBackspaceKeyElement;
        "chinese-textbox": HTMLChineseTextboxElement;
        "stroke-button": HTMLStrokeButtonElement;
        "stroke-list": HTMLStrokeListElement;
        "uh-dash": HTMLUhDashElement;
        "uh-dash-characters": HTMLUhDashCharactersElement;
        "uh-dash-editor": HTMLUhDashEditorElement;
        "uh-dash-radicals": HTMLUhDashRadicalsElement;
    }
}
declare namespace LocalJSX {
    interface BackspaceKey {
        "onBackspaceClicked"?: (event: CustomEvent<any>) => void;
    }
    interface ChineseTextbox {
    }
    interface StrokeButton {
        "onStrokeClicked"?: (event: CustomEvent<any>) => void;
        "stroke"?: string;
    }
    interface StrokeList {
    }
    interface UhDash {
    }
    interface UhDashCharacters {
        "onOnCharSelected"?: (event: CustomEvent<any>) => void;
    }
    interface UhDashEditor {
    }
    interface UhDashRadicals {
        "onRadSelected"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "backspace-key": BackspaceKey;
        "chinese-textbox": ChineseTextbox;
        "stroke-button": StrokeButton;
        "stroke-list": StrokeList;
        "uh-dash": UhDash;
        "uh-dash-characters": UhDashCharacters;
        "uh-dash-editor": UhDashEditor;
        "uh-dash-radicals": UhDashRadicals;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "backspace-key": LocalJSX.BackspaceKey & JSXBase.HTMLAttributes<HTMLBackspaceKeyElement>;
            "chinese-textbox": LocalJSX.ChineseTextbox & JSXBase.HTMLAttributes<HTMLChineseTextboxElement>;
            "stroke-button": LocalJSX.StrokeButton & JSXBase.HTMLAttributes<HTMLStrokeButtonElement>;
            "stroke-list": LocalJSX.StrokeList & JSXBase.HTMLAttributes<HTMLStrokeListElement>;
            "uh-dash": LocalJSX.UhDash & JSXBase.HTMLAttributes<HTMLUhDashElement>;
            "uh-dash-characters": LocalJSX.UhDashCharacters & JSXBase.HTMLAttributes<HTMLUhDashCharactersElement>;
            "uh-dash-editor": LocalJSX.UhDashEditor & JSXBase.HTMLAttributes<HTMLUhDashEditorElement>;
            "uh-dash-radicals": LocalJSX.UhDashRadicals & JSXBase.HTMLAttributes<HTMLUhDashRadicalsElement>;
        }
    }
}
