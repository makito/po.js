pojs = {
    _l: null,
    _p: {},
    init: function(l) {
        this._l = l;
        this._load();
    },
    _: function(key, args) {
        var t = this._p.hasOwnProperty(key) ? this._p[key] : key, a;
        if (args) {
            for (a in args) {
                t = t.replace(/%s/, args[a]);
            }
        }
        return t;
    },
    _load: function() {
        var _t = this, x;
        if (this._l) {
            x = new XMLHttpRequest();
            x.onreadystatechange = function() {
                if (x.readyState === 4) {
                    if (x.status === 200) {
                        _t._p = JSON.parse(x.responseText);
                    } else {
                        console.error('Can not load JSON from ' + _t._l);
                    }
                }
            };
            x.open('GET', this._l, true);
            x.send();
        }
    }
};
