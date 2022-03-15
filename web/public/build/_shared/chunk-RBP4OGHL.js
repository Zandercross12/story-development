import {
  esm_exports,
  esm_exports2,
  init_esm,
  init_esm2,
  init_util,
  isNull,
  isNullOrUndefined,
  isObject,
  isString,
  require_node
} from "/build/_shared/chunk-SLTTFZWN.js";
import {
  React,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-VQYBAUSQ.js";

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction;
  }
});

// node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/internal/config.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error2 = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error2.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/rxjs/internal/util/hostReportError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports.hostReportError = hostReportError;
  }
});

// node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/rxjs/internal/Observer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/rxjs/internal/util/isArray.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/rxjs/internal/util/isObject.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject2(x) {
      return x !== null && typeof x === "object";
    }
    exports.isObject = isObject2;
  }
});

// node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors2) {
        Error.call(this);
        this.message = errors2 ? errors2.length + " errors occurred during unsubscription:\n" + errors2.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors2;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/internal/Subscription.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors2;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors2 = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors2 = errors2 || [];
                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors2 = errors2.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors2.push(e);
                }
              }
            }
          }
        }
        if (errors2) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors2);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
      }(new Subscription2());
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors2) {
      return errors2.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports.$$rxSubscriber = exports.rxSubscriber;
  }
});

// node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/internal/Subscriber.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error2, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error2, complete) {
        var subscriber = new Subscriber2(next, error2, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error2 = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error2;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/rxjs/internal/util/canReportError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports.canReportError = canReportError;
  }
});

// node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/rxjs/internal/util/toSubscriber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error2, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error2 && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error2, complete);
    }
    exports.toSubscriber = toSubscriber;
  }
});

// node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/internal/symbol/observable.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/internal/util/identity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/internal/util/pipe.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/internal/Observable.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable = function() {
      function Observable2(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error2, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error2, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/rxjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/rxjs/internal/operators/filter.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }
    exports.filter = filter;
    var FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    var FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/rxjs/internal/operators/map.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function map3(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== "function") {
          throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        }
        return source.lift(new MapOperator(project, thisArg));
      };
    }
    exports.map = map3;
    var MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    exports.MapOperator = MapOperator;
    var MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/client/lib/util/observable.js
var require_observable2 = __commonJS({
  "node_modules/@sanity/client/lib/util/observable.js"(exports, module) {
    "use strict";
    init_react();
    var _require = require_Observable();
    var Observable = _require.Observable;
    var _require2 = require_filter();
    var filter = _require2.filter;
    var _require3 = require_map();
    var map3 = _require3.map;
    module.exports = {
      Observable,
      filter,
      map: map3
    };
  }
});

// node_modules/@sanity/client/lib/util/getSelection.js
var require_getSelection = __commonJS({
  "node_modules/@sanity/client/lib/util/getSelection.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (sel && sel.query) {
        return "params" in sel ? {
          query: sel.query,
          params: sel.params
        } : {
          query: sel.query
        };
      }
      var selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    };
  }
});

// node_modules/@sanity/client/lib/validators.js
var require_validators = __commonJS({
  "node_modules/@sanity/client/lib/validators.js"(exports) {
    "use strict";
    init_react();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    exports.dataset = function(name) {
      if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
      }
    };
    exports.projectId = function(id) {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    };
    exports.validateAssetType = function(type) {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    };
    exports.validateObject = function(op, val) {
      if (val === null || _typeof(val) !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    };
    exports.requireDocumentId = function(op, doc) {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      exports.validateDocumentId(op, doc._id);
    };
    exports.validateDocumentId = function(op, id) {
      if (typeof id !== "string" || !/^[a-z0-9_.-]+$/i.test(id)) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    };
    exports.validateInsert = function(at, selector, items) {
      var signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        var valid = VALID_INSERT_LOCATIONS.map(function(loc) {
          return '"'.concat(loc, '"');
        }).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    };
    exports.hasDataset = function(config) {
      if (!config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config.dataset || "";
    };
    exports.requestTag = function(tag) {
      if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
      }
      return tag;
    };
  }
});

// node_modules/@sanity/client/lib/data/patch.js
var require_patch = __commonJS({
  "node_modules/@sanity/client/lib/data/patch.js"(exports, module) {
    "use strict";
    init_react();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var getSelection = require_getSelection();
    var validate = require_validators();
    var validateObject = validate.validateObject;
    var validateInsert = validate.validateInsert;
    function Patch(selection) {
      var operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var client2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.selection = selection;
      this.operations = assign({}, operations);
      this.client = client2;
    }
    assign(Patch.prototype, {
      clone: function clone() {
        return new Patch(this.selection, assign({}, this.operations), this.client);
      },
      set: function set(props) {
        return this._assign("set", props);
      },
      diffMatchPatch: function diffMatchPatch(props) {
        validateObject("diffMatchPatch", props);
        return this._assign("diffMatchPatch", props);
      },
      unset: function unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = assign({}, this.operations, {
          unset: attrs
        });
        return this;
      },
      setIfMissing: function setIfMissing(props) {
        return this._assign("setIfMissing", props);
      },
      replace: function replace(props) {
        validateObject("replace", props);
        return this._set("set", {
          $: props
        });
      },
      inc: function inc(props) {
        return this._assign("inc", props);
      },
      dec: function dec(props) {
        return this._assign("dec", props);
      },
      insert: function insert(at, selector, items) {
        var _this$_assign;
        validateInsert(at, selector, items);
        return this._assign("insert", (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
      },
      append: function append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      },
      prepend: function prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      },
      splice: function splice(selector, start, deleteCount, items) {
        var delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        var startIndex = start < 0 ? start - 1 : start;
        var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        var delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      },
      ifRevisionId: function ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      },
      serialize: function serialize() {
        return assign(getSelection(this.selection), this.operations);
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.client) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        var returnFirst = typeof this.selection === "string";
        var opts = assign({
          returnFirst,
          returnDocuments: true
        }, options);
        return this.client.mutate({
          patch: this.serialize()
        }, opts);
      },
      reset: function reset() {
        this.operations = {};
        return this;
      },
      _set: function _set(op, props) {
        return this._assign(op, props, false);
      },
      _assign: function _assign(op, props) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
        return this;
      }
    });
    module.exports = Patch;
  }
});

