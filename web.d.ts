declare namespace $ { }
export = $;
declare namespace $ {
    function $mol_fail_hidden(error: any): never;
    function $mol_fail(error: any): never;
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
    type $mol_ambient_context = Window & {
        Promise: PromiseConstructor;
        Math: Math;
        XMLHttpRequest: typeof XMLHttpRequest;
    } & (typeof $.$$) & (typeof $);
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
            next(): IteratorResult<[Key, Value]>;
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
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
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
    const enum $mol_keyboard_code {
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
        enabled(): boolean;
        minimal_height(): number;
        click(event?: any, force?: $mol_atom_force): any;
        event_click(event?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_activate(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        sub(): readonly any[];
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
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        checked(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Icon(): any;
        label(): readonly any[];
        Title(): $mol_view;
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
        minimal_height(): number;
        moving_hor(val?: any, force?: $mol_atom_force): any;
        moving_vert(val?: any, force?: $mol_atom_force): any;
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        scroll_top(val?: any, force?: $mol_atom_force): any;
        scroll_left(val?: any, force?: $mol_atom_force): any;
        scroll_bottom(val?: any, force?: $mol_atom_force): any;
        scroll_right(val?: any, force?: $mol_atom_force): any;
        event_async(): {
            "scroll": (event?: any) => any;
        };
        event_scroll(event?: any, force?: $mol_atom_force): any;
        Strut(): $mol_view;
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
        sub(): readonly any[];
        Head(): $mol_view;
        head(): readonly any[];
        Title(): $mol_button;
        event_top(val?: any, force?: $mol_atom_force): any;
        Tools(): $mol_view;
        tools(): readonly any[];
        Body(): $mol_scroll;
        body_scroll_top(val?: any, force?: $mol_atom_force): any;
        body(): readonly any[];
        Foot(): $mol_view;
        foot(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}
declare namespace $ {
    class $mol_plugin extends $mol_object {
        dom_node(): any;
        attr_static(): {};
        event(): {};
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
        zoom(): number;
        width(val?: any, force?: $mol_atom_force): any;
        height(val?: any, force?: $mol_atom_force): any;
        left(val?: any, force?: $mol_atom_force): any;
        right(val?: any, force?: $mol_atom_force): any;
        bottom(val?: any, force?: $mol_atom_force): any;
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
        start_zoom(val?: any, force?: $mol_atom_force): any;
        start_distance(val?: any, force?: $mol_atom_force): any;
        zoom(val?: any, force?: $mol_atom_force): any;
        start_pan(val?: any, force?: $mol_atom_force): any;
        pan(val?: any, force?: $mol_atom_force): any;
        start_pos(val?: any, force?: $mol_atom_force): any;
        swipe_precision(): number;
        swipe_right(val?: any, force?: $mol_atom_force): any;
        swipe_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_left(val?: any, force?: $mol_atom_force): any;
        swipe_top(val?: any, force?: $mol_atom_force): any;
        swipe_from_right(val?: any, force?: $mol_atom_force): any;
        swipe_from_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_from_left(val?: any, force?: $mol_atom_force): any;
        swipe_from_top(val?: any, force?: $mol_atom_force): any;
        swipe_to_right(val?: any, force?: $mol_atom_force): any;
        swipe_to_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_to_left(val?: any, force?: $mol_atom_force): any;
        swipe_to_top(val?: any, force?: $mol_atom_force): any;
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
        };
        event_start(event?: any, force?: $mol_atom_force): any;
        event_move(event?: any, force?: $mol_atom_force): any;
        event_end(event?: any, force?: $mol_atom_force): any;
        event_async(): {
            "wheel": (event?: any) => any;
        };
        event_wheel(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        event_start(event?: TouchEvent | MouseEvent): void;
        event_move(event?: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent): void;
        event_wheel(event?: WheelEvent): void;
    }
}
declare namespace $ {
    class $mol_ghost extends $mol_view {
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
        sub(): readonly any[];
        pages_wrapped(): readonly any[];
        pages(): readonly any[];
        plugins(): readonly any[];
        width(): any;
        Meter(): $mol_meter;
        Touch(): $mol_touch;
        event_front_up(val?: any, force?: $mol_atom_force): any;
        event_front_down(val?: any, force?: $mol_atom_force): any;
        Page(index: any): $mol_book_page;
        page(index: any): any;
        page_visible(index: any): boolean;
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        minimal_width(): number;
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        attr(): {
            "tabindex": number;
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
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
    }
}
declare namespace $ {
    class $mol_list extends $mol_view {
        sub(): readonly any[];
        rows(): readonly any[];
        Empty(): any;
    }
}
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly any[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): readonly any[];
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
        minimal_height(): number;
        dom_name(): string;
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        sub(): readonly any[];
        arg(): {};
        event(): {
            "click": (event?: any) => any;
        };
        click(event?: any, force?: $mol_atom_force): any;
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
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
    }
}
declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        view_box(): string;
        aspect(): string;
    }
}
declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            "d": string;
        };
        geometry(): string;
    }
}
declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        sub(): readonly any[];
        Path(): $mol_svg_path;
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}
declare namespace $ {
    class $mol_icon_favorite extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}
declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any, force?: $mol_atom_force): any;
        plugins(): readonly any[];
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        Meter(): $mol_meter;
        sub(): readonly any[];
        Anchor(): any;
        Bubble(): $mol_pop_bubble;
        align(): string;
        bubble_content(): readonly any[];
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly any[];
        content(): readonly any[];
        style(): {
            "maxHeight": number;
        };
        height_max(): number;
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        align(): string;
    }
}
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
    }
}
declare namespace $ {
    class $mol_dimmer extends $mol_view {
        haystack(): string;
        needle(): string;
        sub(): readonly any[];
        parts(): readonly any[];
        Low(id: any): $mol_view;
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
        cycle(val?: any, force?: $mol_atom_force): any;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any, force?: $mol_atom_force): any;
        keys_y(val?: any, force?: $mol_atom_force): any;
        current_x(val?: any, force?: $mol_atom_force): any;
        current_y(val?: any, force?: $mol_atom_force): any;
        event_up(event?: any, force?: $mol_atom_force): any;
        event_down(event?: any, force?: $mol_atom_force): any;
        event_left(event?: any, force?: $mol_atom_force): any;
        event_right(event?: any, force?: $mol_atom_force): any;
        event(): {
            "keydown": (event?: any) => any;
        };
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
        dom_name(): string;
        enabled(): boolean;
        debounce(): number;
        minimal_height(): number;
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
        };
        disabled(): boolean;
        value_changed(val?: any, force?: $mol_atom_force): any;
        value(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        type(val?: any, force?: $mol_atom_force): any;
        spellcheck(): boolean;
        attr(): {
            "maxlength": number;
        };
        length_max(): number;
        event(): {
            "input": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_change(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        _timer: any;
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
    }
}
declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}
declare namespace $ {
    class $mol_select extends $mol_pop {
        dictionary(): {};
        options(): readonly any[];
        value(val?: any, force?: $mol_atom_force): any;
        minimal_height(): number;
        Option_row(id: any): $mol_button_minor;
        event_select(id: any, event?: any, force?: $mol_atom_force): any;
        option_content(id: any): readonly any[];
        Option_label(id: any): $mol_dimmer;
        option_label(id: any): string;
        filter_pattern(val?: any, force?: $mol_atom_force): any;
        No_options(): $mol_view;
        no_options_message(): string;
        plugins(): readonly any[];
        Nav(): $mol_nav;
        nav_components(): readonly any[];
        option_focused(component?: any, force?: $mol_atom_force): any;
        nav_cycle(val?: any, force?: $mol_atom_force): any;
        showed(): boolean;
        options_showed(): boolean;
        Anchor(): $mol_button_minor;
        Trigger(): $mol_button_minor;
        trigger_content(): readonly any[];
        option_content_current(): readonly any[];
        Filter(): $mol_string;
        filter_hint(): string;
        hint(): string;
        debounce(): number;
        Trigger_icon(): $mol_icon_chevron;
        bubble_content(): readonly any[];
        Menu(): $mol_list;
        menu_content(): readonly any[];
        option_rows(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        options_showed(): boolean;
        options(): string[];
        options_filtered(): string[];
        option_label(id: string): any;
        option_rows(): $mol_view[] | $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_view | $mol_button_minor)[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}
declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_search extends $mol_bar {
        query(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Suggest(): $mol_select;
        suggest_selected(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        suggests_showed(): boolean;
        suggests(): readonly any[];
        debounce(): number;
        Clear(): $mol_button_minor;
        Clear_icon(): $mol_icon_cross;
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
        minimal_height(): number;
        Option(id: any): $mol_check;
        option_checked(id: any, val?: any, force?: $mol_atom_force): any;
        option_title(id: any): string;
        option_enabled(id: any): boolean;
        enabled(): boolean;
        value(val?: any, force?: $mol_atom_force): any;
        options(): {};
        sub(): readonly any[];
        items(): readonly any[];
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
        submit_blocked(): boolean;
        sub(): readonly any[];
        Bar_fields(): $mol_view;
        form_fields(): readonly any[];
        Bar_buttons(): $mol_row;
        buttons(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
    }
}
declare namespace $ {
    class $mol_labeler extends $mol_view {
        sub(): readonly any[];
        Title(): $mol_view;
        label(): readonly any[];
        Content(): $mol_view;
        content(): any;
    }
}
declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        label(): readonly any[];
        name(): string;
        Bid(): $mol_view;
        bid(): string;
        Content(): any;
        control(): any;
    }
}
declare namespace $ {
    class $mol_float extends $mol_view {
    }
}
declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}
declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            "paddingLeft": string;
        };
        level_style(): string;
        checked(val?: any, force?: $mol_atom_force): any;
        expanded(val?: any, force?: $mol_atom_force): any;
        enabled(): boolean;
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
        row_ids(): readonly any[];
        row_id(index: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): readonly any[];
        Table(): $mol_grid_table;
        gap_top(): number;
        rows_visible(): readonly any[];
        rows(): readonly any[];
        Head(): $mol_grid_row;
        row_height(): number;
        head_cells(): readonly any[];
        Row(id: any): $mol_grid_row;
        cells(id: any): readonly any[];
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        cell_content_text(id: any): readonly any[];
        cell_content(id: any): readonly any[];
        Cell_number(id: any): $mol_grid_number;
        cell_content_number(id: any): readonly any[];
        Col_head(id: any): $mol_float;
        col_head_content(id: any): readonly any[];
        Cell_branch(id: any): $mol_check_expand;
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any, force?: $mol_atom_force): any;
        Cell_content(id: any): readonly any[];
        Cell_dimmer(id: any): $mol_dimmer;
        needle(): string;
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        dom_name(): string;
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        style(): {
            "height": number;
        };
        height(): number;
        sub(): readonly any[];
        cells(): readonly any[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
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
        col_type(col_id: string): "text" | "number" | "branch";
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
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $mol_text;
        quote_text(id: any): string;
        Row(id: any): $mol_text_row;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        Table(id: any): $mol_grid;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        Table_row(id: any): $mol_grid_row;
        table_cells(id: any): readonly any[];
        Table_cell(id: any): $mol_grid_cell;
        table_cell_content(id: any): readonly any[];
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        minimal_height(): number;
        attr(): {
            "mol_text_type": string;
        };
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
        attr(): {
            "mol_text_header_level": any;
        };
        level(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        content(): readonly any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
            "href": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
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
        event(): {
            "keydown": (event?: any) => any;
        };
        press(event?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Edit(): $mol_string;
        value(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        enabled(): boolean;
        View(): $mol_text;
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
        title(): string;
        minimal_width(): number;
        tools(): readonly any[];
        Close(): $mol_link;
        close_icon(): $mol_icon_cross;
        body(): readonly any[];
        submit_blocked(): boolean;
        Form(): $mol_form;
        Name_field(): $mol_form_field;
        name_bid(): string;
        Name(): $mol_string;
        name(val?: any, force?: $mol_atom_force): any;
        Icon_field(): $mol_form_field;
        icon_bid(): string;
        Icon(): $mol_string;
        icon(val?: any, force?: $mol_atom_force): any;
        Descr_field(): $mol_form_field;
        descr_bid(): string;
        Descr(): $mol_textarea;
        descr(val?: any, force?: $mol_atom_force): any;
        Reason_field(): $mol_form_field;
        reason_bid(): string;
        Reason(): $mol_switch;
        reason(val?: any, force?: $mol_atom_force): any;
        Age_field(): $mol_form_field;
        Age(): $mol_switch;
        age(val?: any, force?: $mol_atom_force): any;
        Place_field(): $mol_form_field;
        Place(): $mol_switch;
        place(val?: any, force?: $mol_atom_force): any;
        Stuff_field(): $mol_form_field;
        Stuff(): $mol_string;
        stuff(val?: any, force?: $mol_atom_force): any;
        Prep_field(): $mol_form_field;
        prep_bid(): string;
        Prep(): $mol_switch;
        prep(val?: any, force?: $mol_atom_force): any;
        Duration_field(): $mol_form_field;
        Duration(): $mol_switch;
        duration(val?: any, force?: $mol_atom_force): any;
        Submit(): $mol_button_major;
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
        icon(): string;
        title(): string;
        tags(): {
            "Возраст": readonly any[];
            "Реквизит": readonly any[];
            "Подготовка": readonly any[];
            "Цель": readonly any[];
            "Место": readonly any[];
            "Длительность": readonly any[];
        };
        content(): string;
    }
}
declare namespace $ {
    class $hyoo_scout_placeholder extends $mol_page {
        minimal_width(): number;
        attr(): {
            "tabindex": any;
        };
        title(): string;
    }
}
declare namespace $ {
    class $hyoo_scout extends $mol_book {
        pages(): readonly any[];
        Filter(): $mol_page;
        Filter_aspects(): $mol_list;
        filter_aspects(): readonly any[];
        Feedback(): $mol_link;
        Gists(): $mol_page;
        gists_title(): string;
        Suggest_link(): $mol_link;
        Suggest_icon(): $mol_icon_plus;
        Gists_favorite(): $mol_check_icon;
        gists_favorite(val?: any, force?: $mol_atom_force): any;
        Gists_favorite_icon(): $mol_icon_favorite;
        gists_favorite_label(): readonly any[];
        Gists_favorite_duration(): $mol_view;
        gists_favorite_duration(): string;
        Gists_search(): $mol_search;
        gists_filter_query(val?: any, force?: $mol_atom_force): any;
        Gists_list(): $mol_list;
        gist_links(): readonly any[];
        Suggest(): $hyoo_scout_suggest;
        Placeholder(): $hyoo_scout_placeholder;
        Filter_aspect(id: any): $mol_list;
        Filter_aspect_title(id: any): $mol_view;
        key(id: any): string;
        Filter_aspect_tags(id: any): $mol_row;
        filter_aspect_tags(id: any): readonly any[];
        Filter_tag(id: any): $mol_check;
        filter_tag_checked(id: any, val?: any, force?: $mol_atom_force): any;
        Filter_tag_title(id: any): $mol_view;
        tag_title(id: any): string;
        Gist_link(id: any): $mol_link;
        Gist_link_icon(id: any): $mol_view;
        gist_icon(id: any): string;
        Gist_link_title(id: any): $mol_dimmer;
        gist_title(id: any): string;
        Gist(id: any): $mol_page;
        Gist_favorite(id: any): $mol_check_icon;
        gist_favorite(id: any, val?: any, force?: $mol_atom_force): any;
        Gist_favorite_icon(): $mol_icon_favorite;
        Gist_close(): $mol_link;
        Gist_close_icon(): $mol_icon_cross;
        Gist_content(id: any): $mol_text;
        gist_content(id: any): string;
        Gist_aspects(id: any): $mol_list;
        gist_aspects(id: any): readonly any[];
        Gist_remarks(id: any): $mol_textarea;
        gist_remarks(id: any, val?: any, force?: $mol_atom_force): any;
        Gist_aspect(id: any): $mol_row;
        Gist_aspect_title(id: any): $mol_view;
        gist_aspect_tags(id: any): readonly any[];
        Gist_tag(id: any): $mol_view;
        data(): readonly any[];
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
