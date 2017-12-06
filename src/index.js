const Log = require('./log')
;(function (win, doc) {
    const OurQ = {}
    OurQ.log = Log
    win.OurQ = OurQ
})(window, document)