// node_modules/@sanity/client/lib/data/transaction.js
var require_transaction = __commonJS({
  "node_modules/@sanity/client/lib/data/transaction.js"(exports, module) {
    "use strict";
    init_react();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var validators = require_validators();
    var Patch = require_patch();
    var defaultMutateOptions = {
      returnDocuments: false
    };
    function Transaction() {
      var operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var client2 = arguments.length > 1 ? arguments[1] : void 0;
      var transactionId = arguments.length > 2 ? arguments[2] : void 0;
      this.trxId = transactionId;
      this.operations = operations;
      this.client = client2;
    }
    assign(Transaction.prototype, {
      clone: function clone() {
        return new Transaction(this.operations.slice(0), this.client, this.trxId);
      },
      create: function create(doc) {
        validators.validateObject("create", doc);
        return this._add({
          create: doc
        });
      },
      createIfNotExists: function createIfNotExists(doc) {
        var op = "createIfNotExists";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      createOrReplace: function createOrReplace(doc) {
        var op = "createOrReplace";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      delete: function _delete(documentId) {
        validators.validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      },
      patch: function patch(documentId, patchOps) {
        var isBuilder = typeof patchOps === "function";
        var isPatch = documentId instanceof Patch;
        if (isPatch) {
          return this._add({
            patch: documentId.serialize()
          });
        }
        if (isBuilder) {
          var patch2 = patchOps(new Patch(documentId, {}, this.client));
          if (!(patch2 instanceof Patch)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch2.serialize()
          });
        }
        return this._add({
          patch: assign({
            id: documentId
          }, patchOps)
        });
      },
      transactionId: function transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      },
      serialize: function serialize() {
        return this.operations.slice();
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit(options) {
        if (!this.client) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return this.client.mutate(this.serialize(), assign({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      },
      reset: function reset() {
        this.operations = [];
        return this;
      },
      _add: function _add(mut) {
        this.operations.push(mut);
        return this;
      }
    });
    module.exports = Transaction;
  }
});

// node_modules/@sanity/client/lib/data/encodeQueryString.js
var require_encodeQueryString = __commonJS({
  "node_modules/@sanity/client/lib/data/encodeQueryString.js"(exports, module) {
    "use strict";
    init_react();
    var _excluded = ["tag"];
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var enc = encodeURIComponent;
    module.exports = function(_ref) {
      var query = _ref.query, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
      var tag = options.tag, opts = _objectWithoutProperties(options, _excluded);
      var q = "query=".concat(enc(query));
      var base2 = tag ? "?tag=".concat(enc(tag), "&").concat(q) : "?".concat(q);
      var qString = Object.keys(params).reduce(function(qs, param) {
        return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
      }, base2);
      return Object.keys(opts).reduce(function(qs, option) {
        return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
      }, qString);
    };
  }
});

// node_modules/event-source-polyfill/src/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/event-source-polyfill/src/eventsource.js"(exports, module) {
    init_react();
    (function(global2) {
      "use strict";
      var setTimeout2 = global2.setTimeout;
      var clearTimeout2 = global2.clearTimeout;
      var XMLHttpRequest2 = global2.XMLHttpRequest;
      var XDomainRequest2 = global2.XDomainRequest;
      var ActiveXObject = global2.ActiveXObject;
      var NativeEventSource = global2.EventSource;
      var document2 = global2.document;
      var Promise2 = global2.Promise;
      var fetch2 = global2.fetch;
      var Response2 = global2.Response;
      var TextDecoder = global2.TextDecoder;
      var TextEncoder = global2.TextEncoder;
      var AbortController2 = global2.AbortController;
      if (typeof window !== "undefined" && typeof document2 !== "undefined" && !("readyState" in document2) && document2.body == null) {
        document2.readyState = "loading";
        window.addEventListener("load", function(event) {
          document2.readyState = "complete";
        }, false);
      }
      if (XMLHttpRequest2 == null && ActiveXObject != null) {
        XMLHttpRequest2 = function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        };
      }
      if (Object.create == void 0) {
        Object.create = function(C) {
          function F() {
          }
          F.prototype = C;
          return new F();
        };
      }
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      if (AbortController2 == void 0) {
        var originalFetch2 = fetch2;
        fetch2 = function(url, options) {
          var signal = options.signal;
          return originalFetch2(url, { headers: options.headers, credentials: options.credentials, cache: options.cache }).then(function(response) {
            var reader = response.body.getReader();
            signal._reader = reader;
            if (signal._aborted) {
              signal._reader.cancel();
            }
            return {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              body: {
                getReader: function() {
                  return reader;
                }
              }
            };
          });
        };
        AbortController2 = function() {
          this.signal = {
            _reader: null,
            _aborted: false
          };
          this.abort = function() {
            if (this.signal._reader != null) {
              this.signal._reader.cancel();
            }
            this.signal._aborted = true;
          };
        };
      }
      function TextDecoderPolyfill() {
        this.bitsNeeded = 0;
        this.codePoint = 0;
      }
      TextDecoderPolyfill.prototype.decode = function(octets) {
        function valid(codePoint2, shift, octetsCount2) {
          if (octetsCount2 === 1) {
            return codePoint2 >= 128 >> shift && codePoint2 << shift <= 2047;
          }
          if (octetsCount2 === 2) {
            return codePoint2 >= 2048 >> shift && codePoint2 << shift <= 55295 || codePoint2 >= 57344 >> shift && codePoint2 << shift <= 65535;
          }
          if (octetsCount2 === 3) {
            return codePoint2 >= 65536 >> shift && codePoint2 << shift <= 1114111;
          }
          throw new Error();
        }
        function octetsCount(bitsNeeded2, codePoint2) {
          if (bitsNeeded2 === 6 * 1) {
            return codePoint2 >> 6 > 15 ? 3 : codePoint2 > 31 ? 2 : 1;
          }
          if (bitsNeeded2 === 6 * 2) {
            return codePoint2 > 15 ? 3 : 2;
          }
          if (bitsNeeded2 === 6 * 3) {
            return 3;
          }
          throw new Error();
        }
        var REPLACER = 65533;
        var string = "";
        var bitsNeeded = this.bitsNeeded;
        var codePoint = this.codePoint;
        for (var i = 0; i < octets.length; i += 1) {
          var octet = octets[i];
          if (bitsNeeded !== 0) {
            if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
              string += String.fromCharCode(codePoint);
            }
          }
          if (bitsNeeded === 0) {
            if (octet >= 0 && octet <= 127) {
              bitsNeeded = 0;
              codePoint = octet;
            } else if (octet >= 192 && octet <= 223) {
              bitsNeeded = 6 * 1;
              codePoint = octet & 31;
            } else if (octet >= 224 && octet <= 239) {
              bitsNeeded = 6 * 2;
              codePoint = octet & 15;
            } else if (octet >= 240 && octet <= 247) {
              bitsNeeded = 6 * 3;
              codePoint = octet & 7;
            } else {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
            if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
          } else {
            bitsNeeded -= 6;
            codePoint = codePoint << 6 | octet & 63;
          }
          if (bitsNeeded === 0) {
            if (codePoint <= 65535) {
              string += String.fromCharCode(codePoint);
            } else {
              string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
              string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
            }
          }
        }
        this.bitsNeeded = bitsNeeded;
        this.codePoint = codePoint;
        return string;
      };
      var supportsStreamOption = function() {
        try {
          return new TextDecoder().decode(new TextEncoder().encode("test"), { stream: true }) === "test";
        } catch (error2) {
          console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + error2);
        }
        return false;
      };
      if (TextDecoder == void 0 || TextEncoder == void 0 || !supportsStreamOption()) {
        TextDecoder = TextDecoderPolyfill;
      }
      var k = function() {
      };
      function XHRWrapper(xhr) {
        this.withCredentials = false;
        this.readyState = 0;
        this.status = 0;
        this.statusText = "";
        this.responseText = "";
        this.onprogress = k;
        this.onload = k;
        this.onerror = k;
        this.onreadystatechange = k;
        this._contentType = "";
        this._xhr = xhr;
        this._sendTimeout = 0;
        this._abort = k;
      }
      XHRWrapper.prototype.open = function(method, url) {
        this._abort(true);
        var that = this;
        var xhr = this._xhr;
        var state = 1;
        var timeout = 0;
        this._abort = function(silent) {
          if (that._sendTimeout !== 0) {
            clearTimeout2(that._sendTimeout);
            that._sendTimeout = 0;
          }
          if (state === 1 || state === 2 || state === 3) {
            state = 4;
            xhr.onload = k;
            xhr.onerror = k;
            xhr.onabort = k;
            xhr.onprogress = k;
            xhr.onreadystatechange = k;
            xhr.abort();
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            if (!silent) {
              that.readyState = 4;
              that.onabort(null);
              that.onreadystatechange();
            }
          }
          state = 0;
        };
        var onStart = function() {
          if (state === 1) {
            var status = 0;
            var statusText = "";
            var contentType = void 0;
            if (!("contentType" in xhr)) {
              try {
                status = xhr.status;
                statusText = xhr.statusText;
                contentType = xhr.getResponseHeader("Content-Type");
              } catch (error2) {
                status = 0;
                statusText = "";
                contentType = void 0;
              }
            } else {
              status = 200;
              statusText = "OK";
              contentType = xhr.contentType;
            }
            if (status !== 0) {
              state = 2;
              that.readyState = 2;
              that.status = status;
              that.statusText = statusText;
              that._contentType = contentType;
              that.onreadystatechange();
            }
          }
        };
        var onProgress = function() {
          onStart();
          if (state === 2 || state === 3) {
            state = 3;
            var responseText = "";
            try {
              responseText = xhr.responseText;
            } catch (error2) {
            }
            that.readyState = 3;
            that.responseText = responseText;
            that.onprogress();
          }
        };
        var onFinish = function(type, event) {
          if (event == null || event.preventDefault == null) {
            event = {
              preventDefault: k
            };
          }
          onProgress();
          if (state === 1 || state === 2 || state === 3) {
            state = 4;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            that.readyState = 4;
            if (type === "load") {
              that.onload(event);
            } else if (type === "error") {
              that.onerror(event);
            } else if (type === "abort") {
              that.onabort(event);
            } else {
              throw new TypeError();
            }
            that.onreadystatechange();
          }
        };
        var onReadyStateChange = function(event) {
          if (xhr != void 0) {
            if (xhr.readyState === 4) {
              if (!("onload" in xhr) || !("onerror" in xhr) || !("onabort" in xhr)) {
                onFinish(xhr.responseText === "" ? "error" : "load", event);
              }
            } else if (xhr.readyState === 3) {
              if (!("onprogress" in xhr)) {
                onProgress();
              }
            } else if (xhr.readyState === 2) {
              onStart();
            }
          }
        };
        var onTimeout = function() {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 500);
          if (xhr.readyState === 3) {
            onProgress();
          }
        };
        if ("onload" in xhr) {
          xhr.onload = function(event) {
            onFinish("load", event);
          };
        }
        if ("onerror" in xhr) {
          xhr.onerror = function(event) {
            onFinish("error", event);
          };
        }
        if ("onabort" in xhr) {
          xhr.onabort = function(event) {
            onFinish("abort", event);
          };
        }
        if ("onprogress" in xhr) {
          xhr.onprogress = onProgress;
        }
        if ("onreadystatechange" in xhr) {
          xhr.onreadystatechange = function(event) {
            onReadyStateChange(event);
          };
        }
        if ("contentType" in xhr || !("ontimeout" in XMLHttpRequest2.prototype)) {
          url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
        }
        xhr.open(method, url, true);
        if ("readyState" in xhr) {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 0);
        }
      };
      XHRWrapper.prototype.abort = function() {
        this._abort(false);
      };
      XHRWrapper.prototype.getResponseHeader = function(name) {
        return this._contentType;
      };
      XHRWrapper.prototype.setRequestHeader = function(name, value) {
        var xhr = this._xhr;
        if ("setRequestHeader" in xhr) {
          xhr.setRequestHeader(name, value);
        }
      };
      XHRWrapper.prototype.getAllResponseHeaders = function() {
        return this._xhr.getAllResponseHeaders != void 0 ? this._xhr.getAllResponseHeaders() || "" : "";
      };
      XHRWrapper.prototype.send = function() {
        if ((!("ontimeout" in XMLHttpRequest2.prototype) || !("sendAsBinary" in XMLHttpRequest2.prototype) && !("mozAnon" in XMLHttpRequest2.prototype)) && document2 != void 0 && document2.readyState != void 0 && document2.readyState !== "complete") {
          var that = this;
          that._sendTimeout = setTimeout2(function() {
            that._sendTimeout = 0;
            that.send();
          }, 4);
          return;
        }
        var xhr = this._xhr;
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.withCredentials;
        }
        try {
          xhr.send(void 0);
        } catch (error1) {
          throw error1;
        }
      };
      function toLowerCase(name) {
        return name.replace(/[A-Z]/g, function(c) {
          return String.fromCharCode(c.charCodeAt(0) + 32);
        });
      }
      function HeadersPolyfill(all) {
        var map3 = /* @__PURE__ */ Object.create(null);
        var array = all.split("\r\n");
        for (var i = 0; i < array.length; i += 1) {
          var line = array[i];
          var parts = line.split(": ");
          var name = parts.shift();
          var value = parts.join(": ");
          map3[toLowerCase(name)] = value;
        }
        this._map = map3;
      }
      HeadersPolyfill.prototype.get = function(name) {
        return this._map[toLowerCase(name)];
      };
      if (XMLHttpRequest2 != null && XMLHttpRequest2.HEADERS_RECEIVED == null) {
        XMLHttpRequest2.HEADERS_RECEIVED = 2;
      }
      function XHRTransport() {
      }
      XHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        xhr.open("GET", url);
        var offset = 0;
        xhr.onprogress = function() {
          var responseText = xhr.responseText;
          var chunk = responseText.slice(offset);
          offset += chunk.length;
          onProgressCallback(chunk);
        };
        xhr.onerror = function(event) {
          event.preventDefault();
          onFinishCallback(new Error("NetworkError"));
        };
        xhr.onload = function() {
          onFinishCallback(null);
        };
        xhr.onabort = function() {
          onFinishCallback(null);
        };
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest2.HEADERS_RECEIVED) {
            var status = xhr.status;
            var statusText = xhr.statusText;
            var contentType = xhr.getResponseHeader("Content-Type");
            var headers2 = xhr.getAllResponseHeaders();
            onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers2));
          }
        };
        xhr.withCredentials = withCredentials;
        for (var name in headers) {
          if (Object.prototype.hasOwnProperty.call(headers, name)) {
            xhr.setRequestHeader(name, headers[name]);
          }
        }
        xhr.send();
        return xhr;
      };
      function HeadersWrapper(headers) {
        this._headers = headers;
      }
      HeadersWrapper.prototype.get = function(name) {
        return this._headers.get(name);
      };
      function FetchTransport() {
      }
      FetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        var reader = null;
        var controller = new AbortController2();
        var signal = controller.signal;
        var textDecoder = new TextDecoder();
        fetch2(url, {
          headers,
          credentials: withCredentials ? "include" : "same-origin",
          signal,
          cache: "no-store"
        }).then(function(response) {
          reader = response.body.getReader();
          onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers));
          return new Promise2(function(resolve, reject) {
            var readNextChunk = function() {
              reader.read().then(function(result) {
                if (result.done) {
                  resolve(void 0);
                } else {
                  var chunk = textDecoder.decode(result.value, { stream: true });
                  onProgressCallback(chunk);
                  readNextChunk();
                }
              })["catch"](function(error2) {
                reject(error2);
              });
            };
            readNextChunk();
          });
        })["catch"](function(error2) {
          if (error2.name === "AbortError") {
            return void 0;
          } else {
            return error2;
          }
        }).then(function(error2) {
          onFinishCallback(error2);
        });
        return {
          abort: function() {
            if (reader != null) {
              reader.cancel();
            }
            controller.abort();
          }
        };
      };
      function EventTarget() {
        this._listeners = /* @__PURE__ */ Object.create(null);
      }
      function throwError(e) {
        setTimeout2(function() {
          throw e;
        }, 0);
      }
      EventTarget.prototype.dispatchEvent = function(event) {
        event.target = this;
        var typeListeners = this._listeners[event.type];
        if (typeListeners != void 0) {
          var length = typeListeners.length;
          for (var i = 0; i < length; i += 1) {
            var listener = typeListeners[i];
            try {
              if (typeof listener.handleEvent === "function") {
                listener.handleEvent(event);
              } else {
                listener.call(this, event);
              }
            } catch (e) {
              throwError(e);
            }
          }
        }
      };
      EventTarget.prototype.addEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners == void 0) {
          typeListeners = [];
          listeners[type] = typeListeners;
        }
        var found = false;
        for (var i = 0; i < typeListeners.length; i += 1) {
          if (typeListeners[i] === listener) {
            found = true;
          }
        }
        if (!found) {
          typeListeners.push(listener);
        }
      };
      EventTarget.prototype.removeEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners != void 0) {
          var filtered = [];
          for (var i = 0; i < typeListeners.length; i += 1) {
            if (typeListeners[i] !== listener) {
              filtered.push(typeListeners[i]);
            }
          }
          if (filtered.length === 0) {
            delete listeners[type];
          } else {
            listeners[type] = filtered;
          }
        }
      };
      function Event(type) {
        this.type = type;
        this.target = void 0;
      }
      function MessageEvent(type, options) {
        Event.call(this, type);
        this.data = options.data;
        this.lastEventId = options.lastEventId;
      }
      MessageEvent.prototype = Object.create(Event.prototype);
      function ConnectionEvent(type, options) {
        Event.call(this, type);
        this.status = options.status;
        this.statusText = options.statusText;
        this.headers = options.headers;
      }
      ConnectionEvent.prototype = Object.create(Event.prototype);
      function ErrorEvent(type, options) {
        Event.call(this, type);
        this.error = options.error;
      }
      ErrorEvent.prototype = Object.create(Event.prototype);
      var WAITING = -1;
      var CONNECTING = 0;
      var OPEN = 1;
      var CLOSED = 2;
      var AFTER_CR = -1;
      var FIELD_START = 0;
      var FIELD = 1;
      var VALUE_START = 2;
      var VALUE = 3;
      var contentTypeRegExp = /^text\/event\-stream(;.*)?$/i;
      var MINIMUM_DURATION = 1e3;
      var MAXIMUM_DURATION = 18e6;
      var parseDuration = function(value, def) {
        var n = value == null ? def : parseInt(value, 10);
        if (n !== n) {
          n = def;
        }
        return clampDuration(n);
      };
      var clampDuration = function(n) {
        return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
      };
      var fire = function(that, f, event) {
        try {
          if (typeof f === "function") {
            f.call(that, event);
          }
        } catch (e) {
          throwError(e);
        }
      };
      function EventSourcePolyfill(url, options) {
        EventTarget.call(this);
        options = options || {};
        this.onopen = void 0;
        this.onmessage = void 0;
        this.onerror = void 0;
        this.url = void 0;
        this.readyState = void 0;
        this.withCredentials = void 0;
        this.headers = void 0;
        this._close = void 0;
        start(this, url, options);
      }
      function getBestXHRTransport() {
        return XMLHttpRequest2 != void 0 && "withCredentials" in XMLHttpRequest2.prototype || XDomainRequest2 == void 0 ? new XMLHttpRequest2() : new XDomainRequest2();
      }
      var isFetchSupported = fetch2 != void 0 && Response2 != void 0 && "body" in Response2.prototype;
      function start(es, url, options) {
        url = String(url);
        var withCredentials = Boolean(options.withCredentials);
        var lastEventIdQueryParameterName = options.lastEventIdQueryParameterName || "lastEventId";
        var initialRetry = clampDuration(1e3);
        var heartbeatTimeout = parseDuration(options.heartbeatTimeout, 45e3);
        var lastEventId = "";
        var retry = initialRetry;
        var wasActivity = false;
        var textLength = 0;
        var headers = options.headers || {};
        var TransportOption = options.Transport;
        var xhr = isFetchSupported && TransportOption == void 0 ? void 0 : new XHRWrapper(TransportOption != void 0 ? new TransportOption() : getBestXHRTransport());
        var transport = TransportOption != null && typeof TransportOption !== "string" ? new TransportOption() : xhr == void 0 ? new FetchTransport() : new XHRTransport();
        var abortController = void 0;
        var timeout = 0;
        var currentState = WAITING;
        var dataBuffer = "";
        var lastEventIdBuffer = "";
        var eventTypeBuffer = "";
        var textBuffer = "";
        var state = FIELD_START;
        var fieldStart = 0;
        var valueStart = 0;
        var onStart = function(status, statusText, contentType, headers2) {
          if (currentState === CONNECTING) {
            if (status === 200 && contentType != void 0 && contentTypeRegExp.test(contentType)) {
              currentState = OPEN;
              wasActivity = Date.now();
              retry = initialRetry;
              es.readyState = OPEN;
              var event = new ConnectionEvent("open", {
                status,
                statusText,
                headers: headers2
              });
              es.dispatchEvent(event);
              fire(es, es.onopen, event);
            } else {
              var message = "";
              if (status !== 200) {
                if (statusText) {
                  statusText = statusText.replace(/\s+/g, " ");
                }
                message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
              } else {
                message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == void 0 ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
              }
              close();
              var event = new ConnectionEvent("error", {
                status,
                statusText,
                headers: headers2
              });
              es.dispatchEvent(event);
              fire(es, es.onerror, event);
              console.error(message);
            }
          }
        };
        var onProgress = function(textChunk) {
          if (currentState === OPEN) {
            var n = -1;
            for (var i = 0; i < textChunk.length; i += 1) {
              var c = textChunk.charCodeAt(i);
              if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
                n = i;
              }
            }
            var chunk = (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
            textBuffer = (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
            if (textChunk !== "") {
              wasActivity = Date.now();
              textLength += textChunk.length;
            }
            for (var position = 0; position < chunk.length; position += 1) {
              var c = chunk.charCodeAt(position);
              if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
                state = FIELD_START;
              } else {
                if (state === AFTER_CR) {
                  state = FIELD_START;
                }
                if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
                  if (state !== FIELD_START) {
                    if (state === FIELD) {
                      valueStart = position + 1;
                    }
                    var field = chunk.slice(fieldStart, valueStart - 1);
                    var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
                    if (field === "data") {
                      dataBuffer += "\n";
                      dataBuffer += value;
                    } else if (field === "id") {
                      lastEventIdBuffer = value;
                    } else if (field === "event") {
                      eventTypeBuffer = value;
                    } else if (field === "retry") {
                      initialRetry = parseDuration(value, initialRetry);
                      retry = initialRetry;
                    } else if (field === "heartbeatTimeout") {
                      heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                      if (timeout !== 0) {
                        clearTimeout2(timeout);
                        timeout = setTimeout2(function() {
                          onTimeout();
                        }, heartbeatTimeout);
                      }
                    }
                  }
                  if (state === FIELD_START) {
                    if (dataBuffer !== "") {
                      lastEventId = lastEventIdBuffer;
                      if (eventTypeBuffer === "") {
                        eventTypeBuffer = "message";
                      }
                      var event = new MessageEvent(eventTypeBuffer, {
                        data: dataBuffer.slice(1),
                        lastEventId: lastEventIdBuffer
                      });
                      es.dispatchEvent(event);
                      if (eventTypeBuffer === "open") {
                        fire(es, es.onopen, event);
                      } else if (eventTypeBuffer === "message") {
                        fire(es, es.onmessage, event);
                      } else if (eventTypeBuffer === "error") {
                        fire(es, es.onerror, event);
                      }
                      if (currentState === CLOSED) {
                        return;
                      }
                    }
                    dataBuffer = "";
                    eventTypeBuffer = "";
                  }
                  state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
                } else {
                  if (state === FIELD_START) {
                    fieldStart = position;
                    state = FIELD;
                  }
                  if (state === FIELD) {
                    if (c === ":".charCodeAt(0)) {
                      valueStart = position + 1;
                      state = VALUE_START;
                    }
                  } else if (state === VALUE_START) {
                    state = VALUE;
                  }
                }
              }
            }
          }
        };
        var onFinish = function(error2) {
          if (currentState === OPEN || currentState === CONNECTING) {
            currentState = WAITING;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            timeout = setTimeout2(function() {
              onTimeout();
            }, retry);
            retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
            es.readyState = CONNECTING;
            var event = new ErrorEvent("error", { error: error2 });
            es.dispatchEvent(event);
            fire(es, es.onerror, event);
            if (error2 != void 0) {
              console.error(error2);
            }
          }
        };
        var close = function() {
          currentState = CLOSED;
          if (abortController != void 0) {
            abortController.abort();
            abortController = void 0;
          }
          if (timeout !== 0) {
            clearTimeout2(timeout);
            timeout = 0;
          }
          es.readyState = CLOSED;
        };
        var onTimeout = function() {
          timeout = 0;
          if (currentState !== WAITING) {
            if (!wasActivity && abortController != void 0) {
              onFinish(new Error("No activity within " + heartbeatTimeout + " milliseconds. " + (currentState === CONNECTING ? "No response received." : textLength + " chars received.") + " Reconnecting."));
              if (abortController != void 0) {
                abortController.abort();
                abortController = void 0;
              }
            } else {
              var nextHeartbeat = Math.max((wasActivity || Date.now()) + heartbeatTimeout - Date.now(), 1);
              wasActivity = false;
              timeout = setTimeout2(function() {
                onTimeout();
              }, nextHeartbeat);
            }
            return;
          }
          wasActivity = false;
          textLength = 0;
          timeout = setTimeout2(function() {
            onTimeout();
          }, heartbeatTimeout);
          currentState = CONNECTING;
          dataBuffer = "";
          eventTypeBuffer = "";
          lastEventIdBuffer = lastEventId;
          textBuffer = "";
          fieldStart = 0;
          valueStart = 0;
          state = FIELD_START;
          var requestURL = url;
          if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
            if (lastEventId !== "") {
              var i = url.indexOf("?");
              requestURL = i === -1 ? url : url.slice(0, i + 1) + url.slice(i + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(p, paramName) {
                return paramName === lastEventIdQueryParameterName ? "" : p;
              });
              requestURL += (url.indexOf("?") === -1 ? "?" : "&") + lastEventIdQueryParameterName + "=" + encodeURIComponent(lastEventId);
            }
          }
          var withCredentials2 = es.withCredentials;
          var requestHeaders = {};
          requestHeaders["Accept"] = "text/event-stream";
          var headers2 = es.headers;
          if (headers2 != void 0) {
            for (var name in headers2) {
              if (Object.prototype.hasOwnProperty.call(headers2, name)) {
                requestHeaders[name] = headers2[name];
              }
            }
          }
          try {
            abortController = transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials2, requestHeaders);
          } catch (error2) {
            close();
            throw error2;
          }
        };
        es.url = url;
        es.readyState = CONNECTING;
        es.withCredentials = withCredentials;
        es.headers = headers;
        es._close = close;
        onTimeout();
      }
      EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
      EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
      EventSourcePolyfill.prototype.OPEN = OPEN;
      EventSourcePolyfill.prototype.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.close = function() {
        this._close();
      };
      EventSourcePolyfill.CONNECTING = CONNECTING;
      EventSourcePolyfill.OPEN = OPEN;
      EventSourcePolyfill.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.withCredentials = void 0;
      var R = NativeEventSource;
      if (XMLHttpRequest2 != void 0 && (NativeEventSource == void 0 || !("withCredentials" in NativeEventSource.prototype))) {
        R = EventSourcePolyfill;
      }
      (function(factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
          var v = factory(exports);
          if (v !== void 0)
            module.exports = v;
        } else if (typeof define === "function" && define.amd) {
          define(["exports"], factory);
        } else {
          factory(global2);
        }
      })(function(exports2) {
        exports2.EventSourcePolyfill = EventSourcePolyfill;
        exports2.NativeEventSource = NativeEventSource;
        exports2.EventSource = R;
      });
    })(typeof globalThis === "undefined" ? typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : exports : globalThis);
  }
});

