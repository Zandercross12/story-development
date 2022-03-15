import {
  React,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  init_react,
  require_object_assign
} from "/build/_shared/chunk-325D37MS.js";

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction2(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction2;
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
      var document = global2.document;
      var Promise2 = global2.Promise;
      var fetch2 = global2.fetch;
      var Response = global2.Response;
      var TextDecoder = global2.TextDecoder;
      var TextEncoder = global2.TextEncoder;
      var AbortController2 = global2.AbortController;
      if (typeof window !== "undefined" && typeof document !== "undefined" && !("readyState" in document) && document.body == null) {
        document.readyState = "loading";
        window.addEventListener("load", function(event) {
          document.readyState = "complete";
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
        if ((!("ontimeout" in XMLHttpRequest2.prototype) || !("sendAsBinary" in XMLHttpRequest2.prototype) && !("mozAnon" in XMLHttpRequest2.prototype)) && document != void 0 && document.readyState != void 0 && document.readyState !== "complete") {
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
      var isFetchSupported = fetch2 != void 0 && Response != void 0 && "body" in Response.prototype;
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

// node-modules-polyfills:process
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
var cachedSetTimeout, cachedClearTimeout, performance, performanceNow, startTime;
var init_process = __esm({
  "node-modules-polyfills:process"() {
    init_react();
    cachedSetTimeout = defaultSetTimout;
    cachedClearTimeout = defaultClearTimeout;
    if (typeof globalThis.setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    }
    if (typeof globalThis.clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    performance = globalThis.performance || {};
    performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits;
var init_inherits = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    init_react();
    if (typeof Object.create === "function") {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
  }
});

// node-modules-polyfills:util
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base2 = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base2 = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base2 = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base2 = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base2 = " " + formatError(value);
  }
  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base2 + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base2, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base2, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === "function";
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var init_util = __esm({
  "node-modules-polyfills:util"() {
    init_react();
    init_process();
    init_inherits();
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
  }
});

// node-modules-polyfills:querystring
function hasOwnProperty2(obj, prop) {
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
      if (isArray2(obj[k])) {
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
    if (!hasOwnProperty2(obj, k)) {
      obj[k] = v;
    } else if (isArray2(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
}
var isArray2, objectKeys;
var init_querystring = __esm({
  "node-modules-polyfills:querystring"() {
    init_react();
    isArray2 = Array.isArray || function(xs) {
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
    var isArray3 = function(arg) {
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
        } else if (isArray3(result[key])) {
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
      apiVersion: "2022-3-7"
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

// app/routes/home/index.jsx
init_react();
var import_client = __toESM(require_client());
var import_groq = __toESM(require_groq());
var loader = async ({ params }) => {
  const page = await import_client.default.fetch(import_groq.default`*[type == "pages"]`);
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
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=/build/_shared/chunk-6W5AIWWP.js.map
