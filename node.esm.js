require( "source-map-support" ).install(); var exports = void 0;
;
process.on( 'unhandledRejection' , up => { throw up } );
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = Object.setPrototypeOf( module['export'+'s'] , global )
$.$$ = $

$.$mol = $  // deprecated

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "' + src.parent().relate( this.root().resolve( 'node_modules' ) ) + '/" ) + ".js" ] }; 
;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports;
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this[Symbol.toStringTag] || (this[Symbol.toStringTag] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error; /// Use 'Never Pause Here' breakpoint in DevTools or simply blackbox this script
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
            //this.unschedule()
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    /// Global storage of temporary state
    $.$mol_state_stack = new Map();
})($ || ($ = {}));
//stack.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_atom_status;
    (function ($mol_atom_status) {
        $mol_atom_status["obsolete"] = "obsolete";
        $mol_atom_status["checking"] = "checking";
        $mol_atom_status["pulling"] = "pulling";
        $mol_atom_status["actual"] = "actual";
    })($mol_atom_status = $.$mol_atom_status || ($.$mol_atom_status = {}));
    function $mol_atom_fence(task) {
        const slave = $mol_atom.stack[0];
        $mol_atom.stack[0] = null;
        try {
            return task();
        }
        finally {
            $mol_atom.stack[0] = slave;
        }
    }
    $.$mol_atom_fence = $mol_atom_fence;
    class $mol_atom extends $.$mol_object {
        constructor(id, handler = next => next) {
            super();
            this.masters = null;
            this.slaves = null;
            this.status = $mol_atom_status.obsolete;
            this.object_id(id);
            this.handler = handler;
        }
        destructor() {
            this.unlink();
            this.status = $mol_atom_status.actual;
            const value = this['value()'];
            if (value instanceof $.$mol_object) {
                if (value.object_owner() === this)
                    value.destructor();
            }
            this['value()'] = undefined;
        }
        unlink() {
            this.disobey_all();
            if (this.slaves)
                this.check_slaves();
        }
        get(force) {
            const slave = $mol_atom.stack[0];
            if (slave) {
                this.lead(slave);
                slave.obey(this);
            }
            this.actualize(force);
            const value = this['value()'];
            if (typeof Proxy !== 'function' && value instanceof Error) {
                throw value;
            }
            return value;
        }
        actualize(force) {
            if (this.status === $mol_atom_status.pulling) {
                throw new Error(`Cyclic atom dependency of ${this}`);
            }
            if (!force && this.status === $mol_atom_status.actual)
                return;
            const slave = $mol_atom.stack[0];
            $mol_atom.stack[0] = this;
            if (!force && this.status === $mol_atom_status.checking) {
                this.masters.forEach(master => {
                    if (this.status !== $mol_atom_status.checking)
                        return;
                    master.actualize();
                });
                if (this.status === $mol_atom_status.checking) {
                    this.status = $mol_atom_status.actual;
                }
            }
            if (force || this.status !== $mol_atom_status.actual) {
                const oldMasters = this.masters;
                this.masters = null;
                if (oldMasters)
                    oldMasters.forEach(master => {
                        master.dislead(this);
                    });
                this.status = $mol_atom_status.pulling;
                const next = this.pull(force);
                if (next === undefined) {
                    this.status = $mol_atom_status.actual;
                }
                else {
                    this.push(next);
                }
            }
            $mol_atom.stack[0] = slave;
        }
        pull(force) {
            try {
                return this.handler(this._next, force);
            }
            catch (error) {
                if (error['$mol_atom_catched'])
                    return error;
                if (error instanceof $mol_atom_wait)
                    return error;
                console.error(error.stack || error);
                if (!(error instanceof Error)) {
                    error = new Error(error.message || error);
                }
                error['$mol_atom_catched'] = true;
                return error;
            }
        }
        set(next) {
            return this.value(next);
        }
        push(next_raw) {
            if (!(next_raw instanceof $mol_atom_wait)) {
                this._ignore = this._next;
                this._next = undefined;
            }
            this.status = next_raw === undefined ? $mol_atom_status.obsolete : $mol_atom_status.actual;
            const prev = this['value()'];
            let next = (next_raw instanceof Error || prev instanceof Error) ? next_raw : $.$mol_conform(next_raw, prev);
            if (next === prev)
                return prev;
            if (prev instanceof $.$mol_object) {
                if (prev.object_owner() === this)
                    prev.destructor();
            }
            if (next instanceof $.$mol_object) {
                next.object_owner(this);
            }
            if ((typeof Proxy === 'function') && (next instanceof Error)) {
                next = new Proxy(next, {
                    get(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                    ownKeys(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                });
            }
            this['value()'] = next;
            $.$mol_log(this, prev, '➔', next);
            this.obsolete_slaves();
            return next;
        }
        obsolete_slaves() {
            if (!this.slaves)
                return;
            this.slaves.forEach(slave => slave.obsolete());
        }
        check_slaves() {
            if (this.slaves) {
                this.slaves.forEach(slave => slave.check());
            }
            else {
                $mol_atom.actualize(this);
            }
        }
        check() {
            //if( this.status === $mol_atom_status.pulling ) {
            //	throw new Error( `May be obsolated while pulling ${ this }` )
            //}
            if (this.status === $mol_atom_status.actual || this.status === $mol_atom_status.pulling) {
                this.status = $mol_atom_status.checking;
                this.check_slaves();
            }
        }
        obsolete() {
            if (this.status === $mol_atom_status.obsolete)
                return;
            //if( this.status === $mol_atom_status.pulling ) {
            //	throw new Error( `Obsolated while pulling ${ this }` )
            //} 
            this.status = $mol_atom_status.obsolete;
            this.check_slaves();
            return;
        }
        lead(slave) {
            if (!this.slaves) {
                this.slaves = new Set();
                $mol_atom.unreap(this);
            }
            this.slaves.add(slave);
        }
        dislead(slave) {
            if (!this.slaves)
                return;
            if (this.slaves.size === 1) {
                this.slaves = null;
                $mol_atom.reap(this);
            }
            else {
                this.slaves.delete(slave);
            }
        }
        obey(master) {
            if (!this.masters)
                this.masters = new Set();
            this.masters.add(master);
        }
        disobey(master) {
            if (!this.masters)
                return;
            this.masters.delete(master);
        }
        disobey_all() {
            if (!this.masters)
                return;
            this.masters.forEach(master => master.dislead(this));
            this.masters = null;
        }
        cache(next) {
            if (next === undefined)
                return this['value()'];
            return this['value()'] = next;
        }
        value(next, force) {
            if (force === $mol_atom_force_cache)
                return this.push(next);
            if (next !== undefined) {
                if (force === $mol_atom_force)
                    return this.push(next);
                let next_normal = $.$mol_conform(next, this._ignore);
                if (next_normal === this._ignore)
                    return this.get(force);
                if (!(this['value()'] instanceof Error)) {
                    next_normal = $.$mol_conform(next, this['value()']);
                    if (next_normal === this['value()'])
                        return this.get(force);
                }
                this._next = next_normal;
                this._ignore = next_normal;
                force = $mol_atom_force_update;
            }
            return this.get(force);
        }
        static actualize(atom) {
            $mol_atom.updating.push(atom);
            $mol_atom.schedule();
        }
        static reap(atom) {
            $mol_atom.reaping.add(atom);
            $mol_atom.schedule();
        }
        static unreap(atom) {
            $mol_atom.reaping.delete(atom);
        }
        static schedule() {
            if (this.scheduled)
                return;
            new $.$mol_defer($.$mol_log_group('$mol_atom.sync()', () => {
                if (!this.scheduled)
                    return;
                this.scheduled = false;
                this.sync();
            }));
            this.scheduled = true;
        }
        static sync() {
            this.schedule();
            while (true) {
                const atom = this.updating.shift();
                if (!atom)
                    break;
                if (this.reaping.has(atom))
                    continue;
                if (atom.status !== $mol_atom_status.actual)
                    atom.get();
            }
            while (this.reaping.size) {
                this.reaping.forEach(atom => {
                    this.reaping.delete(atom);
                    if (!atom.slaves)
                        atom.destructor();
                });
            }
            this.scheduled = false;
        }
        then(done, fail) {
            let prev;
            let next;
            const atom = new $mol_atom(`${this}.then(${done})`, () => {
                try {
                    if (prev == undefined) {
                        const val = this.get();
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val['valueOf']();
                        prev = val;
                    }
                    if (next == undefined) {
                        const val = done(prev);
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val['valueOf']();
                        next = val;
                    }
                    return next;
                }
                catch (error) {
                    if (error instanceof $mol_atom_wait)
                        return error;
                    if (fail)
                        return fail(error);
                    return error;
                }
            });
            $mol_atom.actualize(atom);
            return atom;
        }
        catch(fail) {
            return this.then(next => next, fail);
        }
    }
    $mol_atom.stack = [];
    $mol_atom.updating = [];
    $mol_atom.reaping = new Set();
    $mol_atom.scheduled = false;
    $.$mol_atom = $mol_atom;
    $.$mol_state_stack.set('$mol_atom.stack', $mol_atom.stack);
    function $mol_atom_current() {
        return $mol_atom.stack[0];
    }
    $.$mol_atom_current = $mol_atom_current;
    class $mol_atom_wait extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mol_atom_wait';
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    class $mol_atom_force extends Object {
        static toString() { return this.name; }
    }
    $.$mol_atom_force = $mol_atom_force;
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    $.$mol_atom_force_cache = $mol_atom_force_cache;
    class $mol_atom_force_update extends $mol_atom_force {
    }
    $.$mol_atom_force_update = $mol_atom_force_update;
})($ || ($ = {}));
//atom.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_value(next, force) {
            const host = this;
            let atom = store.get(host);
            if (!atom) {
                const id = `${host}.${name}()`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.call(host, ...args);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                atom.object_owner(host);
                const destructor = atom.destructor;
                atom.destructor = () => {
                    store.delete(host);
                    destructor.call(atom);
                };
                store.set(host, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        descr.value['value'] = value;
    }
    $.$mol_mem = $mol_mem;
    function $mol_mem_key(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_key_value(key, next, force) {
            const host = this;
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let atom = dict.get(key);
            if (!atom) {
                const id = `${host}.${name}(${JSON.stringify(key)})`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.call(host, key, ...args);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                const destructor = atom.destructor;
                atom.destructor = () => {
                    dict.delete(key);
                    destructor.call(atom);
                };
                dict.set(key, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        void (descr.value['value'] = value);
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        console.info(`${$node.colorette.gray($node.path.relative('', dir))}> ${$node.colorette.blue(app)} ${$node.colorette.cyan(args.join(' '))}`);
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = new Buffer('');
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, name, wrapper) {
        if (require('module').builtinModules.indexOf(name) >= 0)
            return require(name);
        if (!require('fs').existsSync(`./node_modules/${name}`)) {
            $.$mol_exec('.', 'npm', 'install', name);
        }
        return require(name);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next, force) {
            if (next === undefined)
                return [];
            const node = next[0];
            const atom = $.$mol_atom_current();
            new $.$mol_defer(() => {
                if (node)
                    return node.focus();
                const el = atom.cache()[0];
                if (el)
                    el.blur();
            });
            return undefined;
        }
        static position(next, force) {
            if (next !== undefined) {
                var start = next.start;
                var end = next.end;
                if (!(start <= end))
                    throw new Error(`Wrong offsets (${start},${end})`);
                var root = $.$mol_dom_context.document.getElementById(next.id);
                root.focus();
                var range = new Range;
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= start)
                            break;
                        start -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            start = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setStart(cur, start);
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= end)
                            break;
                        end -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            end = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setEnd(cur, end);
                var sel = $.$mol_dom_context.document.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return next;
            }
            else {
                var sel = $.$mol_dom_context.document.getSelection();
                if (sel.rangeCount === 0)
                    return null;
                var range = sel.getRangeAt(0);
                var el = range.commonAncestorContainer;
                while (el && !el.id)
                    el = el.parentElement;
                if (!el)
                    return { id: null, start: 0, end: 0 };
                var meter = new Range;
                meter.selectNodeContents(el);
                meter.setEnd(range.startContainer, range.startOffset);
                var startOffset = meter.toString().length;
                meter.setEnd(range.endContainer, range.endOffset);
                var endOffset = meter.toString().length;
                return { id: el.id, start: startOffset, end: endOffset };
            }
        }
        static onFocus(event) {
            const parents = [];
            let element = event.target;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            this.focused(parents, $.$mol_atom_force_cache);
        }
        static onBlur(event) {
            const focused = this.focused();
            setTimeout($.$mol_log_group('$mol_view_selection blur', () => {
                if (focused !== this.focused())
                    return;
                this.focused([], $.$mol_atom_force_cache);
            }));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "position", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            // if( el[ key ] === val ) continue
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $$;
    (function ($$_1) {
        let $$;
    })($$ = $.$$ || ($.$$ = {}));
    let $mol;
    (function ($mol_1) {
        let $mol;
    })($mol = $.$mol || ($.$mol = {}));
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    /// Reactive statefull lazy ViewModel
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_tree(nodes.item(i));
                document.title = view.title();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : next ? [node] : []) || [];
            return value.indexOf(node) !== -1;
        }
        context(next) {
            return next || $;
        }
        get $() {
            return this.context();
        }
        set $(next) {
            this.context(next);
        }
        context_sub() {
            return this.context();
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        /// Name of element that created when element not found in DOM
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        /// NameSpace of element that created when element not found in DOM
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        /// Raw child views
        sub() {
            return null;
        }
        /// Visible sub views with defined context()
        /// Render all by default
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.context_sub();
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        /// Minimal width that used for lazy rendering
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        /// Minimal height that used for lazy rendering
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || this.$.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            $.$mol_dom_render_events(node, this.event());
            $.$mol_dom_render_events_async(node, this.event_async());
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    plugin.dom_node(node);
                    plugin.render();
                }
                this.render();
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                if (error instanceof $.$mol_atom_wait)
                    return node;
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                if (error['$mol_atom_catched'])
                    return node;
                console.error(error);
                error['$mol_atom_catched'] = true;
            }
            return node;
        }
        render() {
            const node = this.dom_node();
            const sub = this.sub_visible();
            if (sub)
                $.$mol_dom_render_children(node, sub);
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
            new $.$mol_defer(() => $.$mol_dom_render_fields(node, fields));
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = this.object_host();
            if (owner instanceof $mol_view) {
                const suffix = this.object_field();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "context", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
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
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled() {
            return false;
        }
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index() {
            return 0;
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub() {
            return [].concat(this.title());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub() {
            return [].concat(this.Icon(), this.label());
        }
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon() {
            return null;
        }
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label() {
            return [].concat(this.Title());
        }
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height() {
            return 0;
        }
        /**
         *  ```
         *  moving_hor?val false
         *  ```
         **/
        moving_hor(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  moving_vert?val false
         *  ```
         **/
        moving_vert(val, force) {
            return (val !== void 0) ? val : false;
        }
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
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_bottom?val 0
         *  ```
         **/
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_right?val 0
         *  ```
         **/
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  event_async *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event_async() {
            return (Object.assign(Object.assign({}, super.event_async()), { "scroll": (event) => this.event_scroll(event) }));
        }
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  Strut $mol_view style * transform <= strut_transform
         *  ```
         **/
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  strut_transform \
         *  ```
         **/
        strut_transform() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_hor", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_vert", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "Strut", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mol_scroll_top() {
            return 0;
        }
        $$.$mol_scroll_top = $mol_scroll_top;
        function $mol_scroll_left() {
            return 0;
        }
        $$.$mol_scroll_left = $mol_scroll_left;
        function $mol_scroll_moving() {
            return false;
        }
        $$.$mol_scroll_moving = $mol_scroll_moving;
        function $mol_scroll_moving_vert() {
            return false;
        }
        $$.$mol_scroll_moving_vert = $mol_scroll_moving_vert;
        function $mol_scroll_moving_hor() {
            return false;
        }
        $$.$mol_scroll_moving_hor = $mol_scroll_moving_hor;
        class $mol_scroll extends $.$mol_scroll {
            constructor() {
                // scroll_top( next? : number ) {
                // 	return $mol_state_session.value( `${ this }.scroll_top()` , next ) || 0
                // }
                // 
                // scroll_left( next? : number ) {
                // 	return $mol_state_session.value( `${ this }.scroll_left()` , next ) || 0
                // }
                super(...arguments);
                this._moving_task_timer = null;
            }
            scroll_bottom(next) {
                return next || 0;
            }
            scroll_right(next) {
                return next || 0;
            }
            event_scroll(next) {
                this.moving_vert(this.scroll_top() !== this.dom_node().scrollTop);
                this.moving_hor(this.scroll_left() !== this.dom_node().scrollLeft);
                this.moving_task_stop();
                new $.$mol_defer($.$mol_log_group(`${this}.event_scroll()`, () => {
                    const el = this.dom_node();
                    const top = Math.max(0, el.scrollTop);
                    const left = Math.max(0, el.scrollLeft);
                    this.scroll_top(top);
                    this.scroll_left(left);
                    this.scroll_bottom(Math.max(0, el.scrollHeight - top - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - left - el.offsetWidth));
                }));
            }
            event_repos(next) {
                new $.$mol_defer(() => {
                    const el = this.dom_node();
                    this.scroll_bottom(Math.max(0, el.scrollHeight - this.scroll_top() - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - this.scroll_left() - el.offsetWidth));
                });
            }
            moving_task_stop() {
                clearTimeout(this._moving_task_timer);
                this._moving_task_timer = setTimeout($.$mol_log_group(`${this}.moving_task_stop()`, () => {
                    this.moving_vert(false);
                    this.moving_hor(false);
                }), 50);
            }
            moving() {
                return this.moving_hor() || this.moving_vert();
            }
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_height();
                        return this.scroll_top() + Math.min(sizeWin.height, limit);
                    },
                    $mol_view_visible_width: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_width();
                        return this.scroll_left() + Math.min(sizeWin.width, limit);
                    },
                    $mol_scroll_top: () => this.scroll_top(),
                    $mol_scroll_left: () => this.scroll_left(),
                    $mol_scroll_moving: () => this.moving(),
                    $mol_scroll_moving_vert: () => this.moving_vert(),
                    $mol_scroll_moving_hor: () => this.moving_hor(),
                });
            }
            strut_transform() {
                try {
                    return `translate3d( 0 , ${this.content_height()}px , 0 )`;
                }
                catch (error) {
                    return '';
                }
            }
            sub_visible() {
                const sub = [
                    this.Strut(),
                    ...(this.sub() || []),
                ];
                const context = this.context_sub();
                sub.forEach(child => {
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                });
                return sub;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_right", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "context_sub", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub() {
            return [].concat(this.Head(), this.Body(), this.Foot());
        }
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head() {
            return [].concat(this.Title(), this.Tools());
        }
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button());
        }
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools() {
            return [].concat();
        }
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll());
        }
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  body /
         *  ```
         **/
        body() {
            return [].concat();
        }
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  foot /
         *  ```
         **/
        foot() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_object {
        /**
         *  ```
         *  dom_node null
         *  ```
         **/
        dom_node() {
            return null;
        }
        /**
         *  ```
         *  attr_static *
         *  ```
         **/
        attr_static() {
            return ({});
        }
        /**
         *  ```
         *  event *
         *  ```
         **/
        event() {
            return ({});
        }
        /**
         *  ```
         *  event_async *
         *  ```
         **/
        event_async() {
            return ({});
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plugin extends $.$mol_plugin {
            dom_node() {
                const node = this.object_host().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            render() {
                return this.dom_node();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plugin.prototype, "dom_node", null);
        $$.$mol_plugin = $mol_plugin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plugin.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision, next, force) {
            const atom = $.$mol_atom_current();
            const handler = () => {
                atom['value()'] = Date.now();
                atom.obsolete_slaves();
                if (precision > 0) {
                    setTimeout(handler, precision);
                }
                else {
                    requestAnimationFrame(handler);
                }
            };
            handler();
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom() {
            return 1;
        }
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val, force) {
            return (val !== void 0) ? val : 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $.$mol_dom_context.document.body) {
                    $.$mol_state_time.now();
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                    catch (error) {
                        // IE11
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: win.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val, force) {
            return (val !== void 0) ? val : [].concat(NaN, NaN);
        }
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision() {
            return 16;
        }
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
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
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event), "mouseleave": (event) => this.event_leave(event), "wheel": (event) => this.event_wheel(event) }));
        }
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                Sub.$ = this.$;
                const node = Sub.dom_tree();
                super.render();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub() {
            return this.pages_wrapped();
        }
        /**
         *  ```
         *  pages_wrapped /
         *  ```
         **/
        pages_wrapped() {
            return [].concat();
        }
        /**
         *  ```
         *  pages /
         *  ```
         **/
        pages() {
            return [].concat();
        }
        /**
         *  ```
         *  plugins /
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins() {
            return [].concat(this.Meter(), this.Touch());
        }
        width() {
            return this.Meter().width();
        }
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page());
        }
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index) {
            return null;
        }
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index) {
            return true;
        }
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    $.$mol_book = $mol_book;
})($ || ($ = {}));
(function ($) {
    class $mol_book_placeholder extends $.$mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width() {
            return 400;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": 0, "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder()].concat(this.pages());
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
            minimal_width() {
                return this.pages().reduce((sum, page) => page.minimal_width() + sum, 0);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "minimal_width", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub() {
            return this.rows();
        }
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows() {
            return [].concat();
        }
        /**
         *  ```
         *  Empty null
         *  ```
         **/
        Empty() {
            return null;
        }
    }
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            row_offsets() {
                var sub = this.sub();
                if (!sub)
                    return null;
                let heightLimit = this.$.$mol_view_visible_height();
                var offset = 0;
                var next = [];
                for (let child of sub) {
                    next.push(offset);
                    if (child instanceof $.$mol_view) {
                        offset += child.minimal_height();
                    }
                    if (offset > heightLimit)
                        break;
                }
                return next;
            }
            row_context(index) {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => this.$.$mol_view_visible_height() - this.row_offsets()[index],
                });
            }
            sub_visible() {
                var sub = this.sub();
                if (!sub)
                    return sub;
                var limit = this.row_offsets().length;
                var next = [];
                for (let i = 0; i < limit; ++i) {
                    const child = sub[i];
                    if (child == null)
                        continue;
                    if (child instanceof $.$mol_view) {
                        child.$ = this.row_context(i);
                    }
                    next.push(child);
                }
                return next;
            }
            minimal_height() {
                var height = 0;
                var sub = this.sub();
                if (sub)
                    sub.forEach(child => {
                        if (child instanceof $.$mol_view) {
                            height += child.minimal_height();
                        }
                    });
                return height;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "row_offsets", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list.prototype, "row_context", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name() {
            return "a";
        }
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
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri() {
            return "";
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target() {
            return "_self";
        }
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name() {
            return "";
        }
        /**
         *  ```
         *  current false
         *  ```
         **/
        current() {
            return false;
        }
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub() {
            return [].concat(this.title());
        }
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg() {
            return ({});
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.click(event) }));
        }
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event, force) {
            return this.event_click(event);
        }
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                if (this.uri() === this.$.$mol_state_arg.href())
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                setTimeout($.$mol_log_group(`${this}.event_click()`, () => this.focused(false)), 50);
            }
            file_name() {
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name() {
            return "svg";
        }
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size() {
            return 16;
        }
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg.prototype, "text_width", null);
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
            text_width(text) {
                return $.$mol_font_measure(this.font_size(), this.font_family(), text);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name() {
            return "svg";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box() {
            return "0 0 100 100";
        }
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name() {
            return "path";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "d": this.geometry() }));
        }
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box() {
            return "0 0 24 24";
        }
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width() {
            return 16;
        }
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height() {
            return 16;
        }
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub() {
            return [].concat(this.Path());
        }
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        /**
         *  ```
         *  path \
         *  ```
         **/
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        /**
         *  ```
         *  path \M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z
         *  ```
         **/
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_favorite extends $.$mol_icon {
        /**
         *  ```
         *  path \M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z
         *  ```
         **/
        path() {
            return "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";
        }
    }
    $.$mol_icon_favorite = $mol_icon_favorite;
})($ || ($ = {}));
//favorite.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event() {
            return ({
                "keydown": (event) => this.keydown(event),
            });
        }
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  plugins / <= Meter
         *  ```
         **/
        plugins() {
            return [].concat(this.Meter());
        }
        top() {
            return this.Meter().top();
        }
        bottom() {
            return this.Meter().bottom();
        }
        left() {
            return this.Meter().left();
        }
        right() {
            return this.Meter().right();
        }
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub() {
            return [].concat(this.Anchor(), this.Bubble());
        }
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor() {
            return null;
        }
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble() {
            return ((obj) => {
                obj.align = () => this.align();
                obj.content = () => this.bubble_content();
                obj.height_max = () => this.height_max();
                return obj;
            })(new this.$.$mol_pop_bubble());
        }
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align() {
            return "bottom_center";
        }
        /**
         *  ```
         *  bubble_content /
         *  ```
         **/
        bubble_content() {
            return [].concat();
        }
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max() {
            return 9999;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
})($ || ($ = {}));
(function ($) {
    class $mol_pop_bubble extends $.$mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content /
         *  ```
         **/
        content() {
            return [].concat();
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "maxHeight": this.height_max() }));
        }
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max() {
            return 9999;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_pop_align": this.align(), "tabindex": 0 }));
        }
        /**
         *  ```
         *  align \
         *  ```
         **/
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            sub() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                return this.$.$mol_window.size().height * 0.33;
            }
            align() {
                const viewport = this.$.$mol_window.size();
                const vert = this.top() > (viewport.height - this.bottom()) ? 'top' : 'bottom';
                const hor = this.left() > (viewport.width - this.right()) ? 'left' : 'right';
                return `${vert}_${hor}`;
            }
            keydown(event) {
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $.$mol_keyboard_code.escape) {
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack() {
            return "";
        }
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle() {
            return "";
        }
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub() {
            return this.parts();
        }
        /**
         *  ```
         *  parts /
         *  ```
         **/
        parts() {
            return [].concat();
        }
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.string(id));
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return $mol_file.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        path() {
            return '.';
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: false,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
            });
            watcher.on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.stat(undefined, $.$mol_atom_force_cache);
                if (type === 'change')
                    return;
                file.parent().stat(undefined, $.$mol_atom_force_cache);
            });
            watcher.on('error', (error) => {
                this.stat(error, $.$mol_atom_force_cache);
            });
            return watcher;
        }
        stat(next, force) {
            var path = this.path();
            try {
                var stat = next || $node.fs.statSync(path);
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    return null;
                return error;
            }
            this.parent().watcher();
            return stat;
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            var exists = !!this.stat();
            if (next === void 0) {
                return exists;
            }
            else {
                if (next == exists)
                    return exists;
                if (next) {
                    this.parent().exists(true);
                    $node.fs.mkdirSync(this.path());
                }
                else {
                    $node.fs.unlinkSync(this.path());
                }
                this.stat(undefined, $.$mol_atom_force_cache);
                return next;
            }
        }
        parent() {
            return this.resolve('..');
        }
        type() {
            var stat = this.stat();
            if (stat) {
                if (stat.isFile())
                    return 'file';
                if (stat.isDirectory())
                    return 'dir';
                if (stat.isBlockDevice())
                    return 'blocks';
                if (stat.isCharacterDevice())
                    return 'chars';
                if (stat.isSymbolicLink())
                    return 'link';
                if (stat.isFIFO())
                    return 'fifo';
                if (stat.isSocket())
                    return 'socket';
            }
            else {
                return null;
            }
            throw new Error(`Unknown file type ${this.path()}`);
        }
        name() {
            return $node.path.basename(this.path());
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        content(next, force) {
            if (next === void 0) {
                return this.stat() && $node.fs.readFileSync(this.path()); //.toString()
            }
            this.parent().exists(true);
            $node.fs.writeFileSync(this.path(), next);
            return next; //.toString()
        }
        reader() {
            return $node.fs.createReadStream(this.path());
        }
        writer() {
            return $node.fs.createWriteStream(this.path());
        }
        sub() {
            this.stat();
            switch (this.type()) {
                case 'dir':
                    return $node.fs.readdirSync(this.path())
                        .filter(name => !/^\.+$/.test(name))
                        .map(name => this.resolve(name));
            }
            return [];
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            $node.fs.appendFileSync(this.path(), next);
        }
        find(include, exclude) {
            var found = [];
            this.sub().forEach(child => {
                if (exclude && child.path().match(exclude))
                    return;
                if (!include || child.path().match(include))
                    found.push(child);
                if (child.type() === 'dir')
                    found = found.concat(child.find(include, exclude));
            });
            return found;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "version", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof $.$mol_atom_wait)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl() {
            return false;
        }
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift() {
            return false;
        }
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt() {
            return false;
        }
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "keydown": (event) => this.event_key(event) }));
        }
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name() {
            return "input";
        }
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce() {
            return 0;
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete() {
            return false;
        }
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
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "disabled": this.disabled(), "value": this.value_changed(), "placeholder": this.hint(), "type": this.type(), "spellcheck": this.spellcheck(), "autocomplete": this.autocomplete_native() }));
        }
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled() {
            return false;
        }
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val, force) {
            return this.value(val);
        }
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "text";
        }
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck() {
            return false;
        }
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native() {
            return "";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "maxlength": this.length_max() }));
        }
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max() {
            return Infinity;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "input": (event) => this.event_change(event), "keydown": (event) => this.event_key_press(event) }));
        }
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value_changed", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            constructor() {
                super(...arguments);
                this._timer = null;
            }
            event_change(next) {
                if (!next)
                    return;
                clearTimeout(this._timer);
                this._timer = setTimeout($.$mol_log_group(`${this}.event_change()`, () => {
                    this.value(next.target.value);
                }), this.debounce());
            }
            event_key_press(next) {
                if (!next)
                    return;
                if (next.keyCode === $.$mol_keyboard_code.enter) {
                    this.value(next.target.value);
                }
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
        }
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select extends $.$mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary() {
            return ({});
        }
        /**
         *  ```
         *  options /
         *  ```
         **/
        options() {
            return [].concat();
        }
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id) {
            return ((obj) => {
                obj.event_click = (event) => this.event_select(id, event);
                obj.sub = () => this.option_content(id);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id, event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id) {
            return [].concat(this.Option_label(id));
        }
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.haystack = () => this.option_label(id);
                obj.needle = () => this.filter_pattern();
                return obj;
            })(new this.$.$mol_dimmer());
        }
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id) {
            return "";
        }
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options() {
            return ((obj) => {
                obj.sub = () => [].concat(this.no_options_message());
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message() {
            return this.$.$mol_locale.text("$mol_select_no_options_message");
        }
        /**
         *  ```
         *  plugins / <= Nav
         *  ```
         **/
        plugins() {
            return [].concat(this.Nav());
        }
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav() {
            return ((obj) => {
                obj.keys_y = () => this.nav_components();
                obj.current_y = (component) => this.option_focused(component);
                obj.cycle = (val) => this.nav_cycle(val);
                return obj;
            })(new this.$.$mol_nav());
        }
        /**
         *  ```
         *  nav_components /
         *  	<= Filter
         *  	<= option_rows
         *  ```
         **/
        nav_components() {
            return [].concat(this.Filter(), this.option_rows());
        }
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component, force) {
            return (component !== void 0) ? component : null;
        }
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val, force) {
            return this.options_showed(val);
        }
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor() {
            return this.Trigger();
        }
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger() {
            return ((obj) => {
                obj.click = (event) => this.open(event);
                obj.sub = () => this.trigger_content();
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  trigger_content /
         *  	<= option_content_current
         *  	<= Filter
         *  	<= Trigger_icon
         *  ```
         **/
        trigger_content() {
            return [].concat(this.option_content_current(), this.Filter(), this.Trigger_icon());
        }
        /**
         *  ```
         *  option_content_current /
         *  ```
         **/
        option_content_current() {
            return [].concat();
        }
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter() {
            return ((obj) => {
                obj.value = (val) => this.filter_pattern(val);
                obj.hint = () => this.filter_hint();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint() {
            return this.hint();
        }
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mol_select_hint");
        }
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce() {
            return 200;
        }
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content() {
            return [].concat(this.Menu());
        }
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu() {
            return ((obj) => {
                obj.rows = () => this.menu_content();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  menu_content /
         *  	<= Filter
         *  	<= option_rows
         *  ```
         **/
        menu_content() {
            return [].concat(this.Filter(), this.option_rows());
        }
        /**
         *  ```
         *  option_rows /
         *  ```
         **/
        option_rows() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "options_showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "open", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Menu", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                if (!this.focused())
                    return '';
                return next || '';
            }
            open() {
                this.options_showed(true);
            }
            options_showed(next) {
                this.focused();
                if (next === undefined)
                    next = this.filter_pattern().length > 0;
                if (next && this.Filter())
                    new $.$mol_defer(() => this.Filter().focused(true));
                return next;
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($.$mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options.splice(index, 1);
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return value == null ? id : value;
            }
            option_rows() {
                if (this.options_filtered().length === 0)
                    return [this.No_options()];
                let options = this.options_filtered().map((option) => this.Option_row(option));
                return options;
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return this.Filter();
                }
                if (this.options_showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.focused(false);
            }
            nav_components() {
                return [this.Filter(), ...this.option_rows()];
            }
            option_content_current() {
                return this.option_content(this.value());
            }
            trigger_content() {
                return (!this.value() && this.Filter())
                    ? [this.Filter()]
                    : [...this.option_content_current(), this.Trigger_icon()];
            }
            menu_content() {
                return (this.value() && this.Filter())
                    ? [this.Filter(), ...this.option_rows()]
                    : this.option_rows();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_search extends $.$mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub() {
            return [].concat(this.Suggest(), this.Clear());
        }
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
        Suggest() {
            return ((obj) => {
                obj.value = (val) => this.suggest_selected(val);
                obj.filter_pattern = (val) => this.suggest_selected(val);
                obj.hint = () => this.hint();
                obj.filter_pattern = (val) => this.query(val);
                obj.options_showed = () => this.suggests_showed();
                obj.options = () => this.suggests();
                obj.Trigger_icon = () => null;
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_select());
        }
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mol_search_hint");
        }
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed() {
            return false;
        }
        /**
         *  ```
         *  suggests /
         *  ```
         **/
        suggests() {
            return [].concat();
        }
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce() {
            return 200;
        }
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear() {
            return ((obj) => {
                obj.sub = () => [].concat(this.Clear_icon());
                obj.event_click = (val) => this.event_clear(val);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "suggest_selected", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "event_clear", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//search.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            suggests_showed() {
                if (!this.focused())
                    return false;
                return this.suggests().length > 1;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.Suggest().Filter().focused(true);
                this.query(next);
            }
            sub() {
                return [
                    this.Suggest(),
                    ...(this.query().length > 0) ? [this.Clear()] : [],
                ];
            }
            event_clear(event) {
                this.query('');
            }
        }
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//search.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_switch extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  Option!id $mol_check
         *  	checked?val <=> option_checked!id?val
         *  	title <= option_title!id
         *  	enabled <= option_enabled!id
         *  ```
         **/
        Option(id) {
            return ((obj) => {
                obj.checked = (val) => this.option_checked(id, val);
                obj.title = () => this.option_title(id);
                obj.enabled = () => this.option_enabled(id);
                return obj;
            })(new this.$.$mol_check());
        }
        /**
         *  ```
         *  option_checked!id?val false
         *  ```
         **/
        option_checked(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  option_title!id \
         *  ```
         **/
        option_title(id) {
            return "";
        }
        /**
         *  ```
         *  option_enabled!id <= enabled
         *  ```
         **/
        option_enabled(id) {
            return this.enabled();
        }
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  value?val null
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  options *
         *  ```
         **/
        options() {
            return ({});
        }
        /**
         *  ```
         *  sub <= items
         *  ```
         **/
        sub() {
            return this.items();
        }
        /**
         *  ```
         *  items /
         *  ```
         **/
        items() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "Option", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "option_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//switch.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $.$mol_state_session.value(`${this}.value()`, next);
            }
            options() {
                return {};
            }
            items() {
                return Object.keys(this.options()).map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key];
            }
            option_checked(key, next) {
                if (next === void 0)
                    return this.value() == key;
                this.value(next ? key : null);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_switch.prototype, "items", null);
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//switch.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
(function ($) {
    class $mol_row_sub extends $.$mol_view {
    }
    $.$mol_row_sub = $mol_row_sub;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_row extends $.$mol_row {
            item_offsets_top() {
                let next = [];
                let sub = this.sub();
                if (!sub)
                    return next;
                const context = this.context_sub();
                const widthLimit = context.$mol_view_visible_width();
                let allHeight = 0;
                let rowWidth = 0;
                let row_height = 0;
                for (let child of sub) {
                    next.push(allHeight);
                    if (!(child instanceof $.$mol_view))
                        continue;
                    const width = child.minimal_width();
                    const height = child.minimal_height();
                    rowWidth += width;
                    if (rowWidth > widthLimit) {
                        allHeight += row_height;
                        rowWidth = width;
                        row_height = height;
                    }
                    else {
                        row_height = Math.max(row_height, height);
                    }
                }
                next.push(allHeight + row_height);
                return next;
            }
            sub_visible() {
                const sub = this.sub();
                const visible = [];
                const context = this.context_sub();
                const heightLimit = context.$mol_view_visible_height();
                const offsets = this.item_offsets_top();
                let height = 0;
                for (let i = 0; i < offsets.length - 1; ++i) {
                    if (offsets[i] > heightLimit)
                        break;
                    const child = sub[i];
                    if (child instanceof $.$mol_view) {
                        child.context(context);
                    }
                    visible.push(child);
                }
                return visible;
            }
            minimal_height() {
                const offsets = this.item_offsets_top();
                return offsets[offsets.length - 1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_row.prototype, "item_offsets_top", null);
        $$.$mol_row = $mol_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked() {
            return false;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> keydown?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "keydown": (event) => this.keydown(event) }));
        }
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  submit?event null
         *  ```
         **/
        submit(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  sub /
         *  	<= Bar_fields
         *  	<= Bar_buttons
         *  ```
         **/
        sub() {
            return [].concat(this.Bar_fields(), this.Bar_buttons());
        }
        /**
         *  ```
         *  Bar_fields $mol_view sub <= form_fields
         *  ```
         **/
        Bar_fields() {
            return ((obj) => {
                obj.sub = () => this.form_fields();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  form_fields /
         *  ```
         **/
        form_fields() {
            return [].concat();
        }
        /**
         *  ```
         *  Bar_buttons $mol_row sub <= buttons
         *  ```
         **/
        Bar_buttons() {
            return ((obj) => {
                obj.sub = () => this.buttons();
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  buttons /
         *  ```
         **/
        buttons() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $.$mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_labeler extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Content
         *  ```
         **/
        sub() {
            return [].concat(this.Title(), this.Content());
        }
        /**
         *  ```
         *  Title $mol_view sub <= label
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => this.label();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  label / <= title
         *  ```
         **/
        label() {
            return [].concat(this.title());
        }
        /**
         *  ```
         *  Content $mol_view sub / <= content
         *  ```
         **/
        Content() {
            return ((obj) => {
                obj.sub = () => [].concat(this.content());
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  content null
         *  ```
         **/
        content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        /**
         *  ```
         *  label /
         *  	<= name
         *  	<= Bid
         *  ```
         **/
        label() {
            return [].concat(this.name(), this.Bid());
        }
        /**
         *  ```
         *  name \
         *  ```
         **/
        name() {
            return "";
        }
        /**
         *  ```
         *  Bid $mol_view sub / <= bid
         *  ```
         **/
        Bid() {
            return ((obj) => {
                obj.sub = () => [].concat(this.bid());
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  bid \
         *  ```
         **/
        bid() {
            return "";
        }
        /**
         *  ```
         *  Content <= control
         *  ```
         **/
        Content() {
            return this.control();
        }
        /**
         *  ```
         *  control null
         *  ```
         **/
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        /**
         *  ```
         *  minimal_height 32
         *  ```
         **/
        minimal_height() {
            return 32;
        }
        /**
         *  ```
         *  Icon $mol_icon_chevron
         *  ```
         **/
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        /**
         *  ```
         *  level 0
         *  ```
         **/
        level() {
            return 0;
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	paddingLeft <= level_style
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "paddingLeft": this.level_style() }));
        }
        /**
         *  ```
         *  level_style \0px
         *  ```
         **/
        level_style() {
            return "0px";
        }
        /**
         *  ```
         *  checked?val <=> expanded?val
         *  ```
         **/
        checked(val, force) {
            return this.expanded(val);
        }
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  enabled <= expandable
         *  ```
         **/
        enabled() {
            return this.expandable();
        }
        /**
         *  ```
         *  expandable false
         *  ```
         **/
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        /**
         *  ```
         *  row_ids /
         *  ```
         **/
        row_ids() {
            return [].concat();
        }
        /**
         *  ```
         *  row_id!index null
         *  ```
         **/
        row_id(index) {
            return null;
        }
        /**
         *  ```
         *  col_ids /
         *  ```
         **/
        col_ids() {
            return [].concat();
        }
        /**
         *  ```
         *  records *
         *  ```
         **/
        records() {
            return ({});
        }
        /**
         *  ```
         *  record!id null
         *  ```
         **/
        record(id) {
            return null;
        }
        /**
         *  ```
         *  hierarchy null
         *  ```
         **/
        hierarchy() {
            return null;
        }
        /**
         *  ```
         *  hierarchy_col \
         *  ```
         **/
        hierarchy_col() {
            return "";
        }
        /**
         *  ```
         *  sub / <= Table
         *  ```
         **/
        sub() {
            return [].concat(this.Table());
        }
        /**
         *  ```
         *  Table $mol_grid_table
         *  	offset <= gap_top
         *  	sub / <= rows_visible
         *  ```
         **/
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => [].concat(this.rows_visible());
                return obj;
            })(new this.$.$mol_grid_table());
        }
        /**
         *  ```
         *  gap_top 0
         *  ```
         **/
        gap_top() {
            return 0;
        }
        /**
         *  ```
         *  rows_visible /
         *  ```
         **/
        rows_visible() {
            return [].concat();
        }
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows() {
            return [].concat();
        }
        /**
         *  ```
         *  Head $mol_grid_row
         *  	height <= row_height
         *  	cells <= head_cells
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  row_height 40
         *  ```
         **/
        row_height() {
            return 40;
        }
        /**
         *  ```
         *  head_cells /
         *  ```
         **/
        head_cells() {
            return [].concat();
        }
        /**
         *  ```
         *  Row!id $mol_grid_row
         *  	height <= row_height
         *  	cells <= cells!id
         *  ```
         **/
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  cells!id /
         *  ```
         **/
        cells(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Cell!id $mol_view
         *  ```
         **/
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  cell!id null
         *  ```
         **/
        cell(id) {
            return null;
        }
        /**
         *  ```
         *  Cell_text!id $mol_grid_cell sub / <= cell_content_text!id
         *  ```
         **/
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_text(id));
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        /**
         *  ```
         *  cell_content_text!id <= cell_content!id
         *  ```
         **/
        cell_content_text(id) {
            return this.cell_content(id);
        }
        /**
         *  ```
         *  cell_content!id /
         *  ```
         **/
        cell_content(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Cell_number!id $mol_grid_number sub / <= cell_content_number!id
         *  ```
         **/
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_number(id));
                return obj;
            })(new this.$.$mol_grid_number());
        }
        /**
         *  ```
         *  cell_content_number!id <= cell_content!id
         *  ```
         **/
        cell_content_number(id) {
            return this.cell_content(id);
        }
        /**
         *  ```
         *  Col_head!id $mol_float
         *  	dom_name \th
         *  	sub / <= col_head_content!id
         *  ```
         **/
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => [].concat(this.col_head_content(id));
                return obj;
            })(new this.$.$mol_float());
        }
        /**
         *  ```
         *  col_head_content!id /
         *  ```
         **/
        col_head_content(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Cell_branch!id $mol_check_expand
         *  	level <= cell_level!id
         *  	label <= cell_content!id
         *  	expanded?val <=> cell_expanded!id?val
         *  ```
         **/
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        /**
         *  ```
         *  cell_level!id 0
         *  ```
         **/
        cell_level(id) {
            return 0;
        }
        /**
         *  ```
         *  cell_expanded!id?val false
         *  ```
         **/
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Cell_content!id / <= Cell_dimmer!id
         *  ```
         **/
        Cell_content(id) {
            return [].concat(this.Cell_dimmer(id));
        }
        /**
         *  ```
         *  Cell_dimmer!id $mol_dimmer
         *  	needle <= needle
         *  	haystack <= cell_value!id
         *  ```
         **/
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle() {
            return "";
        }
        /**
         *  ```
         *  cell_value!id \
         *  ```
         **/
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_view {
        /**
         *  ```
         *  dom_name \table
         *  ```
         **/
        dom_name() {
            return "table";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        /**
         *  ```
         *  dom_name \tr
         *  ```
         **/
        dom_name() {
            return "tr";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	height <= height
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "height": this.height() }));
        }
        /**
         *  ```
         *  height 40
         *  ```
         **/
        height() {
            return 40;
        }
        /**
         *  ```
         *  sub <= cells
         *  ```
         **/
        sub() {
            return this.cells();
        }
        /**
         *  ```
         *  cells /
         *  ```
         **/
        cells() {
            return [].concat();
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        /**
         *  ```
         *  dom_name \td
         *  ```
         **/
        dom_name() {
            return "td";
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            rows_visible() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const view_window = this.view_window();
                return [].concat(this.Head(), rows.slice(view_window.top, view_window.bottom).valueOf());
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const count = rows.length;
                const context = this.context_sub();
                const scrollTop = context.$mol_scroll_top();
                const top = Math.max(0, Math.floor(scrollTop / this.row_height()) - 1);
                const bottom = Math.min(count, top + this.rows_visible_max());
                return { top, bottom, count };
            }
            gap_top() {
                const view_window = this.view_window();
                return view_window.top * this.row_height();
            }
            height() {
                const view_window = this.view_window();
                return view_window.count * this.row_height();
            }
            content_height() {
                return this.rows().length * this.row_height();
            }
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
        class $mol_grid_table extends $.$mol_grid_table {
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_scroll_top: () => this.$.$mol_scroll_top() - this.offset(),
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid_table.prototype, "context_sub", null);
        $$.$mol_grid_table = $mol_grid_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        /**
         *  ```
         *  dom_name \img
         *  ```
         **/
        dom_name() {
            return "img";
        }
        /**
         *  ```
         *  field *
         *  	^
         *  	src <= uri
         *  	alt <= title
         *  ```
         **/
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "src": this.uri(), "alt": this.title() }));
        }
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= content
         *  ```
         **/
        sub() {
            return [].concat(this.Icon(), this.content());
        }
        /**
         *  ```
         *  Icon $mol_image uri <= icon
         *  ```
         **/
        Icon() {
            return ((obj) => {
                obj.uri = () => this.icon();
                return obj;
            })(new this.$.$mol_image());
        }
        /**
         *  ```
         *  icon \
         *  ```
         **/
        icon() {
            return "";
        }
        /**
         *  ```
         *  content / <= title
         *  ```
         **/
        content() {
            return [].concat(this.title());
        }
        /**
         *  ```
         *  title <= uri
         *  ```
         **/
        title() {
            return this.uri();
        }
        /**
         *  ```
         *  host \
         *  ```
         **/
        host() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,255,0&size=32`;
            }
            host() {
                const url = new URL(this.uri());
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\/\/\S*/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        /**
         *  ```
         *  uri_base \
         *  ```
         **/
        uri_base() {
            return "";
        }
        /**
         *  ```
         *  text \
         *  ```
         **/
        text() {
            return "";
        }
        /**
         *  ```
         *  tokens /
         *  ```
         **/
        tokens() {
            return [].concat();
        }
        /**
         *  ```
         *  Quote!id $mol_text text <= quote_text!id
         *  ```
         **/
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        /**
         *  ```
         *  quote_text!id \
         *  ```
         **/
        quote_text(id) {
            return "";
        }
        /**
         *  ```
         *  Row!id $mol_text_row
         *  	sub <= block_content!id
         *  	type <= block_type!id
         *  ```
         **/
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        /**
         *  ```
         *  block_content!id /
         *  ```
         **/
        block_content(id) {
            return [].concat();
        }
        /**
         *  ```
         *  block_type!id \
         *  ```
         **/
        block_type(id) {
            return "";
        }
        /**
         *  ```
         *  Span!id $mol_text_span
         *  ```
         **/
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        /**
         *  ```
         *  Link!id $mol_text_link
         *  ```
         **/
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        /**
         *  ```
         *  Image!id $mol_text_image
         *  ```
         **/
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        /**
         *  ```
         *  Header!id $mol_text_header
         *  	level <= header_level!id
         *  	content <= header_content!id
         *  ```
         **/
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        /**
         *  ```
         *  header_level!id 0
         *  ```
         **/
        header_level(id) {
            return 0;
        }
        /**
         *  ```
         *  header_content!id /
         *  ```
         **/
        header_content(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Table!id $mol_grid
         *  	head_cells <= table_head_cells!id
         *  	rows <= table_rows!id
         *  ```
         **/
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        /**
         *  ```
         *  table_head_cells!id /
         *  ```
         **/
        table_head_cells(id) {
            return [].concat();
        }
        /**
         *  ```
         *  table_rows!id /
         *  ```
         **/
        table_rows(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Table_row!id $mol_grid_row cells <= table_cells!id
         *  ```
         **/
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  table_cells!id /
         *  ```
         **/
        table_cells(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Table_cell!id $mol_grid_cell sub <= table_cell_content!id
         *  ```
         **/
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        /**
         *  ```
         *  table_cell_content!id /
         *  ```
         **/
        table_cell_content(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Table_cell_head!id $mol_float sub <= table_cell_content!id
         *  ```
         **/
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type \
         *  ```
         **/
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        /**
         *  ```
         *  dom_name \h
         *  ```
         **/
        dom_name() {
            return "h";
        }
        /**
         *  ```
         *  minimal_height 50
         *  ```
         **/
        minimal_height() {
            return 50;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_header_level <= level?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_header_level": this.level() }));
        }
        /**
         *  ```
         *  level?val 0
         *  ```
         **/
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content /
         *  ```
         **/
        content() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        /**
         *  ```
         *  dom_name \span
         *  ```
         **/
        dom_name() {
            return "span";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_link_iconed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  uri <= link?val
         *  ```
         **/
        uri() {
            return this.link();
        }
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        /**
         *  ```
         *  dom_name \object
         *  ```
         **/
        dom_name() {
            return "object";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	allowfullscreen true
         *  	mol_text_type <= type?val
         *  	data <= link?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub / <= title?val
         *  ```
         **/
        sub() {
            return [].concat(this.title());
        }
        /**
         *  ```
         *  title?val \
         *  ```
         **/
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return this.$.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return this.$.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^#|(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return this.$.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        /**
         *  ```
         *  event * keydown?event <=> press?event
         *  ```
         **/
        event() {
            return ({
                "keydown": (event) => this.press(event),
            });
        }
        /**
         *  ```
         *  press?event null
         *  ```
         **/
        press(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  sub /
         *  	<= Edit
         *  	<= View
         *  ```
         **/
        sub() {
            return [].concat(this.Edit(), this.View());
        }
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
        Edit() {
            return ((obj) => {
                obj.dom_name = () => "textarea";
                obj.value = (val) => this.value(val);
                obj.hint = () => this.hint();
                obj.debounce = () => 0;
                obj.enabled = () => this.enabled();
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  View $mol_text text <= text
         *  ```
         **/
        View() {
            return ((obj) => {
                obj.text = () => this.text();
                return obj;
            })(new this.$.$mol_text());
        }
        /**
         *  ```
         *  text \
         *  ```
         **/
        text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            text() {
                return this.value().replace(/^/mg, '\t');
            }
            indent_inc() {
                const el = this.Edit().dom_node();
                const pos = el.selectionStart;
                let text = this.value();
                text = text.substring(0, pos) + '\t' + text.substring(el.selectionEnd);
                this.value(text);
                el.value = text;
                el.selectionStart = el.selectionEnd = pos + 1;
            }
            indent_dec() {
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_typeof(value) {
        var str = {}.toString.apply(value);
        var type = str.substring(8, str.length - 1);
        return type;
    }
    $.$mol_typeof = $mol_typeof;
})($ || ($ = {}));
//typeof.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_tree {
        constructor(config = {}) {
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = sub.concat(config.sub || []);
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1
            }));
        }
        clone(config) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                value: config.value
            });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    throw new Error(`Syntax error at ${baseUri}:${row}\n${line}`);
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    throw new Error(`Too many tabs at ${baseUri}:${row}\n${line}`);
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        throw new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`);
                    var next = new $mol_tree({ type, baseUri, row, col });
                    parent.sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col });
                    parent.sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            var type = $.$mol_typeof(json);
            switch (type) {
                case 'Boolean':
                case 'Null':
                case 'Number':
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case 'String':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case 'Array':
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case 'Date':
                    return new $mol_tree({
                        type: "",
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                case 'Object':
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri
                            });
                        }
                        child.sub.push($mol_tree.fromJSON(json[key], baseUri));
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
            throw new Error(`Unsupported type (${type}) at ${baseUri}`);
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            if (String(Number(this.type)) == this.type.trim())
                return Number(this.type);
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $hyoo_scout_suggest extends $.$mol_page {
        /**
         *  ```
         *  title \Новая игра
         *  ```
         **/
        title() {
            return "Новая игра";
        }
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width() {
            return 400;
        }
        /**
         *  ```
         *  tools / <= Close
         *  ```
         **/
        tools() {
            return [].concat(this.Close());
        }
        /**
         *  ```
         *  Close $mol_link
         *  	arg * suggest null
         *  	sub / <= close_icon
         *  ```
         **/
        Close() {
            return ((obj) => {
                obj.arg = () => ({
                    "suggest": null,
                });
                obj.sub = () => [].concat(this.close_icon());
                return obj;
            })(new this.$.$mol_link());
        }
        /**
         *  ```
         *  close_icon $mol_icon_cross
         *  ```
         **/
        close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  body / <= Form
         *  ```
         **/
        body() {
            return [].concat(this.Form());
        }
        submit_blocked() {
            return this.Form().submit_blocked();
        }
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
        Form() {
            return ((obj) => {
                obj.form_fields = () => [].concat(this.Name_field(), this.Icon_field(), this.Descr_field(), this.Reason_field(), this.Age_field(), this.Place_field(), this.Stuff_field(), this.Prep_field(), this.Duration_field());
                obj.buttons = () => [].concat(this.Submit());
                return obj;
            })(new this.$.$mol_form());
        }
        /**
         *  ```
         *  Name_field $mol_form_field
         *  	name \Название
         *  	bid <= name_bid
         *  	control <= Name
         *  ```
         **/
        Name_field() {
            return ((obj) => {
                obj.name = () => "Название";
                obj.bid = () => this.name_bid();
                obj.control = () => this.Name();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  name_bid \
         *  ```
         **/
        name_bid() {
            return "";
        }
        /**
         *  ```
         *  Name $mol_string
         *  	hint \Раз два три
         *  	value?val <=> name?val
         *  ```
         **/
        Name() {
            return ((obj) => {
                obj.hint = () => "Раз два три";
                obj.value = (val) => this.name(val);
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  name?val \
         *  ```
         **/
        name(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Icon_field $mol_form_field
         *  	name \Эмодзи
         *  	bid <= icon_bid
         *  	control <= Icon
         *  ```
         **/
        Icon_field() {
            return ((obj) => {
                obj.name = () => "Эмодзи";
                obj.bid = () => this.icon_bid();
                obj.control = () => this.Icon();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  icon_bid \
         *  ```
         **/
        icon_bid() {
            return "";
        }
        /**
         *  ```
         *  Icon $mol_string
         *  	length_max 2
         *  	hint \?
         *  	value?val <=> icon?val
         *  ```
         **/
        Icon() {
            return ((obj) => {
                obj.length_max = () => 2;
                obj.hint = () => "?";
                obj.value = (val) => this.icon(val);
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  icon?val \
         *  ```
         **/
        icon(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Descr_field $mol_form_field
         *  	name \Описание
         *  	bid <= descr_bid
         *  	control <= Descr
         *  ```
         **/
        Descr_field() {
            return ((obj) => {
                obj.name = () => "Описание";
                obj.bid = () => this.descr_bid();
                obj.control = () => this.Descr();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  descr_bid \
         *  ```
         **/
        descr_bid() {
            return "";
        }
        /**
         *  ```
         *  Descr $mol_textarea
         *  	hint \Вместе считаем - вот и вся игра.
         *  	value?val <=> descr?val
         *  ```
         **/
        Descr() {
            return ((obj) => {
                obj.hint = () => "Вместе считаем - вот и вся игра.";
                obj.value = (val) => this.descr(val);
                return obj;
            })(new this.$.$mol_textarea());
        }
        /**
         *  ```
         *  descr?val \
         *  ```
         **/
        descr(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Reason_field $mol_form_field
         *  	name \Цель
         *  	bid <= reason_bid
         *  	control <= Reason
         *  ```
         **/
        Reason_field() {
            return ((obj) => {
                obj.name = () => "Цель";
                obj.bid = () => this.reason_bid();
                obj.control = () => this.Reason();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  reason_bid \
         *  ```
         **/
        reason_bid() {
            return "";
        }
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
        Reason() {
            return ((obj) => {
                obj.value = (val) => this.reason(val);
                obj.options = () => [].concat("Внимание", "Группировка", "Доверие", "Знакомство", "Лидерство", "Мышление", "Обратная связь", "Обсуждение", "Развлечение", "Разминка", "Раскрепощение", "Сплочение", "Творчество", "Усвоение");
                return obj;
            })(new this.$.$mol_switch());
        }
        /**
         *  ```
         *  reason?val \
         *  ```
         **/
        reason(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Age_field $mol_form_field
         *  	name \Возраст
         *  	control <= Age
         *  ```
         **/
        Age_field() {
            return ((obj) => {
                obj.name = () => "Возраст";
                obj.control = () => this.Age();
                return obj;
            })(new this.$.$mol_form_field());
        }
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
        Age() {
            return ((obj) => {
                obj.value = (val) => this.age(val);
                obj.options = () => ({
                    "low": "Малыши",
                    "mid": "Среднячки",
                    "high": "Старшаки",
                    "any": "Любой",
                });
                return obj;
            })(new this.$.$mol_switch());
        }
        /**
         *  ```
         *  age?val \any
         *  ```
         **/
        age(val, force) {
            return (val !== void 0) ? val : "any";
        }
        /**
         *  ```
         *  Place_field $mol_form_field
         *  	name \Место
         *  	control <= Place
         *  ```
         **/
        Place_field() {
            return ((obj) => {
                obj.name = () => "Место";
                obj.control = () => this.Place();
                return obj;
            })(new this.$.$mol_form_field());
        }
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
        Place() {
            return ((obj) => {
                obj.value = (val) => this.place(val);
                obj.options = () => ({
                    "hall": "Зал",
                    "space": "Просторное",
                    "quiet": "Тихое",
                    "any": "Любое",
                });
                return obj;
            })(new this.$.$mol_switch());
        }
        /**
         *  ```
         *  place?val \any
         *  ```
         **/
        place(val, force) {
            return (val !== void 0) ? val : "any";
        }
        /**
         *  ```
         *  Stuff_field $mol_form_field
         *  	name \Реквизит
         *  	control <= Stuff
         *  ```
         **/
        Stuff_field() {
            return ((obj) => {
                obj.name = () => "Реквизит";
                obj.control = () => this.Stuff();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  Stuff $mol_string
         *  	hint \Руки, Ноги, Голова
         *  	value?val <=> stuff?val
         *  ```
         **/
        Stuff() {
            return ((obj) => {
                obj.hint = () => "Руки, Ноги, Голова";
                obj.value = (val) => this.stuff(val);
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  stuff?val \
         *  ```
         **/
        stuff(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Prep_field $mol_form_field
         *  	name \Подготовка
         *  	bid <= prep_bid
         *  	control <= Prep
         *  ```
         **/
        Prep_field() {
            return ((obj) => {
                obj.name = () => "Подготовка";
                obj.bid = () => this.prep_bid();
                obj.control = () => this.Prep();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  prep_bid \
         *  ```
         **/
        prep_bid() {
            return "";
        }
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
        Prep() {
            return ((obj) => {
                obj.value = (val) => this.prep(val);
                obj.options = () => ({
                    "0": "Нет",
                    "1": "1 минута",
                    "5": "5 минут",
                    "10": "10 минут",
                    "20": "20 минут",
                    "40": "40 минут",
                });
                return obj;
            })(new this.$.$mol_switch());
        }
        /**
         *  ```
         *  prep?val \0
         *  ```
         **/
        prep(val, force) {
            return (val !== void 0) ? val : "0";
        }
        /**
         *  ```
         *  Duration_field $mol_form_field
         *  	name \Длительность
         *  	control <= Duration
         *  ```
         **/
        Duration_field() {
            return ((obj) => {
                obj.name = () => "Длительность";
                obj.control = () => this.Duration();
                return obj;
            })(new this.$.$mol_form_field());
        }
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
        Duration() {
            return ((obj) => {
                obj.value = (val) => this.duration(val);
                obj.options = () => ({
                    "1": "1 минута",
                    "5": "5 минут",
                    "10": "10 минут",
                    "20": "20 минут",
                    "40": "40 минут",
                    "60": "60 минут",
                });
                return obj;
            })(new this.$.$mol_switch());
        }
        /**
         *  ```
         *  duration?val \10
         *  ```
         **/
        duration(val, force) {
            return (val !== void 0) ? val : "10";
        }
        /**
         *  ```
         *  Submit $mol_button_major
         *  	sub / \Добавить игру
         *  	event_click?val <=> submit?val
         *  	disabled <= submit_blocked
         *  ```
         **/
        Submit() {
            return ((obj) => {
                obj.sub = () => [].concat("Добавить игру");
                obj.event_click = (val) => this.submit(val);
                obj.disabled = () => this.submit_blocked();
                return obj;
            })(new this.$.$mol_button_major());
        }
        /**
         *  ```
         *  submit?val null
         *  ```
         **/
        submit(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Form", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Name_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Icon_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Descr_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Descr", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "descr", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Reason_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Reason", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "reason", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Age_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Age", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "age", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Place_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Stuff_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Stuff", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "stuff", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Prep_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Prep", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "prep", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Duration_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Duration", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "duration", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "Submit", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout_suggest.prototype, "submit", null);
    $.$hyoo_scout_suggest = $hyoo_scout_suggest;
})($ || ($ = {}));
//suggest.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_scout_suggest extends $.$hyoo_scout_suggest {
            name_bid() {
                if (!this.name().trim())
                    return 'Обязательно';
                return '';
            }
            icon_bid() {
                if (!this.icon().trim())
                    return 'Обязательно';
                return '';
            }
            descr_bid() {
                if (!this.descr().trim())
                    return 'Обязательно';
                return '';
            }
            reason_bid() {
                if (!this.reason())
                    return 'Обязательно';
                return '';
            }
            submit() {
                const subj = `Новая игра: ${this.name()}`;
                const data = {
                    icon: this.icon(),
                    title: this.name(),
                    tags: {
                        'Длительность': [this.Duration().options()[this.duration()]],
                        'Цель': [this.Reason().options()[this.reason()]],
                        'Возраст': [this.Age().options()[this.age()]],
                        'Реквизит': this.stuff().trim().split(/\s*,\s*/g).filter(Boolean),
                        'Подготовка': [this.Prep().options()[this.prep()]],
                        'Место': [this.Place().options()[this.place()]],
                    },
                    content: this.descr(),
                };
                const gist = new $.$mol_tree({ type: '$hyoo_scout_gist', sub: $.$mol_tree.fromJSON(data).sub });
                const body = encodeURIComponent(gist.toString() + '\n');
                window.open(`mailto:scout@hyoo.ru?subject=${subj}&body=${body}`, '_blank');
            }
        }
        $$.$hyoo_scout_suggest = $hyoo_scout_suggest;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//suggest.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_text(item = (item) => String(item)) {
        return (a, b) => {
            const text_a = item(a).trim().toLowerCase();
            const text_b = item(b).trim().toLowerCase();
            const parts_a = text_a.split(/(\d+)/);
            const parts_b = text_b.split(/(\d+)/);
            const count = Math.max(parts_a.length, parts_b.length);
            for (let i = 0; i < count; ++i) {
                const part_a = parts_a[i] || '';
                const part_b = parts_b[i] || '';
                const diff = Number(part_a) - Number(part_b);
                if (diff)
                    return diff;
                if (part_a > part_b)
                    return 1;
                if (part_a < part_b)
                    return -1;
            }
            return parts_a.length - parts_b.length;
        };
    }
    $.$mol_compare_text = $mol_compare_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $hyoo_scout_gist extends $.$mol_object {
        /**
         *  ```
         *  icon \
         *  ```
         **/
        icon() {
            return "";
        }
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
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
        tags() {
            return ({
                "Возраст": [].concat(),
                "Реквизит": [].concat(),
                "Подготовка": [].concat(),
                "Цель": [].concat(),
                "Место": [].concat(),
                "Длительность": [].concat(),
            });
        }
        /**
         *  ```
         *  content \
         *  ```
         **/
        content() {
            return "";
        }
    }
    $.$hyoo_scout_gist = $hyoo_scout_gist;
})($ || ($ = {}));
(function ($) {
    class $hyoo_scout_placeholder extends $.$mol_page {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width() {
            return 400;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": null }));
        }
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
    }
    $.$hyoo_scout_placeholder = $hyoo_scout_placeholder;
})($ || ($ = {}));
(function ($) {
    class $hyoo_scout extends $.$mol_book {
        /**
         *  ```
         *  pages /
         *  	<= Filter
         *  	<= Gists
         *  	<= Suggest
         *  ```
         **/
        pages() {
            return [].concat(this.Filter(), this.Gists(), this.Suggest());
        }
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
        Filter() {
            return ((obj) => {
                obj.title = () => "Фильтры";
                obj.minimal_width = () => 400;
                obj.event_top = (val) => this.event_front_up(val);
                obj.body = () => [].concat(this.Filter_aspects(), this.Feedback());
                return obj;
            })(new this.$.$mol_page());
        }
        /**
         *  ```
         *  Filter_aspects $mol_list rows <= filter_aspects
         *  ```
         **/
        Filter_aspects() {
            return ((obj) => {
                obj.rows = () => this.filter_aspects();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  filter_aspects /
         *  ```
         **/
        filter_aspects() {
            return [].concat();
        }
        /**
         *  ```
         *  Feedback $mol_link
         *  	title \Ошибки? Предложения?
         *  	uri \https://vk.com/scout_hyoo_ru
         *  ```
         **/
        Feedback() {
            return ((obj) => {
                obj.title = () => "Ошибки? Предложения?";
                obj.uri = () => "https://vk.com/scout_hyoo_ru";
                return obj;
            })(new this.$.$mol_link());
        }
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
        Gists() {
            return ((obj) => {
                obj.title = () => this.gists_title();
                obj.minimal_width = () => 400;
                obj.event_top = (val) => this.event_front_up(val);
                obj.tools = () => [].concat(this.Suggest_link(), this.Gists_favorite());
                obj.body = () => [].concat(this.Gists_search(), this.Gists_list());
                return obj;
            })(new this.$.$mol_page());
        }
        /**
         *  ```
         *  gists_title \Игротека вожатого
         *  ```
         **/
        gists_title() {
            return "Игротека вожатого";
        }
        /**
         *  ```
         *  Suggest_link $mol_link
         *  	arg *
         *  		suggest \
         *  		gist null
         *  	sub / <= Suggest_icon
         *  ```
         **/
        Suggest_link() {
            return ((obj) => {
                obj.arg = () => ({
                    "suggest": "",
                    "gist": null,
                });
                obj.sub = () => [].concat(this.Suggest_icon());
                return obj;
            })(new this.$.$mol_link());
        }
        /**
         *  ```
         *  Suggest_icon $mol_icon_plus
         *  ```
         **/
        Suggest_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_plus());
        }
        /**
         *  ```
         *  Gists_favorite $mol_check_icon
         *  	hint \Только избранное
         *  	checked?val <=> gists_favorite?val
         *  	Icon <= Gists_favorite_icon
         *  	label <= gists_favorite_label
         *  ```
         **/
        Gists_favorite() {
            return ((obj) => {
                obj.hint = () => "Только избранное";
                obj.checked = (val) => this.gists_favorite(val);
                obj.Icon = () => this.Gists_favorite_icon();
                obj.label = () => this.gists_favorite_label();
                return obj;
            })(new this.$.$mol_check_icon());
        }
        /**
         *  ```
         *  gists_favorite?val false
         *  ```
         **/
        gists_favorite(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Gists_favorite_icon $mol_icon_favorite
         *  ```
         **/
        Gists_favorite_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_favorite());
        }
        /**
         *  ```
         *  gists_favorite_label / <= Gists_favorite_duration
         *  ```
         **/
        gists_favorite_label() {
            return [].concat(this.Gists_favorite_duration());
        }
        /**
         *  ```
         *  Gists_favorite_duration $mol_view sub / <= gists_favorite_duration
         *  ```
         **/
        Gists_favorite_duration() {
            return ((obj) => {
                obj.sub = () => [].concat(this.gists_favorite_duration());
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  gists_favorite_duration \
         *  ```
         **/
        gists_favorite_duration() {
            return "";
        }
        /**
         *  ```
         *  Gists_search $mol_search query?val <=> gists_filter_query?val
         *  ```
         **/
        Gists_search() {
            return ((obj) => {
                obj.query = (val) => this.gists_filter_query(val);
                return obj;
            })(new this.$.$mol_search());
        }
        /**
         *  ```
         *  gists_filter_query?val \
         *  ```
         **/
        gists_filter_query(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Gists_list $mol_list rows <= gist_links
         *  ```
         **/
        Gists_list() {
            return ((obj) => {
                obj.rows = () => this.gist_links();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  gist_links /
         *  ```
         **/
        gist_links() {
            return [].concat();
        }
        /**
         *  ```
         *  Suggest $hyoo_scout_suggest event_top?val <=> event_front_up?val
         *  ```
         **/
        Suggest() {
            return ((obj) => {
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$hyoo_scout_suggest());
        }
        /**
         *  ```
         *  Placeholder $hyoo_scout_placeholder
         *  ```
         **/
        Placeholder() {
            return ((obj) => {
                return obj;
            })(new this.$.$hyoo_scout_placeholder());
        }
        /**
         *  ```
         *  Filter_aspect!id $mol_list rows /
         *  	<= Filter_aspect_title!id
         *  	<= Filter_aspect_tags!id
         *  ```
         **/
        Filter_aspect(id) {
            return ((obj) => {
                obj.rows = () => [].concat(this.Filter_aspect_title(id), this.Filter_aspect_tags(id));
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  Filter_aspect_title!id $mol_view sub / <= key!id
         *  ```
         **/
        Filter_aspect_title(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.key(id));
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  key!id \
         *  ```
         **/
        key(id) {
            return "";
        }
        /**
         *  ```
         *  Filter_aspect_tags!id $mol_row sub <= filter_aspect_tags!id
         *  ```
         **/
        Filter_aspect_tags(id) {
            return ((obj) => {
                obj.sub = () => this.filter_aspect_tags(id);
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  filter_aspect_tags!id /
         *  ```
         **/
        filter_aspect_tags(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Filter_tag!id $mol_check
         *  	checked?val <=> filter_tag_checked!id?val
         *  	label / <= Filter_tag_title!id
         *  ```
         **/
        Filter_tag(id) {
            return ((obj) => {
                obj.checked = (val) => this.filter_tag_checked(id, val);
                obj.label = () => [].concat(this.Filter_tag_title(id));
                return obj;
            })(new this.$.$mol_check());
        }
        /**
         *  ```
         *  filter_tag_checked!id?val true
         *  ```
         **/
        filter_tag_checked(id, val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  Filter_tag_title!id $mol_view
         *  	attr * hyoo_scout_tag_id <= tag_title!id
         *  	sub / <= tag_title!id
         *  ```
         **/
        Filter_tag_title(id) {
            return ((obj) => {
                obj.attr = () => ({
                    "hyoo_scout_tag_id": this.tag_title(id),
                });
                obj.sub = () => [].concat(this.tag_title(id));
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  tag_title!id \
         *  ```
         **/
        tag_title(id) {
            return "";
        }
        /**
         *  ```
         *  Gist_link!id $mol_link
         *  	sub /
         *  		<= Gist_link_icon!id
         *  		<= Gist_link_title!id
         *  	arg * gist <= key!id
         *  ```
         **/
        Gist_link(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Gist_link_icon(id), this.Gist_link_title(id));
                obj.arg = () => ({
                    "gist": this.key(id),
                });
                return obj;
            })(new this.$.$mol_link());
        }
        /**
         *  ```
         *  Gist_link_icon!id $mol_view sub / <= gist_icon!id
         *  ```
         **/
        Gist_link_icon(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.gist_icon(id));
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  gist_icon!id \
         *  ```
         **/
        gist_icon(id) {
            return "";
        }
        /**
         *  ```
         *  Gist_link_title!id $mol_dimmer
         *  	needle <= gists_filter_query
         *  	haystack <= gist_title!id
         *  ```
         **/
        Gist_link_title(id) {
            return ((obj) => {
                obj.needle = () => this.gists_filter_query();
                obj.haystack = () => this.gist_title(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        /**
         *  ```
         *  gist_title!id \
         *  ```
         **/
        gist_title(id) {
            return "";
        }
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
        Gist(id) {
            return ((obj) => {
                obj.title = () => this.gist_title(id);
                obj.minimal_width = () => 400;
                obj.event_top = (val) => this.event_front_up(val);
                obj.tools = () => [].concat(this.Gist_favorite(id), this.Gist_close());
                obj.body = () => [].concat(this.Gist_content(id), this.Gist_aspects(id), this.Gist_remarks(id));
                return obj;
            })(new this.$.$mol_page());
        }
        /**
         *  ```
         *  Gist_favorite!id $mol_check_icon
         *  	checked?val <=> gist_favorite!id?val
         *  	Icon <= Gist_favorite_icon
         *  ```
         **/
        Gist_favorite(id) {
            return ((obj) => {
                obj.checked = (val) => this.gist_favorite(id, val);
                obj.Icon = () => this.Gist_favorite_icon();
                return obj;
            })(new this.$.$mol_check_icon());
        }
        /**
         *  ```
         *  gist_favorite!id?val false
         *  ```
         **/
        gist_favorite(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Gist_favorite_icon $mol_icon_favorite
         *  ```
         **/
        Gist_favorite_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_favorite());
        }
        /**
         *  ```
         *  Gist_close $mol_link
         *  	arg * gist null
         *  	sub / <= Gist_close_icon
         *  ```
         **/
        Gist_close() {
            return ((obj) => {
                obj.arg = () => ({
                    "gist": null,
                });
                obj.sub = () => [].concat(this.Gist_close_icon());
                return obj;
            })(new this.$.$mol_link());
        }
        /**
         *  ```
         *  Gist_close_icon $mol_icon_cross
         *  ```
         **/
        Gist_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  Gist_content!id $mol_text text <= gist_content!id
         *  ```
         **/
        Gist_content(id) {
            return ((obj) => {
                obj.text = () => this.gist_content(id);
                return obj;
            })(new this.$.$mol_text());
        }
        /**
         *  ```
         *  gist_content!id \
         *  ```
         **/
        gist_content(id) {
            return "";
        }
        /**
         *  ```
         *  Gist_aspects!id $mol_list rows <= gist_aspects!id
         *  ```
         **/
        Gist_aspects(id) {
            return ((obj) => {
                obj.rows = () => this.gist_aspects(id);
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  gist_aspects!id /
         *  ```
         **/
        gist_aspects(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Gist_remarks!id $mol_textarea
         *  	hint \Личные заметки
         *  	value?val <=> gist_remarks!id?val
         *  ```
         **/
        Gist_remarks(id) {
            return ((obj) => {
                obj.hint = () => "Личные заметки";
                obj.value = (val) => this.gist_remarks(id, val);
                return obj;
            })(new this.$.$mol_textarea());
        }
        /**
         *  ```
         *  gist_remarks!id?val \
         *  ```
         **/
        gist_remarks(id, val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Gist_aspect!id $mol_row sub /
         *  	<= Gist_aspect_title!id
         *  	<= gist_aspect_tags!id
         *  ```
         **/
        Gist_aspect(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Gist_aspect_title(id), this.gist_aspect_tags(id));
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  Gist_aspect_title!id $mol_view sub /
         *  	<= key!id
         *  	\:
         *  ```
         **/
        Gist_aspect_title(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.key(id), ": ");
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  gist_aspect_tags!id /
         *  ```
         **/
        gist_aspect_tags(id) {
            return [].concat();
        }
        /**
         *  ```
         *  Gist_tag!id $mol_view
         *  	attr * hyoo_scout_tag_id <= tag_title!id
         *  	sub / <= tag_title!id
         *  ```
         **/
        Gist_tag(id) {
            return ((obj) => {
                obj.attr = () => ({
                    "hyoo_scout_tag_id": this.tag_title(id),
                });
                obj.sub = () => [].concat(this.tag_title(id));
                return obj;
            })(new this.$.$mol_view());
        }
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
        data() {
            return [].concat(((obj) => {
                obj.icon = () => "🌋";
                obj.title = () => "Спичка о себе";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Тихое"),
                });
                obj.content = () => "Каждый по очереди представляет, что держит в руках спичку (или использует реальную), и пока она горит, следует рассказать о себе как можно больше.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "👏";
                obj.title = () => "Хор хлопочков";
                obj.tags = () => ({
                    "Длительность": [].concat("1 минута"),
                    "Цель": [].concat("Внимание"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Всем одновременно нужно повторить ритм хлопков вожатого. Если все выполнили правильно и дружно, можно поаплодировать друг другу.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🍎";
                obj.title = () => "Фруктовый салат";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Разминка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Каждому назначается свой фрукт (овощ/интерес/имя). Ведущий называет один из фруктов и команду. Все с этим фруктом должны её выполнить и поменяться местами. А ведущий занимает освободившееся место. Кому места не досталось - становится ведущим.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "⚛️";
                obj.title = () => "Притяжение-отталкивание";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Раскрепощение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Каждый выбирает того, кто ему больше симпатичен и старается держаться максимально близко к нему, и одновременно того, кто менее симпатичен и старается держаться подальше от него. Несколько раз цели должны меняться. В том числе и на противоположные.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🎤";
                obj.title = () => "Вокальное приветствие";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в круг. Каждый по очереди делает шаг, пропевает своё имя и показывает любое движение. Все остальные повторяют за ним. ";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "💑";
                obj.title = () => "Стенка на стенку";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Обратная связь", "Раскрепощение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в две шеренги, разбившись на пары. За минуту надо обсудить проведённое ранее вместе время. В конце нужно показать число пальцев:\n\n - Если хотя бы один показал 1 палец, то оба отворачиваются друг от друга.\n - Если хотя бы один показал 2 пальца, то идёт рукопожатие.\n - Если оба показали 3 пальца, то обнимашки.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🖐️";
                obj.title = () => "Интернациональное приветствие";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Раскрепощение", "Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все приветствуют всех на разных языках:\n\n - Россия: **пожимают руки** - Здравствуй, меня зовут *имя*.\n - Япония: **кланяются** - Коничива, меня зовут *имя*.\n - США: **дают пять** - Хай! Меня зовут *имя*.\n - Франция: **щека к щеке** - Бонжур, меня зовут *имя*.\n - Италия: **обнимаются** - Бонжорно, меня зовут *имя*.\n\n В конце можно назвать совсем другую страну (например, Индия) и предложить ребятам самим определиться как поприветствовать друг друга. Это добавит веселья и выявит лидеров.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🤗";
                obj.title = () => "Интернациональное прощание";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Раскрепощение", "Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все прощаются со всеми на разных языках:\n\n - Россия: **пожимают руки** - До свидания, *имя*!\n - Япония: **кланяются** - Сайонара, *имя*! \n - США: **дают пять** - Бай-Бай, *имя*!\n - Франция: **щека к щеке** - Оревуар, *имя*! \n - Италия: **обнимаются** - Аривидерчи, *имя*!\n\n В конце можно назвать совсем другую страну (например, Индия) и предложить ребятам самим определиться как прощаться. Это добавит веселья и выявит лидеров.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "♻️";
                obj.title = () => "Круги интересов";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Особый"),
                    "Подготовка": [].concat("10 минут"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Заранее подготовить карточки с несколькими признаками (цвет, форма, буква и тп). Каждый призак должен иметь 3-7 вариантов. Ведущий называет один из признаков, а ребята собираются вместе с теми, у кого то же значение признака. В группе им надо найти любой факт о них, который бы их объединял. Называть признаки лучше от самого вариативного к менее, чтобы группы были сначала маленькими, а потом большими.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🖼️";
                obj.title = () => "Совместный портрет";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Творчество", "Обсуждение", "Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Бумага", "Карандаши"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Зал"),
                });
                obj.content = () => "Все делятся на не большие группы. Каждой группе предлагается нарисовать самую важную часть тела человека определённой профессии (например, вожатого) и приписывают почему именно эта часть тела. Потом группы меняются листами и рисуют вторую по важности часть тела. И так далее, пока рисунки не сделают полный круг. После чего представители от групп рассказывают всем о портрете который у них в итоге получился.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "💬";
                obj.title = () => "Случаи из жизни";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Обсуждение", "Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все делятся на средние группы. Всем выдаётся для обсуждения какой-либо жизненный случай. Спустя несколько минут каждая группа должна оценить ситуацию, выработать правильное решение и аргументированно рассказать его остальным.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "❓";
                obj.title = () => "Почему так?";
                obj.tags = () => ({
                    "Длительность": [].concat("20 минут"),
                    "Цель": [].concat("Обсуждение", "Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Бумага", "Ручки", "Скотч", "Стикеры"),
                    "Подготовка": [].concat("20 минут"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "В разных местах приклеиваются различные суждения. Каждый пришет на стикере почему суждение верно и приклеивает его рядом. Потом все разбиваются на средние группы. Каждая группа выбирает одно из суждений. Берёт его стикеры. И через несколько минут резюмирует для всех.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🌡️";
                obj.title = () => "Настроеметр";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Обратная связь"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Бумага", "Ручки"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Лист бумаги делится на 4 части: отлично, хорошо, так себе, плохо. Каждый анонимно пишет в соответствующей части что ему понравилось или не понравилось.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔃";
                obj.title = () => "Базар";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Знакомство", "Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Бумага", "Ручки", "Мешочек"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Каждый пишет на 4 листочках своё имя и фамилию печатными буквами. Каждый листочек складывается дважды и кладётся в мешочек. Каждому выдаётся по 4 случайных листочка. Далее ребята могут меняться друг с другом листочками, только так, чтобы в результате каждого обмена они получали листочек со своим именем. Задача - собрать все листочки со своим именем. Ребята должны догадаться, что листочками можно меняться по кругу одновременно. ";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🙋‍";
                obj.title = () => "Минутка на лидера";
                obj.tags = () => ({
                    "Длительность": [].concat("1 минута"),
                    "Цель": [].concat("Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "- *Сделайте шаг вперёд те, кто сможет сейчас мне помочь.*\n\nВажно аргументированно выбрать одного из среагировавших лидеров и дать ему какое-либо задание.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🌱";
                obj.title = () => "Ветви дерева";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Группировка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Выбираются ребята по необходимому числу групп, которые становятся *корнями дерева*. Каждый из них по очереди выбирает себе в команду одного человека, который станет *веткой дерева*. Потом ветви дерева выбирают себе продолжение и тд. Ребята, не выбранные ни в какую команду (*листики*), должны получить привелегии в качестве компенсации. Например:\n\n - Право самому выбрать команду.\n - Быть помощником ведущего.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🗃️";
                obj.title = () => "Своя игра";
                obj.tags = () => ({
                    "Длительность": [].concat("40 минут"),
                    "Цель": [].concat("Обсуждение", "Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все делятся на средние группы. Ведущий объявляет несколько тем. Команды по очереди выбирают одну из тем, а ведущий зачитывает вопрос. Та команда, что выбирала тему, имеет преимущество в ответе на вопрос. И если отвечает исчерпывающе получает 2 очка, а если не полностью - 1 очко. Каждой команде, которой удастся потом сделать существенное дополнение, присуждается по очку.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🏃";
                obj.title = () => "Платочек";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут", "20 минут"),
                    "Цель": [].concat("Разминка", "Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Платочек", "Удобная обувь"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все выстраиваются в 2 шеренги поровну. Рассчитываются по порядку, запоминая своё число. Встают в случайном порядке так, чтобы не было двух одинаковых чисел подряд. Ведущий встаёт скраю шеренг между ними и держит платочек в вытянутой руке. Когда он называет число, ребята с соответствующими номерами должны добежать и выхватить платочек раньше соперника, после чего добежать до своего места не запятнаным противником. Если удалось - его команда получает очко. Иначе очко достаётся другой команде. Можно провести несколько схваток, позволив участникам поменять порядок.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔢";
                obj.title = () => "Коллективный счёт";
                obj.tags = () => ({
                    "Длительность": [].concat("20 минут"),
                    "Цель": [].concat("Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все встают в круг. Задача пересчитаться так, чтобы каждый сказал ровно одно число. Если двое говорят одновременно - счёт начинается сначала. Важно донести, что нужно не надеяться на удачу, а постараться **почувствовать** друг друга.\n\n - Уровень **1**: можно совместно договориться о стратегии.\n - Уровень **2**: нельзя рассчитываться по какой-либо стратегии.\n - Уровень **3**: без стратегии, с закрытыми глазами, в случайном месте комнаты.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔀";
                obj.title = () => "Построения";
                obj.tags = () => ({
                    "Длительность": [].concat("20 минут"),
                    "Цель": [].concat("Сплочение", "Лидерство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Задача всем выстроиться по заданному ведущим принципу.\n\nЯвный лидер покажет себя в заданиях, где **можно коммуницировать**:\n\n - По росту.\n - По цвету волос.\n - По размеру ботинок.\n\n Неявный лидер покажет себя в заданиях с ограниченными коммуникациями, где **нельзя говорить**:\n\n - В круг.\n - В равносторонний квадрат.\n - В равносторонний треугольник.\n - Звездой.\n\n Скрытый лидер покажет себя в заданиях с **запретом любых коммуникаций**:\n\n - Буквой А\n - Буквой М\n - Буквой Я\n - Буквой Щ";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🤝";
                obj.title = () => "Спортивное приветствие";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в 2 шеренги. Обе шененги проходят вдоль друг друга и каждый человек из одной шеренги здоровается за руку с каждым из другой, называя его по имени.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🤼";
                obj.title = () => "Спортивное прощание";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в 2 шеренги. Обе шененги проходят вдоль друг друга и каждый человек из одной шеренги прощается обнимаясь с каждым из другой, называя его по имени.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🌀";
                obj.title = () => "Циклон";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Разминка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все случайно перемещаются по пространству. Когда ведущий называет число нужно быстро образовать группы с таким числом людей. Кто не смог образовать такую группы - выбывает.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔃";
                obj.title = () => "Шиворот на выворот";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Разминка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все случайно перемещаются по пространству. Когда ведущий называет действие (пыжок, хлопок и тп) - все должны его выполнить. Можно предложить кому-то придумать несуществующий глагод. А кому-то показать это действие, как он его себе представляет. Далее ведущий меняет местами глаголы и выполняемое действие. Например, когда говорит *хлопок* надо прыгать, а когда *прыжок* - хлопать.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🏠";
                obj.title = () => "Дом, милый дом";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Раскрепощение", "Доверие"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Каждый находит местечко, где ему уютнее всего - называем его «домом». Глазами он находит человека, которого он хочет привести в свой домик. По команде всем нужно приложить максимум усилий, чтобы этот человек оказался именно в его домике.\t\t";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔄";
                obj.title = () => "Фантазеры - Скептики - Реалисты";
                obj.tags = () => ({
                    "Длительность": [].concat("20 минут"),
                    "Цель": [].concat("Творчество", "Сплочение", "Обсуждение"),
                    "Возраст": [].concat("Среднячки", "Старшаки"),
                    "Реквизит": [].concat("Бумага", "Ручки"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все разбиваются на средние группы. Сначала все фантазёры и записывают мероприятия в которых хотели бы поучаствовать. Потом листы передаются по кругу и теперь все критики, вычёркивающие те мероприятия, что им не понравятся. Снова передают по кругу и на этот раз все реалисты, обводящие те варианты из оставшихся, что кажутся им более интересными. Листы опять передаются по кругу и теперь каждая команда должна выбрать одно мероприятие и представить его остальным командам так, чтобы все тоже его захотели.\n\n![](https://vk.com/video_ext.php?oid=-76966755&id=456239212&hash=fc5b24ac237ce085&hd=2)";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "📜";
                obj.title = () => "Расписание";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Усвоение", "Обсуждение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("10 минут"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все делятся на 2 шеренги. Членам одной выдаются листы с временными промежутками, а членам другой - с автивностями. Задача встать друг на против друга в правильной последовательности. В конце ведущий оглашает правильное расписание, переставляя ребят.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "✈️";
                obj.title = () => "Ковёр-самолёт";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Плед"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Зал"),
                });
                obj.content = () => "Все встают на плед. Задача перевернуть плед так, чтобы никто не ступил ногой за его пределы. Усложнённый вариант - нельзя опираться на пол ничем. Экстремальный вариант - с закрытыми глазами.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🚧";
                obj.title = () => "Покрывало";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Плед"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все делятся на 2 группы и располагаются по обе сторооны от натянутого покрывала. Перед покрывалом встают по одному каждый раз разному участнику из каждой команды. Когда покрывало опускается они должны как можно быстрее назвать имя того, кого видят. Кто замешкался - переходит в противоположную команду. Задача - петащить всех на свою сторону.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🗺️";
                obj.title = () => "Бип";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Лидерство", "Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "На земле любым способом рисуется сетка от 4х4 - это карта. Каждый по очереди должен начать с одного конца и *доехать* до другого перешагивая на соседнюю клетку. Ведущий задумывает правила передвижения (невидимые границы, с какой ноги ступать, ходить только боком и тп) и если игрок нарушает правила, то говорит **бип** и новый игрок начинает сначала. Задача игроков - понять принцип так, чтобы любой смог дойти от начала до конца.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🖇️";
                obj.title = () => "Связи";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Знакомство"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Каждый сцепляется с кем-то за руку и здоровается/прощается, называя имя партнёра. Расцепляться с партнёром нельзя, пока тот не сцепится второй рукой с кем-то ещё. Задача - пообщаться со всеми.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "💞";
                obj.title = () => "Сердца";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Группировка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("5 минут"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Бумажные сердца нарезаются несколько частей и каждому выдаётся случайная часть. Задача - найти свою пару.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "👯";
                obj.title = () => "Я люблю саванну";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Доверие"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в круг. Каждый кладёт обе руки на плечи соседа справа. Все идут по кругу хором произнося одни и те же слова. Например:\n\n- *Я люблю Саванну! Я очень люблю Саванну! Крокодил, обезьяна, бегемот.. Я очень люблю Саванну!*\n\nЗакончив фразу каждый делает шаг внутрь круга и всё повторяется. И так до максимального уплотнения кольца. Потом всем нужно сесть на колени соседа сзади и в таком положении снова идти и произносить фразу. Потом так же лечь на соседа. И в конце всем нужно раздвинуть ноги, чтобы все опустились на землю. ";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🛸";
                obj.title = () => "Левитация";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Доверие"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Стол"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Зал"),
                });
                obj.content = () => "Один ложится спиной на стол и закрывает глаза. Остальные обступают его вокруг и по сигналу одновременно поднимают его ладонями (не пальцами!). Вожатый при этом должен придерживать голову на всякий случай. А кто-то должен стоять у двери и никого не пускать, чтобы ребята не отвлеклись и не уронили.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🐐";
                obj.title = () => "Козья тропа";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Доверие"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Просторное"),
                });
                obj.content = () => "Все встают в ряд на краю бордюра, лавочки или выставленных рядом стульев. Один с одного конца до другого должен дойти вставая ногами между ног остальных ребят. Ребята будут вынуждены придерживать идущего, иначе он упадёт. И так, пока каждый не пройдёт по этой узкой тропе.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🗼";
                obj.title = () => "Уровень сплочения";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Обратная связь"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Особый"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Выдаётся 5 картинок, симполизирующих уровень сплочения. Предлагается каждому высказать своё мнение по этому вопросу, посредством приклеивания стикера или подписью одного из них. Изображения:\n\n- **Рассыпчатый песок** - каждый сам по себе.\n- **Кусок глины** - все стараются держатся вместе, но обстоятельства мнут как попало.\n- **Камень** - друг за друга горой.\n- **Стальная конструкция** - слаженная работа и взаимопомощь.\n- **Космический аппарат** - единые цели и мечты.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔮";
                obj.title = () => "Эффект Барнума";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Мышление"),
                    "Возраст": [].concat("Старшаки"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Проводится как бы психологическое тестирование или говорите, что долго наблюдали за каждым и пришли к некоторым выводам. Каждому выдаётся описание его *индивидуального* психологического портрета. Всем должно быть выдано одно и то же описание, где больше положительных качеств, чем отрицательных:\n\n*Вы очень нуждаетесь в том, чтобы другие люди любили и восхищались вами. Вы довольно самокритичны. У вас есть много скрытых возможностей, которые вы так и не использовали себе во благо. Хотя у вас есть некоторые личные слабости, вы в общем способны их нивелировать. Дисциплинированный и уверенный с виду, на самом деле вы склонны волноваться и чувствовать неуверенность. Временами вас охватывают серьёзные сомнения, приняли ли вы правильное решение или сделали ли правильный поступок. Вы предпочитаете некоторое разнообразие, рамки и ограничения вызывают у вас недовольство. Также вы гордитесь тем, что мыслите независимо; вы не принимаете чужих утверждений на веру без достаточных доказательств. Вы поняли, что быть слишком откровенным с другими людьми — не слишком мудро. Иногда вы экстравертны, приветливы и общительны, иногда же — интровертны, осторожны и сдержанны. Некоторые из ваших стремлений довольно нереалистичны. Одна из ваших главных жизненных целей — стабильность.*\n\nПрочитав, каждый должен тут же дать оценку насколько он согласен с этим описанием по 5 бальной шкале. Собирается статистика и провозглашается какой ведущий проницательный. Потом предлагается всем поменяться описаниями и прочитать.\n\nЭто упражнение поможет отучить доверять астрологам, гадалкам и тому подобным шарлатанам.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🤥";
                obj.title = () => "Парадокс Лжеца";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Мышление", "Обсуждение"),
                    "Возраст": [].concat("Старшаки"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все делятся на группы. Каждой выдаётся один вопрос и предлагается через несколько минут дать ответ на него, рассказав всем, почему они так решили. Примеры вопросов:\n\n - Данное утвержение ложно, правда ли это?\n - Что будет, если Пиноккио скажет: «Сейчас у меня удлинится нос»?\n - Брадобрей города N бреет всех жителей этого города, кто не бреет себя сам и только их. Бреет ли он сам себя?\n - Может ли всемогущий бог создать камень, который он сам не сможет поднять?\n\nПодвох в том, что вопросы содержат логическое противоречие. Что иллюстрирует тот факт, что выражение может быть не только истинным или ложным, но и попросту бредом.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "😳";
                obj.title = () => "Чувственные знакомства";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Раскрепощение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Задача каждого поприветствовать каждого. На каждом этапе добавляется по одному типу взаимодействия:\n\n1. **Визуальный.** Нужно внимательно посмотреть в глаза и молча передать мысль партнёру.\n2. **Вербальный.** Добавить приветствие голосом.\n3. **Тактильный.** Добавить какое либо касание.\n4. **Обонятельный.** Понюхать партнёра и постараться самому не испортить воздух в этот момент.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🔫";
                obj.title = () => "Киллер";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Развлечение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все встают в круг и закрывают глаза. Ведущий незаметно касается одного - тот становится киллером. Киллер незаметно подмигивает одним глазом одному из присутствующих. Кому подмигнули - выбывает. Задача киллера - убить как можно больше людей. Задача остальных - догадаться кто киллер и поднять руку. Если угадывает - киллер пойман. Если нет - выбывает.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🐸";
                obj.title = () => "Лягушка";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Развлечение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Один берёт на себя роль цапли и отходит, так чтобы не видеть остальных. Остальные встают в круг и закрывают глаза. Ведущий незаметно касается одного - тот становится лягушкой. Остальные - комариками. Цапля возвращается и встаёт в центр. Её задача найти и съесть лягушку до того, как она съест всех комариков. Но у неё на это есть лишь одна/две/три попытки. Лягушка незаметно для цапли может показывать язык. Кто увидел высунутый язык - считается съеденным и приседает. Задача лягушки - съесть всех комариков и убежать.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🚪";
                obj.title = () => "Бункер";
                obj.tags = () => ({
                    "Длительность": [].concat("20 минут"),
                    "Цель": [].concat("Обсуждение", "Сплочение"),
                    "Возраст": [].concat("Среднячки", "Старшаки"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("5 минут"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Каждому выдаётся роль и рассказывается общая легенда: произошла ядерная война и нам удалось спрятаться в бункере. Однако, запасов воздуха/еды/воды не хватит на всех до момента, когда можно будет выйти на поверхность. Поэтому надо принять решение, кто покинет бункер сейчас, чтобы остальные выжили и восстановили цивилизацию. Если за 15 минут решение не будет принято - умирают все. Если ребята быстро справятся, то можно дополнять сюжет, вынуждая избавляться от большего числа людей. После игры можно устроить совместный просмотр фильма \"Философы\" по мотивам этой игры.\n\nРоли:\n\n- Школьница, 15 лет. Умная и милая девушка, пребывающая сейчас в шоке. Постоянно в слезах и молчит. Симпатизирует 16-ти летнему юношу, также оказавшемуся в бункере.\n- Юноша, 16 лет. Отлично развит физически, но абсолютно не заинтересован в учебе. Также испытывает симпатию к школьнице.\n- Молодой человек, 25 лет. Спортсмен, увлекается альпинизмом. Часто конфликтует с окружающими и в свое время был отчислен из службы МЧС за драку.\n- Мужчина, 48 лет. Профессор-физик. Весьма образованный, разбирающийся в электронике и строительстве. Имеет проблемы с сердцем.\n- Студентка, 19 лет. Обучается в университете физкультуры, специальность легкая атлетика. Несмотря на привлекательность и общительность, кроме достижений в спорте похвастаться ей не чем. Ждет ребенка.\n- Девушка, 21 год. Студентка медицинского университета, не блещущая знаниями. Тяжело сказать, выйдет ли из нее высококлассный специалист. Имеет несколько хобби: шитье, вязание.\n- Мужчина, 32 года. Знания, полученные во время службы в ракетных войсках, позволяют ему выжить практически в любой ситуации. Имеет превосходную физическую подготовку, увлекается восточными единоборствами. Имеет лишь один недостаток – слабость к алкоголю.\n- Тренер по физической культуре , 26 лет. В прошлом учительница, а также инструктор в области туризма. Говорит на трех иностранных языках.\n- Академик, чьи работы неоднократно публиковались, 58 лет. Знаток в области гуманитарных наук.\n- Женщина , 43 года. Ученый в сфере сельскохозяйственных наук. Способна вырастить урожай даже в самых неблагоприятных условиях. Любит готовить.\n\n![](https://www.youtube.com/embed/csUm65Lwx_M)";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🎶";
                obj.title = () => "Поющие молекулы";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Раскрепощение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все ходят перемешиваясь, напевая всем известную песню. Когда ведущий говорит стоп - все здороваются. Этапы:\n\n- Ступнями\n- Коленями\n- Попами\n- Руками\n- Локтями\n- Плечами\n- Обнимашки";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "⭕";
                obj.title = () => "Вжух-Бэнг-Пау";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Раскрепощение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все встают в круг и передают друг другу эстафету, используя одно из особых движений со звуком, которые вводятся в игру по одному.\n\n- **Вжух!** - кидая воображаемый энергетический шар. От сосеа к соседу в одном направлении.\n- **Бэнг!** - шар отражается и начинается двигаться в обратном направлении.\n- **Пау!** - стреляя в любого человека в круге.\n- **Бумеранг!** - кидая в любого человека бумеранг, а тот человек должен уклониться от него в стиле Матрицы.\n- **Дайте мне бит!** - соседи издают ритмичные звуки, под которые ты танцуешь.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "💌";
                obj.title = () => "Письмо другу";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Обратная связь"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Каждый пишет на бумажке \"сообщение лучшему другу\" о своих впечатлениях, при этом не подписывая своё послание.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🎠";
                obj.title = () => "Карусель";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Обратная связь"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все делятся на две группы поровну и встают в два концентрических круга лицом к лицу. Производят друг с другом определённые действия, внешний круг проворачивается на одного человека и всё повторяется. Так до полного оборота. Варианты действий:\n\n - Каждый говорит партнёру чем тот хорош.\n - Один говорит что между ними общего, а другой - чем отличаются.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🥓";
                obj.title = () => "Горелки";
                obj.tags = () => ({
                    "Длительность": [].concat("5 минут"),
                    "Цель": [].concat("Разминка"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все встают в ряд по парам, а ведущий впереди спиной к остальным. Как только ведущий поворачивается, первая пара должна расцепиться и бежать сцепляться в конец. Задача ведущего поймать кого-то и встать с ним в конце. Кто остался без пары - становится ведущим.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "☎";
                obj.title = () => "Телеграф";
                obj.tags = () => ({
                    "Длительность": [].concat("10 минут"),
                    "Цель": [].concat("Сплочение"),
                    "Возраст": [].concat("Любой"),
                    "Реквизит": [].concat("Нет"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Любое"),
                });
                obj.content = () => "Все делятся на две команды и встают друг за гругом в две шеренги. Ведущий каждому последнему тихо говорит одно и то же слово. Начиная с последних, необходимо написать на спине впереди стоящего все буквы слова по очереди. Первому же нужно будет собрать из букв слово и сказать его раньше соперников. Победившей команде присуждается очко, а первый её участник переходит в конец. И всё повторяется.";
                return obj;
            })(new this.$.$hyoo_scout_gist()), ((obj) => {
                obj.icon = () => "🏗";
                obj.title = () => "Полный Скрам";
                obj.tags = () => ({
                    "Длительность": [].concat("40 минут"),
                    "Цель": [].concat("Сплочение"),
                    "Возраст": [].concat("Старшаки"),
                    "Реквизит": [].concat("Скотч", "Бумага", "Соломинки", "Стаканчики", "Яйца"),
                    "Подготовка": [].concat("Нет"),
                    "Место": [].concat("Зал"),
                });
                obj.content = () => "Методисту: Сфера IT настолько быстро развивается, что зачастую нет времени на длительное и детальное проектирование, как, например, в строительстве. Мощь IT в том, что цена ошибки меньше, чем цена разработки, поэтому в IT так популярны гибкие методологии, позволяющие быстро получать не идеальный результат, проверять его в бою, и тут же учитывать полученную на практике информацию для дальнейшего развития. С помощью простой командной задачи мы в ролевой форме познакомим ребят с разработкой по Скраму (популярной гибкой методологией разработки), познакомим с основными ролями и покажем значимость каждой из них, научим их самоорганизации и самоанализу.\n\nВедущему: Ребят нужно разбить на группы по 3-6 человек и выдать каждой группе реквизит: 5 листов бумаги, рулон скотча, 5 соломинок, 5 стаканчиков. Игра (проект) проводится в несколько этапов (спринтов). На каждом спринте - новая задача и новый критерий её оценки, а так же дополнительные 2 листа бумаги, 2 соломинки и 2 стаканчика. Необходимо сразу чётко обозначить, что на время спринта есть ограничения, которые строго соблюдаются. Договорились или нет - таймер никого не ждёт. Если задача принята - команде даётся очко. Если команда выполнила задачу лучше всех, то ещё одно очко дополнительно. Кроме явных критериев приёмки, есть критерии и неявные, про которые ничего ребятам не говорим, пока не спросят (приучаем ребят \"вытягивать\" требования из -заказчика, который зачастую сам не знает, чего хочет, пока не получит не то, что надо). Если спринт проваливают все, то он повторяется. Если кто-то его выполнил, то всем вызаются новые задачи (явно не говорим, что старые задачи уже не актуальны).\n\nСпринт состоит из:\n\n* Планирование - 1 минута, чтобы договориться, что и как будут делать, распределить обязанности. Во время планирования трогать ничего нельзя.\n* Реализация - 5 минут для совместного выполнения задачи. Как только время заканчивается все убирают руки и встают. Если кто-то что-то придерживает ещё - спринт считается заваленным.\n* Демо - тут ребята презентуют Владельзу Продукта (один из ведущих) проделанную работу, а тот проверяет достигнутые цели. Нет ограничения по времени.\n* Ретроспектива - 2 минуты ребята обсуждают что они сделали хорошо, что стоит исправить на следующей итерации (и назначают ответственных), и меняются ролями, если в этом есть необходимость.\n\nНа первой итерации ведущие помогают ребятам с планированием и ретроспективой в роли скрам-мастеров. На остальных итерациях - всё сами. Скрам мастер может уточнять у ведущих в процессе работы, если что-то не понял.\n\nВозможные роли для ребят:\n\n1. Скрам мастер - проводит планирование и ретроспективу, контролирует, чтобы принятые на ретроспективе договорённости выполнялись, общается (и только он) с владельцем продукта.\n2. Дизайнер - контролирует внешний вид, чтобы всё смотрелось органично и так, чтобы понравилось владельцу продукта.\n3. Архитектор - проектирует какие необходимо внести изменения, чтобы проект выполнял поставленные задачи.\n4. Разработчик - собственно делает всё своими руками.\n5. QA - проверяет, соответствие того ,что сделано, критериям приёмки задачи.\n\nВозможные задачи по спринтам:\n\n1. Постройте мне наиболее высокое сооружение. Озвучивается критерий причёмки: не менее 30см высотой. Не озвучивается критерий приёмки: дизайн должен быть симметричным. Кто выше всех - получает очко.\n\n2. Как всё классно, я бы хотел там жить на самом верху. Добавьте мне туда как можно более просторный пентхаус. Озвучивается критерий: высота не должна быть меньше, чем была. Не озвучивается критерий: размер оцениваем по максимальному габариту в горизонтальной плоскости, где можно поставить маленькую игрушку и она не упадёт и не развалит дом. У кого пентхаус больше - получает очко.\n\n3. Хочу чтобы это был не просто дом, а памятник мне любимому. Озвучивается критерий: должна быть голова, туловище, руки, ноги. Не озвучивается критерий: должна быть какая-то деталь, которая делает здание похожим именно на Владельца Продукта, но ни на кого больше в зале.\n\n4. Я тут подумал, а ведь страшно на такой высоте жить-то будет в таком хлипком доме. Надо и о безопасности подумать. Сделайте так, чтобы я (показывая яйцо раскрашенное под человечика) мог усидеть на самом верху и не разбиться (явный критерий). Неявный критерий: если яйцо упадёт, но не разобьётся, то тоже принимается. Чьё яйцо в итоге окажется выше всех - получает доп очко.\n\nМетодические замечания:\n\n* Шпионить можно, особо об этом не говорим и не поощряем.\n* Вредить соседям нельзя - все набранные очки сбрасываются.\n* Конструкция должна быть устойчивой. Даже если упала от дуновения ветерка - оцениваем то, что с ней после этого стало.\n* За 30 и 15 секунд до истечения времени - сообщаем, что время истекает.";
                return obj;
            })(new this.$.$hyoo_scout_gist()));
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Filter_aspects", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Feedback", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Suggest_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Suggest_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists_favorite", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "gists_favorite", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists_favorite_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists_favorite_duration", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists_search", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "gists_filter_query", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gists_list", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Filter_aspect", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Filter_aspect_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Filter_aspect_tags", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Filter_tag", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "filter_tag_checked", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Filter_tag_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_link", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_link_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_link_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_favorite", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "gist_favorite", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gist_favorite_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gist_close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "Gist_close_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_content", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_aspects", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_remarks", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "gist_remarks", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_aspect", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_aspect_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_scout.prototype, "Gist_tag", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_scout.prototype, "data", null);
    $.$hyoo_scout = $hyoo_scout;
})($ || ($ = {}));
//scout.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_scout extends $.$hyoo_scout {
            key(key) {
                return key;
            }
            gists_title() {
                return `${super.gists_title()} (${this.gist_links().length} шт)`;
            }
            gists_favorite(next) {
                return this.$.$mol_state_local.value(`${this}.gists_favorite()`, next) || false;
            }
            gist_favorite(id, next) {
                return this.$.$mol_state_local.value(`${this}.gist_favorite(${id})`, next) || false;
            }
            gists_favorite_duration() {
                const dur = this.data()
                    .filter(gist => this.gist_favorite(gist.title()))
                    .reduce((sum, gist) => sum + parseInt(gist.tags()['Длительность'][0]), 0);
                return dur ? `${dur} мин` : '';
            }
            gists_favorite_label() {
                return this.gists_favorite_duration() ? [this.Gists_favorite_duration()] : [];
            }
            gist_links() {
                let gists = this.data();
                if (this.gists_favorite()) {
                    gists = gists.filter(gist => this.gist_favorite(gist.title()));
                }
                else {
                    gists = gists.filter(gist => {
                        const tags = gist.tags();
                        aspect: for (const aspect in tags) {
                            for (const tag of tags[aspect]) {
                                if (this.filter_tag_checked({ aspect, tag }))
                                    continue aspect;
                            }
                            return false;
                        }
                        return true;
                    });
                }
                const filtered = gists.filter($.$mol_match_text(this.gists_filter_query(), gist => [gist.title(), gist.content()]));
                filtered.sort($.$mol_compare_text(gist => gist.title()));
                return filtered.map(gist => this.Gist_link(gist.title()));
            }
            gist(id) {
                return this.data().find(gist => gist.title() === id);
            }
            gist_icon(id) {
                return this.gist(id).icon();
            }
            gist_title(id) {
                return this.gist(id).title();
            }
            gist_content(id) {
                return this.gist(id).content();
            }
            tag_title(key) {
                return key.tag;
            }
            gist_aspects(id) {
                return Object.keys(this.gist(id).tags()).map(aspect => this.Gist_aspect(aspect));
            }
            gist_remarks(id, next) {
                return this.$.$mol_state_local.value(`${this}.gist_remarks(${JSON.stringify(id)})`, next) || '';
            }
            gist_aspect_tags(aspect) {
                return this.gist_current().tags()[aspect].map((tag) => this.Gist_tag({ aspect, tag }));
            }
            gist_current(next) {
                const id = this.$.$mol_state_arg.value('gist', next && next.title());
                if (!id)
                    return null;
                return this.gist(id);
            }
            filter_aspects() {
                return Object.keys($.$hyoo_scout_gist.make({}).tags())
                    .filter(aspect => this.filter_aspect_tags(aspect).length > 1)
                    .map(aspect => this.Filter_aspect(aspect));
            }
            filter_aspect_tags(aspect) {
                const values = new Set();
                for (const gist of this.data()) {
                    for (const value of gist.tags()[aspect]) {
                        values.add(value);
                    }
                }
                return [...values]
                    .sort($.$mol_compare_text(tag => tag))
                    .map((tag) => this.Filter_tag({ aspect, tag }));
            }
            filter_tag_checked(key, next) {
                if (next !== undefined)
                    new $.$mol_defer(() => {
                        this.gist_current(null);
                        this.Gists().Body().scroll_top(0);
                    });
                next = this.$.$mol_state_local.value(`${this}.filter_tag_checked(${JSON.stringify(key)})`, next);
                if (next == null)
                    next = super.filter_tag_checked(key);
                return next;
            }
            suggest() {
                return this.$.$mol_state_arg.value('suggest') !== null;
            }
            pages() {
                return [
                    this.Filter(),
                    this.Gists(),
                    ...this.gist_current() ? [this.Gist(this.gist_current().title())] : [],
                    ...this.suggest() ? [this.Suggest()] : [],
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_scout.prototype, "gists_favorite", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "gist_favorite", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "gists_favorite_duration", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "gists_favorite_label", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "gist", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "filter_aspect_tags", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_scout.prototype, "filter_tag_checked", null);
        $$.$hyoo_scout = $hyoo_scout;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scout.view.js.map
;
export default $
//# sourceMappingURL=node.esm.js.map