// node_modules/@sanity/eventsource/browser.js
var require_browser = __commonJS({
  "node_modules/@sanity/eventsource/browser.js"(exports, module) {
    init_react();
    var evs = require_eventsource();
    module.exports = evs.EventSourcePolyfill;
  }
});

// node_modules/@sanity/client/lib/util/pick.js
var require_pick = __commonJS({
  "node_modules/@sanity/client/lib/util/pick.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(obj, props) {
      return props.reduce(function(selection, prop) {
        if (typeof obj[prop] === "undefined") {
          return selection;
        }
        selection[prop] = obj[prop];
        return selection;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/util/defaults.js
var require_defaults = __commonJS({
  "node_modules/@sanity/client/lib/util/defaults.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(obj, defaults) {
      return Object.keys(defaults).concat(Object.keys(obj)).reduce(function(target, prop) {
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/data/listen.js
var require_listen = __commonJS({
  "node_modules/@sanity/client/lib/data/listen.js"(exports, module) {
    "use strict";
    init_react();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var polyfilledEventSource = require_browser();
    var pick = require_pick();
    var defaults = require_defaults();
    var encodeQueryString = require_encodeQueryString();
    var MAX_URL_LENGTH = 16e3 - 1200;
    var EventSource = polyfilledEventSource;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"];
    var defaultOptions = {
      includeResult: true
    };
    module.exports = function listen(query, params) {
      var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _this$clientConfig = this.clientConfig, url = _this$clientConfig.url, token = _this$clientConfig.token, withCredentials = _this$clientConfig.withCredentials, requestTagPrefix = _this$clientConfig.requestTagPrefix;
      var tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
      var options = _objectSpread(_objectSpread({}, defaults(opts, defaultOptions)), {}, {
        tag
      });
      var listenOpts = pick(options, possibleOptions);
      var qs = encodeQueryString({
        query,
        params,
        options: listenOpts,
        tag
      });
      var uri = "".concat(url).concat(this.getDataUrl("listen", qs));
      if (uri.length > MAX_URL_LENGTH) {
        return new Observable(function(observer) {
          return observer.error(new Error("Query too large for listener"));
        });
      }
      var listenFor = options.events ? options.events : ["mutation"];
      var shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      var esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new Observable(function(observer) {
        var es = getEventSource();
        var reconnectTimer;
        var stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === EventSource.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        function onMessage(evt) {
          var event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect(evt) {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        function unsubscribe() {
          es.removeEventListener("error", onError, false);
          es.removeEventListener("channelError", onChannelError, false);
          es.removeEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return es.removeEventListener(type, onMessage, false);
          });
          es.close();
        }
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        function getEventSource() {
          var evs = new EventSource(uri, esOptions);
          evs.addEventListener("error", onError, false);
          evs.addEventListener("channelError", onChannelError, false);
          evs.addEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return evs.addEventListener(type, onMessage, false);
          });
          return evs;
        }
        function open() {
          es = getEventSource();
        }
        function stop() {
          stopped = true;
          unsubscribe();
        }
        return stop;
      });
    };
    function parseEvent(event) {
      try {
        var data = event.data && JSON.parse(event.data) || {};
        return assign({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      var evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
  }
});

// node_modules/@sanity/client/lib/data/dataMethods.js
var require_dataMethods = __commonJS({
  "node_modules/@sanity/client/lib/data/dataMethods.js"(exports, module) {
    "use strict";
    init_react();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_observable2();
    var map3 = _require.map;
    var filter = _require.filter;
    var validators = require_validators();
    var getSelection = require_getSelection();
    var encodeQueryString = require_encodeQueryString();
    var Transaction = require_transaction();
    var Patch = require_patch();
    var listen = require_listen();
    var excludeFalsey = function excludeFalsey2(param, defValue) {
      var value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    };
    var getMutationQuery = function getMutationQuery2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return _objectSpread({
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync"
      }, options.skipCrossDatasetReferenceValidation && {
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
      });
    };
    var isResponse = function isResponse2(event) {
      return event.type === "response";
    };
    var getBody = function getBody2(event) {
      return event.body;
    };
    var indexBy = function indexBy2(docs, attr) {
      return docs.reduce(function(indexed, doc) {
        indexed[attr(doc)] = doc;
        return indexed;
      }, /* @__PURE__ */ Object.create(null));
    };
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    var getQuerySizeLimit = 11264;
    module.exports = {
      listen,
      getDataUrl: function getDataUrl(operation, path) {
        var config = this.clientConfig;
        var catalog = validators.hasDataset(config);
        var baseUri = "/".concat(operation, "/").concat(catalog);
        var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
        return "/data".concat(uri).replace(/\/($|\?)/, "$1");
      },
      fetch: function fetch2(query, params) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mapResponse = options.filterResponse === false ? function(res) {
          return res;
        } : function(res) {
          return res.result;
        };
        var observable = this._dataRequest("query", {
          query,
          params
        }, options).pipe(map3(mapResponse));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocument: function getDocument(id) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", id),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map3(function(event) {
          return event.body.documents && event.body.documents[0];
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocuments: function getDocuments(ids) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", ids.join(",")),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map3(function(event) {
          var indexed = indexBy(event.body.documents || [], function(doc) {
            return doc._id;
          });
          return ids.map(function(id) {
            return indexed[id] || null;
          });
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      create: function create(doc, options) {
        return this._create(doc, "create", options);
      },
      createIfNotExists: function createIfNotExists(doc, options) {
        validators.requireDocumentId("createIfNotExists", doc);
        return this._create(doc, "createIfNotExists", options);
      },
      createOrReplace: function createOrReplace(doc, options) {
        validators.requireDocumentId("createOrReplace", doc);
        return this._create(doc, "createOrReplace", options);
      },
      patch: function patch(selector, operations) {
        return new Patch(selector, operations, this);
      },
      delete: function _delete(selection, options) {
        return this.dataRequest("mutate", {
          mutations: [{
            delete: getSelection(selection)
          }]
        }, options);
      },
      mutate: function mutate(mutations, options) {
        var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
        var muts = Array.isArray(mut) ? mut : [mut];
        var transactionId = options && options.transactionId;
        return this.dataRequest("mutate", {
          mutations: muts,
          transactionId
        }, options);
      },
      transaction: function transaction(operations) {
        return new Transaction(operations, this);
      },
      dataRequest: function dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var request = this._dataRequest(endpoint, body, options);
        return this.isPromiseAPI() ? toPromise(request) : request;
      },
      _dataRequest: function _dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var isMutation = endpoint === "mutate";
        var isQuery = endpoint === "query";
        var strQuery = !isMutation && encodeQueryString(body);
        var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
        var stringQuery = useGet ? strQuery : "";
        var returnFirst = options.returnFirst;
        var timeout = options.timeout, token = options.token, tag = options.tag, headers = options.headers;
        var uri = this.getDataUrl(endpoint, stringQuery);
        var reqOptions = {
          method: useGet ? "GET" : "POST",
          uri,
          json: true,
          body: useGet ? void 0 : body,
          query: isMutation && getMutationQuery(options),
          timeout,
          headers,
          token,
          tag,
          canUseCdn: isQuery
        };
        return this._requestObservable(reqOptions).pipe(filter(isResponse), map3(getBody), map3(function(res) {
          if (!isMutation) {
            return res;
          }
          var results = res.results || [];
          if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map(function(mut) {
              return mut.document;
            });
          }
          var key = returnFirst ? "documentId" : "documentIds";
          var ids = returnFirst ? results[0] && results[0].id : results.map(function(mut) {
            return mut.id;
          });
          return _defineProperty({
            transactionId: res.transactionId,
            results
          }, key, ids);
        }));
      },
      _create: function _create(doc, op) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mutation = _defineProperty({}, op, doc);
        var opts = assign({
          returnFirst: true,
          returnDocuments: true
        }, options);
        return this.dataRequest("mutate", {
          mutations: [mutation]
        }, opts);
      }
    };
  }
});

// node_modules/@sanity/client/lib/datasets/datasetsClient.js
var require_datasetsClient = __commonJS({
  "node_modules/@sanity/client/lib/datasets/datasetsClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    var validate = require_validators();
    function DatasetsClient(client2) {
      this.request = client2.request.bind(client2);
    }
    assign(DatasetsClient.prototype, {
      create: function create(name, options) {
        return this._modify("PUT", name, options);
      },
      edit: function edit(name, options) {
        return this._modify("PATCH", name, options);
      },
      delete: function _delete(name) {
        return this._modify("DELETE", name);
      },
      list: function list() {
        return this.request({
          uri: "/datasets"
        });
      },
      _modify: function _modify(method, name, body) {
        validate.dataset(name);
        return this.request({
          method,
          uri: "/datasets/".concat(name),
          body
        });
      }
    });
    module.exports = DatasetsClient;
  }
});

// node_modules/@sanity/client/lib/projects/projectsClient.js
var require_projectsClient = __commonJS({
  "node_modules/@sanity/client/lib/projects/projectsClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function ProjectsClient(client2) {
      this.client = client2;
    }
    assign(ProjectsClient.prototype, {
      list: function list() {
        return this.client.request({
          uri: "/projects"
        });
      },
      getById: function getById(id) {
        return this.client.request({
          uri: "/projects/".concat(id)
        });
      }
    });
    module.exports = ProjectsClient;
  }
});

// node_modules/@sanity/client/lib/http/queryString.js
var require_queryString = __commonJS({
  "node_modules/@sanity/client/lib/http/queryString.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(params) {
      var qs = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
        }
      }
      return qs.length > 0 ? "?".concat(qs.join("&")) : "";
    };
  }
});

// node_modules/@sanity/client/lib/assets/assetsClient.js
var require_assetsClient = __commonJS({
  "node_modules/@sanity/client/lib/assets/assetsClient.js"(exports, module) {
    "use strict";
    init_react();
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var assign = require_object_assign();
    var _require = require_observable2();
    var map3 = _require.map;
    var filter = _require.filter;
    var queryString = require_queryString();
    var validators = require_validators();
    function AssetsClient(client2) {
      this.client = client2;
    }
    function optionsFromFile(opts, file) {
      if (typeof window === "undefined" || !(file instanceof window.File)) {
        return opts;
      }
      return assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
      }, opts);
    }
    assign(AssetsClient.prototype, {
      upload: function upload(assetType, body) {
        var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        validators.validateAssetType(assetType);
        var meta = opts.extract || void 0;
        if (meta && !meta.length) {
          meta = ["none"];
        }
        var dataset = validators.hasDataset(this.client.clientConfig);
        var assetEndpoint = assetType === "image" ? "images" : "files";
        var options = optionsFromFile(opts, body);
        var tag = options.tag, label = options.label, title = options.title, description = options.description, creditLine = options.creditLine, filename = options.filename, source = options.source;
        var query = {
          label,
          title,
          description,
          filename,
          meta,
          creditLine
        };
        if (source) {
          query.sourceId = source.id;
          query.sourceName = source.name;
          query.sourceUrl = source.url;
        }
        var observable = this.client._requestObservable({
          tag,
          method: "POST",
          timeout: options.timeout || 0,
          uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
          headers: options.contentType ? {
            "Content-Type": options.contentType
          } : {},
          query,
          body
        });
        return this.client.isPromiseAPI() ? observable.pipe(filter(function(event) {
          return event.type === "response";
        }), map3(function(event) {
          return event.body.document;
        })).toPromise() : observable;
      },
      delete: function _delete(type, id) {
        console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
        var docId = id || "";
        if (!/^(image|file)-/.test(docId)) {
          docId = "".concat(type, "-").concat(docId);
        } else if (type._id) {
          docId = type._id;
        }
        validators.hasDataset(this.client.clientConfig);
        return this.client.delete(docId);
      },
      getImageUrl: function getImageUrl(ref, query) {
        var id = ref._ref || ref;
        if (typeof id !== "string") {
          throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
        }
        if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
          throw new Error('Unsupported asset ID "'.concat(id, '". URL generation only works for auto-generated IDs.'));
        }
        var _id$split = id.split("-"), _id$split2 = _slicedToArray(_id$split, 4), assetId = _id$split2[1], size = _id$split2[2], format2 = _id$split2[3];
        validators.hasDataset(this.client.clientConfig);
        var _this$client$clientCo = this.client.clientConfig, projectId = _this$client$clientCo.projectId, dataset = _this$client$clientCo.dataset;
        var qs = query ? queryString(query) : "";
        return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format2).concat(qs);
      }
    });
    module.exports = AssetsClient;
  }
});

// node_modules/@sanity/client/lib/users/usersClient.js
var require_usersClient = __commonJS({
  "node_modules/@sanity/client/lib/users/usersClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function UsersClient(client2) {
      this.client = client2;
    }
    assign(UsersClient.prototype, {
      getById: function getById(id) {
        return this.client.request({
          uri: "/users/".concat(id)
        });
      }
    });
    module.exports = UsersClient;
  }
});

// node_modules/@sanity/client/lib/auth/authClient.js
var require_authClient = __commonJS({
  "node_modules/@sanity/client/lib/auth/authClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function AuthClient(client2) {
      this.client = client2;
    }
    assign(AuthClient.prototype, {
      getLoginProviders: function getLoginProviders() {
        return this.client.request({
          uri: "/auth/providers"
        });
      },
      logout: function logout() {
        return this.client.request({
          uri: "/auth/logout",
          method: "POST"
        });
      }
    });
    module.exports = AuthClient;
  }
});

