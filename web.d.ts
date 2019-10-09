declare namespace $ { }
export = $;

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    namespace $$ { }
    class $mol_object {
        static $: $mol_ambient_context;
        readonly $: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        static toString(): string;
        'object_owner()': any;
        object_owner(next?: any): any;
        'object_host()': any;
        object_host(next?: any): any;
        'object_field()': string;
        object_field(next?: string): string;
        object_id(next?: string): any;
        toString(): any;
        toJSON(): any;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
}

declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}

declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}

declare namespace $ {
    function $mol_log_debug(next?: string): string;
}

declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}

declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    var $mol_state_stack: Map<string, any>;
}

declare namespace $ {
    enum $mol_atom_status {
        obsolete = "obsolete",
        checking = "checking",
        pulling = "pulling",
        actual = "actual"
    }
    function $mol_atom_fence<Task extends () => any>(task: Task): any;
    class $mol_atom<Value = any> extends $mol_object {
        masters: Set<$mol_atom<any>> | null;
        slaves: Set<$mol_atom<any>> | null;
        status: $mol_atom_status;
        readonly handler: (next?: Value, force?: $mol_atom_force) => Value | void;
        'value()': Value | Error | undefined;
        constructor(id: string, handler?: (next?: Value, force?: $mol_atom_force) => Value | void);
        destructor(): void;
        unlink(): void;
        get(force?: $mol_atom_force): Value;
        actualize(force?: $mol_atom_force): void;
        pull(force?: $mol_atom_force): any;
        _next: Value | undefined;
        _ignore: Value | undefined;
        set(next: Value): Value;
        push(next_raw?: Value | Error): Value;
        obsolete_slaves(): void;
        check_slaves(): void;
        check(): void;
        obsolete(): void;
        lead(slave: $mol_atom<any>): void;
        dislead(slave: $mol_atom<any>): void;
        obey(master: $mol_atom<any>): void;
        disobey(master: $mol_atom<any>): void;
        disobey_all(): void;
        cache(next?: Value | Error): Error | Value;
        value(next?: Value, force?: $mol_atom_force): Value;
        static stack: $mol_atom<any>[];
        static updating: $mol_atom<any>[];
        static reaping: Set<$mol_atom<any>>;
        static scheduled: boolean;
        static actualize(atom: $mol_atom<any>): void;
        static reap(atom: $mol_atom<any>): void;
        static unreap(atom: $mol_atom<any>): void;
        static schedule(): void;
        static sync(): void;
        then<Next>(done: (prev?: Value) => Next, fail?: (error: Error) => Next): $mol_atom<any>;
        catch(fail: (error: Error) => Value): $mol_atom<any>;
    }
    function $mol_atom_current<Value = any>(): $mol_atom<Value>;
    class $mol_atom_wait extends Error {
        name: string;
    }
    class $mol_atom_force extends Object {
        $mol_atom_force: boolean;
        static $mol_atom_force: boolean;
        static toString(): string;
    }
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    class $mol_atom_force_update extends $mol_atom_force {
    }
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem<Host, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(next?: Value, force?: $mol_atom_force) => Value>): void;
    function $mol_mem_key<Host, Key, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_atom_force) => Value>): void;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }, force?: $mol_atom_force): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    var $mol_dom_context: Window & Pick<typeof globalThis, 'Node' | 'Element' | 'HTMLElement' | 'XMLHttpRequest' | 'DOMParser' | 'XMLSerializer'>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], force?: $mol_atom_force): Element[];
        static position(next?: {
            start: number;
            end: number;
            id: string;
        }, force?: $mol_atom_force): {
            start: number;
            end: number;
            id: string;
        };
        static onFocus(event: FocusEvent): void;
        static onBlur(event: FocusEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | readonly (Node | string | number | boolean | {
        dom_tree: () => Node;
    })[]): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    namespace $$ { }
    namespace $mol { }
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        context(next?: $mol_ambient_context): $mol_ambient_context;
        $: $mol_ambient_context;
        context_sub(): $mol_ambient_context;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        content_height(): number;
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        attr(): {
            [key: string]: string | number | boolean;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
    class $mol_button extends $mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  attr *
         *  	^
         *  	disabled <= disabled
         *  	role \button
         *  	tabindex <= tab_index
         *  	title <= hint
         *  ```
         **/
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index(): number;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub(): any[];
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr(): {
            "mol_theme": string;
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon(): any;
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label(): any[];
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  moving_hor?val false
         *  ```
         **/
        moving_hor(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  moving_vert?val false
         *  ```
         **/
        moving_vert(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  field *
         *  	^
         *  	scrollTop <= scroll_top?val
         *  	scrollLeft <= scroll_left?val
         *  	scrollBottom <= scroll_bottom?val
         *  	scrollRight <= scroll_right?val
         *  ```
         **/
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  scroll_bottom?val 0
         *  ```
         **/
        scroll_bottom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  scroll_right?val 0
         *  ```
         **/
        scroll_right(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_async *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event_async(): {
            "scroll": (event?: any) => any;
        };
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Strut $mol_view style * transform <= strut_transform
         *  ```
         **/
        Strut(): $mol_view;
        /**
         *  ```
         *  strut_transform \
         *  ```
         **/
        strut_transform(): string;
    }
}

declare namespace $.$$ {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    function $mol_scroll_moving_vert(): boolean;
    function $mol_scroll_moving_hor(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        event_repos(next?: Event): void;
        _moving_task_timer: any;
        moving_task_stop(): void;
        moving(): any;
        context_sub(): $mol_ambient_context;
        strut_transform(): string;
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head(): any[];
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title(): $mol_button;
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools(): $mol_view;
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools(): any[];
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body(): $mol_scroll;
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  body /
         *  ```
         **/
        body(): any[];
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot(): $mol_view;
        /**
         *  ```
         *  foot /
         *  ```
         **/
        foot(): any[];
    }
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_object {
        /**
         *  ```
         *  dom_node null
         *  ```
         **/
        dom_node(): any;
        /**
         *  ```
         *  attr_static *
         *  ```
         **/
        attr_static(): {};
        /**
         *  ```
         *  event *
         *  ```
         **/
        event(): {};
        /**
         *  ```
         *  event_async *
         *  ```
         **/
        event_async(): {};
    }
}

declare namespace $.$$ {
    class $mol_plugin extends $.$mol_plugin {
        dom_node(): any;
        render(): any;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number, force?: $mol_atom_force): number;
    }
}

declare namespace $ {
    class $mol_meter extends $mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom(): number;
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: any;
            top: any;
            right: any;
            bottom: any;
            width: any;
            height: any;
            zoom: number;
        };
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        width(): any;
        height(): any;
        zoom(): number;
    }
}

declare namespace $ {
    class $mol_touch extends $mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision(): number;
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	touchstart?event <=> event_start?event
         *  	touchmove?event <=> event_move?event
         *  	touchend?event <=> event_end?event
         *  	mousedown?event <=> event_start?event
         *  	mousemove?event <=> event_move?event
         *  	mouseup?event <=> event_end?event
         *  	mouseleave?event <=> event_leave?event
         *  	wheel?event <=> event_wheel?event
         *  ```
         **/
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
            "mouseleave": (event?: any) => any;
            "wheel": (event?: any) => any;
        };
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        rect(): any;
        event_start(event?: TouchEvent | MouseEvent): void;
        event_leave(event?: TouchEvent | MouseEvent): void;
        event_move(event?: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent | MouseEvent): void;
        event_wheel(event?: WheelEvent): void;
    }
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_tree(): Element;
        title(): string;
    }
}

declare namespace $ {
    class $mol_book extends $mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  pages_wrapped /
         *  ```
         **/
        pages_wrapped(): any[];
        /**
         *  ```
         *  pages /
         *  ```
         **/
        pages(): any[];
        /**
         *  ```
         *  plugins /
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins(): any[];
        width(): any;
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter(): $mol_meter;
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch(): $mol_touch;
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index: any): $mol_book_page;
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index: any): any;
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index: any): boolean;
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr(): {
            "tabindex": number;
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
        minimal_width(): any;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows(): any[];
        /**
         *  ```
         *  Empty null
         *  ```
         **/
        Empty(): any;
    }
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): any[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): any[];
        minimal_height(): number;
    }
}

declare namespace $ {
    function $mol_merge_dict<Target, Source>(target: Target, source: Source): Target & Source;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string, force?: $mol_atom_force): string;
        static dict(next?: {
            [key: string]: string;
        }): {
            [key: string]: string;
        };
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string): string;
        static link(next: {
            [key: string]: string;
        }): string;
        static make_link(next: {
            [key: string]: string;
        }): string;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	href <= uri
         *  	title <= hint
         *  	target <= target
         *  	download <= file_name
         *  	mol_link_current <= current
         *  ```
         **/
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target(): string;
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name(): string;
        /**
         *  ```
         *  current false
         *  ```
         **/
        current(): boolean;
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg(): {};
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
        };
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space(): string;
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size(): number;
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
        text_width(text: string): number;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect(): string;
    }
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr(): {
            "d": string;
        };
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path(): $mol_svg_path;
        /**
         *  ```
         *  path \
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        /**
         *  ```
         *  path \M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
    class $mol_icon_favorite extends $mol_icon {
        /**
         *  ```
         *  path \M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  plugins / <= Meter
         *  ```
         **/
        plugins(): any[];
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter(): $mol_meter;
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor(): any;
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble(): $mol_pop_bubble;
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  bubble_content /
         *  ```
         **/
        bubble_content(): any[];
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): any[];
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style(): {
            "maxHeight": number;
        };
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        /**
         *  ```
         *  align \
         *  ```
         **/
        align(): string;
    }
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack(): string;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  parts /
         *  ```
         **/
        parts(): any[];
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id: any): $mol_view;
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_atom_force): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    class $mol_http extends $mol_object {
        static resource(uri: string): $mol_http;
        static resource_absolute(uri: string): $mol_http;
        uri(): string;
        method_get(): string;
        method_put(): string;
        credentials(): {
            login?: string;
            password?: string;
        };
        headers(): {};
        response_type(): '' | 'text' | 'document' | 'json' | 'blob' | 'arraybuffer';
        'request()': XMLHttpRequest;
        request(): XMLHttpRequest;
        destructor(): void;
        response(next?: any, force?: $mol_atom_force): XMLHttpRequest;
        text(next?: string, force?: $mol_atom_force): string;
        xml(next?: string, force?: $mol_atom_force): Document;
        json<Content>(next?: Content, force?: $mol_atom_force): Content;
    }
}

