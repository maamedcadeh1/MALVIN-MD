const _0x276423=_0x2869;(function(_0x53433f,_0x43656f){const _0x380162=_0x2869,_0x3d1360=_0x53433f();while(!![]){try{const _0xdf2394=-parseInt(_0x380162(0x186))/0x1+-parseInt(_0x380162(0x192))/0x2*(-parseInt(_0x380162(0x196))/0x3)+parseInt(_0x380162(0x187))/0x4*(parseInt(_0x380162(0x17c))/0x5)+parseInt(_0x380162(0x174))/0x6+parseInt(_0x380162(0x178))/0x7+-parseInt(_0x380162(0x18c))/0x8*(-parseInt(_0x380162(0x18d))/0x9)+-parseInt(_0x380162(0x189))/0xa*(parseInt(_0x380162(0x197))/0xb);if(_0xdf2394===_0x43656f)break;else _0x3d1360['push'](_0x3d1360['shift']());}catch(_0xd9a31e){_0x3d1360['push'](_0x3d1360['shift']());}}}(_0x4b8c,0x30cb7));function _0x4b8c(){const _0x17c188=['quoted','chat','411696KiUNLr','tools','adds\x20deep\x20effect\x20in\x20given\x20audio','sender','1243767sQMYHa','reply','adds\x20bass\x20in\x20given\x20sound','fast','15XWfuKJ','-af\x20atempo=4/4,asetrate=44500*2/3','audio/mpeg','readFileSync','ffmpeg\x20-i\x20','downloadAndSaveMediaMessage','deep','unlinkSync','reverse2','Adds\x20fast(equilizer)\x20in\x20quoted\x20audio.','84812YxVwTE','1268QkEVRY','wait','60OKwrXm','slice','Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with.*','102872JTmcac','234UjcQVA','.mp3','<reply\x20to\x20any\x20audio>','-af\x20equalizer=f=54:width_type=o:width=2:g=20','-af\x20acrusher=.1:1:64:0:log','6WqKixN','Adds\x20reverse(equilizer)\x20in\x20quoted\x20audio.','sendMessage','child_process','156111EEUNHw','830533KwTrtz','blown','bass','test','mtype','Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with*'];_0x4b8c=function(){return _0x17c188;};return _0x4b8c();}const fs=require('fs'),{exec}=require(_0x276423(0x195)),{cmd,commands}=require('../command');function _0x2869(_0x21b169,_0x51517e){const _0x4b8c9a=_0x4b8c();return _0x2869=function(_0x286905,_0x6f7399){_0x286905=_0x286905-0x170;let _0x512bb1=_0x4b8c9a[_0x286905];return _0x512bb1;},_0x2869(_0x21b169,_0x51517e);}cmd({'pattern':_0x276423(0x199),'desc':_0x276423(0x17a),'category':_0x276423(0x175),'use':'<reply\x20to\x20any\x20audio>','react':'🔊'},async(_0x1ccb9b,_0x19246b)=>{const _0x2011d4=_0x276423;let _0x461432=_0x19246b['quoted']['mtype'],_0x226450=_0x2011d4(0x190);if(/audio/[_0x2011d4(0x19a)](_0x461432)){_0x19246b['reply'](tlang()[_0x2011d4(0x188)]);let _0x3d8528=await _0x1ccb9b[_0x2011d4(0x181)](_0x19246b['quoted']),_0x3a7a78=_0x19246b[_0x2011d4(0x177)][_0x2011d4(0x18a)](0x6)+_0x2011d4(0x18e);exec(_0x2011d4(0x180)+_0x3d8528+'\x20'+_0x226450+'\x20'+_0x3a7a78,(_0x1a174a,_0x287703,_0x1297ee)=>{const _0x4b35fb=_0x2011d4;fs[_0x4b35fb(0x183)](_0x3d8528);if(_0x1a174a)return reply(_0x1a174a);let _0x1abc29=fs[_0x4b35fb(0x17f)](_0x3a7a78);_0x1ccb9b['sendMessage'](_0x19246b[_0x4b35fb(0x173)],{'audio':_0x1abc29,'mimetype':_0x4b35fb(0x17e)},{'quoted':_0x19246b}),fs[_0x4b35fb(0x183)](_0x3a7a78);});}else _0x19246b['reply'](_0x2011d4(0x171));}),cmd({'pattern':_0x276423(0x198),'desc':'adds\x20blown\x20in\x20given\x20audio','category':_0x276423(0x175),'use':_0x276423(0x18f),'react':'🌬'},async(_0x17b436,_0x23e5dc)=>{const _0x31bc4c=_0x276423;let _0x35a3aa=_0x23e5dc[_0x31bc4c(0x172)][_0x31bc4c(0x170)],_0x5d0537=_0x31bc4c(0x191);if(/audio/[_0x31bc4c(0x19a)](_0x35a3aa)){_0x23e5dc[_0x31bc4c(0x179)](tlang()[_0x31bc4c(0x188)]);let _0x483eb2=await _0x17b436[_0x31bc4c(0x181)](_0x23e5dc[_0x31bc4c(0x172)]),_0x2618b4=_0x23e5dc[_0x31bc4c(0x177)]['slice'](0x6)+'.mp3';exec(_0x31bc4c(0x180)+_0x483eb2+'\x20'+_0x5d0537+'\x20'+_0x2618b4,(_0x4babf4,_0x919e23,_0x402161)=>{const _0x150788=_0x31bc4c;fs[_0x150788(0x183)](_0x483eb2);if(_0x4babf4)return reply(_0x4babf4);let _0x3fae20=fs['readFileSync'](_0x2618b4);_0x17b436[_0x150788(0x194)](_0x23e5dc['chat'],{'audio':_0x3fae20,'mimetype':_0x150788(0x17e)},{'quoted':_0x23e5dc}),fs[_0x150788(0x183)](_0x2618b4);});}else _0x23e5dc[_0x31bc4c(0x179)]('Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with.*');}),cmd({'pattern':_0x276423(0x182),'desc':_0x276423(0x176),'category':_0x276423(0x175),'use':_0x276423(0x18f),'react':'🌀'},async(_0x593899,_0x5b7d1d)=>{const _0x4169b6=_0x276423;let _0x283516=_0x5b7d1d['quoted'][_0x4169b6(0x170)],_0x7ad113=_0x4169b6(0x17d);if(/audio/[_0x4169b6(0x19a)](_0x283516)){_0x5b7d1d['reply'](tlang()[_0x4169b6(0x188)]);let _0x583837=await _0x593899[_0x4169b6(0x181)](_0x5b7d1d[_0x4169b6(0x172)]),_0x5e2a96=_0x5b7d1d['sender']['slice'](0x6)+_0x4169b6(0x18e);exec(_0x4169b6(0x180)+_0x583837+'\x20'+_0x7ad113+'\x20'+_0x5e2a96,(_0x553a3b,_0x19233a,_0x53491f)=>{const _0x395f31=_0x4169b6;fs[_0x395f31(0x183)](_0x583837);if(_0x553a3b)return reply(_0x553a3b);let _0x5c2807=fs[_0x395f31(0x17f)](_0x5e2a96);_0x593899[_0x395f31(0x194)](_0x5b7d1d['chat'],{'audio':_0x5c2807,'mimetype':_0x395f31(0x17e)},{'quoted':_0x5b7d1d}),fs[_0x395f31(0x183)](_0x5e2a96);});}else _0x5b7d1d['reply']('Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with.*');}),cmd({'pattern':_0x276423(0x17b),'desc':_0x276423(0x185),'category':'tools','use':_0x276423(0x18f),'react':'⚡'},async(_0x1060db,_0x512d39)=>{const _0x37b3e0=_0x276423;let _0x2ccd20=_0x512d39[_0x37b3e0(0x172)][_0x37b3e0(0x170)],_0x20afd9='-filter:a\x20\x22atempo=1.63,asetrate=44100\x22';if(/audio/[_0x37b3e0(0x19a)](_0x2ccd20)){_0x512d39['reply'](tlang()['wait']);let _0x141293=await _0x1060db[_0x37b3e0(0x181)](_0x512d39[_0x37b3e0(0x172)]),_0x1b5f8b=_0x512d39[_0x37b3e0(0x177)][_0x37b3e0(0x18a)](0x6)+_0x37b3e0(0x18e);exec('ffmpeg\x20-i\x20'+_0x141293+'\x20'+_0x20afd9+'\x20'+_0x1b5f8b,(_0x5478dd,_0xa64b9c,_0x103f8b)=>{const _0x4cbf23=_0x37b3e0;fs['unlinkSync'](_0x141293);if(_0x5478dd)return reply(_0x5478dd);let _0x561acc=fs[_0x4cbf23(0x17f)](_0x1b5f8b);_0x1060db[_0x4cbf23(0x194)](_0x512d39[_0x4cbf23(0x173)],{'audio':_0x561acc,'mimetype':'audio/mpeg'},{'quoted':_0x512d39}),fs[_0x4cbf23(0x183)](_0x1b5f8b);});}else _0x512d39[_0x37b3e0(0x179)]('Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with.*');}),cmd({'pattern':_0x276423(0x184),'desc':_0x276423(0x193),'category':_0x276423(0x175),'use':_0x276423(0x18f),'react':'🔁'},async(_0x429c6b,_0x8ea3eb)=>{const _0x3324dc=_0x276423;let _0x563c5e=_0x8ea3eb[_0x3324dc(0x172)][_0x3324dc(0x170)],_0x2b4d60='-filter_complex\x20\x22areverse\x22';if(/audio/['test'](_0x563c5e)){_0x8ea3eb[_0x3324dc(0x179)](tlang()[_0x3324dc(0x188)]);let _0x4f317b=await _0x429c6b['downloadAndSaveMediaMessage'](_0x8ea3eb[_0x3324dc(0x172)]),_0x179fe7=_0x8ea3eb[_0x3324dc(0x177)][_0x3324dc(0x18a)](0x6)+_0x3324dc(0x18e);exec(_0x3324dc(0x180)+_0x4f317b+'\x20'+_0x2b4d60+'\x20'+_0x179fe7,(_0xc25a73,_0x45d44d,_0x2703c6)=>{const _0x4c12a0=_0x3324dc;fs[_0x4c12a0(0x183)](_0x4f317b);if(_0xc25a73)return reply(_0xc25a73);let _0x476b51=fs[_0x4c12a0(0x17f)](_0x179fe7);_0x429c6b[_0x4c12a0(0x194)](_0x8ea3eb[_0x4c12a0(0x173)],{'audio':_0x476b51,'mimetype':_0x4c12a0(0x17e)},{'quoted':_0x8ea3eb}),fs[_0x4c12a0(0x183)](_0x179fe7);});}else _0x8ea3eb[_0x3324dc(0x179)](_0x3324dc(0x18b));});