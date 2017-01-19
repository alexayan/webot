'use strict';

var _wechat = require('./wechat');

var _wechat2 = _interopRequireDefault(_wechat);

require('./applets/simsimi');

require('./applets/dinner_reminder');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_wechat2.default.run(); /**
                         * Created by alexyan on 2017年1月18日
                         * Copyright © 2017年 alexayan. All rights reserved.
                         */