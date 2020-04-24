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
    interface ChineseEditor {
    }
    interface ChineseTextbox {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
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
    interface HTMLChineseEditorElement extends Components.ChineseEditor, HTMLStencilElement {
    }
    var HTMLChineseEditorElement: {
        prototype: HTMLChineseEditorElement;
        new (): HTMLChineseEditorElement;
    };
    interface HTMLChineseTextboxElement extends Components.ChineseTextbox, HTMLStencilElement {
    }
    var HTMLChineseTextboxElement: {
        prototype: HTMLChineseTextboxElement;
        new (): HTMLChineseTextboxElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
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
    interface HTMLUhDashRadicalsElement extends Components.UhDashRadicals, HTMLStencilElement {
    }
    var HTMLUhDashRadicalsElement: {
        prototype: HTMLUhDashRadicalsElement;
        new (): HTMLUhDashRadicalsElement;
    };
    interface HTMLElementTagNameMap {
        "backspace-key": HTMLBackspaceKeyElement;
        "chinese-editor": HTMLChineseEditorElement;
        "chinese-textbox": HTMLChineseTextboxElement;
        "my-component": HTMLMyComponentElement;
        "stroke-button": HTMLStrokeButtonElement;
        "stroke-list": HTMLStrokeListElement;
        "uh-dash": HTMLUhDashElement;
        "uh-dash-characters": HTMLUhDashCharactersElement;
        "uh-dash-radicals": HTMLUhDashRadicalsElement;
    }
}
declare namespace LocalJSX {
    interface BackspaceKey {
        "onBackspaceClicked"?: (event: CustomEvent<any>) => void;
    }
    interface ChineseEditor {
    }
    interface ChineseTextbox {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
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
    interface UhDashRadicals {
        "onRadSelected"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "backspace-key": BackspaceKey;
        "chinese-editor": ChineseEditor;
        "chinese-textbox": ChineseTextbox;
        "my-component": MyComponent;
        "stroke-button": StrokeButton;
        "stroke-list": StrokeList;
        "uh-dash": UhDash;
        "uh-dash-characters": UhDashCharacters;
        "uh-dash-radicals": UhDashRadicals;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "backspace-key": LocalJSX.BackspaceKey & JSXBase.HTMLAttributes<HTMLBackspaceKeyElement>;
            "chinese-editor": LocalJSX.ChineseEditor & JSXBase.HTMLAttributes<HTMLChineseEditorElement>;
            "chinese-textbox": LocalJSX.ChineseTextbox & JSXBase.HTMLAttributes<HTMLChineseTextboxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "stroke-button": LocalJSX.StrokeButton & JSXBase.HTMLAttributes<HTMLStrokeButtonElement>;
            "stroke-list": LocalJSX.StrokeList & JSXBase.HTMLAttributes<HTMLStrokeListElement>;
            "uh-dash": LocalJSX.UhDash & JSXBase.HTMLAttributes<HTMLUhDashElement>;
            "uh-dash-characters": LocalJSX.UhDashCharacters & JSXBase.HTMLAttributes<HTMLUhDashCharactersElement>;
            "uh-dash-radicals": LocalJSX.UhDashRadicals & JSXBase.HTMLAttributes<HTMLUhDashRadicalsElement>;
        }
    }
}
