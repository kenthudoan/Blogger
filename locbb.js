var _Friends = new Array();
var _Comments = new Array();
var _Reactions = new Array();
$('#table-friends')['on']('click', 'tr', function() {
    $(this)['toggleClass']('active')
});

function getListFriend() {
    _TOKEN = $('#accessToken')['val']();
    if (!_TOKEN) {
        alert('Vui L\xF2ng Nh\u1EADp M\xE3 Access Token Full Quy\u1EC1n!');
        return false
    };
    $('#result-msg')['html']('<img src="https://shop.celcom.com.my/assets/img/Drop_3/Loading_Celcom.gif" width="30" height="30" /> \u0110ang L\u1EA5y Th\xF4ng Tin. Vui L\xF2ng \u0110\u1EE3i...')['fadeIn']('slow');
    var _0x7000x5 = $('#gender')['val']();
    if (_0x7000x5 == 'male') {
        var _0x7000x6 = 'AND sex != \'female\'';
        var _0x7000x6 = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND sex != "female" ORDER BY rand() LIMIT 5000'
    } else {
        if (_0x7000x5 == 'female') {
            var _0x7000x6 = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND sex != "male" ORDER BY rand() LIMIT 5000'
        } else {
            if (_0x7000x5 == 'die') {
                var _0x7000x6 = 'SELECT id, name FROM profile WHERE id IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND name = "Facebook User" ORDER BY rand() LIMIT 5000'
            } else {
                if (_0x7000x5 == '500fr') {
                    var _0x7000x6 = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND friend_count < 500 ORDER BY rand() LIMIT 5000'
                } else {
                    if (_0x7000x5 == 'vn') {
                        var _0x7000x6 = 'SELECT locale, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND locale != "vi_VN" ORDER BY rand() LIMIT 5000'
                    } else {
                        if (_0x7000x5 == 'vn') {
                            var _0x7000x6 = 'SELECT locale, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND locale != "vi_VN" ORDER BY rand() LIMIT 5000'
                        } else {
                            var _0x7000x6 = 'SELECT uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY rand() LIMIT 5000'
                        }
                    }
                }
            }
        }
    };
    $['ajax']({
        url: 'https://graph.facebook.com/fql',
        type: 'GET',
        dataType: 'JSON',
        data: {
            access_token: _TOKEN,
            q: _0x7000x6
        },
        success: (_0x7000x7) => {
            _Friends = _0x7000x7['data'];
            getStatus()
        }
    })
}

function showFriends(_0x7000x9) {
    var _0x7000xa = new Array();
    $['each'](_0x7000x9, (_0x7000xb, _0x7000xc) => {
        _0x7000xa[_0x7000xb] = [(_0x7000xb + 1), '<img src="https://graph.facebook.com/' + _0x7000xc['uid'] + '/picture?width=30&height=30" /> <a target="_blank" href="https://fb.com/' + _0x7000xc['uid'] + '"> ' + _0x7000xc['name'] + '</a>', _0x7000xc['uid'], _0x7000xc['reaction'], _0x7000xc['comment'], (_0x7000xc['comment'] * 2 + _0x7000xc['reaction']) * 100]
    });
    $('#table-friends').DataTable({
        destroy: true,
        data: _0x7000xa,
        columns: [{
            title: 'STT'
        }, {
            title: 'FB NAME'
        }, {
            title: 'FB ID'
        }, {
            title: 'REACT'
        }, {
            title: 'COMMENT'
        }, {
            title: 'POINT'
        }],
        "\x6F\x72\x64\x65\x72": [
            [5, 'desc']
        ],
        "\x6C\x61\x6E\x67\x75\x61\x67\x65": {
            "\x73\x65\x61\x72\x63\x68": 'T\xECm Ki\u1EBFm',
            "\x70\x61\x67\x69\x6E\x61\x74\x65": {
                "\x66\x69\x72\x73\x74": 'V\u1EC1 \u0110\u1EA7u',
                "\x6C\x61\x73\x74": 'V\u1EC1 Cu\u1ED1i',
                "\x6E\x65\x78\x74": 'Ti\u1EBFn',
                "\x70\x72\x65\x76\x69\x6F\x75\x73": 'L\xF9i'
            },
            "\x69\x6E\x66\x6F": 'Hi\u1EC3n th\u1ECB _START_ \u0111\u1EBFn _END_ c\u1EE7a _TOTAL_ m\u1EE5c',
            "\x69\x6E\x66\x6F\x45\x6D\x70\x74\x79": 'Hi\u1EC3n th\u1ECB 0 \u0111\u1EBFn 0 c\u1EE7a 0 m\u1EE5c',
            "\x6C\x65\x6E\x67\x74\x68\x4D\x65\x6E\x75": 'Hi\u1EC3n th\u1ECB _MENU_ m\u1EE5c',
            "\x6C\x6F\x61\x64\x69\x6E\x67\x52\x65\x63\x6F\x72\x64\x73": '\u0110ang t\u1EA3i...',
            "\x65\x6D\x70\x74\x79\x54\x61\x62\x6C\x65": 'Kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 hi\u1EC3n th\u1ECB'
        }
    })
}