// node_modules/nano-pubsub/index.js
var require_nano_pubsub = __commonJS({
  "node_modules/nano-pubsub/index.js"(exports, module) {
    init_react();
    module.exports = function Pubsub() {
      var subscribers = [];
      return {
        subscribe,
        publish
      };
      function subscribe(subscriber) {
        subscribers.push(subscriber);
        return function unsubscribe() {
          var idx = subscribers.indexOf(subscriber);
          if (idx > -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
      function publish() {
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(null, arguments);
        }
      }
    };
  }
});

// node_modules/get-it/lib/util/middlewareReducer.js
var require_middlewareReducer = __commonJS({
  "node_modules/get-it/lib/util/middlewareReducer.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(middleware) {
      var applyMiddleware = function applyMiddleware2(hook, defaultValue) {
        var bailEarly = hook === "onError";
        var value = defaultValue;
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        for (var i = 0; i < middleware[hook].length; i++) {
          var handler = middleware[hook][i];
          value = handler.apply(void 0, [value].concat(args));
          if (bailEarly && !value) {
            break;
          }
        }
        return value;
      };
      return applyMiddleware;
    };
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports) {
    "use strict";
    init_react();
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode2(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if (typeof prefix !== "string")
        prefix = "?";
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode2(key);
          value = encode2(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports.stringify = querystringify;
    exports.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports, module) {
    "use strict";
    init_react();
    var required = require_requires_port();
    var qs = require_querystringify();
    var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    var CRHTLF = /[\n\r\t]/g;
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var port = /:\d+$/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
    var windowsDriveLetter = /^[a-zA-Z]:/;
    function trimLeft(str) {
      return (str ? str : "").toString().replace(controlOrWhitespace, "");
    }
    var rules = [
      ["#", "hash"],
      ["?", "query"],
      function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
      },
      ["/", "pathname"],
      ["@", "auth", 1],
      [NaN, "host", void 0, 1, 1],
      [/:(\d*)$/, "port", void 0, 1],
      [NaN, "hostname", void 0, 1, 1]
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof globalThis !== "undefined")
        globalVar = globalThis;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key;
      if (loc.protocol === "blob:") {
        finaldestination = new Url2(unescape(loc.pathname), {});
      } else if (type === "string") {
        finaldestination = new Url2(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if (type === "object") {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function isSpecial(scheme) {
      return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
    }
    function extractProtocol(address, location) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      location = location || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : "";
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;
      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }
      if (protocol === "file:") {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
      }
      return {
        protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount,
        rest
      };
    }
    function resolve(relative, base2) {
      if (relative === "")
        return base2;
      var path = (base2 || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url2(address, location, parser) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      if (!(this instanceof Url2)) {
        return new Url2(address, location, parser);
      }
      var relative, extracted, parse3, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if (type !== "object" && type !== "string") {
        parser = location;
        location = null;
      }
      if (parser && typeof parser !== "function")
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "", location);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, "pathname"];
      }
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address, url);
          continue;
        }
        parse3 = instruction[0];
        key = instruction[1];
        if (parse3 !== parse3) {
          url[key] = address;
        } else if (typeof parse3 === "string") {
          index = parse3 === "@" ? address.lastIndexOf(parse3) : address.indexOf(parse3);
          if (~index) {
            if (typeof instruction[2] === "number") {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse3.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        index = url.auth.indexOf(":");
        if (~index) {
          url.username = url.auth.slice(0, index);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = url.auth.slice(index + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
      }
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if (typeof value === "string" && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (port.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        case "username":
        case "password":
          url[part] = encodeURIComponent(value);
          break;
        case "auth":
          var index = value.indexOf(":");
          if (~index) {
            url.username = value.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = value.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
          } else {
            url.username = encodeURIComponent(decodeURIComponent(value));
          }
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.auth = url.password ? url.username + ":" + url.password : url.username;
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify2) {
      if (!stringify2 || typeof stringify2 !== "function")
        stringify2 = qs.stringify;
      var query, url = this, host = url.host, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      } else if (url.password) {
        result += ":" + url.password;
        result += "@";
      } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        result += "@";
      }
      if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
      }
      result += host + url.pathname;
      query = typeof url.query === "object" ? stringify2(url.query) : url.query;
      if (query)
        result += query.charAt(0) !== "?" ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url2.prototype = { set, toString };
    Url2.extractProtocol = extractProtocol;
    Url2.location = lolcation;
    Url2.trimLeft = trimLeft;
    Url2.qs = qs;
    module.exports = Url2;
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsProcessor.js
var require_defaultOptionsProcessor = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsProcessor.js"(exports, module) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    var urlParse2 = require_url_parse();
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var has = Object.prototype.hasOwnProperty;
    var defaultOptions = {
      timeout: isReactNative ? 6e4 : 12e4
    };
    module.exports = function(opts) {
      var options = typeof opts === "string" ? objectAssign({
        url: opts
      }, defaultOptions) : objectAssign({}, defaultOptions, opts);
      var url = urlParse2(options.url, {}, true);
      options.timeout = normalizeTimeout(options.timeout);
      if (options.query) {
        url.query = objectAssign({}, url.query, removeUndefined(options.query));
      }
      options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
      options.url = url.toString(stringifyQueryString);
      return options;
    };
    function stringifyQueryString(obj) {
      var pairs = [];
      for (var key in obj) {
        if (has.call(obj, key)) {
          push(key, obj[key]);
        }
      }
      return pairs.length ? pairs.join("&") : "";
      function push(key2, val) {
        if (Array.isArray(val)) {
          val.forEach(function(item) {
            return push(key2, item);
          });
        } else {
          pairs.push([key2, val].map(encodeURIComponent).join("="));
        }
      }
    }
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      var delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return {
        connect: delay,
        socket: delay
      };
    }
    function removeUndefined(obj) {
      var target = {};
      for (var key in obj) {
        if (obj[key] !== void 0) {
          target[key] = obj[key];
        }
      }
      return target;
    }
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsValidator.js
var require_defaultOptionsValidator = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsValidator.js"(exports, module) {
    "use strict";
    init_react();
    var validUrl = /^https?:\/\//i;
    module.exports = function(options) {
      if (!validUrl.test(options.url)) {
        throw new Error('"'.concat(options.url, '" is not a valid URL'));
      }
    };
  }
});

// node-modules-polyfills:punycode
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  var parts = string.split("@");
  var result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  var labels = string.split(".");
  var encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function digitToBasic(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}
function encode(input) {
  var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
  input = ucs2decode(input);
  inputLength = input.length;
  n = initialN;
  delta = 0;
  bias = initialBias;
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  handledCPCount = basicLength = output.length;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < n && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        for (q = delta, k = base; ; k += base) {
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n;
  }
  return output.join("");
}
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode;
var init_punycode = __esm({
  "node-modules-polyfills:punycode"() {
    init_react();
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexNonASCII = /[^\x20-\x7E]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
  }
});

// node-modules-polyfills:querystring
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function stringifyPrimitive(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
}
function stringify(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return map2(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map2(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
}
function map2(xs, f) {
  if (xs.map)
    return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}
function parse(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
}
var isArray, objectKeys;
var init_querystring = __esm({
  "node-modules-polyfills:querystring"() {
    init_react();
    isArray = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
    objectKeys = Object.keys || function(obj) {
      var res = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          res.push(key);
      }
      return res;
    };
  }
});

// node-modules-polyfills:url
var url_exports = {};
__export(url_exports, {
  Url: () => Url,
  default: () => url_default,
  format: () => urlFormat,
  parse: () => urlParse,
  resolve: () => urlResolve,
  resolveObject: () => urlResolveObject
});
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url)
    return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
function parse2(self2, url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }
  var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, "/");
  url = uSplit.join(splitter);
  var rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self2.path = rest;
      self2.href = rest;
      self2.pathname = simplePath[1];
      if (simplePath[2]) {
        self2.search = simplePath[2];
        if (parseQueryString) {
          self2.query = parse(self2.search.substr(1));
        } else {
          self2.query = self2.search.substr(1);
        }
      } else if (parseQueryString) {
        self2.search = "";
        self2.query = {};
      }
      return self2;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self2.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self2.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self2.auth = decodeURIComponent(auth);
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;
    self2.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    parseHost(self2);
    self2.hostname = self2.hostname || "";
    var ipv6Hostname = self2.hostname[0] === "[" && self2.hostname[self2.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = self2.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part)
          continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = "/" + notHost.join(".") + rest;
            }
            self2.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (self2.hostname.length > hostnameMaxLen) {
      self2.hostname = "";
    } else {
      self2.hostname = self2.hostname.toLowerCase();
    }
    if (!ipv6Hostname) {
      self2.hostname = toASCII(self2.hostname);
    }
    p = self2.port ? ":" + self2.port : "";
    var h = self2.hostname || "";
    self2.host = h + p;
    self2.href += self2.host;
    if (ipv6Hostname) {
      self2.hostname = self2.hostname.substr(1, self2.hostname.length - 2);
      if (rest[0] !== "/") {
        rest = "/" + rest;
      }
    }
  }
  if (!unsafeProtocol[lowerProto]) {
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    self2.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    self2.search = rest.substr(qm);
    self2.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self2.query = parse(self2.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    self2.search = "";
    self2.query = {};
  }
  if (rest)
    self2.pathname = rest;
  if (slashedProtocol[lowerProto] && self2.hostname && !self2.pathname) {
    self2.pathname = "/";
  }
  if (self2.pathname || self2.search) {
    p = self2.pathname || "";
    var s = self2.search || "";
    self2.path = p + s;
  }
  self2.href = format(self2);
  return self2;
}
function urlFormat(obj) {
  if (isString(obj))
    obj = parse2({}, obj);
  return format(obj);
}
function format(self2) {
  var auth = self2.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var protocol = self2.protocol || "", pathname = self2.pathname || "", hash = self2.hash || "", host = false, query = "";
  if (self2.host) {
    host = auth + self2.host;
  } else if (self2.hostname) {
    host = auth + (self2.hostname.indexOf(":") === -1 ? self2.hostname : "[" + this.hostname + "]");
    if (self2.port) {
      host += ":" + self2.port;
    }
  }
  if (self2.query && isObject(self2.query) && Object.keys(self2.query).length) {
    query = stringify(self2.query);
  }
  var search = self2.search || query && "?" + query || "";
  if (protocol && protocol.substr(-1) !== ":")
    protocol += ":";
  if (self2.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = "//" + (host || "");
    if (pathname && pathname.charAt(0) !== "/")
      pathname = "/" + pathname;
  } else if (!host) {
    host = "";
  }
  if (hash && hash.charAt(0) !== "#")
    hash = "#" + hash;
  if (search && search.charAt(0) !== "?")
    search = "?" + search;
  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return protocol + host + pathname + search + hash;
}
function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}
function urlResolveObject(source, relative) {
  if (!source)
    return relative;
  return urlParse(source, false, true).resolveObject(relative);
}
function parseHost(self2) {
  var host = self2.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      self2.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host)
    self2.hostname = host;
}
var url_default, protocolPattern, portPattern, simplePathPattern, delims, unwise, autoEscape, nonHostChars, hostEndingChars, hostnameMaxLen, hostnamePartPattern, hostnamePartStart, unsafeProtocol, hostlessProtocol, slashedProtocol;
var init_url = __esm({
  "node-modules-polyfills:url"() {
    init_react();
    init_punycode();
    init_util();
    init_querystring();
    url_default = {
      parse: urlParse,
      resolve: urlResolve,
      resolveObject: urlResolveObject,
      format: urlFormat,
      Url
    };
    protocolPattern = /^([a-z0-9.+-]+:)/i;
    portPattern = /:[0-9]*$/;
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    autoEscape = ["'"].concat(unwise);
    nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    hostEndingChars = ["/", "?", "#"];
    hostnameMaxLen = 255;
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      return parse2(this, url, parseQueryString, slashesDenoteHost);
    };
    Url.prototype.format = function() {
      return format(this);
    };
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    Url.prototype.resolveObject = function(relative) {
      if (isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      var relPath;
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      relPath = relative.pathname && relative.pathname.split("/") || [];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      var authInHost;
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      return parseHost(this);
    };
  }
});

