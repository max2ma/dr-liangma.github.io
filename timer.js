var _0xd808=['play','#stopTime','addClass','273382dKhiTE','Auto-start\x20at\x20','split','529PtRCVi','duration','Stop\x20time\x20should\x20be\x20greater\x20than\x20the\x20start\x20time.','rooster','rest','startTime','log','stopTime','168156YKrUqt','#rest','#duration','Pause','prop','value','290481fCvLzO','val','#timer','removeClass','Start','getMinutes','invalid','#button','shipbell','342746fwcAKb','#display','getHours','#pause','show','442644BbTWbq','cannot\x20parse\x20cookies','cookie','1vAdcAq','200108ttKkzd','getElementById','hide','change','601PQfdug','console','Invalid\x20Timer\x20Settings','undefined','#startTime','text','#reset'];var _0x9702=function(_0x4ebfa9,_0xb913e7){_0x4ebfa9=_0x4ebfa9-0xa3;var _0xd808f2=_0xd808[_0x4ebfa9];return _0xd808f2;};(function(_0x1f0378,_0x5214a1){var _0x32a94e=_0x9702;while(!![]){try{var _0x520925=-parseInt(_0x32a94e(0xb8))+parseInt(_0x32a94e(0xbe))+parseInt(_0x32a94e(0xc7))+-parseInt(_0x32a94e(0xcc))+-parseInt(_0x32a94e(0xcf))*parseInt(_0x32a94e(0xad))+parseInt(_0x32a94e(0xd0))+-parseInt(_0x32a94e(0xb0))*-parseInt(_0x32a94e(0xa3));if(_0x520925===_0x5214a1)break;else _0x1f0378['push'](_0x1f0378['shift']());}catch(_0x4181f){_0x1f0378['push'](_0x1f0378['shift']());}}}(_0xd808,0x4134a));function replace(_0xb6d9c8,_0x1b53a9){var _0x374703=_0x9702;if(_0x1b53a9 in _0xb6d9c8)$('#'+_0x1b53a9)[_0x374703(0xbf)](_0xb6d9c8[_0x1b53a9]);}$(document)['ready'](function(){var _0xf9c42=_0x9702;start=![],rest=![],paused=![],checked=![],counter=0x0,settings={},$(_0xf9c42(0xa7))[_0xf9c42(0xd3)](updateTime),$(_0xf9c42(0xab))[_0xf9c42(0xd3)](updateTime),$(_0xf9c42(0xba))[_0xf9c42(0xd3)](update),$('#rest')[_0xf9c42(0xd3)](update);try{obj=JSON['parse'](document['cookie']),replace(obj,_0xf9c42(0xb5)),replace(obj,_0xf9c42(0xb7)),replace(obj,_0xf9c42(0xb4)),replace(obj,_0xf9c42(0xb1));}catch(_0xfe09d2){update(),window[_0xf9c42(0xa4)]&&console[_0xf9c42(0xb6)](_0xf9c42(0xcd));}});function update(){var _0xc4a4f2=_0x9702;settings[_0xc4a4f2(0xb5)]=$(_0xc4a4f2(0xa7))[_0xc4a4f2(0xbf)](),settings[_0xc4a4f2(0xb7)]=$(_0xc4a4f2(0xab))[_0xc4a4f2(0xbf)](),settings[_0xc4a4f2(0xb4)]=$(_0xc4a4f2(0xb9))[_0xc4a4f2(0xbf)](),settings[_0xc4a4f2(0xb1)]=$('#duration')[_0xc4a4f2(0xbf)](),document[_0xc4a4f2(0xce)]=JSON['stringify'](settings);}function reset(){var _0xe5e104=_0x9702;checkTime(),counter=parseInt($(_0xe5e104(0xba))[_0xe5e104(0xbf)]())*0x3c;if(isNaN(counter)){if(start)stopTimer();alert(_0xe5e104(0xa5));throw new Error(_0xe5e104(0xa5));}checked?display(counter):($(_0xe5e104(0xa9))[_0xe5e104(0xd2)](),$(_0xe5e104(0xca))[_0xe5e104(0xd2)]());}function outTime(){var _0x2aa0b9=_0x9702;$(_0x2aa0b9(0xc0))['text'](_0x2aa0b9(0xae)+$(_0x2aa0b9(0xa7))['val']());}function pause(){var _0xc9cb63=_0x9702;checkTime(),paused?(paused=![],$(_0xc9cb63(0xca))['prop'](_0xc9cb63(0xbd),_0xc9cb63(0xbb))):(paused=!![],$(_0xc9cb63(0xca))[_0xc9cb63(0xbc)](_0xc9cb63(0xbd),'Restart'));}function display(_0x5889cd){var _0x5e950a=_0x9702,_0x31426f=parseInt(_0x5889cd/0x3c),_0x3a1df3=_0x5889cd%0x3c,_0x31426f=_0x31426f<0xa?'0'+_0x31426f:_0x31426f,_0x3a1df3=_0x3a1df3<0xa?'0'+_0x3a1df3:_0x3a1df3;$(_0x5e950a(0xc0))[_0x5e950a(0xa8)](_0x31426f+':'+_0x3a1df3),$('#reset')[_0x5e950a(0xcb)](),$(_0x5e950a(0xca))['show']();}function startTimer(){var _0x1a517b=_0x9702;start=!![],$(_0x1a517b(0xc5))[_0x1a517b(0xbc)]('value','Stop'),reset(),$(_0x1a517b(0xc8))[_0x1a517b(0xcb)](),x=setInterval(function(){var _0x290409=_0x1a517b;if(checked){if(!paused)counter--;if(counter<=0x0){if(rest){reset();if(checkTime())document[_0x290409(0xd1)](_0x290409(0xb3))[_0x290409(0xaa)]();}else{counter=parseInt($(_0x290409(0xb9))[_0x290409(0xbf)]())*0x3c;if(isNaN(counter)){stopTimer(),alert(_0x290409(0xa5));throw new Error('Invalid\x20Timer\x20Settings');}if(checkTime())document[_0x290409(0xd1)](_0x290409(0xc6))['play']();}rest=!rest;}display(counter);}else outTime(),rest=![],reset();},0x3e8);}function stopTimer(){var _0x19d42c=_0x9702;start=![],rest=![],paused=![],checked=![],counter=0x0;typeof x!==_0x19d42c(0xa6)&&clearInterval(x);;$(_0x19d42c(0xc0))[_0x19d42c(0xa8)](''),$(_0x19d42c(0xc5))[_0x19d42c(0xbc)](_0x19d42c(0xbd),_0x19d42c(0xc2)),$('#pause')['prop']('value',_0x19d42c(0xbb)),$('#display')['hide']();}function timer(){updateTime(),checkTime(),start?stopTimer():startTimer();}function getTimeFromString(_0x22aafd){var _0x5b31ba=_0x9702;if(_0x22aafd['length']!=0x5||_0x22aafd[0x2]!=':')return null;var _0x3660bd=_0x22aafd[_0x5b31ba(0xaf)](':'),_0x260644=parseInt(_0x3660bd[0x0]),_0x324908=parseInt(_0x3660bd[0x1]);if(_0x260644>=0x0&&_0x260644<0x18&&_0x324908>=0x0&&_0x324908<0x3c)return time=_0x260644*0x3c+_0x324908,time;else return null;}function updateTime(){var _0x10afc3=_0x9702;update(),startTime=getTimeFromString(settings['startTime']),stopTime=getTimeFromString(settings[_0x10afc3(0xb7)]);if(startTime!==null&&stopTime!==null)startTime>=stopTime?(alert(_0x10afc3(0xb2)),periodValidity=![],$(this)[_0x10afc3(0xac)](_0x10afc3(0xc4))):(periodValidity=!![],$(_0x10afc3(0xa7))[_0x10afc3(0xc1)](_0x10afc3(0xc4)),$(_0x10afc3(0xab))[_0x10afc3(0xc1)](_0x10afc3(0xc4)));else{$(this)[_0x10afc3(0xac)](_0x10afc3(0xc4)),alert('Invalid\x20Period\x20Settings.');if(start)stopTimer();periodValidity=![],checked=![];}return periodValidity;}function checkTime(){var _0x607508=_0x9702;if(periodValidity){var _0x43e69a=new Date();time=_0x43e69a[_0x607508(0xc9)]()*0x3c+_0x43e69a[_0x607508(0xc3)]();if(startTime<=time&&time<stopTime)checked=!![];else checked=![];}return checked;}