function getStatus() {
    $('#result-msg')['empty']()['html']('<img src="https://www.hethongsongao.net/tools/images/throbber_13.gif" width="30" height="30" /> \u0110ang L\u1EA5y Th\xF4ng Tin T\u01B0\u01A1ng T\xE1c...');
    var _0x7000xe = $('#total_post')['val']();
    $['ajax']({
        url: 'https://graph.facebook.com/me/feed',
        type: 'GET',
        dataType: 'JSON',
        data: {
            limit: _0x7000xe,
            access_token: _TOKEN,
            fields: 'id'
        },
        success: (_0x7000x7) => {
            getComments(_0x7000x7['data']);
            getReactions(_0x7000x7['data']);
            setTimeout((_0x7000xf) => {
                Ranking()
            }, 10000)
        }
    })
}

function getReactions(_0x7000x11) {
    var _0x7000xe = 10000;
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x11['length']; _0x7000xb++) {
        $['ajax']({
            url: 'https://graph.facebook.com/' + _0x7000x11[_0x7000xb]['id'] + '/',
            type: 'GET',
            dataType: 'JSON',
            data: {
                access_token: _TOKEN,
                fields: 'reactions.limit(' + _0x7000xe + ').summary(true)'
            },
            success: (_0x7000x7) => {
                if (_0x7000x7['reactions']['data']) {
                    exPortReactions(_0x7000x7['reactions']['data'])
                }
            }
        })
    }
}

function exPortReactions(_0x7000x13) {
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x13['length']; _0x7000xb++) {
        _Reactions['push'](parseInt(_0x7000x13[_0x7000xb]['id']))
    }
}

function getComments(_0x7000x11) {
    var _0x7000xe = 1000;
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x11['length']; _0x7000xb++) {
        $['ajax']({
            url: 'https://graph.facebook.com/' + _0x7000x11[_0x7000xb]['id'] + '/',
            type: 'GET',
            dataType: 'JSON',
            data: {
                access_token: _TOKEN,
                fields: 'comments.limit(' + _0x7000xe + ').summary(true)'
            },
            success: (_0x7000x7) => {
                if (_0x7000x7['comments']['data']) {
                    getComments2(_0x7000x7['comments']['data'])
                }
            }
        })
    }
}

function getComments2(_0x7000x16) {
    var _0x7000xe = 2000;
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x16['length']; _0x7000xb++) {
        _Comments['push'](parseInt(_0x7000x16[_0x7000xb]['from']['id']));
        $['ajax']({
            url: 'https://graph.facebook.com/' + _0x7000x16[_0x7000xb]['id'] + '/',
            type: 'GET',
            dataType: 'JSON',
            data: {
                access_token: _TOKEN,
                fields: 'comments.limit(' + _0x7000xe + ').summary(true)'
            },
            success: (_0x7000x7) => {
                if (_0x7000x7['comments']) {
                    exPortComments(_0x7000x7['comments']['data'])
                }
            }
        })
    }
}

function exPortComments(_0x7000x16) {
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x16['length']; _0x7000xb++) {
        _Comments['push'](parseInt(_0x7000x16[_0x7000xb]['from']['id']))
    }
}

function Ranking() {
    $('#result-msg')['empty']()['html']('<img src="https://www.hethongsongao.net/tools/images/throbber_13.gif" width="30" height="30" /> \u0110ang T\xEDnh To\xE1n Th\u1EE9 H\u1EA1ng ...');
    for (var _0x7000xb = 0; _0x7000xb < _Friends['length']; _0x7000xb++) {
        _Friends[_0x7000xb]['reaction'] = countItems(_Reactions, _Friends[_0x7000xb]['uid']);
        _Friends[_0x7000xb]['comment'] = countItems(_Comments, _Friends[_0x7000xb]['uid'])
    };
    $('#ds-friends')['fadeIn']('slow');
    setTimeout((_0x7000xf) => {
        $('#result-msg')['empty']()['html']('<img src="https://www.hethongsongao.net/tools/images/tick.png" width="30" height="30" /> Th\xE0nh C\xF4ng!');
        show()
    }, 5000)
}

function show() {
    showFriends(_Friends)
}

