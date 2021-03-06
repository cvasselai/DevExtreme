import dxTextEditor, {
    dxTextEditorButton,
    dxTextEditorOptions
} from './text_box/ui.text_editor.base';

import {
    format
} from './widget/ui.widget';

export interface dxNumberBoxOptions extends dxTextEditorOptions<dxNumberBox> {
    /**
     * @docid
     * @type Array<Enums.NumberBoxButtonName,dxTextEditorButton>
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    buttons?: Array<'clear' | 'spins' | dxTextEditorButton>;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    format?: format;
    /**
     * @docid
     * @default "Value must be a number"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    invalidValueMessage?: string;
    /**
     * @docid
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    max?: number;
    /**
     * @docid
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    min?: number;
    /**
     * @docid
     * @type Enums.NumberBoxMode
     * @default "text"
     * @default 'number' [for](mobile_devices)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    mode?: 'number' | 'text' | 'tel';
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showSpinButtons?: boolean;
    /**
     * @docid
     * @default 1
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    step?: number;
    /**
     * @docid
     * @default true
     * @default false [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useLargeSpinButtons?: boolean;
    /**
     * @docid
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: number;
}
/**
 * @docid
 * @isEditor
 * @inherits dxTextEditor
 * @module ui/number_box
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxNumberBox extends dxTextEditor {
    constructor(element: Element, options?: dxNumberBoxOptions)
    constructor(element: JQuery, options?: dxNumberBoxOptions)
}

declare global {
interface JQuery {
    dxNumberBox(): JQuery;
    dxNumberBox(options: "instance"): dxNumberBox;
    dxNumberBox(options: string): any;
    dxNumberBox(options: string, ...params: any[]): any;
    dxNumberBox(options: dxNumberBoxOptions): JQuery;
}
}
export type Options = dxNumberBoxOptions;

/** @deprecated use Options instead */
export type IOptions = dxNumberBoxOptions;