// node-modules-polyfills-commonjs:url
var require_url = __commonJS({
  "node-modules-polyfills-commonjs:url"(exports, module) {
    init_react();
    var polyfill = (init_url(), __toCommonJS(url_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/same-origin/index.js
var require_same_origin = __commonJS({
  "node_modules/same-origin/index.js"(exports, module) {
    "use strict";
    init_react();
    var url = require_url();
    module.exports = function(uri1, uri2, ieMode) {
      if (uri1 === uri2) {
        return true;
      }
      var url1 = url.parse(uri1, false, true);
      var url2 = url.parse(uri2, false, true);
      var url1Port = url1.port | 0 || (url1.protocol === "https" ? 443 : 80);
      var url2Port = url2.port | 0 || (url2.protocol === "https" ? 443 : 80);
      var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
      };
      return match.proto && match.hostname && (match.port || ieMode);
    };
  }
});

// node_modules/parse-headers/parse-headers.js
var require_parse_headers = __commonJS({
  "node_modules/parse-headers/parse-headers.js"(exports, module) {
    init_react();
    var trim = function(string) {
      return string.replace(/^\s+|\s+$/g, "");
    };
    var isArray2 = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
    module.exports = function(headers) {
      if (!headers)
        return {};
      var result = {};
      var headersArr = trim(headers).split("\n");
      for (var i = 0; i < headersArr.length; i++) {
        var row = headersArr[i];
        var index = row.indexOf(":"), key = trim(row.slice(0, index)).toLowerCase(), value = trim(row.slice(index + 1));
        if (typeof result[key] === "undefined") {
          result[key] = value;
        } else if (isArray2(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      }
      return result;
    };
  }
});

// node_modules/get-it/lib/request/browser/fetchXhr.js
var require_fetchXhr = __commonJS({
  "node_modules/get-it/lib/request/browser/fetchXhr.js"(exports, module) {
    "use strict";
    init_react();
    function FetchXhr() {
      this.readyState = 0;
    }
    FetchXhr.prototype.open = function(method, url) {
      this._method = method;
      this._url = url;
      this._resHeaders = "";
      this.readyState = 1;
      this.onreadystatechange();
    };
    FetchXhr.prototype.abort = function() {
      if (this._controller) {
        this._controller.abort();
      }
    };
    FetchXhr.prototype.getAllResponseHeaders = function() {
      return this._resHeaders;
    };
    FetchXhr.prototype.setRequestHeader = function(key, value) {
      this._headers = this._headers || {};
      this._headers[key] = value;
    };
    FetchXhr.prototype.send = function(body) {
      var _this = this;
      var ctrl = this._controller = typeof AbortController === "function" && new AbortController();
      var textBody = this.responseType !== "arraybuffer";
      var options = {
        method: this._method,
        headers: this._headers,
        signal: ctrl && ctrl.signal,
        body
      };
      if (typeof window !== "undefined") {
        options.credentials = this.withCredentials ? "include" : "omit";
      }
      fetch(this._url, options).then(function(res) {
        res.headers.forEach(function(value, key) {
          _this._resHeaders += "".concat(key, ": ").concat(value, "\r\n");
        });
        _this.status = res.status;
        _this.statusText = res.statusText;
        _this.readyState = 3;
        return textBody ? res.text() : res.arrayBuffer();
      }).then(function(resBody) {
        if (textBody) {
          _this.responseText = resBody;
        } else {
          _this.response = resBody;
        }
        _this.readyState = 4;
        _this.onreadystatechange();
      }).catch(function(err) {
        if (err.name === "AbortError") {
          _this.onabort();
          return;
        }
        _this.onerror(err);
      });
    };
    module.exports = FetchXhr;
  }
});

// node_modules/get-it/lib/request/browser-request.js
var require_browser_request = __commonJS({
  "node_modules/get-it/lib/request/browser-request.js"(exports, module) {
    "use strict";
    init_react();
    var sameOrigin = require_same_origin();
    var parseHeaders = require_parse_headers();
    var FetchXhr = require_fetchXhr();
    var noop = function noop2() {
    };
    var win = typeof window === "undefined" ? void 0 : window;
    var adapter = win ? "xhr" : "fetch";
    var XmlHttpRequest = typeof XMLHttpRequest === "function" ? XMLHttpRequest : noop;
    var hasXhr2 = "withCredentials" in new XmlHttpRequest();
    var XDR = typeof XDomainRequest === "undefined" ? void 0 : XDomainRequest;
    var CrossDomainRequest = hasXhr2 ? XmlHttpRequest : XDR;
    if (!win) {
      XmlHttpRequest = FetchXhr;
      CrossDomainRequest = FetchXhr;
    }
    module.exports = function(context, callback) {
      var opts = context.options;
      var options = context.applyMiddleware("finalizeOptions", opts);
      var timers = {};
      var cors = win && win.location && !sameOrigin(win.location.href, options.url);
      var injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
      });
      if (injectedResponse) {
        var cbTimer = setTimeout(callback, 0, null, injectedResponse);
        var cancel = function cancel2() {
          return clearTimeout(cbTimer);
        };
        return {
          abort: cancel
        };
      }
      var xhr = cors ? new CrossDomainRequest() : new XmlHttpRequest();
      var isXdr = win && win.XDomainRequest && xhr instanceof win.XDomainRequest;
      var headers = options.headers;
      var delays = options.timeout;
      var aborted = false;
      var loaded = false;
      var timedOut = false;
      xhr.onerror = onError;
      xhr.ontimeout = onError;
      xhr.onabort = function() {
        stopTimers(true);
        aborted = true;
      };
      xhr.onprogress = function() {
      };
      var loadEvent = isXdr ? "onload" : "onreadystatechange";
      xhr[loadEvent] = function() {
        resetTimers();
        if (aborted || xhr.readyState !== 4 && !isXdr) {
          return;
        }
        if (xhr.status === 0) {
          return;
        }
        onLoad();
      };
      xhr.open(options.method, options.url, true);
      xhr.withCredentials = !!options.withCredentials;
      if (headers && xhr.setRequestHeader) {
        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } else if (headers && isXdr) {
        throw new Error("Headers cannot be set on an XDomainRequest object");
      }
      if (options.rawBody) {
        xhr.responseType = "arraybuffer";
      }
      context.applyMiddleware("onRequest", {
        options,
        adapter,
        request: xhr,
        context
      });
      xhr.send(options.body || null);
      if (delays) {
        timers.connect = setTimeout(function() {
          return timeoutRequest("ETIMEDOUT");
        }, delays.connect);
      }
      return {
        abort
      };
      function abort() {
        aborted = true;
        if (xhr) {
          xhr.abort();
        }
      }
      function timeoutRequest(code) {
        timedOut = true;
        xhr.abort();
        var error2 = new Error(code === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(options.url) : "Connection timed out on request to ".concat(options.url));
        error2.code = code;
        context.channels.error.publish(error2);
      }
      function resetTimers() {
        if (!delays) {
          return;
        }
        stopTimers();
        timers.socket = setTimeout(function() {
          return timeoutRequest("ESOCKETTIMEDOUT");
        }, delays.socket);
      }
      function stopTimers(force) {
        if (force || aborted || xhr.readyState >= 2 && timers.connect) {
          clearTimeout(timers.connect);
        }
        if (timers.socket) {
          clearTimeout(timers.socket);
        }
      }
      function onError(error2) {
        if (loaded) {
          return;
        }
        stopTimers(true);
        loaded = true;
        xhr = null;
        var err = error2 || new Error("Network error while attempting to reach ".concat(options.url));
        err.isNetworkError = true;
        err.request = options;
        callback(err);
      }
      function reduceResponse() {
        var statusCode = xhr.status;
        var statusMessage = xhr.statusText;
        if (isXdr && statusCode === void 0) {
          statusCode = 200;
        } else if (statusCode > 12e3 && statusCode < 12156) {
          return onError();
        } else {
          statusCode = xhr.status === 1223 ? 204 : xhr.status;
          statusMessage = xhr.status === 1223 ? "No Content" : statusMessage;
        }
        return {
          body: xhr.response || xhr.responseText,
          url: options.url,
          method: options.method,
          headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
          statusCode,
          statusMessage
        };
      }
      function onLoad() {
        if (aborted || loaded || timedOut) {
          return;
        }
        if (xhr.status === 0) {
          onError(new Error("Unknown XHR error"));
          return;
        }
        stopTimers();
        loaded = true;
        callback(null, reduceResponse());
      }
    };
  }
});

// node_modules/get-it/lib/request/index.js
var require_request = __commonJS({
  "node_modules/get-it/lib/request/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_browser_request();
  }
});

// node_modules/get-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/get-it/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    var pubsub = require_nano_pubsub();
    var middlewareReducer = require_middlewareReducer();
    var processOptions = require_defaultOptionsProcessor();
    var validateOptions = require_defaultOptionsValidator();
    var httpRequester = require_request();
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    module.exports = function createRequester() {
      var initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var httpRequest = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : httpRequester;
      var loadedMiddleware = [];
      var middleware = middlehooks.reduce(function(ware, name) {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [processOptions],
        validateOptions: [validateOptions]
      });
      function request(opts) {
        var channels = channelNames.reduce(function(target, name) {
          target[name] = pubsub();
          return target;
        }, {});
        var applyMiddleware = middlewareReducer(middleware);
        var options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        var context = {
          options,
          channels,
          applyMiddleware
        };
        var ongoingRequest = null;
        var unsubscribe = channels.request.subscribe(function(ctx) {
          ongoingRequest = httpRequest(ctx, function(err, res) {
            return onResponse(err, res, ctx);
          });
        });
        channels.abort.subscribe(function() {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        var returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
          channels.request.publish(context);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
          var error2 = reqErr;
          var response = res;
          if (!error2) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error2 = err;
            }
          }
          error2 = error2 && applyMiddleware("onError", error2, ctx);
          if (error2) {
            channels.error.publish(error2);
          } else if (response) {
            channels.response.publish(response);
          }
        }
      }
      request.use = function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach(function(key) {
          if (newMiddleware[key]) {
            middleware[key].push(newMiddleware[key]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      };
      request.clone = function clone() {
        return createRequester(loadedMiddleware);
      };
      initMiddleware.forEach(request.use);
      return request;
    };
  }
});

// node_modules/get-it/index.js
var require_get_it = __commonJS({
  "node_modules/get-it/index.js"(exports, module) {
    init_react();
    module.exports = require_lib();
  }
});

// node_modules/get-it/lib/util/global.js
var require_global = __commonJS({
  "node_modules/get-it/lib/util/global.js"(exports, module) {
    "use strict";
    init_react();
    if (typeof globalThis !== "undefined") {
      module.exports = globalThis;
    } else if (typeof window !== "undefined") {
      module.exports = window;
    } else if (typeof globalThis !== "undefined") {
      module.exports = globalThis;
    } else if (typeof self !== "undefined") {
      module.exports = self;
    } else {
      module.exports = {};
    }
  }
});

// node_modules/get-it/lib/middleware/observable.js
var require_observable3 = __commonJS({
  "node_modules/get-it/lib/middleware/observable.js"(exports, module) {
    "use strict";
    init_react();
    var global2 = require_global();
    var objectAssign = require_object_assign();
    module.exports = function() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var Observable = opts.implementation || global2.Observable;
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: function onReturn(channels, context) {
          return new Observable(function(observer) {
            channels.error.subscribe(function(err) {
              return observer.error(err);
            });
            channels.progress.subscribe(function(event) {
              return observer.next(objectAssign({
                type: "progress"
              }, event));
            });
            channels.response.subscribe(function(response) {
              observer.next(objectAssign({
                type: "response"
              }, response));
              observer.complete();
            });
            channels.request.publish(context);
            return function() {
              return channels.abort.publish();
            };
          });
        }
      };
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isObject2(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    init_react();
    var isObject2 = require_isobject();
    function isObjectObject(o) {
      return isObject2(o) === true && Object.prototype.toString.call(o) === "[object Object]";
    }
    module.exports = function isPlainObject(o) {
      var ctor, prot;
      if (isObjectObject(o) === false)
        return false;
      ctor = o.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib/middleware/jsonRequest.js
var require_jsonRequest = __commonJS({
  "node_modules/get-it/lib/middleware/jsonRequest.js"(exports, module) {
    "use strict";
    init_react();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var objectAssign = require_object_assign();
    var isPlainObject = require_is_plain_object();
    var serializeTypes = ["boolean", "string", "number"];
    var isBuffer = function isBuffer2(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
    module.exports = function() {
      return {
        processOptions: function processOptions(options) {
          var body = options.body;
          if (!body) {
            return options;
          }
          var isStream = typeof body.pipe === "function";
          var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(_typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));
          if (!shouldSerialize) {
            return options;
          }
          return objectAssign({}, options, {
            body: JSON.stringify(options.body),
            headers: objectAssign({}, options.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/jsonResponse.js
var require_jsonResponse = __commonJS({
  "node_modules/get-it/lib/middleware/jsonResponse.js"(exports, module) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    module.exports = function(opts) {
      return {
        onResponse: function onResponse(response) {
          var contentType = response.headers["content-type"] || "";
          var shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return objectAssign({}, response, {
            body: tryParse(response.body)
          });
        },
        processOptions: function processOptions(options) {
          return objectAssign({}, options, {
            headers: objectAssign({
              Accept: "application/json"
            }, options.headers)
          });
        }
      };
    };
    function tryParse(body) {
      try {
        return JSON.parse(body);
      } catch (err) {
        err.message = "Failed to parsed response body as JSON: ".concat(err.message);
        throw err;
      }
    }
  }
});

// node_modules/get-it/lib/middleware/progress/browser-progress.js
var require_browser_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/browser-progress.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function() {
      return {
        onRequest: function onRequest(evt) {
          if (evt.adapter !== "xhr") {
            return;
          }
          var xhr = evt.request;
          var context = evt.context;
          if ("upload" in xhr && "onprogress" in xhr.upload) {
            xhr.upload.onprogress = handleProgress("upload");
          }
          if ("onprogress" in xhr) {
            xhr.onprogress = handleProgress("download");
          }
          function handleProgress(stage) {
            return function(event) {
              var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
              context.channels.progress.publish({
                stage,
                percent,
                total: event.total,
                loaded: event.loaded,
                lengthComputable: event.lengthComputable
              });
            };
          }
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/progress/index.js
var require_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_browser_progress();
  }
});

// node_modules/make-error/index.js
var require_make_error = __commonJS({
  "node_modules/make-error/index.js"(exports, module) {
    "use strict";
    init_react();
    var construct = typeof Reflect !== "undefined" ? Reflect.construct : void 0;
    var defineProperty = Object.defineProperty;
    var captureStackTrace = Error.captureStackTrace;
    if (captureStackTrace === void 0) {
      captureStackTrace = function captureStackTrace2(error2) {
        var container = new Error();
        defineProperty(error2, "stack", {
          configurable: true,
          get: function getStack() {
            var stack = container.stack;
            defineProperty(this, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
            return stack;
          },
          set: function setStack(stack) {
            defineProperty(error2, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
          }
        });
      };
    }
    function BaseError(message) {
      if (message !== void 0) {
        defineProperty(this, "message", {
          configurable: true,
          value: message,
          writable: true
        });
      }
      var cname = this.constructor.name;
      if (cname !== void 0 && cname !== this.name) {
        defineProperty(this, "name", {
          configurable: true,
          value: cname,
          writable: true
        });
      }
      captureStackTrace(this, this.constructor);
    }
    BaseError.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: BaseError,
        writable: true
      }
    });
    var setFunctionName = function() {
      function setFunctionName2(fn, name) {
        return defineProperty(fn, "name", {
          configurable: true,
          value: name
        });
      }
      try {
        var f = function() {
        };
        setFunctionName2(f, "foo");
        if (f.name === "foo") {
          return setFunctionName2;
        }
      } catch (_) {
      }
    }();
    function makeError(constructor, super_) {
      if (super_ == null || super_ === Error) {
        super_ = BaseError;
      } else if (typeof super_ !== "function") {
        throw new TypeError("super_ should be a function");
      }
      var name;
      if (typeof constructor === "string") {
        name = constructor;
        constructor = construct !== void 0 ? function() {
          return construct(super_, arguments, this.constructor);
        } : function() {
          super_.apply(this, arguments);
        };
        if (setFunctionName !== void 0) {
          setFunctionName(constructor, name);
          name = void 0;
        }
      } else if (typeof constructor !== "function") {
        throw new TypeError("constructor should be either a string or a function");
      }
      constructor.super_ = constructor["super"] = super_;
      var properties = {
        constructor: {
          configurable: true,
          value: constructor,
          writable: true
        }
      };
      if (name !== void 0) {
        properties.name = {
          configurable: true,
          value: name,
          writable: true
        };
      }
      constructor.prototype = Object.create(super_.prototype, properties);
      return constructor;
    }
    exports = module.exports = makeError;
    exports.BaseError = BaseError;
  }
});

// node_modules/@sanity/client/lib/http/errors.js
var require_errors = __commonJS({
  "node_modules/@sanity/client/lib/http/errors.js"(exports) {
    "use strict";
    init_react();
    var makeError = require_make_error();
    var assign = require_object_assign();
    function ClientError(res) {
      var props = extractErrorProps(res);
      ClientError.super.call(this, props.message);
      assign(this, props);
    }
    function ServerError(res) {
      var props = extractErrorProps(res);
      ServerError.super.call(this, props.message);
      assign(this, props);
    }
    function extractErrorProps(res) {
      var body = res.body;
      var props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res)
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    function httpErrorMessage(res) {
      var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    function stringifyBody(body, res) {
      var contentType = (res.headers["content-type"] || "").toLowerCase();
      var isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    makeError(ClientError);
    makeError(ServerError);
    exports.ClientError = ClientError;
    exports.ServerError = ServerError;
  }
});

// node_modules/@sanity/client/lib/http/browserMiddleware.js
var require_browserMiddleware = __commonJS({
  "node_modules/@sanity/client/lib/http/browserMiddleware.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = [];
  }
});

// node_modules/@sanity/client/lib/http/request.js
var require_request2 = __commonJS({
  "node_modules/@sanity/client/lib/http/request.js"(exports, module) {
    "use strict";
    init_react();
    var getIt = require_get_it();
    var assign = require_object_assign();
    var observable = require_observable3();
    var jsonRequest = require_jsonRequest();
    var jsonResponse = require_jsonResponse();
    var progress = require_progress();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var _require2 = require_errors();
    var ClientError = _require2.ClientError;
    var ServerError = _require2.ServerError;
    var httpError = {
      onResponse: function onResponse(res) {
        if (res.statusCode >= 500) {
          throw new ServerError(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: function onResponse(res) {
        var warn = res.headers["x-sanity-warning"];
        var warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach(function(msg) {
          return console.warn(msg);
        });
        return res;
      }
    };
    var envSpecific = require_browserMiddleware();
    var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
      implementation: Observable
    })]);
    var request = getIt(middleware);
    function httpRequest(options) {
      var requester = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
      return requester(assign({
        maxRedirects: 0
      }, options));
    }
    httpRequest.defaultRequester = request;
    httpRequest.ClientError = ClientError;
    httpRequest.ServerError = ServerError;
    module.exports = httpRequest;
  }
});

// node_modules/@sanity/client/lib/http/requestOptions.js
var require_requestOptions = __commonJS({
  "node_modules/@sanity/client/lib/http/requestOptions.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    var projectHeader = "X-Sanity-Project-ID";
    module.exports = function(config) {
      var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var headers = {};
      var token = overrides.token || config.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
      }
      var withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
      var timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
      return assign({}, overrides, {
        headers: assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: true,
        withCredentials
      });
    };
  }
});

// node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/generate-help-url/index.js"(exports, module) {
    init_react();
    var baseUrl = "https://docs.sanity.io/help/";
    module.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/client/lib/util/once.js
var require_once = __commonJS({
  "node_modules/@sanity/client/lib/util/once.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(fn) {
      var didCall = false;
      var returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn.apply(void 0, arguments);
        didCall = true;
        return returnValue;
      };
    };
  }
});

// node_modules/@sanity/client/lib/warnings.js
var require_warnings = __commonJS({
  "node_modules/@sanity/client/lib/warnings.js"(exports) {
    "use strict";
    init_react();
    var generateHelpUrl = require_generate_help_url();
    var once = require_once();
    var createWarningPrinter = function createWarningPrinter2(message) {
      return once(function() {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_console = console).warn.apply(_console, [message.join(" ")].concat(args));
      });
    };
    exports.printCdnWarning = createWarningPrinter(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(generateHelpUrl("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
    exports.printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    exports.printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
  }
});

// node_modules/@sanity/client/lib/config.js
var require_config2 = __commonJS({
  "node_modules/@sanity/client/lib/config.js"(exports) {
    "use strict";
    init_react();
    var generateHelpUrl = require_generate_help_url();
    var assign = require_object_assign();
    var validate = require_validators();
    var warnings = require_warnings();
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      isPromiseAPI: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = function isLocal2(host) {
      return LOCALHOSTS.indexOf(host) !== -1;
    };
    exports.defaultConfig = defaultConfig;
    exports.initConfig = function(config, prevConfig) {
      var specifiedConfig = assign({}, prevConfig, config);
      if (!specifiedConfig.apiVersion) {
        warnings.printNoApiVersionSpecifiedWarning();
      }
      var newConfig = assign({}, defaultConfig, specifiedConfig);
      var projectBased = newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        var helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      var isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
      var isLocalhost = isBrowser && isLocal(window.location.hostname);
      if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        warnings.printBrowserTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        warnings.printCdnWarning();
      }
      if (projectBased) {
        validate.projectId(newConfig.projectId);
      }
      if (newConfig.dataset) {
        validate.dataset(newConfig.dataset);
      }
      if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? validate.requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.withCredentials;
      exports.validateApiVersion(newConfig.apiVersion);
      var hostParts = newConfig.apiHost.split("://", 2);
      var protocol = hostParts[0];
      var host = hostParts[1];
      var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
      if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
      } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = newConfig.url;
      }
      return newConfig;
    };
    exports.validateApiVersion = function validateApiVersion(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      var apiDate = new Date(apiVersion);
      var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    };
  }
});

// node_modules/@sanity/client/lib/sanityClient.js
var require_sanityClient = __commonJS({
  "node_modules/@sanity/client/lib/sanityClient.js"(exports, module) {
    "use strict";
    init_react();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var map3 = _require.map;
    var filter = _require.filter;
    var Patch = require_patch();
    var Transaction = require_transaction();
    var dataMethods = require_dataMethods();
    var DatasetsClient = require_datasetsClient();
    var ProjectsClient = require_projectsClient();
    var AssetsClient = require_assetsClient();
    var UsersClient = require_usersClient();
    var AuthClient = require_authClient();
    var httpRequest = require_request2();
    var getRequestOptions = require_requestOptions();
    var _require2 = require_config2();
    var defaultConfig = _require2.defaultConfig;
    var initConfig = _require2.initConfig;
    var validate = require_validators();
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    function SanityClient() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
      if (!(this instanceof SanityClient)) {
        return new SanityClient(config);
      }
      this.config(config);
      this.assets = new AssetsClient(this);
      this.datasets = new DatasetsClient(this);
      this.projects = new ProjectsClient(this);
      this.users = new UsersClient(this);
      this.auth = new AuthClient(this);
      if (this.clientConfig.isPromiseAPI) {
        var observableConfig = assign({}, this.clientConfig, {
          isPromiseAPI: false
        });
        this.observable = new SanityClient(observableConfig);
      }
    }
    assign(SanityClient.prototype, dataMethods);
    assign(SanityClient.prototype, {
      clone: function clone() {
        return new SanityClient(this.config());
      },
      config: function config(newConfig) {
        if (typeof newConfig === "undefined") {
          return assign({}, this.clientConfig);
        }
        if (this.observable) {
          var observableConfig = assign({}, newConfig, {
            isPromiseAPI: false
          });
          this.observable.config(observableConfig);
        }
        this.clientConfig = initConfig(newConfig, this.clientConfig || {});
        return this;
      },
      withConfig: function withConfig(newConfig) {
        return this.clone().config(newConfig);
      },
      getUrl: function getUrl(uri) {
        var useCdn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var base2 = useCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
        return "".concat(base2, "/").concat(uri.replace(/^\//, ""));
      },
      isPromiseAPI: function isPromiseAPI() {
        return this.clientConfig.isPromiseAPI;
      },
      _requestObservable: function _requestObservable(options) {
        var _this = this;
        var uri = options.url || options.uri;
        var canUseCdn = typeof options.canUseCdn === "undefined" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
        var useCdn = this.clientConfig.useCdn && canUseCdn;
        var tag = options.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, options.tag].join(".") : options.tag || this.clientConfig.requestTagPrefix;
        if (tag) {
          options.query = _objectSpread({
            tag: validate.requestTag(tag)
          }, options.query);
        }
        var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
          url: this.getUrl(uri, useCdn)
        }));
        return new Observable(function(subscriber) {
          return httpRequest(reqOptions, _this.clientConfig.requester).subscribe(subscriber);
        });
      },
      request: function request(options) {
        var observable = this._requestObservable(options).pipe(filter(function(event) {
          return event.type === "response";
        }), map3(function(event) {
          return event.body;
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      }
    });
    SanityClient.Patch = Patch;
    SanityClient.Transaction = Transaction;
    SanityClient.ClientError = httpRequest.ClientError;
    SanityClient.ServerError = httpRequest.ServerError;
    SanityClient.requester = httpRequest.defaultRequester;
    module.exports = SanityClient;
  }
});

// app/client.js
var require_client = __commonJS({
  "app/client.js"(exports, module) {
    init_react();
    var sanityClient = require_sanityClient();
    module.exports = sanityClient({
      projectId: "ufdizlou",
      dataset: "production",
      useCdn: "true",
      apiVersion: "2022-03-07"
    });
  }
});

// node_modules/groq/lib/groq.js
var require_groq = __commonJS({
  "node_modules/groq/lib/groq.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function groq2(strings) {
      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }
      var lastIndex = strings.length - 1;
      return strings.slice(0, lastIndex).reduce(function(acc, str, i) {
        return acc + str + keys[i];
      }, "") + strings[lastIndex];
    };
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.development.js
var require_react_dom_server_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var React2 = require_react();
        var _assign = require_object_assign();
        function formatProdErrorMessage(code) {
          var url = "https://reactjs.org/docs/error-decoder.html?invariant=" + code;
          for (var i2 = 1; i2 < arguments.length; i2++) {
            url += "&args[]=" + encodeURIComponent(arguments[i2]);
          }
          return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var ReactVersion = "17.0.2";
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format2) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format2, args);
          }
        }
        function error2(format2) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error2("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var enableSuspenseServerRenderer = false;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error2("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        }
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function maskContext(type, context) {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyObject;
          }
          var maskedContext = {};
          for (var contextName in contextTypes) {
            maskedContext[contextName] = context[contextName];
          }
          return maskedContext;
        }
        function checkContextTypes(typeSpecs, values, location) {
          {
            checkPropTypes(typeSpecs, values, location, "Component");
          }
        }
        function validateContextBounds(context, threadID) {
          for (var i2 = context._threadCount | 0; i2 <= threadID; i2++) {
            context[i2] = context._currentValue2;
            context._threadCount = i2 + 1;
          }
        }
        function processContext(type, context, threadID, isClass) {
          if (isClass) {
            var contextType = type.contextType;
            {
              if ("contextType" in type) {
                var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
                if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
                  didWarnAboutInvalidateContextType.add(type);
                  var addendum = "";
                  if (contextType === void 0) {
                    addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                  } else if (typeof contextType !== "object") {
                    addendum = " However, it is set to a " + typeof contextType + ".";
                  } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                    addendum = " Did you accidentally pass the Context.Provider instead?";
                  } else if (contextType._context !== void 0) {
                    addendum = " Did you accidentally pass the Context.Consumer instead?";
                  } else {
                    addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                  }
                  error2("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(type) || "Component", addendum);
                }
              }
            }
            if (typeof contextType === "object" && contextType !== null) {
              validateContextBounds(contextType, threadID);
              return contextType[threadID];
            }
            {
              var maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, maskedContext, "context");
                }
              }
              return maskedContext;
            }
          } else {
            {
              var _maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, _maskedContext, "context");
                }
              }
              return _maskedContext;
            }
          }
        }
        var nextAvailableThreadIDs = new Uint16Array(16);
        for (var i = 0; i < 15; i++) {
          nextAvailableThreadIDs[i] = i + 1;
        }
        nextAvailableThreadIDs[15] = 0;
        function growThreadCountAndReturnNextAvailable() {
          var oldArray = nextAvailableThreadIDs;
          var oldSize = oldArray.length;
          var newSize = oldSize * 2;
          if (!(newSize <= 65536)) {
            {
              throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
            }
          }
          var newArray = new Uint16Array(newSize);
          newArray.set(oldArray);
          nextAvailableThreadIDs = newArray;
          nextAvailableThreadIDs[0] = oldSize + 1;
          for (var _i = oldSize; _i < newSize - 1; _i++) {
            nextAvailableThreadIDs[_i] = _i + 1;
          }
          nextAvailableThreadIDs[newSize - 1] = 0;
          return oldSize;
        }
        function allocThreadID() {
          var nextID = nextAvailableThreadIDs[0];
          if (nextID === 0) {
            return growThreadCountAndReturnNextAvailable();
          }
          nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
          return nextID;
        }
        function freeThreadID(id) {
          nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
          nextAvailableThreadIDs[0] = id;
        }
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var ROOT_ATTRIBUTE_NAME = "data-reactroot";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty2.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty2.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error2("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return true;
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
          if (value === null || typeof value === "undefined") {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
            return true;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (propertyInfo !== null) {
            switch (propertyInfo.type) {
              case BOOLEAN:
                return !value;
              case OVERLOADED_BOOLEAN:
                return value === false;
              case NUMERIC:
                return isNaN(value);
              case POSITIVE_NUMERIC:
                return isNaN(value) || value < 1;
            }
          }
          return false;
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error2("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape2;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape2 = "&quot;";
                break;
              case 38:
                escape2 = "&amp;";
                break;
              case 39:
                escape2 = "&#x27;";
                break;
              case 60:
                escape2 = "&lt;";
                break;
              case 62:
                escape2 = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape2;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        function quoteAttributeValueForBrowser(value) {
          return '"' + escapeTextForBrowser(value) + '"';
        }
        function createMarkupForRoot() {
          return ROOT_ATTRIBUTE_NAME + '=""';
        }
        function createMarkupForProperty(name, value) {
          var propertyInfo = getPropertyInfo(name);
          if (name !== "style" && shouldIgnoreAttribute(name, propertyInfo, false)) {
            return "";
          }
          if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
            return "";
          }
          if (propertyInfo !== null) {
            var attributeName = propertyInfo.attributeName;
            var type = propertyInfo.type;
            if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
              return attributeName + '=""';
            } else {
              if (propertyInfo.sanitizeURL) {
                value = "" + value;
                sanitizeURL(value);
              }
              return attributeName + "=" + quoteAttributeValueForBrowser(value);
            }
          } else if (isAttributeNameSafe(name)) {
            return name + "=" + quoteAttributeValueForBrowser(value);
          }
          return "";
        }
        function createMarkupForCustomAttribute(name, value) {
          if (!isAttributeNameSafe(name) || value == null) {
            return "";
          }
          return name + "=" + quoteAttributeValueForBrowser(value);
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (!(currentlyRenderingComponent !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          {
            if (isInHookUserCodeInDev) {
              error2("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error2("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error2("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
            if (objectIs(nextDeps[i2], prevDeps[i2])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            {
              {
                throw Error("Rendered more hooks than during the previous render");
              }
            }
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          {
            isInHookUserCodeInDev = false;
          }
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext(context, observedBits) {
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          {
            if (isInHookUserCodeInDev) {
              error2("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return context[threadID];
        }
        function useContext(context, observedBits) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          return context[threadID];
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error2("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
            {
              throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            }
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback(callback, deps) {
          return useMemo(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function useTransition() {
          resolveCurrentlyRenderingComponent();
          var startTransition = function(callback) {
            callback();
          };
          return [startTransition, false];
        }
        function useOpaqueIdentifier() {
          return (currentPartialRenderer.identifierPrefix || "") + "R:" + (currentPartialRenderer.uniqueID++).toString(36);
        }
        function noop() {
        }
        var currentPartialRenderer = null;
        function setCurrentPartialRenderer(renderer) {
          currentPartialRenderer = renderer;
        }
        var Dispatcher = {
          readContext,
          useContext,
          useMemo,
          useReducer,
          useRef,
          useState,
          useLayoutEffect,
          useCallback,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue,
          useTransition,
          useOpaqueIdentifier,
          useMutableSource
        };
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var Namespaces = {
          html: HTML_NAMESPACE,
          mathml: MATH_NAMESPACE,
          svg: SVG_NAMESPACE
        };
        function getIntrinsicNamespace(type) {
          switch (type) {
            case "svg":
              return SVG_NAMESPACE;
            case "math":
              return MATH_NAMESPACE;
            default:
              return HTML_NAMESPACE;
          }
        }
        function getChildNamespace(parentNamespace, type) {
          if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
            return getIntrinsicNamespace(type);
          }
          if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
            return HTML_NAMESPACE;
          }
          return parentNamespace;
        }
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error2("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error2("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        var omittedCloseTags = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        var voidElementTags = _assign({
          menuitem: true
        }, omittedCloseTags);
        var HTML = "__html";
        function assertValidProps(tag, props) {
          if (!props) {
            return;
          }
          if (voidElementTags[tag]) {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
              {
                throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              }
            }
          }
          if (props.dangerouslySetInnerHTML != null) {
            if (!(props.children == null)) {
              {
                throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              }
            }
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML)) {
              {
                throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
              }
            }
          }
          {
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error2("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
          }
          if (!(props.style == null || typeof props.style === "object")) {
            {
              throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            }
          }
        }
        var isUnitlessNumber = {
          animationIterationCount: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        function dangerousStyleValue(name, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }
          if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return value + "px";
          }
          return ("" + value).trim();
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern$1 = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error2("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-")));
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error2("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error2(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error2("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error2("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var ariaProperties = {
          "aria-current": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error2("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error2("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error2("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error2("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error2("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error2("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error2("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var _hasOwnProperty = Object.prototype.hasOwnProperty;
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error2("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error2("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error2("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error2("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error2("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error2("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error2("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error2("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error2("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error2("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error2("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error2("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error2("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var toArray = React2.Children.toArray;
        var currentDebugStacks = [];
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1;
        var prevGetCurrentStackImpl = null;
        var getCurrentServerStackImpl = function() {
          return "";
        };
        var describeStackFrame = function(element) {
          return "";
        };
        var validatePropertiesInDevelopment = function(type, props) {
        };
        var pushCurrentDebugStack = function(stack) {
        };
        var pushElementToDebugStack = function(element) {
        };
        var popCurrentDebugStack = function() {
        };
        var hasWarnedAboutUsingContextAsConsumer = false;
        {
          ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          validatePropertiesInDevelopment = function(type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
          };
          describeStackFrame = function(element) {
            return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
          };
          pushCurrentDebugStack = function(stack) {
            currentDebugStacks.push(stack);
            if (currentDebugStacks.length === 1) {
              prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
              ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
            }
          };
          pushElementToDebugStack = function(element) {
            var stack = currentDebugStacks[currentDebugStacks.length - 1];
            var frame = stack[stack.length - 1];
            frame.debugElementStack.push(element);
          };
          popCurrentDebugStack = function() {
            currentDebugStacks.pop();
            if (currentDebugStacks.length === 0) {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
              prevGetCurrentStackImpl = null;
            }
          };
          getCurrentServerStackImpl = function() {
            if (currentDebugStacks.length === 0) {
              return "";
            }
            var frames = currentDebugStacks[currentDebugStacks.length - 1];
            var stack = "";
            for (var i2 = frames.length - 1; i2 >= 0; i2--) {
              var frame = frames[i2];
              var debugElementStack = frame.debugElementStack;
              for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
                stack += describeStackFrame(debugElementStack[ii]);
              }
            }
            return stack;
          };
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUndefinedDerivedState = {};
        var didWarnAboutUninitializedState = {};
        var valuePropNames = ["value", "defaultValue"];
        var newlineEatingTags = {
          listing: true,
          pre: true,
          textarea: true
        };
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = {};
        function validateDangerousTag(tag) {
          if (!validatedTagCache.hasOwnProperty(tag)) {
            if (!VALID_TAG_REGEX.test(tag)) {
              {
                throw Error("Invalid tag: " + tag);
              }
            }
            validatedTagCache[tag] = true;
          }
        }
        var styleNameCache = {};
        var processStyleName = function(styleName) {
          if (styleNameCache.hasOwnProperty(styleName)) {
            return styleNameCache[styleName];
          }
          var result = hyphenateStyleName(styleName);
          styleNameCache[styleName] = result;
          return result;
        };
        function createMarkupForStyles(styles) {
          var serialized = "";
          var delimiter2 = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var isCustomProperty = styleName.indexOf("--") === 0;
            var styleValue = styles[styleName];
            {
              if (!isCustomProperty) {
                warnValidStyle$1(styleName, styleValue);
              }
            }
            if (styleValue != null) {
              serialized += delimiter2 + (isCustomProperty ? styleName : processStyleName(styleName)) + ":";
              serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
              delimiter2 = ";";
            }
          }
          return serialized || null;
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentName(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error2("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function getNonChildrenInnerMarkup(props) {
          var innerHTML = props.dangerouslySetInnerHTML;
          if (innerHTML != null) {
            if (innerHTML.__html != null) {
              return innerHTML.__html;
            }
          } else {
            var content = props.children;
            if (typeof content === "string" || typeof content === "number") {
              return escapeTextForBrowser(content);
            }
          }
          return null;
        }
        function flattenTopLevelChildren(children) {
          if (!React2.isValidElement(children)) {
            return toArray(children);
          }
          var element = children;
          if (element.type !== REACT_FRAGMENT_TYPE) {
            return [element];
          }
          var fragmentChildren = element.props.children;
          if (!React2.isValidElement(fragmentChildren)) {
            return toArray(fragmentChildren);
          }
          var fragmentChildElement = fragmentChildren;
          return [fragmentChildElement];
        }
        function flattenOptionChildren(children) {
          if (children === void 0 || children === null) {
            return children;
          }
          var content = "";
          React2.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error2("Only strings and numbers are supported as <option> children.");
              }
            }
          });
          return content;
        }
        var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
        var STYLE = "style";
        var RESERVED_PROPS = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null
        };
        function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
          var ret = "<" + tagVerbatim;
          var isCustomComponent$1 = isCustomComponent(tagLowercase, props);
          for (var propKey in props) {
            if (!hasOwnProperty$2.call(props, propKey)) {
              continue;
            }
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            if (propKey === STYLE) {
              propValue = createMarkupForStyles(propValue);
            }
            var markup = null;
            if (isCustomComponent$1) {
              if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
                markup = createMarkupForCustomAttribute(propKey, propValue);
              }
            } else {
              markup = createMarkupForProperty(propKey, propValue);
            }
            if (markup) {
              ret += " " + markup;
            }
          }
          if (makeStaticMarkup) {
            return ret;
          }
          if (isRootElement) {
            ret += " " + createMarkupForRoot();
          }
          return ret;
        }
        function validateRenderResult(child, type) {
          if (child === void 0) {
            {
              {
                throw Error((getComponentName(type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
              }
            }
          }
        }
        function resolve(child, context, threadID) {
          while (React2.isValidElement(child)) {
            var element = child;
            var Component = element.type;
            {
              pushElementToDebugStack(element);
            }
            if (typeof Component !== "function") {
              break;
            }
            processChild(element, Component);
          }
          function processChild(element2, Component2) {
            var isClass = shouldConstruct$1(Component2);
            var publicContext = processContext(Component2, context, threadID, isClass);
            var queue = [];
            var replace = false;
            var updater = {
              isMounted: function(publicInstance) {
                return false;
              },
              enqueueForceUpdate: function(publicInstance) {
                if (queue === null) {
                  warnNoop(publicInstance, "forceUpdate");
                  return null;
                }
              },
              enqueueReplaceState: function(publicInstance, completeState) {
                replace = true;
                queue = [completeState];
              },
              enqueueSetState: function(publicInstance, currentPartialState) {
                if (queue === null) {
                  warnNoop(publicInstance, "setState");
                  return null;
                }
                queue.push(currentPartialState);
              }
            };
            var inst;
            if (isClass) {
              inst = new Component2(element2.props, publicContext, updater);
              if (typeof Component2.getDerivedStateFromProps === "function") {
                {
                  if (inst.state === null || inst.state === void 0) {
                    var componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUninitializedState[componentName]) {
                      error2("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, inst.state === null ? "null" : "undefined", componentName);
                      didWarnAboutUninitializedState[componentName] = true;
                    }
                  }
                }
                var partialState = Component2.getDerivedStateFromProps.call(null, element2.props, inst.state);
                {
                  if (partialState === void 0) {
                    var _componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                      error2("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", _componentName);
                      didWarnAboutUndefinedDerivedState[_componentName] = true;
                    }
                  }
                }
                if (partialState != null) {
                  inst.state = _assign({}, inst.state, partialState);
                }
              }
            } else {
              {
                if (Component2.prototype && typeof Component2.prototype.render === "function") {
                  var _componentName2 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutBadClass[_componentName2]) {
                    error2("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _componentName2, _componentName2);
                    didWarnAboutBadClass[_componentName2] = true;
                  }
                }
              }
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              inst = Component2(element2.props, publicContext, updater);
              inst = finishHooks(Component2, element2.props, inst, publicContext);
              {
                if (inst != null && inst.render != null) {
                  var _componentName3 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutModulePatternComponent[_componentName3]) {
                    error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName3, _componentName3, _componentName3);
                    didWarnAboutModulePatternComponent[_componentName3] = true;
                  }
                }
              }
              if (inst == null || inst.render == null) {
                child = inst;
                validateRenderResult(child, Component2);
                return;
              }
            }
            inst.props = element2.props;
            inst.context = publicContext;
            inst.updater = updater;
            var initialState = inst.state;
            if (initialState === void 0) {
              inst.state = initialState = null;
            }
            if (typeof inst.UNSAFE_componentWillMount === "function" || typeof inst.componentWillMount === "function") {
              if (typeof inst.componentWillMount === "function") {
                {
                  if (inst.componentWillMount.__suppressDeprecationWarning !== true) {
                    var _componentName4 = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
                      warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", _componentName4);
                      didWarnAboutDeprecatedWillMount[_componentName4] = true;
                    }
                  }
                }
                if (typeof Component2.getDerivedStateFromProps !== "function") {
                  inst.componentWillMount();
                }
              }
              if (typeof inst.UNSAFE_componentWillMount === "function" && typeof Component2.getDerivedStateFromProps !== "function") {
                inst.UNSAFE_componentWillMount();
              }
              if (queue.length) {
                var oldQueue = queue;
                var oldReplace = replace;
                queue = null;
                replace = false;
                if (oldReplace && oldQueue.length === 1) {
                  inst.state = oldQueue[0];
                } else {
                  var nextState = oldReplace ? oldQueue[0] : inst.state;
                  var dontMutate = true;
                  for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                    var partial = oldQueue[i2];
                    var _partialState = typeof partial === "function" ? partial.call(inst, nextState, element2.props, publicContext) : partial;
                    if (_partialState != null) {
                      if (dontMutate) {
                        dontMutate = false;
                        nextState = _assign({}, nextState, _partialState);
                      } else {
                        _assign(nextState, _partialState);
                      }
                    }
                  }
                  inst.state = nextState;
                }
              } else {
                queue = null;
              }
            }
            child = inst.render();
            {
              if (child === void 0 && inst.render._isMockFunction) {
                child = null;
              }
            }
            validateRenderResult(child, Component2);
            var childContext;
            {
              if (typeof inst.getChildContext === "function") {
                var _childContextTypes = Component2.childContextTypes;
                if (typeof _childContextTypes === "object") {
                  childContext = inst.getChildContext();
                  for (var contextKey in childContext) {
                    if (!(contextKey in _childContextTypes)) {
                      {
                        throw Error((getComponentName(Component2) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
                      }
                    }
                  }
                } else {
                  {
                    error2("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", getComponentName(Component2) || "Unknown");
                  }
                }
              }
              if (childContext) {
                context = _assign({}, context, childContext);
              }
            }
          }
          return {
            child,
            context
          };
        }
        var ReactDOMServerRenderer = /* @__PURE__ */ function() {
          function ReactDOMServerRenderer2(children, makeStaticMarkup, options) {
            var flatChildren = flattenTopLevelChildren(children);
            var topFrame = {
              type: null,
              domNamespace: Namespaces.html,
              children: flatChildren,
              childIndex: 0,
              context: emptyObject,
              footer: ""
            };
            {
              topFrame.debugElementStack = [];
            }
            this.threadID = allocThreadID();
            this.stack = [topFrame];
            this.exhausted = false;
            this.currentSelectValue = null;
            this.previousWasTextNode = false;
            this.makeStaticMarkup = makeStaticMarkup;
            this.suspenseDepth = 0;
            this.contextIndex = -1;
            this.contextStack = [];
            this.contextValueStack = [];
            this.uniqueID = 0;
            this.identifierPrefix = options && options.identifierPrefix || "";
            {
              this.contextProviderStack = [];
            }
          }
          var _proto = ReactDOMServerRenderer2.prototype;
          _proto.destroy = function destroy() {
            if (!this.exhausted) {
              this.exhausted = true;
              this.clearProviders();
              freeThreadID(this.threadID);
            }
          };
          _proto.pushProvider = function pushProvider(provider) {
            var index = ++this.contextIndex;
            var context = provider.type._context;
            var threadID = this.threadID;
            validateContextBounds(context, threadID);
            var previousValue = context[threadID];
            this.contextStack[index] = context;
            this.contextValueStack[index] = previousValue;
            {
              this.contextProviderStack[index] = provider;
            }
            context[threadID] = provider.props.value;
          };
          _proto.popProvider = function popProvider(provider) {
            var index = this.contextIndex;
            {
              if (index < 0 || provider !== this.contextProviderStack[index]) {
                error2("Unexpected pop.");
              }
            }
            var context = this.contextStack[index];
            var previousValue = this.contextValueStack[index];
            this.contextStack[index] = null;
            this.contextValueStack[index] = null;
            {
              this.contextProviderStack[index] = null;
            }
            this.contextIndex--;
            context[this.threadID] = previousValue;
          };
          _proto.clearProviders = function clearProviders() {
            for (var index = this.contextIndex; index >= 0; index--) {
              var context = this.contextStack[index];
              var previousValue = this.contextValueStack[index];
              context[this.threadID] = previousValue;
            }
          };
          _proto.read = function read(bytes) {
            if (this.exhausted) {
              return null;
            }
            var prevPartialRenderer = currentPartialRenderer;
            setCurrentPartialRenderer(this);
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = Dispatcher;
            try {
              var out = [""];
              var suspended = false;
              while (out[0].length < bytes) {
                if (this.stack.length === 0) {
                  this.exhausted = true;
                  freeThreadID(this.threadID);
                  break;
                }
                var frame = this.stack[this.stack.length - 1];
                if (suspended || frame.childIndex >= frame.children.length) {
                  var footer = frame.footer;
                  if (footer !== "") {
                    this.previousWasTextNode = false;
                  }
                  this.stack.pop();
                  if (frame.type === "select") {
                    this.currentSelectValue = null;
                  } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                    var provider = frame.type;
                    this.popProvider(provider);
                  } else if (frame.type === REACT_SUSPENSE_TYPE) {
                    this.suspenseDepth--;
                    var buffered = out.pop();
                    if (suspended) {
                      suspended = false;
                      var fallbackFrame = frame.fallbackFrame;
                      if (!fallbackFrame) {
                        {
                          throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
                        }
                      }
                      this.stack.push(fallbackFrame);
                      out[this.suspenseDepth] += "<!--$!-->";
                      continue;
                    } else {
                      out[this.suspenseDepth] += buffered;
                    }
                  }
                  out[this.suspenseDepth] += footer;
                  continue;
                }
                var child = frame.children[frame.childIndex++];
                var outBuffer = "";
                if (true) {
                  pushCurrentDebugStack(this.stack);
                  frame.debugElementStack.length = 0;
                }
                try {
                  outBuffer += this.render(child, frame.context, frame.domNamespace);
                } catch (err) {
                  if (err != null && typeof err.then === "function") {
                    if (enableSuspenseServerRenderer) {
                      if (!(this.suspenseDepth > 0)) {
                        {
                          throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
                        }
                      }
                      suspended = true;
                    } else {
                      if (true) {
                        {
                          throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
                        }
                      }
                    }
                  } else {
                    throw err;
                  }
                } finally {
                  if (true) {
                    popCurrentDebugStack();
                  }
                }
                if (out.length <= this.suspenseDepth) {
                  out.push("");
                }
                out[this.suspenseDepth] += outBuffer;
              }
              return out[0];
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
              setCurrentPartialRenderer(prevPartialRenderer);
              resetHooksState();
            }
          };
          _proto.render = function render(child, context, parentNamespace) {
            if (typeof child === "string" || typeof child === "number") {
              var text = "" + child;
              if (text === "") {
                return "";
              }
              if (this.makeStaticMarkup) {
                return escapeTextForBrowser(text);
              }
              if (this.previousWasTextNode) {
                return "<!-- -->" + escapeTextForBrowser(text);
              }
              this.previousWasTextNode = true;
              return escapeTextForBrowser(text);
            } else {
              var nextChild;
              var _resolve = resolve(child, context, this.threadID);
              nextChild = _resolve.child;
              context = _resolve.context;
              if (nextChild === null || nextChild === false) {
                return "";
              } else if (!React2.isValidElement(nextChild)) {
                if (nextChild != null && nextChild.$$typeof != null) {
                  var $$typeof = nextChild.$$typeof;
                  if (!($$typeof !== REACT_PORTAL_TYPE)) {
                    {
                      throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    }
                  }
                  {
                    {
                      throw Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
                    }
                  }
                }
                var nextChildren = toArray(nextChild);
                var frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: nextChildren,
                  childIndex: 0,
                  context,
                  footer: ""
                };
                {
                  frame.debugElementStack = [];
                }
                this.stack.push(frame);
                return "";
              }
              var nextElement = nextChild;
              var elementType = nextElement.type;
              if (typeof elementType === "string") {
                return this.renderDOM(nextElement, context, parentNamespace);
              }
              switch (elementType) {
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_FRAGMENT_TYPE: {
                  var _nextChildren = toArray(nextChild.props.children);
                  var _frame = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  {
                    _frame.debugElementStack = [];
                  }
                  this.stack.push(_frame);
                  return "";
                }
                case REACT_SUSPENSE_TYPE: {
                  {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support Suspense.");
                      }
                    }
                  }
                }
                case REACT_SCOPE_TYPE: {
                  {
                    {
                      throw Error("ReactDOMServer does not yet support scope components.");
                    }
                  }
                }
              }
              if (typeof elementType === "object" && elementType !== null) {
                switch (elementType.$$typeof) {
                  case REACT_FORWARD_REF_TYPE: {
                    var element = nextChild;
                    var _nextChildren5;
                    var componentIdentity = {};
                    prepareToUseHooks(componentIdentity);
                    _nextChildren5 = elementType.render(element.props, element.ref);
                    _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
                    _nextChildren5 = toArray(_nextChildren5);
                    var _frame5 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren5,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame5.debugElementStack = [];
                    }
                    this.stack.push(_frame5);
                    return "";
                  }
                  case REACT_MEMO_TYPE: {
                    var _element = nextChild;
                    var _nextChildren6 = [React2.createElement(elementType.type, _assign({
                      ref: _element.ref
                    }, _element.props))];
                    var _frame6 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren6,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame6.debugElementStack = [];
                    }
                    this.stack.push(_frame6);
                    return "";
                  }
                  case REACT_PROVIDER_TYPE: {
                    var provider = nextChild;
                    var nextProps = provider.props;
                    var _nextChildren7 = toArray(nextProps.children);
                    var _frame7 = {
                      type: provider,
                      domNamespace: parentNamespace,
                      children: _nextChildren7,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame7.debugElementStack = [];
                    }
                    this.pushProvider(provider);
                    this.stack.push(_frame7);
                    return "";
                  }
                  case REACT_CONTEXT_TYPE: {
                    var reactContext = nextChild.type;
                    {
                      if (reactContext._context === void 0) {
                        if (reactContext !== reactContext.Consumer) {
                          if (!hasWarnedAboutUsingContextAsConsumer) {
                            hasWarnedAboutUsingContextAsConsumer = true;
                            error2("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                          }
                        }
                      } else {
                        reactContext = reactContext._context;
                      }
                    }
                    var _nextProps = nextChild.props;
                    var threadID = this.threadID;
                    validateContextBounds(reactContext, threadID);
                    var nextValue = reactContext[threadID];
                    var _nextChildren8 = toArray(_nextProps.children(nextValue));
                    var _frame8 = {
                      type: nextChild,
                      domNamespace: parentNamespace,
                      children: _nextChildren8,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame8.debugElementStack = [];
                    }
                    this.stack.push(_frame8);
                    return "";
                  }
                  case REACT_FUNDAMENTAL_TYPE: {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support the fundamental API.");
                      }
                    }
                  }
                  case REACT_LAZY_TYPE: {
                    var _element2 = nextChild;
                    var lazyComponent = nextChild.type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;
                    var result = init(payload);
                    var _nextChildren10 = [React2.createElement(result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame10 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren10,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame10.debugElementStack = [];
                    }
                    this.stack.push(_frame10);
                    return "";
                  }
                }
              }
              var info = "";
              {
                var owner = nextElement._owner;
                if (elementType === void 0 || typeof elementType === "object" && elementType !== null && Object.keys(elementType).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var ownerName = owner ? getComponentName(owner) : null;
                if (ownerName) {
                  info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
              }
              {
                {
                  throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info);
                }
              }
            }
          };
          _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
            var tag = element.type.toLowerCase();
            var namespace = parentNamespace;
            if (parentNamespace === Namespaces.html) {
              namespace = getIntrinsicNamespace(tag);
            }
            {
              if (namespace === Namespaces.html) {
                if (tag !== element.type) {
                  error2("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", element.type);
                }
              }
            }
            validateDangerousTag(tag);
            var props = element.props;
            if (tag === "input") {
              {
                checkControlledValueProps("input", props);
                if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
                  error2("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultChecked = true;
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
                  error2("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultInputValue = true;
                }
              }
              props = _assign({
                type: void 0
              }, props, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: props.value != null ? props.value : props.defaultValue,
                checked: props.checked != null ? props.checked : props.defaultChecked
              });
            } else if (tag === "textarea") {
              {
                checkControlledValueProps("textarea", props);
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
                  error2("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultTextareaValue = true;
                }
              }
              var initialValue = props.value;
              if (initialValue == null) {
                var defaultValue = props.defaultValue;
                var textareaChildren = props.children;
                if (textareaChildren != null) {
                  {
                    error2("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                  }
                  if (!(defaultValue == null)) {
                    {
                      throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    }
                  }
                  if (Array.isArray(textareaChildren)) {
                    if (!(textareaChildren.length <= 1)) {
                      {
                        throw Error("<textarea> can only have at most one child.");
                      }
                    }
                    textareaChildren = textareaChildren[0];
                  }
                  defaultValue = "" + textareaChildren;
                }
                if (defaultValue == null) {
                  defaultValue = "";
                }
                initialValue = defaultValue;
              }
              props = _assign({}, props, {
                value: void 0,
                children: "" + initialValue
              });
            } else if (tag === "select") {
              {
                checkControlledValueProps("select", props);
                for (var i2 = 0; i2 < valuePropNames.length; i2++) {
                  var propName = valuePropNames[i2];
                  if (props[propName] == null) {
                    continue;
                  }
                  var isArray2 = Array.isArray(props[propName]);
                  if (props.multiple && !isArray2) {
                    error2("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
                  } else if (!props.multiple && isArray2) {
                    error2("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
                  }
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
                  error2("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultSelectValue = true;
                }
              }
              this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
              props = _assign({}, props, {
                value: void 0
              });
            } else if (tag === "option") {
              var selected = null;
              var selectValue = this.currentSelectValue;
              var optionChildren = flattenOptionChildren(props.children);
              if (selectValue != null) {
                var value;
                if (props.value != null) {
                  value = props.value + "";
                } else {
                  value = optionChildren;
                }
                selected = false;
                if (Array.isArray(selectValue)) {
                  for (var j = 0; j < selectValue.length; j++) {
                    if ("" + selectValue[j] === value) {
                      selected = true;
                      break;
                    }
                  }
                } else {
                  selected = "" + selectValue === value;
                }
                props = _assign({
                  selected: void 0,
                  children: void 0
                }, props, {
                  selected,
                  children: optionChildren
                });
              }
            }
            {
              validatePropertiesInDevelopment(tag, props);
            }
            assertValidProps(tag, props);
            var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
            var footer = "";
            if (omittedCloseTags.hasOwnProperty(tag)) {
              out += "/>";
            } else {
              out += ">";
              footer = "</" + element.type + ">";
            }
            var children;
            var innerMarkup = getNonChildrenInnerMarkup(props);
            if (innerMarkup != null) {
              children = [];
              if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === "\n") {
                out += "\n";
              }
              out += innerMarkup;
            } else {
              children = toArray(props.children);
            }
            var frame = {
              domNamespace: getChildNamespace(parentNamespace, element.type),
              type: tag,
              children,
              childIndex: 0,
              context,
              footer
            };
            {
              frame.debugElementStack = [];
            }
            this.stack.push(frame);
            this.previousWasTextNode = false;
            return out;
          };
          return ReactDOMServerRenderer2;
        }();
        function renderToString(element, options) {
          var renderer = new ReactDOMServerRenderer(element, false, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function renderToStaticMarkup(element, options) {
          var renderer = new ReactDOMServerRenderer(element, true, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function renderToNodeStream() {
          {
            {
              throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
            }
          }
        }
        function renderToStaticNodeStream() {
          {
            {
              throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
            }
          }
        }
        exports.renderToNodeStream = renderToNodeStream;
        exports.renderToStaticMarkup = renderToStaticMarkup;
        exports.renderToStaticNodeStream = renderToStaticNodeStream;
        exports.renderToString = renderToString;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_dom_server_browser_development();
    }
  }
});

// build/index.js
var require_build = __commonJS({
  "build/index.js"(exports, module) {
    init_react();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
    var __esm2 = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __reExport = (target, module2, copyDefault, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames(module2))
          if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
            __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toESM2 = (module2, isNodeMode) => {
      return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
    };
    var __toCommonJS2 = /* @__PURE__ */ ((cache) => {
      return (module2, temp) => {
        return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
      };
    })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
    var React2;
    var init_react2 = __esm2({
      "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
        React2 = __toESM2(require_react());
      }
    });
    var require_remix = __commonJS2({
      "node_modules/remix/index.js"(exports2) {
        "use strict";
        init_react2();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var node = require_node();
        Object.defineProperty(exports2, "createFileSessionStorage", {
          enumerable: true,
          get: function() {
            return node.createFileSessionStorage;
          }
        });
        Object.defineProperty(exports2, "unstable_createFileUploadHandler", {
          enumerable: true,
          get: function() {
            return node.unstable_createFileUploadHandler;
          }
        });
        Object.defineProperty(exports2, "unstable_createMemoryUploadHandler", {
          enumerable: true,
          get: function() {
            return node.unstable_createMemoryUploadHandler;
          }
        });
        Object.defineProperty(exports2, "unstable_parseMultipartFormData", {
          enumerable: true,
          get: function() {
            return node.unstable_parseMultipartFormData;
          }
        });
        Object.defineProperty(exports2, "__esModule", { value: true });
        var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
        Object.defineProperty(exports2, "createCookie", {
          enumerable: true,
          get: function() {
            return serverRuntime.createCookie;
          }
        });
        Object.defineProperty(exports2, "createCookieSessionStorage", {
          enumerable: true,
          get: function() {
            return serverRuntime.createCookieSessionStorage;
          }
        });
        Object.defineProperty(exports2, "createMemorySessionStorage", {
          enumerable: true,
          get: function() {
            return serverRuntime.createMemorySessionStorage;
          }
        });
        Object.defineProperty(exports2, "createSession", {
          enumerable: true,
          get: function() {
            return serverRuntime.createSession;
          }
        });
        Object.defineProperty(exports2, "createSessionStorage", {
          enumerable: true,
          get: function() {
            return serverRuntime.createSessionStorage;
          }
        });
        Object.defineProperty(exports2, "isCookie", {
          enumerable: true,
          get: function() {
            return serverRuntime.isCookie;
          }
        });
        Object.defineProperty(exports2, "isSession", {
          enumerable: true,
          get: function() {
            return serverRuntime.isSession;
          }
        });
        Object.defineProperty(exports2, "json", {
          enumerable: true,
          get: function() {
            return serverRuntime.json;
          }
        });
        Object.defineProperty(exports2, "redirect", {
          enumerable: true,
          get: function() {
            return serverRuntime.redirect;
          }
        });
        Object.defineProperty(exports2, "__esModule", { value: true });
        var react = (init_esm2(), __toCommonJS(esm_exports2));
        Object.defineProperty(exports2, "Form", {
          enumerable: true,
          get: function() {
            return react.Form;
          }
        });
        Object.defineProperty(exports2, "Link", {
          enumerable: true,
          get: function() {
            return react.Link;
          }
        });
        Object.defineProperty(exports2, "Links", {
          enumerable: true,
          get: function() {
            return react.Links;
          }
        });
        Object.defineProperty(exports2, "LiveReload", {
          enumerable: true,
          get: function() {
            return react.LiveReload;
          }
        });
        Object.defineProperty(exports2, "Meta", {
          enumerable: true,
          get: function() {
            return react.Meta;
          }
        });
        Object.defineProperty(exports2, "NavLink", {
          enumerable: true,
          get: function() {
            return react.NavLink;
          }
        });
        Object.defineProperty(exports2, "Outlet", {
          enumerable: true,
          get: function() {
            return react.Outlet;
          }
        });
        Object.defineProperty(exports2, "PrefetchPageLinks", {
          enumerable: true,
          get: function() {
            return react.PrefetchPageLinks;
          }
        });
        Object.defineProperty(exports2, "RemixBrowser", {
          enumerable: true,
          get: function() {
            return react.RemixBrowser;
          }
        });
        Object.defineProperty(exports2, "RemixServer", {
          enumerable: true,
          get: function() {
            return react.RemixServer;
          }
        });
        Object.defineProperty(exports2, "Scripts", {
          enumerable: true,
          get: function() {
            return react.Scripts;
          }
        });
        Object.defineProperty(exports2, "ScrollRestoration", {
          enumerable: true,
          get: function() {
            return react.ScrollRestoration;
          }
        });
        Object.defineProperty(exports2, "useActionData", {
          enumerable: true,
          get: function() {
            return react.useActionData;
          }
        });
        Object.defineProperty(exports2, "useBeforeUnload", {
          enumerable: true,
          get: function() {
            return react.useBeforeUnload;
          }
        });
        Object.defineProperty(exports2, "useCatch", {
          enumerable: true,
          get: function() {
            return react.useCatch;
          }
        });
        Object.defineProperty(exports2, "useFetcher", {
          enumerable: true,
          get: function() {
            return react.useFetcher;
          }
        });
        Object.defineProperty(exports2, "useFetchers", {
          enumerable: true,
          get: function() {
            return react.useFetchers;
          }
        });
        Object.defineProperty(exports2, "useFormAction", {
          enumerable: true,
          get: function() {
            return react.useFormAction;
          }
        });
        Object.defineProperty(exports2, "useHref", {
          enumerable: true,
          get: function() {
            return react.useHref;
          }
        });
        Object.defineProperty(exports2, "useLoaderData", {
          enumerable: true,
          get: function() {
            return react.useLoaderData;
          }
        });
        Object.defineProperty(exports2, "useLocation", {
          enumerable: true,
          get: function() {
            return react.useLocation;
          }
        });
        Object.defineProperty(exports2, "useMatches", {
          enumerable: true,
          get: function() {
            return react.useMatches;
          }
        });
        Object.defineProperty(exports2, "useNavigate", {
          enumerable: true,
          get: function() {
            return react.useNavigate;
          }
        });
        Object.defineProperty(exports2, "useNavigationType", {
          enumerable: true,
          get: function() {
            return react.useNavigationType;
          }
        });
        Object.defineProperty(exports2, "useOutlet", {
          enumerable: true,
          get: function() {
            return react.useOutlet;
          }
        });
        Object.defineProperty(exports2, "useOutletContext", {
          enumerable: true,
          get: function() {
            return react.useOutletContext;
          }
        });
        Object.defineProperty(exports2, "useParams", {
          enumerable: true,
          get: function() {
            return react.useParams;
          }
        });
        Object.defineProperty(exports2, "useResolvedPath", {
          enumerable: true,
          get: function() {
            return react.useResolvedPath;
          }
        });
        Object.defineProperty(exports2, "useSearchParams", {
          enumerable: true,
          get: function() {
            return react.useSearchParams;
          }
        });
        Object.defineProperty(exports2, "useSubmit", {
          enumerable: true,
          get: function() {
            return react.useSubmit;
          }
        });
        Object.defineProperty(exports2, "useTransition", {
          enumerable: true,
          get: function() {
            return react.useTransition;
          }
        });
      }
    });
    var require_client2 = __commonJS2({
      "app/client.js"(exports2, module2) {
        init_react2();
        var sanityClient = require_sanityClient();
        module2.exports = sanityClient({
          projectId: "ufdizlou",
          dataset: "production",
          useCdn: "true",
          apiVersion: "2022-3-7"
        });
      }
    });
    var stdin_exports = {};
    __export2(stdin_exports, {
      assets: () => assets_manifest_default,
      entry: () => entry,
      routes: () => routes
    });
    init_react2();
    init_react2();
    var entry_server_exports = {};
    __export2(entry_server_exports, {
      default: () => handleRequest
    });
    init_react2();
    var import_server = require_server_browser();
    var import_remix = __toESM2(require_remix());
    function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
      const markup = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
        context: remixContext,
        url: request.url
      }));
      responseHeaders.set("Content-Type", "text/html");
      return new Response("<!DOCTYPE html>" + markup, {
        status: responseStatusCode,
        headers: responseHeaders
      });
    }
    var root_exports = {};
    __export2(root_exports, {
      default: () => App,
      links: () => links,
      meta: () => meta
    });
    init_react2();
    var import_remix3 = __toESM2(require_remix());
    init_react2();
    var import_remix2 = __toESM2(require_remix());
    var Navbar = () => {
      const toggleNav = () => {
        const sidenav = document.getElementById("nav-list");
        const background = document.getElementById("nav-background");
        if (sidenav.classList.contains("cooldown")) {
          return;
        }
        if (sidenav.classList.contains("nav_closed")) {
          sidenav.classList.remove("nav_closed");
          background.style.display = "block";
          setTimeout(() => {
            background.style.opacity = "50%";
            background.style.zIndex = "1";
          }, 100);
        } else {
          sidenav.classList.add("nav_closed");
          setTimeout(() => {
            background.style.display = "none";
            background.style.zIndex = "-1";
          }, 400);
          background.style.opacity = "0";
        }
        sidenav.classList.add("cooldown");
        setTimeout(() => {
          sidenav.classList.remove("cooldown");
        }, 400);
      };
      return /* @__PURE__ */ React2.createElement("header", null, /* @__PURE__ */ React2.createElement("div", {
        id: "nav-background",
        className: "dark_background",
        onClick: toggleNav
      }), /* @__PURE__ */ React2.createElement("div", {
        className: "nav_space"
      }), /* @__PURE__ */ React2.createElement("nav", null, /* @__PURE__ */ React2.createElement("div", {
        className: "nav_top"
      }, /* @__PURE__ */ React2.createElement("button", {
        onClick: toggleNav
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-bars"
      }))), /* @__PURE__ */ React2.createElement("ul", {
        id: "nav-list",
        className: "nav_list nav_closed"
      }, /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-house"
      }), " Home")), /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/characters"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-person"
      }), " Characters")), /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/locations"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-location-dot"
      }), " Locations")), /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/story"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-pen"
      }), " Story")), /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/about"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-address-card"
      }), " About")), /* @__PURE__ */ React2.createElement("li", {
        className: "nav_list_item"
      }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
        to: "/contact"
      }, /* @__PURE__ */ React2.createElement("i", {
        className: "fa-solid fa-address-book"
      }), " Contact")))));
    };
    var main_default = "/build/_assets/main-NIFUMWRZ.css";
    function meta() {
      return { title: "Home" };
    }
    function links() {
      return [
        {
          rel: "stylesheet",
          href: main_default
        }
      ];
    }
    function App() {
      return /* @__PURE__ */ React2.createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React2.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }), /* @__PURE__ */ React2.createElement("script", {
        src: "https://kit.fontawesome.com/e4319753b5.js",
        crossorigin: "anonymous"
      }), /* @__PURE__ */ React2.createElement(import_remix3.Meta, null), /* @__PURE__ */ React2.createElement(import_remix3.Links, null)), /* @__PURE__ */ React2.createElement(Navbar, null), /* @__PURE__ */ React2.createElement("body", null, /* @__PURE__ */ React2.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React2.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null)));
    }
    var characters_exports = {};
    __export2(characters_exports, {
      default: () => Characters
    });
    init_react2();
    function Characters() {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "characters"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null, "Characters"), /* @__PURE__ */ React2.createElement("p", null, "Welcome to the Characters page! This page will contain characters that I have created. Each character has their own backstory and thinking process that will be taken into consideration when creating the story. I will do my best to work on this as much as possible.")));
    }
    var locations_exports = {};
    __export2(locations_exports, {
      Locations: () => Locations,
      default: () => locations_default
    });
    init_react2();
    var import_react = __toESM2(require_react());
    var Locations = () => {
      return /* @__PURE__ */ import_react.default.createElement("section", {
        id: "locations"
      }, /* @__PURE__ */ import_react.default.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ import_react.default.createElement("h1", null, "Locations"), /* @__PURE__ */ import_react.default.createElement("p", null, "Welcome to the Locations page! This page will contain a list of locations for the story and each location will contain a list of events that have happened as well.")));
    };
    var locations_default = Locations;
    var contact_exports = {};
    __export2(contact_exports, {
      Contact: () => Contact,
      default: () => contact_default
    });
    init_react2();
    var Contact = () => {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "contact"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null, "Contact"), /* @__PURE__ */ React2.createElement("p", null, "Welcome to the Contact page! This page will have some contact info for you to message me. You can give me feedback or somethin, idk.")));
    };
    var contact_default = Contact;
    var about_exports = {};
    __export2(about_exports, {
      About: () => About,
      default: () => about_default
    });
    init_react2();
    var About = () => {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "about"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null, "About"), /* @__PURE__ */ React2.createElement("p", null, "Welcome to the About page! Here, I will explain what this website is about and why I have made this site.")));
    };
    var about_default = About;
    var story_exports = {};
    __export2(story_exports, {
      Story: () => Story,
      default: () => story_default
    });
    init_react2();
    var Story = () => {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "story"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null, "Story"), /* @__PURE__ */ React2.createElement("p", null, "Welcome to the Story page, this page will contain brief summaries about each event that happens on the timeline.")));
    };
    var story_default = Story;
    var home_exports = {};
    __export2(home_exports, {
      Home: () => Home2,
      loader: () => loader2
    });
    init_react2();
    var import_client2 = __toESM2(require_client2());
    var import_groq2 = __toESM2(require_groq());
    var import_build2 = require_build();
    var loader2 = async ({}) => {
      const page = await import_client2.default.fetch(import_groq2.default`*[_type == "pages"]`);
      return (0, import_build2.json)();
    };
    var Home2 = () => {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "home"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null), /* @__PURE__ */ React2.createElement("p", null)));
    };
    var routes_exports = {};
    __export2(routes_exports, {
      default: () => Index
    });
    init_react2();
    init_react2();
    var import_groq22 = __toESM2(require_groq());
    var import_build22 = require_build();
    var Home22 = () => {
      return /* @__PURE__ */ React2.createElement("section", {
        id: "home"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React2.createElement("h1", null), /* @__PURE__ */ React2.createElement("p", null)));
    };
    function Index() {
      return /* @__PURE__ */ React2.createElement(Home22, null);
    }
    init_react2();
    var assets_manifest_default = { "version": "b0e78815", "entry": { "module": "/build/entry.client-YGYVMEVA.js", "imports": ["/build/_shared/chunk-4GNTR54T.js", "/build/_shared/chunk-SLTTFZWN.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-E4OFOJ74.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-OYGVIDWF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/index": { "id": "routes/characters/index", "parentId": "root", "path": "characters", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/index-7BMFTXAB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-QA6PX2YW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home/index": { "id": "routes/home/index", "parentId": "root", "path": "home", "index": true, "caseSensitive": void 0, "module": "/build/routes/home/index-NBHG62ZD.js", "imports": ["/build/_shared/chunk-6NGF2CJ7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YV7FLHYU.js", "imports": ["/build/_shared/chunk-6NGF2CJ7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/index": { "id": "routes/locations/index", "parentId": "root", "path": "locations", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/index-3NFQWY62.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/index": { "id": "routes/story/index", "parentId": "root", "path": "story", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/index-LPS7MYWB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B0E78815.js" };
    var entry = { module: entry_server_exports };
    var routes = {
      "root": {
        id: "root",
        parentId: void 0,
        path: "",
        index: void 0,
        caseSensitive: void 0,
        module: root_exports
      },
      "routes/characters/index": {
        id: "routes/characters/index",
        parentId: "root",
        path: "characters",
        index: true,
        caseSensitive: void 0,
        module: characters_exports
      },
      "routes/locations/index": {
        id: "routes/locations/index",
        parentId: "root",
        path: "locations",
        index: true,
        caseSensitive: void 0,
        module: locations_exports
      },
      "routes/contact/index": {
        id: "routes/contact/index",
        parentId: "root",
        path: "contact",
        index: true,
        caseSensitive: void 0,
        module: contact_exports
      },
      "routes/about/index": {
        id: "routes/about/index",
        parentId: "root",
        path: "about",
        index: true,
        caseSensitive: void 0,
        module: about_exports
      },
      "routes/story/index": {
        id: "routes/story/index",
        parentId: "root",
        path: "story",
        index: true,
        caseSensitive: void 0,
        module: story_exports
      },
      "routes/home/index": {
        id: "routes/home/index",
        parentId: "root",
        path: "home",
        index: true,
        caseSensitive: void 0,
        module: home_exports
      },
      "routes/index": {
        id: "routes/index",
        parentId: "root",
        path: void 0,
        index: true,
        caseSensitive: void 0,
        module: routes_exports
      }
    };
    module.exports = __toCommonJS2(stdin_exports);
  }
});

// app/routes/home/index.jsx
init_react();
var import_client = __toESM(require_client());
var import_groq = __toESM(require_groq());
var import_build = __toESM(require_build());
var loader = async ({}) => {
  const page = await import_client.default.fetch(import_groq.default`*[_type == "pages"]`);
  return (0, import_build.json)();
};
var Home = () => {
  return /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null), /* @__PURE__ */ React.createElement("p", null)));
};

export {
  loader,
  Home
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! https://mths.be/punycode v1.4.1 by @mathias */
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-RBP4OGHL.js.map