function arrayCountValues(_0x7000x1b) {
    var _0x7000x1c, _0x7000x1d = {};
    for (var _0x7000xb = _0x7000x1b['length']; _0x7000xb--;) {
        _0x7000x1c = _0x7000x1b[_0x7000xb];
        if (_0x7000x1d[_0x7000x1c]) {
            _0x7000x1d[_0x7000x1c] += 1
        } else {
            _0x7000x1d[_0x7000x1c] = 1
        }
    };
    return _0x7000x1d
}

function countItems(_0x7000x1b, _0x7000x1f) {
    var _0x7000x20 = 0,
        _0x7000xb;
    while ((_0x7000xb = _0x7000x1b['indexOf'](_0x7000x1f, _0x7000xb)) != -1) {
        ++_0x7000x20;
        ++_0x7000xb
    };
    return _0x7000x20
}
$('Del_0_Point')['html']('<img src="https://www.drupal.org/files/issues/throbber_13.gif" width="30" height="30" /> \u0110ang L\u1EA5y Th\xF4ng Tin. Vui L\xF2ng \u0110\u1EE3i...')['fadeIn']('slow');

function Del_0_Point() {
    $['each'](_Friends, (_0x7000xb, _0x7000xc) => {
        if ((_0x7000xc['reaction'] + _0x7000xc['comment']) === 0) {
            removeFriend(_0x7000xb, _0x7000xc)
        }
    })
}

function Del_Selected() {
    var _0x7000x9 = $('#table-friends').DataTable()['rows']('.active')['data']();
    for (var _0x7000xb = 0; _0x7000xb < _0x7000x9['length']; _0x7000xb++) {
        removeFriend2(_0x7000xb, _0x7000x9[_0x7000xb][2], _0x7000x9[_0x7000xb][1]['match'](/"> (.*)</)[1])
    }
}

function removeFriend2(_0x7000xb, _0x7000x24, _0x7000x25) {
    ! function(_0x7000xb, _0x7000x24, _0x7000x25) {
        setTimeout(function() {
            $['ajax']({
                url: 'https://graph.facebook.com/me/friends/' + _0x7000x24,
                type: 'GET',
                dataType: 'JSON',
                data: {
                    access_token: _TOKEN,
                    method: 'delete'
                }
            })['done']((_0x7000xf) => {
                $('#result-msg')['fadeOut']('slow', function() {
                    $('#result-msg')['empty']()['html']('<img src="https://www.ochealthiertogether.org/content/global/application/indicators/gauges/target-met.png" width="20" height="20" /> \u0110\xE3 X\xF3a: <img src="https://graph.facebook.com/' + _0x7000x24 + '/picture?width=30&height=30" /> ' + _0x7000x25 + '(' + _0x7000x24 + ')')['fadeIn']('slow')
                })
            })['error']((_0x7000xf) => {
                $('#result-msg')['fadeOut']('slow', function() {
                    $('#result-msg')['empty']()['html']('<img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png" width="20" height="20" /> \u0110\xE3 X\xF3a: <img src="https://graph.facebook.com/' + _0x7000x24 + '/picture?width=30&height=30" /> ' + _0x7000x25 + '(' + _0x7000x24 + ')')['fadeIn']('slow')
                })
            })
        }, _0x7000xb * 500)
    }(_0x7000xb, _0x7000x24, _0x7000x25)
}

function removeFriend(_0x7000xb, _0x7000x27) {
    ! function(_0x7000xb, _0x7000x27) {
        setTimeout(function() {
            $['ajax']({
                url: 'https://graph.facebook.com/me/friends/' + _0x7000x27['uid'],
                type: 'GET',
                dataType: 'JSON',
                data: {
                    access_token: _TOKEN,
                    method: 'delete'
                }
            })['done']((_0x7000xf) => {
                $('#result-msg')['fadeOut']('slow', function() {
                    $('#result-msg')['empty']()['html']('<img src="https://www.ochealthiertogether.org/content/global/application/indicators/gauges/target-met.png" width="20" height="20" /> \u0110\xE3 X\xF3a: <img src="https://graph.facebook.com/' + item['uid'] + '/picture?width=30&height=30" /> ' + _0x7000x27['name'] + '(' + _0x7000x27['uid'] + ')')['fadeIn']('slow')
                })
            })['error']((_0x7000xf) => {
                $('#result-msg')['fadeOut']('slow', function() {
                    $('#result-msg')['empty']()['html']('<img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png" width="20" height="20" /> \u0110\xE3 X\xF3a: <img src="https://graph.facebook.com/' + item['uid'] + '/picture?width=30&height=30" /> ' + _0x7000x27['name'] + '(' + _0x7000x27['uid'] + ')')['fadeIn']('slow')
                })
            })
        }, _0x7000xb * 300)
    }(_0x7000xb, _0x7000x27)
}