declare namespace $ {
    function $mol_deprecated<Host, Method extends Function>(message: string): (host: Host, field: string, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    class $mol_http_resource extends $mol_http {
        static item(uri: string): $mol_http;
    }
    class $mol_http_resource_json {
        static item(uri: string): $mol_http;
    }
}

declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        name(): string;
        ext(): string;
        content(next?: string, force?: $mol_atom_force): string;
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl(): boolean;
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift(): boolean;
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt(): boolean;
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event?: KeyboardEvent): void;
        event_right(event?: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete(): boolean;
        /**
         *  ```
         *  field *
         *  	^
         *  	disabled <= disabled
         *  	value <= value_changed?val
         *  	placeholder <= hint
         *  	type <= type?val
         *  	spellcheck <= spellcheck
         *  	autocomplete <= autocomplete_native
         *  ```
         **/
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
            "autocomplete": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck(): boolean;
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr(): {
            "maxlength": number;
        };
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max(): number;
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "input": (event?: any) => any;
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        _timer: any;
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
    class $mol_select extends $mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary(): {};
        /**
         *  ```
         *  options /
         *  ```
         **/
        options(): any[];
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id: any): $mol_button_minor;
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id: any, event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id: any): any[];
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id: any): $mol_dimmer;
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id: any): string;
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options(): $mol_view;
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message(): string;
        /**
         *  ```
         *  plugins / <= Nav
         *  ```
         **/
        plugins(): any[];
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav(): $mol_nav;
        /**
         *  ```
         *  nav_components /
         *  	<= Filter
         *  	<= option_rows
         *  ```
         **/
        nav_components(): any[];
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor(): $mol_button_minor;
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger(): $mol_button_minor;
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  trigger_content /
         *  	<= option_content_current
         *  	<= Filter
         *  	<= Trigger_icon
         *  ```
         **/
        trigger_content(): any[];
        /**
         *  ```
         *  option_content_current /
         *  ```
         **/
        option_content_current(): any[];
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter(): $mol_string;
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint(): string;
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon(): $mol_icon_chevron;
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content(): any[];
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu(): $mol_list;
        /**
         *  ```
         *  menu_content /
         *  	<= Filter
         *  	<= option_rows
         *  ```
         **/
        menu_content(): any[];
        /**
         *  ```
         *  option_rows /
         *  ```
         **/
        option_rows(): any[];
    }
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options_showed(next?: boolean): boolean;
        options(): string[];
        options_filtered(): string[];
        option_label(id: string): any;
        option_rows(): $mol_view[] | $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_view | $mol_button_minor)[];
        option_content_current(): any[];
        trigger_content(): any[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_search extends $mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Suggest $mol_select
         *  	value?val <=> suggest_selected?val
         *  	filter_pattern?val <=> suggest_selected?val
         *  	hint <= hint
         *  	filter_pattern?val <=> query?val
         *  	options_showed <= suggests_showed
         *  	options <= suggests
         *  	Trigger_icon null
         *  	debounce <= debounce
         *  ```
         **/
        Suggest(): $mol_select;
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed(): boolean;
        /**
         *  ```
         *  suggests /
         *  ```
         **/
        suggests(): any[];
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear(): $mol_button_minor;
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon(): $mol_icon_cross;
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $.$mol_select)[];
        event_clear(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_switch extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option!id $mol_check
         *  	checked?val <=> option_checked!id?val
         *  	title <= option_title!id
         *  	enabled <= option_enabled!id
         *  ```
         **/
        Option(id: any): $mol_check;
        /**
         *  ```
         *  option_checked!id?val false
         *  ```
         **/
        option_checked(id: any, val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  option_title!id \
         *  ```
         **/
        option_title(id: any): string;
        /**
         *  ```
         *  option_enabled!id <= enabled
         *  ```
         **/
        option_enabled(id: any): boolean;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  value?val null
         *  ```
         **/
        value(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  options *
         *  ```
         **/
        options(): {};
        /**
         *  ```
         *  sub <= items
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  items /
         *  ```
         **/
        items(): any[];
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        options(): {
            [key: string]: string;
        };
        items(): $.$mol_check[];
        option_title(key: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}
declare namespace $ {
    class $mol_row_sub extends $mol_view {
    }
}

declare namespace $.$$ {
    class $mol_row extends $.$mol_row {
        item_offsets_top(): number[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_form extends $mol_view {
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked(): boolean;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  submit?event null
         *  ```
         **/
        submit(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Bar_fields
         *  	<= Bar_buttons
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Bar_fields $mol_view sub <= form_fields
         *  ```
         **/
        Bar_fields(): $mol_view;
        /**
         *  ```
         *  form_fields /
         *  ```
         **/
        form_fields(): any[];
        /**
         *  ```
         *  Bar_buttons $mol_row sub <= buttons
         *  ```
         **/
        Bar_buttons(): $mol_row;
        /**
         *  ```
         *  buttons /
         *  ```
         **/
        buttons(): any[];
    }
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Content
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Title $mol_view sub <= label
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  label / <= title
         *  ```
         **/
        label(): any[];
        /**
         *  ```
         *  Content $mol_view sub / <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content null
         *  ```
         **/
        content(): any;
    }
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        /**
         *  ```
         *  label /
         *  	<= name
         *  	<= Bid
         *  ```
         **/
        label(): any[];
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
        /**
         *  ```
         *  Bid $mol_view sub / <= bid
         *  ```
         **/
        Bid(): $mol_view;
        /**
         *  ```
         *  bid \
         *  ```
         **/
        bid(): string;
        /**
         *  ```
         *  Content <= control
         *  ```
         **/
        Content(): any;
        /**
         *  ```
         *  control null
         *  ```
         **/
        control(): any;
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        /**
         *  ```
         *  minimal_height 32
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Icon $mol_icon_chevron
         *  ```
         **/
        Icon(): $mol_icon_chevron;
        /**
         *  ```
         *  level 0
         *  ```
         **/
        level(): number;
        /**
         *  ```
         *  style *
         *  	^
         *  	paddingLeft <= level_style
         *  ```
         **/
        style(): {
            "paddingLeft": string;
        };
        /**
         *  ```
         *  level_style \0px
         *  ```
         **/
        level_style(): string;
        /**
         *  ```
         *  checked?val <=> expanded?val
         *  ```
         **/
        checked(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  enabled <= expandable
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  expandable false
         *  ```
         **/
        expandable(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_scroll {
        /**
         *  ```
         *  row_ids /
         *  ```
         **/
        row_ids(): any[];
        /**
         *  ```
         *  row_id!index null
         *  ```
         **/
        row_id(index: any): any;
        /**
         *  ```
         *  col_ids /
         *  ```
         **/
        col_ids(): any[];
        /**
         *  ```
         *  records *
         *  ```
         **/
        records(): {};
        /**
         *  ```
         *  record!id null
         *  ```
         **/
        record(id: any): any;
        /**
         *  ```
         *  hierarchy null
         *  ```
         **/
        hierarchy(): any;
        /**
         *  ```
         *  hierarchy_col \
         *  ```
         **/
        hierarchy_col(): string;
        /**
         *  ```
         *  sub / <= Table
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Table $mol_grid_table
         *  	offset <= gap_top
         *  	sub / <= rows_visible
         *  ```
         **/
        Table(): $$.$mol_grid_table;
        /**
         *  ```
         *  gap_top 0
         *  ```
         **/
        gap_top(): number;
        /**
         *  ```
         *  rows_visible /
         *  ```
         **/
        rows_visible(): any[];
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows(): any[];
        /**
         *  ```
         *  Head $mol_grid_row
         *  	height <= row_height
         *  	cells <= head_cells
         *  ```
         **/
        Head(): $mol_grid_row;
        /**
         *  ```
         *  row_height 40
         *  ```
         **/
        row_height(): number;
        /**
         *  ```
         *  head_cells /
         *  ```
         **/
        head_cells(): any[];
        /**
         *  ```
         *  Row!id $mol_grid_row
         *  	height <= row_height
         *  	cells <= cells!id
         *  ```
         **/
        Row(id: any): $mol_grid_row;
        /**
         *  ```
         *  cells!id /
         *  ```
         **/
        cells(id: any): any[];
        /**
         *  ```
         *  Cell!id $mol_view
         *  ```
         **/
        Cell(id: any): $mol_view;
        /**
         *  ```
         *  cell!id null
         *  ```
         **/
        cell(id: any): any;
        /**
         *  ```
         *  Cell_text!id $mol_grid_cell sub / <= cell_content_text!id
         *  ```
         **/
        Cell_text(id: any): $mol_grid_cell;
        /**
         *  ```
         *  cell_content_text!id <= cell_content!id
         *  ```
         **/
        cell_content_text(id: any): any[];
        /**
         *  ```
         *  cell_content!id /
         *  ```
         **/
        cell_content(id: any): any[];
        /**
         *  ```
         *  Cell_number!id $mol_grid_number sub / <= cell_content_number!id
         *  ```
         **/
        Cell_number(id: any): $mol_grid_number;
        /**
         *  ```
         *  cell_content_number!id <= cell_content!id
         *  ```
         **/
        cell_content_number(id: any): any[];
        /**
         *  ```
         *  Col_head!id $mol_float
         *  	dom_name \th
         *  	sub / <= col_head_content!id
         *  ```
         **/
        Col_head(id: any): $mol_float;
        /**
         *  ```
         *  col_head_content!id /
         *  ```
         **/
        col_head_content(id: any): any[];
        /**
         *  ```
         *  Cell_branch!id $mol_check_expand
         *  	level <= cell_level!id
         *  	label <= cell_content!id
         *  	expanded?val <=> cell_expanded!id?val
         *  ```
         **/
        Cell_branch(id: any): $$.$mol_check_expand;
        /**
         *  ```
         *  cell_level!id 0
         *  ```
         **/
        cell_level(id: any): number;
        /**
         *  ```
         *  cell_expanded!id?val false
         *  ```
         **/
        cell_expanded(id: any, val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Cell_content!id / <= Cell_dimmer!id
         *  ```
         **/
        Cell_content(id: any): any[];
        /**
         *  ```
         *  Cell_dimmer!id $mol_dimmer
         *  	needle <= needle
         *  	haystack <= cell_value!id
         *  ```
         **/
        Cell_dimmer(id: any): $mol_dimmer;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  cell_value!id \
         *  ```
         **/
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        /**
         *  ```
         *  dom_name \table
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style(): {
            "top": number;
        };
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style(): {
            "top": number;
        };
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        /**
         *  ```
         *  dom_name \tr
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	height <= height
         *  ```
         **/
        style(): {
            "height": number;
        };
        /**
         *  ```
         *  height 40
         *  ```
         **/
        height(): number;
        /**
         *  ```
         *  sub <= cells
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  cells /
         *  ```
         **/
        cells(): any[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        /**
         *  ```
         *  dom_name \td
         *  ```
         **/
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        rows_visible(): any[];
        rows_visible_max(): number;
        view_window(): {
            top: number;
            bottom: number;
            count: number;
        };
        gap_top(): number;
        height(): number;
        content_height(): number;
        head_cells(): $mol_float[];
        col_head_content(colId: string): string[];
        rows(): $mol_grid_row[];
        cells(row_id: string[]): $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
    class $mol_grid_table extends $.$mol_grid_table {
        context_sub(): $mol_ambient_context;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        /**
         *  ```
         *  dom_name \img
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  field *
         *  	^
         *  	src <= uri
         *  	alt <= title
         *  ```
         **/
        field(): {
            "src": string;
            "alt": string;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
    }
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= content
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Icon $mol_image uri <= icon
         *  ```
         **/
        Icon(): $mol_image;
        /**
         *  ```
         *  icon \
         *  ```
         **/
        icon(): string;
        /**
         *  ```
         *  content / <= title
         *  ```
         **/
        content(): any[];
        /**
         *  ```
         *  title <= uri
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  host \
         *  ```
         **/
        host(): string;
    }
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
    }
}

declare namespace $ {
    interface $mol_syntax_token {
        name: string;
        found: string;
        chunks: string[];
    }
    class $mol_syntax {
        constructor(lexems: {
            [name: string]: RegExp;
        });
        'lexems()': {
            [name: string]: RegExp;
        };
        lexems(): {
            [name: string]: RegExp;
        };
        'rules()': {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        rules(): {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        'regExp()': RegExp;
        regExp(): RegExp;
        tokenize(text: string): $mol_syntax_token[];
    }
}

declare namespace $ {
    var $mol_syntax_md_flow: $mol_syntax;
    var $mol_syntax_md_line: $mol_syntax;
    const $mol_syntax_md_code: $mol_syntax;
}

declare namespace $ {
    class $mol_text extends $mol_list {
        /**
         *  ```
         *  uri_base \
         *  ```
         **/
        uri_base(): string;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
        /**
         *  ```
         *  tokens /
         *  ```
         **/
        tokens(): any[];
        /**
         *  ```
         *  Quote!id $mol_text text <= quote_text!id
         *  ```
         **/
        Quote(id: any): $mol_text;
        /**
         *  ```
         *  quote_text!id \
         *  ```
         **/
        quote_text(id: any): string;
        /**
         *  ```
         *  Row!id $mol_text_row
         *  	sub <= block_content!id
         *  	type <= block_type!id
         *  ```
         **/
        Row(id: any): $mol_text_row;
        /**
         *  ```
         *  block_content!id /
         *  ```
         **/
        block_content(id: any): any[];
        /**
         *  ```
         *  block_type!id \
         *  ```
         **/
        block_type(id: any): string;
        /**
         *  ```
         *  Span!id $mol_text_span
         *  ```
         **/
        Span(id: any): $mol_text_span;
        /**
         *  ```
         *  Link!id $mol_text_link
         *  ```
         **/
        Link(id: any): $mol_text_link;
        /**
         *  ```
         *  Image!id $mol_text_image
         *  ```
         **/
        Image(id: any): $mol_text_image;
        /**
         *  ```
         *  Header!id $mol_text_header
         *  	level <= header_level!id
         *  	content <= header_content!id
         *  ```
         **/
        Header(id: any): $mol_text_header;
        /**
         *  ```
         *  header_level!id 0
         *  ```
         **/
        header_level(id: any): number;
        /**
         *  ```
         *  header_content!id /
         *  ```
         **/
        header_content(id: any): any[];
        /**
         *  ```
         *  Table!id $mol_grid
         *  	head_cells <= table_head_cells!id
         *  	rows <= table_rows!id
         *  ```
         **/
        Table(id: any): $mol_grid;
        /**
         *  ```
         *  table_head_cells!id /
         *  ```
         **/
        table_head_cells(id: any): any[];
        /**
         *  ```
         *  table_rows!id /
         *  ```
         **/
        table_rows(id: any): any[];
        /**
         *  ```
         *  Table_row!id $mol_grid_row cells <= table_cells!id
         *  ```
         **/
        Table_row(id: any): $mol_grid_row;
        /**
         *  ```
         *  table_cells!id /
         *  ```
         **/
        table_cells(id: any): any[];
        /**
         *  ```
         *  Table_cell!id $mol_grid_cell sub <= table_cell_content!id
         *  ```
         **/
        Table_cell(id: any): $mol_grid_cell;
        /**
         *  ```
         *  table_cell_content!id /
         *  ```
         **/
        table_cell_content(id: any): any[];
        /**
         *  ```
         *  Table_cell_head!id $mol_float sub <= table_cell_content!id
         *  ```
         **/
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type
         *  ```
         **/
        attr(): {
            "mol_text_type": string;
        };
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        /**
         *  ```
         *  dom_name \h
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  minimal_height 50
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_header_level <= level?val
         *  ```
         **/
        attr(): {
            "mol_text_header_level": any;
        };
        /**
         *  ```
         *  level?val 0
         *  ```
         **/
        level(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        /**
         *  ```
         *  dom_name \span
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub(): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_link_iconed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean; /**
             *  ```
             *  Row!id $mol_text_row
             *  	sub <= block_content!id
             *  	type <= block_type!id
             *  ```
             **/
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  uri <= link?val
         *  ```
         **/
        uri(): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        /**
         *  ```
         *  dom_name \object
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	allowfullscreen true
         *  	mol_text_type <= type?val
         *  	data <= link?val
         *  ```
         **/
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub / <= title?val
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  title?val \
         *  ```
         **/
        title(val?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): $mol_syntax_token[];
        rows(): ($.$mol_grid | $.$mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        code2spans(prefix: string, text: string): $mol_text_span[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> press?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  press?event null
         *  ```
         **/
        press(event?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Edit
         *  	<= View
         *  ```
         **/
        sub(): any[];
        /**
         *  ```
         *  Edit $mol_string
         *  	dom_name \textarea
         *  	value?val <=> value?val
         *  	hint <= hint
         *  	debounce 0
         *  	enabled <= enabled
         *  ```
         **/
        Edit(): $mol_string;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  View $mol_text text <= text
         *  ```
         **/
        View(): $mol_text;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
    }
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        text(): any;
        indent_inc(): void;
        indent_dec(): void;
        press(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    function $mol_typeof(value: any): any;
}

declare namespace $ {
    type $mol_tree_path = Array<string | number | null>;
    type $mol_tree_hack = (input: $mol_tree, context: $mol_tree_context) => $mol_tree[];
    type $mol_tree_context = Record<string, $mol_tree_hack>;
    type $mol_tree_library = Record<string, $mol_tree_context>;
    class $mol_tree {
        type: string;
        data: string;
        sub: $mol_tree[];
        baseUri: string;
        row: number;
        col: number;
        constructor(config?: {
            type?: string;
            value?: string;
            data?: string;
            sub?: $mol_tree[];
            baseUri?: string;
            row?: number;
            col?: number;
        });
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config: {
            type?: string;
            value?: string;
            data?: string;
            sub?: $mol_tree[];
            baseUri?: string;
            row?: number;
            col?: number;
        }): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        readonly uri: string;
        toString(prefix?: string): string;
        toJSON(): any;
        readonly value: string;
        insert(value: $mol_tree, ...path: $mol_tree_path): $mol_tree;
        select(...path: $mol_tree_path): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
        transform(visit: (stack: $mol_tree[], sub: () => $mol_tree[]) => $mol_tree | null, stack?: $mol_tree[]): $mol_tree | null;
        hack(context: $mol_tree_context): $mol_tree;
        error(message: string): Error;
    }
}

declare namespace $ {
    class $hyoo_scout_suggest extends $mol_page {
        /**
         *  ```
         *  title \Новая игра
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  tools / <= Close
         *  ```
         **/
        tools(): any[];
        /**
         *  ```
         *  Close $mol_link
         *  	arg * suggest null
         *  	sub / <= close_icon
         *  ```
         **/
        Close(): $mol_link;
        /**
         *  ```
         *  close_icon $mol_icon_cross
         *  ```
         **/
        close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  body / <= Form
         *  ```
         **/
        body(): any[];
        submit_blocked(): boolean;
        /**
         *  ```
         *  Form $mol_form
         *  	form_fields /
         *  		<= Name_field
         *  		<= Icon_field
         *  		<= Descr_field
         *  		<= Reason_field
         *  		<= Age_field
         *  		<= Place_field
         *  		<= Stuff_field
         *  		<= Prep_field
         *  		<= Duration_field
         *  	submit_blocked => submit_blocked
         *  	buttons / <= Submit
         *  ```
         **/
        Form(): $mol_form;
        /**
         *  ```
         *  Name_field $mol_form_field
         *  	name \Название
         *  	bid <= name_bid
         *  	control <= Name
         *  ```
         **/
        Name_field(): $mol_form_field;
        /**
         *  ```
         *  name_bid \
         *  ```
         **/
        name_bid(): string;
        /**
         *  ```
         *  Name $mol_string
         *  	hint \Раз два три
         *  	value?val <=> name?val
         *  ```
         **/
        Name(): $mol_string;
        /**
         *  ```
         *  name?val \
         *  ```
         **/
        name(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Icon_field $mol_form_field
         *  	name \Эмодзи
         *  	bid <= icon_bid
         *  	control <= Icon
         *  ```
         **/
        Icon_field(): $mol_form_field;
        /**
         *  ```
         *  icon_bid \
         *  ```
         **/
        icon_bid(): string;
        /**
         *  ```
         *  Icon $mol_string
         *  	length_max 2
         *  	hint \?
         *  	value?val <=> icon?val
         *  ```
         **/
        Icon(): $mol_string;
        /**
         *  ```
         *  icon?val \
         *  ```
         **/
        icon(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Descr_field $mol_form_field
         *  	name \Описание
         *  	bid <= descr_bid
         *  	control <= Descr
         *  ```
         **/
        Descr_field(): $mol_form_field;
        /**
         *  ```
         *  descr_bid \
         *  ```
         **/
        descr_bid(): string;
        /**
         *  ```
         *  Descr $mol_textarea
         *  	hint \Вместе считаем - вот и вся игра.
         *  	value?val <=> descr?val
         *  ```
         **/
        Descr(): $mol_textarea;
        /**
         *  ```
         *  descr?val \
         *  ```
         **/
        descr(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Reason_field $mol_form_field
         *  	name \Цель
         *  	bid <= reason_bid
         *  	control <= Reason
         *  ```
         **/
        Reason_field(): $mol_form_field;
        /**
         *  ```
         *  reason_bid \
         *  ```
         **/
        reason_bid(): string;
        /**
         *  ```
         *  Reason $mol_switch
         *  	value?val <=> reason?val
         *  	options /
         *  		\Внимание
         *  		\Группировка
         *  		\Доверие
         *  		\Знакомство
         *  		\Лидерство
         *  		\Мышление
         *  		\Обратная связь
         *  		\Обсуждение
         *  		\Развлечение
         *  		\Разминка
         *  		\Раскрепощение
         *  		\Сплочение
         *  		\Творчество
         *  		\Усвоение
         *  ```
         **/
        Reason(): $mol_switch;
        /**
         *  ```
         *  reason?val \
         *  ```
         **/
        reason(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Age_field $mol_form_field
         *  	name \Возраст
         *  	control <= Age
         *  ```
         **/
        Age_field(): $mol_form_field;
        /**
         *  ```
         *  Age $mol_switch
         *  	value?val <=> age?val
         *  	options *
         *  		low \Малыши
         *  		mid \Среднячки
         *  		high \Старшаки
         *  		any \Любой
         *  ```
         **/
        Age(): $mol_switch;
        /**
         *  ```
         *  age?val \any
         *  ```
         **/
        age(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Place_field $mol_form_field
         *  	name \Место
         *  	control <= Place
         *  ```
         **/
        Place_field(): $mol_form_field;
        /**
         *  ```
         *  Place $mol_switch
         *  	value?val <=> place?val
         *  	options *
         *  		hall \Зал
         *  		space \Просторное
         *  		quiet \Тихое
         *  		any \Любое
         *  ```
         **/
        Place(): $mol_switch;
        /**
         *  ```
         *  place?val \any
         *  ```
         **/
        place(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Stuff_field $mol_form_field
         *  	name \Реквизит
         *  	control <= Stuff
         *  ```
         **/
        Stuff_field(): $mol_form_field;
        /**
         *  ```
         *  Stuff $mol_string
         *  	hint \Руки, Ноги, Голова
         *  	value?val <=> stuff?val
         *  ```
         **/
        Stuff(): $mol_string;
        /**
         *  ```
         *  stuff?val \
         *  ```
         **/
        stuff(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Prep_field $mol_form_field
         *  	name \Подготовка
         *  	bid <= prep_bid
         *  	control <= Prep
         *  ```
         **/
        Prep_field(): $mol_form_field;
        /**
         *  ```
         *  prep_bid \
         *  ```
         **/
        prep_bid(): string;
        /**
         *  ```
         *  Prep $mol_switch
         *  	value?val <=> prep?val
         *  	options *
         *  		0 \Нет
         *  		1 \1 минута
         *  		5 \5 минут
         *  		10 \10 минут
         *  		20 \20 минут
         *  		40 \40 минут
         *  ```
         **/
        Prep(): $mol_switch;
        /**
         *  ```
         *  prep?val \0
         *  ```
         **/
        prep(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Duration_field $mol_form_field
         *  	name \Длительность
         *  	control <= Duration
         *  ```
         **/
        Duration_field(): $mol_form_field;
        /**
         *  ```
         *  Duration $mol_switch
         *  	value?val <=> duration?val
         *  	options *
         *  		1 \1 минута
         *  		5 \5 минут
         *  		10 \10 минут
         *  		20 \20 минут
         *  		40 \40 минут
         *  		60 \60 минут
         *  ```
         **/
        Duration(): $mol_switch;
        /**
         *  ```
         *  duration?val \10
         *  ```
         **/
        duration(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Submit $mol_button_major
         *  	sub / \Добавить игру
         *  	event_click?val <=> submit?val
         *  	disabled <= submit_blocked
         *  ```
         **/
        Submit(): $mol_button_major;
        /**
         *  ```
         *  submit?val null
         *  ```
         **/
        submit(val?: any, force?: $mol_atom_force): any;
    }
}

declare namespace $.$$ {
    class $hyoo_scout_suggest extends $.$hyoo_scout_suggest {
        name_bid(): "" | "Обязательно";
        icon_bid(): "" | "Обязательно";
        descr_bid(): "" | "Обязательно";
        reason_bid(): "" | "Обязательно";
        submit(): void;
    }
}

declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $ {
    class $hyoo_scout_gist extends $mol_object {
        /**
         *  ```
         *  icon \
         *  ```
         **/
        icon(): string;
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  tags *
         *  	Возраст /
         *  	Реквизит /
         *  	Подготовка /
         *  	Цель /
         *  	Место /
         *  	Длительность /
         *  ```
         **/
        tags(): {
            "Возраст": any[];
            "Реквизит": any[];
            "Подготовка": any[];
            "Цель": any[];
            "Место": any[];
            "Длительность": any[];
        };
        /**
         *  ```
         *  content \
         *  ```
         **/
        content(): string;
    }
}
declare namespace $ {
    class $hyoo_scout_placeholder extends $mol_page {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}
declare namespace $ {
    class $hyoo_scout extends $mol_book {
        /**
         *  ```
         *  pages /
         *  	<= Filter
         *  	<= Gists
         *  	<= Suggest
         *  ```
         **/
        pages(): any[];
        /**
         *  ```
         *  Filter $mol_page
         *  	title \Фильтры
         *  	minimal_width 400
         *  	event_top?val <=> event_front_up?val
         *  	body /
         *  		<= Filter_aspects
         *  		<= Feedback
         *  ```
         **/
        Filter(): $mol_page;
        /**
         *  ```
         *  Filter_aspects $mol_list rows <= filter_aspects
         *  ```
         **/
        Filter_aspects(): $mol_list;
        /**
         *  ```
         *  filter_aspects /
         *  ```
         **/
        filter_aspects(): any[];
        /**
         *  ```
         *  Feedback $mol_link
         *  	title \Ошибки? Предложения?
         *  	uri \https://vk.com/scout_hyoo_ru
         *  ```
         **/
        Feedback(): $mol_link;
        /**
         *  ```
         *  Gists $mol_page
         *  	title <= gists_title
         *  	minimal_width 400
         *  	event_top?val <=> event_front_up?val
         *  	tools /
         *  		<= Suggest_link
         *  		<= Gists_favorite
         *  	body /
         *  		<= Gists_search
         *  		<= Gists_list
         *  ```
         **/
        Gists(): $mol_page;
        /**
         *  ```
         *  gists_title \Игротека вожатого
         *  ```
         **/
        gists_title(): string;
        /**
         *  ```
         *  Suggest_link $mol_link
         *  	arg *
         *  		suggest \
         *  		gist null
         *  	sub / <= Suggest_icon
         *  ```
         **/
        Suggest_link(): $mol_link;
        /**
         *  ```
         *  Suggest_icon $mol_icon_plus
         *  ```
         **/
        Suggest_icon(): $mol_icon_plus;
        /**
         *  ```
         *  Gists_favorite $mol_check_icon
         *  	hint \Только избранное
         *  	checked?val <=> gists_favorite?val
         *  	Icon <= Gists_favorite_icon
         *  	label <= gists_favorite_label
         *  ```
         **/
        Gists_favorite(): $mol_check_icon;
        /**
         *  ```
         *  gists_favorite?val false
         *  ```
         **/
        gists_favorite(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Gists_favorite_icon $mol_icon_favorite
         *  ```
         **/
        Gists_favorite_icon(): $mol_icon_favorite;
        /**
         *  ```
         *  gists_favorite_label / <= Gists_favorite_duration
         *  ```
         **/
        gists_favorite_label(): any[];
        /**
         *  ```
         *  Gists_favorite_duration $mol_view sub / <= gists_favorite_duration
         *  ```
         **/
        Gists_favorite_duration(): $mol_view;
        /**
         *  ```
         *  gists_favorite_duration \
         *  ```
         **/
        gists_favorite_duration(): string;
        /**
         *  ```
         *  Gists_search $mol_search query?val <=> gists_filter_query?val
         *  ```
         **/
        Gists_search(): $mol_search;
        /**
         *  ```
         *  gists_filter_query?val \
         *  ```
         **/
        gists_filter_query(val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Gists_list $mol_list rows <= gist_links
         *  ```
         **/
        Gists_list(): $mol_list;
        /**
         *  ```
         *  gist_links /
         *  ```
         **/
        gist_links(): any[];
        /**
         *  ```
         *  Suggest $hyoo_scout_suggest event_top?val <=> event_front_up?val
         *  ```
         **/
        Suggest(): $hyoo_scout_suggest;
        /**
         *  ```
         *  Placeholder $hyoo_scout_placeholder
         *  ```
         **/
        Placeholder(): $hyoo_scout_placeholder;
        /**
         *  ```
         *  Filter_aspect!id $mol_list rows /
         *  	<= Filter_aspect_title!id
         *  	<= Filter_aspect_tags!id
         *  ```
         **/
        Filter_aspect(id: any): $mol_list;
        /**
         *  ```
         *  Filter_aspect_title!id $mol_view sub / <= key!id
         *  ```
         **/
        Filter_aspect_title(id: any): $mol_view;
        /**
         *  ```
         *  key!id \
         *  ```
         **/
        key(id: any): string;
        /**
         *  ```
         *  Filter_aspect_tags!id $mol_row sub <= filter_aspect_tags!id
         *  ```
         **/
        Filter_aspect_tags(id: any): $mol_row;
        /**
         *  ```
         *  filter_aspect_tags!id /
         *  ```
         **/
        filter_aspect_tags(id: any): any[];
        /**
         *  ```
         *  Filter_tag!id $mol_check
         *  	checked?val <=> filter_tag_checked!id?val
         *  	label / <= Filter_tag_title!id
         *  ```
         **/
        Filter_tag(id: any): $mol_check;
        /**
         *  ```
         *  filter_tag_checked!id?val true
         *  ```
         **/
        filter_tag_checked(id: any, val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Filter_tag_title!id $mol_view
         *  	attr * hyoo_scout_tag_id <= tag_title!id
         *  	sub / <= tag_title!id
         *  ```
         **/
        Filter_tag_title(id: any): $mol_view;
        /**
         *  ```
         *  tag_title!id \
         *  ```
         **/
        tag_title(id: any): string;
        /**
         *  ```
         *  Gist_link!id $mol_link
         *  	sub /
         *  		<= Gist_link_icon!id
         *  		<= Gist_link_title!id
         *  	arg * gist <= key!id
         *  ```
         **/
        Gist_link(id: any): $mol_link;
        /**
         *  ```
         *  Gist_link_icon!id $mol_view sub / <= gist_icon!id
         *  ```
         **/
        Gist_link_icon(id: any): $mol_view;
        /**
         *  ```
         *  gist_icon!id \
         *  ```
         **/
        gist_icon(id: any): string;
        /**
         *  ```
         *  Gist_link_title!id $mol_dimmer
         *  	needle <= gists_filter_query
         *  	haystack <= gist_title!id
         *  ```
         **/
        Gist_link_title(id: any): $mol_dimmer;
        /**
         *  ```
         *  gist_title!id \
         *  ```
         **/
        gist_title(id: any): string;
        /**
         *  ```
         *  Gist!id $mol_page
         *  	title <= gist_title!id
         *  	minimal_width 400
         *  	event_top?val <=> event_front_up?val
         *  	tools /
         *  		<= Gist_favorite!id
         *  		<= Gist_close
         *  	body /
         *  		<= Gist_content!id
         *  		<= Gist_aspects!id
         *  		<= Gist_remarks!id
         *  ```
         **/
        Gist(id: any): $mol_page;
        /**
         *  ```
         *  Gist_favorite!id $mol_check_icon
         *  	checked?val <=> gist_favorite!id?val
         *  	Icon <= Gist_favorite_icon
         *  ```
         **/
        Gist_favorite(id: any): $mol_check_icon;
        /**
         *  ```
         *  gist_favorite!id?val false
         *  ```
         **/
        gist_favorite(id: any, val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Gist_favorite_icon $mol_icon_favorite
         *  ```
         **/
        Gist_favorite_icon(): $mol_icon_favorite;
        /**
         *  ```
         *  Gist_close $mol_link
         *  	arg * gist null
         *  	sub / <= Gist_close_icon
         *  ```
         **/
        Gist_close(): $mol_link;
        /**
         *  ```
         *  Gist_close_icon $mol_icon_cross
         *  ```
         **/
        Gist_close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  Gist_content!id $mol_text text <= gist_content!id
         *  ```
         **/
        Gist_content(id: any): $mol_text;
        /**
         *  ```
         *  gist_content!id \
         *  ```
         **/
        gist_content(id: any): string;
        /**
         *  ```
         *  Gist_aspects!id $mol_list rows <= gist_aspects!id
         *  ```
         **/
        Gist_aspects(id: any): $mol_list;
        /**
         *  ```
         *  gist_aspects!id /
         *  ```
         **/
        gist_aspects(id: any): any[];
        /**
         *  ```
         *  Gist_remarks!id $mol_textarea
         *  	hint \Личные заметки
         *  	value?val <=> gist_remarks!id?val
         *  ```
         **/
        Gist_remarks(id: any): $mol_textarea;
        /**
         *  ```
         *  gist_remarks!id?val \
         *  ```
         **/
        gist_remarks(id: any, val?: any, force?: $mol_atom_force): any;
        /**
         *  ```
         *  Gist_aspect!id $mol_row sub /
         *  	<= Gist_aspect_title!id
         *  	<= gist_aspect_tags!id
         *  ```
         **/
        Gist_aspect(id: any): $mol_row;
        /**
         *  ```
         *  Gist_aspect_title!id $mol_view sub /
         *  	<= key!id
         *  	\:
         *  ```
         **/
        Gist_aspect_title(id: any): $mol_view;
        /**
         *  ```
         *  gist_aspect_tags!id /
         *  ```
         **/
        gist_aspect_tags(id: any): any[];
        /**
         *  ```
         *  Gist_tag!id $mol_view
         *  	attr * hyoo_scout_tag_id <= tag_title!id
         *  	sub / <= tag_title!id
         *  ```
         **/
        Gist_tag(id: any): $mol_view;
        /**
         *  ```
         *  data /
         *  	$hyoo_scout_gist
         *  		icon \🌋
         *  		title \Спичка о себе
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Тихое
         *  		content \Каждый по очереди представляет, что держит в руках спичку (или использует реальную), и пока она горит, следует рассказать о себе как можно больше.
         *  	$hyoo_scout_gist
         *  		icon \👏
         *  		title \Хор хлопочков
         *  		tags *
         *  			Длительность / \1 минута
         *  			Цель / \Внимание
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Всем одновременно нужно повторить ритм хлопков вожатого. Если все выполнили правильно и дружно, можно поаплодировать друг другу.
         *  	$hyoo_scout_gist
         *  		icon \🍎
         *  		title \Фруктовый салат
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Разминка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Каждому назначается свой фрукт (овощ/интерес/имя). Ведущий называет один из фруктов и команду. Все с этим фруктом должны её выполнить и поменяться местами. А ведущий занимает освободившееся место. Кому места не досталось - становится ведущим.
         *  	$hyoo_scout_gist
         *  		icon \⚛️
         *  		title \Притяжение-отталкивание
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Раскрепощение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Каждый выбирает того, кто ему больше симпатичен и старается держаться максимально близко к нему, и одновременно того, кто менее симпатичен и старается держаться подальше от него. Несколько раз цели должны меняться. В том числе и на противоположные.
         *  	$hyoo_scout_gist
         *  		icon \🎤
         *  		title \Вокальное приветствие
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все встают в круг. Каждый по очереди делает шаг, пропевает своё имя и показывает любое движение. Все остальные повторяют за ним.
         *  	$hyoo_scout_gist
         *  		icon \💑
         *  		title \Стенка на стенку
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Обратная связь
         *  				\Раскрепощение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все встают в две шеренги, разбившись на пары. За минуту надо обсудить проведённое ранее вместе время. В конце нужно показать число пальцев:
         *  			\
         *  			\ - Если хотя бы один показал 1 палец, то оба отворачиваются друг от друга.
         *  			\ - Если хотя бы один показал 2 пальца, то идёт рукопожатие.
         *  			\ - Если оба показали 3 пальца, то обнимашки.
         *  	$hyoo_scout_gist
         *  		icon \🖐️
         *  		title \Интернациональное приветствие
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Раскрепощение
         *  				\Лидерство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все приветствуют всех на разных языках:
         *  			\
         *  			\ - Россия: **пожимают руки** - Здравствуй, меня зовут *имя*.
         *  			\ - Япония: **кланяются** - Коничива, меня зовут *имя*.
         *  			\ - США: **дают пять** - Хай! Меня зовут *имя*.
         *  			\ - Франция: **щека к щеке** - Бонжур, меня зовут *имя*.
         *  			\ - Италия: **обнимаются** - Бонжорно, меня зовут *имя*.
         *  			\
         *  			\ В конце можно назвать совсем другую страну (например, Индия) и предложить ребятам самим определиться как поприветствовать друг друга. Это добавит веселья и выявит лидеров.
         *  	$hyoo_scout_gist
         *  		icon \🤗
         *  		title \Интернациональное прощание
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Раскрепощение
         *  				\Лидерство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все прощаются со всеми на разных языках:
         *  			\
         *  			\ - Россия: **пожимают руки** - До свидания, *имя*!
         *  			\ - Япония: **кланяются** - Сайонара, *имя*!
         *  			\ - США: **дают пять** - Бай-Бай, *имя*!
         *  			\ - Франция: **щека к щеке** - Оревуар, *имя*!
         *  			\ - Италия: **обнимаются** - Аривидерчи, *имя*!
         *  			\
         *  			\ В конце можно назвать совсем другую страну (например, Индия) и предложить ребятам самим определиться как прощаться. Это добавит веселья и выявит лидеров.
         *  	$hyoo_scout_gist
         *  		icon \♻️
         *  		title \Круги интересов
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Особый
         *  			Подготовка / \10 минут
         *  			Место / \Просторное
         *  		content \Заранее подготовить карточки с несколькими признаками (цвет, форма, буква и тп). Каждый призак должен иметь 3-7 вариантов. Ведущий называет один из признаков, а ребята собираются вместе с теми, у кого то же значение признака. В группе им надо найти любой факт о них, который бы их объединял. Называть признаки лучше от самого вариативного к менее, чтобы группы были сначала маленькими, а потом большими.
         *  	$hyoo_scout_gist
         *  		icon \🖼️
         *  		title \Совместный портрет
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Творчество
         *  				\Обсуждение
         *  				\Сплочение
         *  			Возраст / \Любой
         *  			Реквизит /
         *  				\Бумага
         *  				\Карандаши
         *  			Подготовка / \Нет
         *  			Место / \Зал
         *  		content \Все делятся на не большие группы. Каждой группе предлагается нарисовать самую важную часть тела человека определённой профессии (например, вожатого) и приписывают почему именно эта часть тела. Потом группы меняются листами и рисуют вторую по важности часть тела. И так далее, пока рисунки не сделают полный круг. После чего представители от групп рассказывают всем о портрете который у них в итоге получился.
         *  	$hyoo_scout_gist
         *  		icon \💬
         *  		title \Случаи из жизни
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Обсуждение
         *  				\Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Все делятся на средние группы. Всем выдаётся для обсуждения какой-либо жизненный случай. Спустя несколько минут каждая группа должна оценить ситуацию, выработать правильное решение и аргументированно рассказать его остальным.
         *  	$hyoo_scout_gist
         *  		icon \❓
         *  		title \Почему так?
         *  		tags *
         *  			Длительность / \20 минут
         *  			Цель /
         *  				\Обсуждение
         *  				\Сплочение
         *  			Возраст / \Любой
         *  			Реквизит /
         *  				\Бумага
         *  				\Ручки
         *  				\Скотч
         *  				\Стикеры
         *  			Подготовка / \20 минут
         *  			Место / \Просторное
         *  		content \В разных местах приклеиваются различные суждения. Каждый пришет на стикере почему суждение верно и приклеивает его рядом. Потом все разбиваются на средние группы. Каждая группа выбирает одно из суждений. Берёт его стикеры. И через несколько минут резюмирует для всех.
         *  	$hyoo_scout_gist
         *  		icon \🌡️
         *  		title \Настроеметр
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Обратная связь
         *  			Возраст / \Любой
         *  			Реквизит /
         *  				\Бумага
         *  				\Ручки
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Лист бумаги делится на 4 части: отлично, хорошо, так себе, плохо. Каждый анонимно пишет в соответствующей части что ему понравилось или не понравилось.
         *  	$hyoo_scout_gist
         *  		icon \🔃
         *  		title \Базар
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Знакомство
         *  				\Лидерство
         *  			Возраст / \Любой
         *  			Реквизит /
         *  				\Бумага
         *  				\Ручки
         *  				\Мешочек
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Каждый пишет на 4 листочках своё имя и фамилию печатными буквами. Каждый листочек складывается дважды и кладётся в мешочек. Каждому выдаётся по 4 случайных листочка. Далее ребята могут меняться друг с другом листочками, только так, чтобы в результате каждого обмена они получали листочек со своим именем. Задача - собрать все листочки со своим именем. Ребята должны догадаться, что листочками можно меняться по кругу одновременно.
         *  	$hyoo_scout_gist
         *  		icon \🙋‍
         *  		title \Минутка на лидера
         *  		tags *
         *  			Длительность / \1 минута
         *  			Цель / \Лидерство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\- *Сделайте шаг вперёд те, кто сможет сейчас мне помочь.*
         *  			\
         *  			\Важно аргументированно выбрать одного из среагировавших лидеров и дать ему какое-либо задание.
         *  	$hyoo_scout_gist
         *  		icon \🌱
         *  		title \Ветви дерева
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Группировка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Выбираются ребята по необходимому числу групп, которые становятся *корнями дерева*. Каждый из них по очереди выбирает себе в команду одного человека, который станет *веткой дерева*. Потом ветви дерева выбирают себе продолжение и тд. Ребята, не выбранные ни в какую команду (*листики*), должны получить привелегии в качестве компенсации. Например:
         *  			\
         *  			\ - Право самому выбрать команду.
         *  			\ - Быть помощником ведущего.
         *  	$hyoo_scout_gist
         *  		icon \🗃️
         *  		title \Своя игра
         *  		tags *
         *  			Длительность / \40 минут
         *  			Цель /
         *  				\Обсуждение
         *  				\Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все делятся на средние группы. Ведущий объявляет несколько тем. Команды по очереди выбирают одну из тем, а ведущий зачитывает вопрос. Та команда, что выбирала тему, имеет преимущество в ответе на вопрос. И если отвечает исчерпывающе получает 2 очка, а если не полностью - 1 очко. Каждой команде, которой удастся потом сделать существенное дополнение, присуждается по очку.
         *  	$hyoo_scout_gist
         *  		icon \🏃
         *  		title \Платочек
         *  		tags *
         *  			Длительность /
         *  				\10 минут
         *  				\20 минут
         *  			Цель /
         *  				\Разминка
         *  				\Лидерство
         *  			Возраст / \Любой
         *  			Реквизит /
         *  				\Платочек
         *  				\Удобная обувь
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все выстраиваются в 2 шеренги поровну. Рассчитываются по порядку, запоминая своё число. Встают в случайном порядке так, чтобы не было двух одинаковых чисел подряд. Ведущий встаёт скраю шеренг между ними и держит платочек в вытянутой руке. Когда он называет число, ребята с соответствующими номерами должны добежать и выхватить платочек раньше соперника, после чего добежать до своего места не запятнаным противником. Если удалось - его команда получает очко. Иначе очко достаётся другой команде. Можно провести несколько схваток, позволив участникам поменять порядок.
         *  	$hyoo_scout_gist
         *  		icon \🔢
         *  		title \Коллективный счёт
         *  		tags *
         *  			Длительность / \20 минут
         *  			Цель / \Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все встают в круг. Задача пересчитаться так, чтобы каждый сказал ровно одно число. Если двое говорят одновременно - счёт начинается сначала. Важно донести, что нужно не надеяться на удачу, а постараться **почувствовать** друг друга.
         *  			\
         *  			\ - Уровень **1**: можно совместно договориться о стратегии.
         *  			\ - Уровень **2**: нельзя рассчитываться по какой-либо стратегии.
         *  			\ - Уровень **3**: без стратегии, с закрытыми глазами, в случайном месте комнаты.
         *  	$hyoo_scout_gist
         *  		icon \🔀
         *  		title \Построения
         *  		tags *
         *  			Длительность / \20 минут
         *  			Цель /
         *  				\Сплочение
         *  				\Лидерство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Задача всем выстроиться по заданному ведущим принципу.
         *  			\
         *  			\Явный лидер покажет себя в заданиях, где **можно коммуницировать**:
         *  			\
         *  			\ - По росту.
         *  			\ - По цвету волос.
         *  			\ - По размеру ботинок.
         *  			\
         *  			\ Неявный лидер покажет себя в заданиях с ограниченными коммуникациями, где **нельзя говорить**:
         *  			\
         *  			\ - В круг.
         *  			\ - В равносторонний квадрат.
         *  			\ - В равносторонний треугольник.
         *  			\ - Звездой.
         *  			\
         *  			\ Скрытый лидер покажет себя в заданиях с **запретом любых коммуникаций**:
         *  			\
         *  			\ - Буквой А
         *  			\ - Буквой М
         *  			\ - Буквой Я
         *  			\ - Буквой Щ
         *  	$hyoo_scout_gist
         *  		icon \🤝
         *  		title \Спортивное приветствие
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все встают в 2 шеренги. Обе шененги проходят вдоль друг друга и каждый человек из одной шеренги здоровается за руку с каждым из другой, называя его по имени.
         *  	$hyoo_scout_gist
         *  		icon \🤼
         *  		title \Спортивное прощание
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все встают в 2 шеренги. Обе шененги проходят вдоль друг друга и каждый человек из одной шеренги прощается обнимаясь с каждым из другой, называя его по имени.
         *  	$hyoo_scout_gist
         *  		icon \🌀
         *  		title \Циклон
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Разминка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все случайно перемещаются по пространству. Когда ведущий называет число нужно быстро образовать группы с таким числом людей. Кто не смог образовать такую группы - выбывает.
         *  	$hyoo_scout_gist
         *  		icon \🔃
         *  		title \Шиворот на выворот
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Разминка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все случайно перемещаются по пространству. Когда ведущий называет действие (пыжок, хлопок и тп) - все должны его выполнить. Можно предложить кому-то придумать несуществующий глагод. А кому-то показать это действие, как он его себе представляет. Далее ведущий меняет местами глаголы и выполняемое действие. Например, когда говорит *хлопок* надо прыгать, а когда *прыжок* - хлопать.
         *  	$hyoo_scout_gist
         *  		icon \🏠
         *  		title \Дом, милый дом
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель /
         *  				\Раскрепощение
         *  				\Доверие
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Каждый находит местечко, где ему уютнее всего - называем его «домом». Глазами он находит человека, которого он хочет привести в свой домик. По команде всем нужно приложить максимум усилий, чтобы этот человек оказался именно в его домике.
         *  	$hyoo_scout_gist
         *  		icon \🔄
         *  		title \Фантазеры - Скептики - Реалисты
         *  		tags *
         *  			Длительность / \20 минут
         *  			Цель /
         *  				\Творчество
         *  				\Сплочение
         *  				\Обсуждение
         *  			Возраст /
         *  				\Среднячки
         *  				\Старшаки
         *  			Реквизит /
         *  				\Бумага
         *  				\Ручки
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все разбиваются на средние группы. Сначала все фантазёры и записывают мероприятия в которых хотели бы поучаствовать. Потом листы передаются по кругу и теперь все критики, вычёркивающие те мероприятия, что им не понравятся. Снова передают по кругу и на этот раз все реалисты, обводящие те варианты из оставшихся, что кажутся им более интересными. Листы опять передаются по кругу и теперь каждая команда должна выбрать одно мероприятие и представить его остальным командам так, чтобы все тоже его захотели.
         *  			\
         *  			\![](https://vk.com/video_ext.php?oid=-76966755&id=456239212&hash=fc5b24ac237ce085&hd=2)
         *  	$hyoo_scout_gist
         *  		icon \📜
         *  		title \Расписание
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Усвоение
         *  				\Обсуждение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \10 минут
         *  			Место / \Просторное
         *  		content \Все делятся на 2 шеренги. Членам одной выдаются листы с временными промежутками, а членам другой - с автивностями. Задача встать друг на против друга в правильной последовательности. В конце ведущий оглашает правильное расписание, переставляя ребят.
         *  	$hyoo_scout_gist
         *  		icon \✈️
         *  		title \Ковёр-самолёт
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Плед
         *  			Подготовка / \Нет
         *  			Место / \Зал
         *  		content \Все встают на плед. Задача перевернуть плед так, чтобы никто не ступил ногой за его пределы. Усложнённый вариант - нельзя опираться на пол ничем. Экстремальный вариант - с закрытыми глазами.
         *  	$hyoo_scout_gist
         *  		icon \🚧
         *  		title \Покрывало
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Плед
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Все делятся на 2 группы и располагаются по обе сторооны от натянутого покрывала. Перед покрывалом встают по одному каждый раз разному участнику из каждой команды. Когда покрывало опускается они должны как можно быстрее назвать имя того, кого видят. Кто замешкался - переходит в противоположную команду. Задача - петащить всех на свою сторону.
         *  	$hyoo_scout_gist
         *  		icon \🗺️
         *  		title \Бип
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Лидерство
         *  				\Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \На земле любым способом рисуется сетка от 4х4 - это карта. Каждый по очереди должен начать с одного конца и *доехать* до другого перешагивая на соседнюю клетку. Ведущий задумывает правила передвижения (невидимые границы, с какой ноги ступать, ходить только боком и тп) и если игрок нарушает правила, то говорит **бип** и новый игрок начинает сначала. Задача игроков - понять принцип так, чтобы любой смог дойти от начала до конца.
         *  	$hyoo_scout_gist
         *  		icon \🖇️
         *  		title \Связи
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Знакомство
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \Каждый сцепляется с кем-то за руку и здоровается/прощается, называя имя партнёра. Расцепляться с партнёром нельзя, пока тот не сцепится второй рукой с кем-то ещё. Задача - пообщаться со всеми.
         *  	$hyoo_scout_gist
         *  		icon \💞
         *  		title \Сердца
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Группировка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \5 минут
         *  			Место / \Просторное
         *  		content \Бумажные сердца нарезаются несколько частей и каждому выдаётся случайная часть. Задача - найти свою пару.
         *  	$hyoo_scout_gist
         *  		icon \👯
         *  		title \Я люблю саванну
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Доверие
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все встают в круг. Каждый кладёт обе руки на плечи соседа справа. Все идут по кругу хором произнося одни и те же слова. Например:
         *  			\
         *  			\- *Я люблю Саванну! Я очень люблю Саванну! Крокодил, обезьяна, бегемот.. Я очень люблю Саванну!*
         *  			\
         *  			\Закончив фразу каждый делает шаг внутрь круга и всё повторяется. И так до максимального уплотнения кольца. Потом всем нужно сесть на колени соседа сзади и в таком положении снова идти и произносить фразу. Потом так же лечь на соседа. И в конце всем нужно раздвинуть ноги, чтобы все опустились на землю.
         *  	$hyoo_scout_gist
         *  		icon \🛸
         *  		title \Левитация
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Доверие
         *  			Возраст / \Любой
         *  			Реквизит / \Стол
         *  			Подготовка / \Нет
         *  			Место / \Зал
         *  		content \
         *  			\Один ложится спиной на стол и закрывает глаза. Остальные обступают его вокруг и по сигналу одновременно поднимают его ладонями (не пальцами!). Вожатый при этом должен придерживать голову на всякий случай. А кто-то должен стоять у двери и никого не пускать, чтобы ребята не отвлеклись и не уронили.
         *  	$hyoo_scout_gist
         *  		icon \🐐
         *  		title \Козья тропа
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Доверие
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Просторное
         *  		content \
         *  			\Все встают в ряд на краю бордюра, лавочки или выставленных рядом стульев. Один с одного конца до другого должен дойти вставая ногами между ног остальных ребят. Ребята будут вынуждены придерживать идущего, иначе он упадёт. И так, пока каждый не пройдёт по этой узкой тропе.
         *  	$hyoo_scout_gist
         *  		icon \🗼
         *  		title \Уровень сплочения
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Обратная связь
         *  			Возраст / \Любой
         *  			Реквизит / \Особый
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Выдаётся 5 картинок, симполизирующих уровень сплочения. Предлагается каждому высказать своё мнение по этому вопросу, посредством приклеивания стикера или подписью одного из них. Изображения:
         *  			\
         *  			\- **Рассыпчатый песок** - каждый сам по себе.
         *  			\- **Кусок глины** - все стараются держатся вместе, но обстоятельства мнут как попало.
         *  			\- **Камень** - друг за друга горой.
         *  			\- **Стальная конструкция** - слаженная работа и взаимопомощь.
         *  			\- **Космический аппарат** - единые цели и мечты.
         *  	$hyoo_scout_gist
         *  		icon \🔮
         *  		title \Эффект Барнума
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Мышление
         *  			Возраст / \Старшаки
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Проводится как бы психологическое тестирование или говорите, что долго наблюдали за каждым и пришли к некоторым выводам. Каждому выдаётся описание его *индивидуального* психологического портрета. Всем должно быть выдано одно и то же описание, где больше положительных качеств, чем отрицательных:
         *  			\
         *  			\*Вы очень нуждаетесь в том, чтобы другие люди любили и восхищались вами. Вы довольно самокритичны. У вас есть много скрытых возможностей, которые вы так и не использовали себе во благо. Хотя у вас есть некоторые личные слабости, вы в общем способны их нивелировать. Дисциплинированный и уверенный с виду, на самом деле вы склонны волноваться и чувствовать неуверенность. Временами вас охватывают серьёзные сомнения, приняли ли вы правильное решение или сделали ли правильный поступок. Вы предпочитаете некоторое разнообразие, рамки и ограничения вызывают у вас недовольство. Также вы гордитесь тем, что мыслите независимо; вы не принимаете чужих утверждений на веру без достаточных доказательств. Вы поняли, что быть слишком откровенным с другими людьми — не слишком мудро. Иногда вы экстравертны, приветливы и общительны, иногда же — интровертны, осторожны и сдержанны. Некоторые из ваших стремлений довольно нереалистичны. Одна из ваших главных жизненных целей — стабильность.*
         *  			\
         *  			\Прочитав, каждый должен тут же дать оценку насколько он согласен с этим описанием по 5 бальной шкале. Собирается статистика и провозглашается какой ведущий проницательный. Потом предлагается всем поменяться описаниями и прочитать.
         *  			\
         *  			\Это упражнение поможет отучить доверять астрологам, гадалкам и тому подобным шарлатанам.
         *  	$hyoo_scout_gist
         *  		icon \🤥
         *  		title \Парадокс Лжеца
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель /
         *  				\Мышление
         *  				\Обсуждение
         *  			Возраст / \Старшаки
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все делятся на группы. Каждой выдаётся один вопрос и предлагается через несколько минут дать ответ на него, рассказав всем, почему они так решили. Примеры вопросов:
         *  			\
         *  			\ - Данное утвержение ложно, правда ли это?
         *  			\ - Что будет, если Пиноккио скажет: «Сейчас у меня удлинится нос»?
         *  			\ - Брадобрей города N бреет всех жителей этого города, кто не бреет себя сам и только их. Бреет ли он сам себя?
         *  			\ - Может ли всемогущий бог создать камень, который он сам не сможет поднять?
         *  			\
         *  			\Подвох в том, что вопросы содержат логическое противоречие. Что иллюстрирует тот факт, что выражение может быть не только истинным или ложным, но и попросту бредом.
         *  	$hyoo_scout_gist
         *  		icon \😳
         *  		title \Чувственные знакомства
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Раскрепощение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Задача каждого поприветствовать каждого. На каждом этапе добавляется по одному типу взаимодействия:
         *  			\
         *  			\1. **Визуальный.** Нужно внимательно посмотреть в глаза и молча передать мысль партнёру.
         *  			\2. **Вербальный.** Добавить приветствие голосом.
         *  			\3. **Тактильный.** Добавить какое либо касание.
         *  			\4. **Обонятельный.** Понюхать партнёра и постараться самому не испортить воздух в этот момент.
         *  	$hyoo_scout_gist
         *  		icon \🔫
         *  		title \Киллер
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Развлечение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Все встают в круг и закрывают глаза. Ведущий незаметно касается одного - тот становится киллером. Киллер незаметно подмигивает одним глазом одному из присутствующих. Кому подмигнули - выбывает. Задача киллера - убить как можно больше людей. Задача остальных - догадаться кто киллер и поднять руку. Если угадывает - киллер пойман. Если нет - выбывает.
         *  	$hyoo_scout_gist
         *  		icon \🐸
         *  		title \Лягушка
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Развлечение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Один берёт на себя роль цапли и отходит, так чтобы не видеть остальных. Остальные встают в круг и закрывают глаза. Ведущий незаметно касается одного - тот становится лягушкой. Остальные - комариками. Цапля возвращается и встаёт в центр. Её задача найти и съесть лягушку до того, как она съест всех комариков. Но у неё на это есть лишь одна/две/три попытки. Лягушка незаметно для цапли может показывать язык. Кто увидел высунутый язык - считается съеденным и приседает. Задача лягушки - съесть всех комариков и убежать.
         *  	$hyoo_scout_gist
         *  		icon \🚪
         *  		title \Бункер
         *  		tags *
         *  			Длительность / \20 минут
         *  			Цель /
         *  				\Обсуждение
         *  				\Сплочение
         *  			Возраст /
         *  				\Среднячки
         *  				\Старшаки
         *  			Реквизит / \Нет
         *  			Подготовка / \5 минут
         *  			Место / \Любое
         *  		content \
         *  			\Каждому выдаётся роль и рассказывается общая легенда: произошла ядерная война и нам удалось спрятаться в бункере. Однако, запасов воздуха/еды/воды не хватит на всех до момента, когда можно будет выйти на поверхность. Поэтому надо принять решение, кто покинет бункер сейчас, чтобы остальные выжили и восстановили цивилизацию. Если за 15 минут решение не будет принято - умирают все. Если ребята быстро справятся, то можно дополнять сюжет, вынуждая избавляться от большего числа людей. После игры можно устроить совместный просмотр фильма "Философы" по мотивам этой игры.
         *  			\
         *  			\Роли:
         *  			\
         *  			\- Школьница, 15 лет. Умная и милая девушка, пребывающая сейчас в шоке. Постоянно в слезах и молчит. Симпатизирует 16-ти летнему юношу, также оказавшемуся в бункере.
         *  			\- Юноша, 16 лет. Отлично развит физически, но абсолютно не заинтересован в учебе. Также испытывает симпатию к школьнице.
         *  			\- Молодой человек, 25 лет. Спортсмен, увлекается альпинизмом. Часто конфликтует с окружающими и в свое время был отчислен из службы МЧС за драку.
         *  			\- Мужчина, 48 лет. Профессор-физик. Весьма образованный, разбирающийся в электронике и строительстве. Имеет проблемы с сердцем.
         *  			\- Студентка, 19 лет. Обучается в университете физкультуры, специальность легкая атлетика. Несмотря на привлекательность и общительность, кроме достижений в спорте похвастаться ей не чем. Ждет ребенка.
         *  			\- Девушка, 21 год. Студентка медицинского университета, не блещущая знаниями. Тяжело сказать, выйдет ли из нее высококлассный специалист. Имеет несколько хобби: шитье, вязание.
         *  			\- Мужчина, 32 года. Знания, полученные во время службы в ракетных войсках, позволяют ему выжить практически в любой ситуации. Имеет превосходную физическую подготовку, увлекается восточными единоборствами. Имеет лишь один недостаток – слабость к алкоголю.
         *  			\- Тренер по физической культуре , 26 лет. В прошлом учительница, а также инструктор в области туризма. Говорит на трех иностранных языках.
         *  			\- Академик, чьи работы неоднократно публиковались, 58 лет. Знаток в области гуманитарных наук.
         *  			\- Женщина , 43 года. Ученый в сфере сельскохозяйственных наук. Способна вырастить урожай даже в самых неблагоприятных условиях. Любит готовить.
         *  			\
         *  			\![](https://www.youtube.com/embed/csUm65Lwx_M)
         *  	$hyoo_scout_gist
         *  		icon \🎶
         *  		title \Поющие молекулы
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Раскрепощение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все ходят перемешиваясь, напевая всем известную песню. Когда ведущий говорит стоп - все здороваются. Этапы:
         *  			\
         *  			\- Ступнями
         *  			\- Коленями
         *  			\- Попами
         *  			\- Руками
         *  			\- Локтями
         *  			\- Плечами
         *  			\- Обнимашки
         *  	$hyoo_scout_gist
         *  		icon \⭕
         *  		title \Вжух-Бэнг-Пау
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Раскрепощение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все встают в круг и передают друг другу эстафету, используя одно из особых движений со звуком, которые вводятся в игру по одному.
         *  			\
         *  			\- **Вжух!** - кидая воображаемый энергетический шар. От сосеа к соседу в одном направлении.
         *  			\- **Бэнг!** - шар отражается и начинается двигаться в обратном направлении.
         *  			\- **Пау!** - стреляя в любого человека в круге.
         *  			\- **Бумеранг!** - кидая в любого человека бумеранг, а тот человек должен уклониться от него в стиле Матрицы.
         *  			\- **Дайте мне бит!** - соседи издают ритмичные звуки, под которые ты танцуешь.
         *  	$hyoo_scout_gist
         *  		icon \💌
         *  		title \Письмо другу
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Обратная связь
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Каждый пишет на бумажке "сообщение лучшему другу" о своих впечатлениях, при этом не подписывая своё послание.
         *  	$hyoo_scout_gist
         *  		icon \🎠
         *  		title \Карусель
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Обратная связь
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \
         *  			\Все делятся на две группы поровну и встают в два концентрических круга лицом к лицу. Производят друг с другом определённые действия, внешний круг проворачивается на одного человека и всё повторяется. Так до полного оборота. Варианты действий:
         *  			\
         *  			\ - Каждый говорит партнёру чем тот хорош.
         *  			\ - Один говорит что между ними общего, а другой - чем отличаются.
         *  	$hyoo_scout_gist
         *  		icon \🥓
         *  		title \Горелки
         *  		tags *
         *  			Длительность / \5 минут
         *  			Цель / \Разминка
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Все встают в ряд по парам, а ведущий впереди спиной к остальным. Как только ведущий поворачивается, первая пара должна расцепиться и бежать сцепляться в конец. Задача ведущего поймать кого-то и встать с ним в конце. Кто остался без пары - становится ведущим.
         *  	$hyoo_scout_gist
         *  		icon \☎
         *  		title \Телеграф
         *  		tags *
         *  			Длительность / \10 минут
         *  			Цель / \Сплочение
         *  			Возраст / \Любой
         *  			Реквизит / \Нет
         *  			Подготовка / \Нет
         *  			Место / \Любое
         *  		content \Все делятся на две команды и встают друг за гругом в две шеренги. Ведущий каждому последнему тихо говорит одно и то же слово. Начиная с последних, необходимо написать на спине впереди стоящего все буквы слова по очереди. Первому же нужно будет собрать из букв слово и сказать его раньше соперников. Победившей команде присуждается очко, а первый её участник переходит в конец. И всё повторяется.
         *  	$hyoo_scout_gist
         *  		icon \🏗
         *  		title \Полный Скрам
         *  		tags *
         *  			Длительность / \40 минут
         *  			Цель / \Сплочение
         *  			Возраст / \Старшаки
         *  			Реквизит /
         *  				\Скотч
         *  				\Бумага
         *  				\Соломинки
         *  				\Стаканчики
         *  				\Яйца
         *  			Подготовка / \Нет
         *  			Место / \Зал
         *  		content \
         *  			\Методисту: Сфера IT настолько быстро развивается, что зачастую нет времени на длительное и детальное проектирование, как, например, в строительстве. Мощь IT в том, что цена ошибки меньше, чем цена разработки, поэтому в IT так популярны гибкие методологии, позволяющие быстро получать не идеальный результат, проверять его в бою, и тут же учитывать полученную на практике информацию для дальнейшего развития. С помощью простой командной задачи мы в ролевой форме познакомим ребят с разработкой по Скраму (популярной гибкой методологией разработки), познакомим с основными ролями и покажем значимость каждой из них, научим их самоорганизации и самоанализу.
         *  			\
         *  			\Ведущему: Ребят нужно разбить на группы по 3-6 человек и выдать каждой группе реквизит: 5 листов бумаги, рулон скотча, 5 соломинок, 5 стаканчиков. Игра (проект) проводится в несколько этапов (спринтов). На каждом спринте - новая задача и новый критерий её оценки, а так же дополнительные 2 листа бумаги, 2 соломинки и 2 стаканчика. Необходимо сразу чётко обозначить, что на время спринта есть ограничения, которые строго соблюдаются. Договорились или нет - таймер никого не ждёт. Если задача принята - команде даётся очко. Если команда выполнила задачу лучше всех, то ещё одно очко дополнительно. Кроме явных критериев приёмки, есть критерии и неявные, про которые ничего ребятам не говорим, пока не спросят (приучаем ребят "вытягивать" требования из -заказчика, который зачастую сам не знает, чего хочет, пока не получит не то, что надо). Если спринт проваливают все, то он повторяется. Если кто-то его выполнил, то всем вызаются новые задачи (явно не говорим, что старые задачи уже не актуальны).
         *  			\
         *  			\Спринт состоит из:
         *  			\
         *  			\* Планирование - 1 минута, чтобы договориться, что и как будут делать, распределить обязанности. Во время планирования трогать ничего нельзя.
         *  			\* Реализация - 5 минут для совместного выполнения задачи. Как только время заканчивается все убирают руки и встают. Если кто-то что-то придерживает ещё - спринт считается заваленным.
         *  			\* Демо - тут ребята презентуют Владельзу Продукта (один из ведущих) проделанную работу, а тот проверяет достигнутые цели. Нет ограничения по времени.
         *  			\* Ретроспектива - 2 минуты ребята обсуждают что они сделали хорошо, что стоит исправить на следующей итерации (и назначают ответственных), и меняются ролями, если в этом есть необходимость.
         *  			\
         *  			\На первой итерации ведущие помогают ребятам с планированием и ретроспективой в роли скрам-мастеров. На остальных итерациях - всё сами. Скрам мастер может уточнять у ведущих в процессе работы, если что-то не понял.
         *  			\
         *  			\Возможные роли для ребят:
         *  			\
         *  			\1. Скрам мастер - проводит планирование и ретроспективу, контролирует, чтобы принятые на ретроспективе договорённости выполнялись, общается (и только он) с владельцем продукта.
         *  			\2. Дизайнер - контролирует внешний вид, чтобы всё смотрелось органично и так, чтобы понравилось владельцу продукта.
         *  			\3. Архитектор - проектирует какие необходимо внести изменения, чтобы проект выполнял поставленные задачи.
         *  			\4. Разработчик - собственно делает всё своими руками.
         *  			\5. QA - проверяет, соответствие того ,что сделано, критериям приёмки задачи.
         *  			\
         *  			\Возможные задачи по спринтам:
         *  			\
         *  			\1. Постройте мне наиболее высокое сооружение. Озвучивается критерий причёмки: не менее 30см высотой. Не озвучивается критерий приёмки: дизайн должен быть симметричным. Кто выше всех - получает очко.
         *  			\
         *  			\2. Как всё классно, я бы хотел там жить на самом верху. Добавьте мне туда как можно более просторный пентхаус. Озвучивается критерий: высота не должна быть меньше, чем была. Не озвучивается критерий: размер оцениваем по максимальному габариту в горизонтальной плоскости, где можно поставить маленькую игрушку и она не упадёт и не развалит дом. У кого пентхаус больше - получает очко.
         *  			\
         *  			\3. Хочу чтобы это был не просто дом, а памятник мне любимому. Озвучивается критерий: должна быть голова, туловище, руки, ноги. Не озвучивается критерий: должна быть какая-то деталь, которая делает здание похожим именно на Владельца Продукта, но ни на кого больше в зале.
         *  			\
         *  			\4. Я тут подумал, а ведь страшно на такой высоте жить-то будет в таком хлипком доме. Надо и о безопасности подумать. Сделайте так, чтобы я (показывая яйцо раскрашенное под человечика) мог усидеть на самом верху и не разбиться (явный критерий). Неявный критерий: если яйцо упадёт, но не разобьётся, то тоже принимается. Чьё яйцо в итоге окажется выше всех - получает доп очко.
         *  			\
         *  			\Методические замечания:
         *  			\
         *  			\* Шпионить можно, особо об этом не говорим и не поощряем.
         *  			\* Вредить соседям нельзя - все набранные очки сбрасываются.
         *  			\* Конструкция должна быть устойчивой. Даже если упала от дуновения ветерка - оцениваем то, что с ней после этого стало.
         *  			\* За 30 и 15 секунд до истечения времени - сообщаем, что время истекает.
         *  ```
         **/
        data(): any[];
    }
}

declare namespace $.$$ {
    class $hyoo_scout extends $.$hyoo_scout {
        key(key: string): string;
        gists_title(): string;
        gists_favorite(next?: boolean): boolean;
        gist_favorite(id: string, next?: boolean): boolean;
        gists_favorite_duration(): string;
        gists_favorite_label(): $mol_view[];
        gist_links(): $.$mol_link[];
        gist(id: string): $hyoo_scout_gist;
        gist_icon(id: string): string;
        gist_title(id: string): string;
        gist_content(id: string): string;
        tag_title(key: {
            aspect: string;
            tag: string;
        }): string;
        gist_aspects(id: string): $.$mol_row[];
        gist_remarks(id: string, next?: string): string;
        gist_aspect_tags(aspect: string): any;
        gist_current(next?: $hyoo_scout_gist): $hyoo_scout_gist;
        filter_aspects(): $.$mol_list[];
        filter_aspect_tags(aspect: string): $.$mol_check[];
        filter_tag_checked(key: {
            aspect: string;
            tag: string;
        }, next?: boolean): boolean;
        suggest(): boolean;
        pages(): $.$mol_page[];
    }
}
