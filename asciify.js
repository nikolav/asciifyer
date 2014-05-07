
// #asciify.js
// Vukovic Nikola <vukovicnikola2014@gmail.com>
// public domain

;((function (name, def) {
  
  
  var glob = (function () {
      return this || (1, eval)('this');
  })();
  
  
  this[name] = def(glob);
  
}).call(
  
  this, 
  
  'asciify', 
  
  // def
  function (g) {
    
    
    // #reasciifyer
    var reasciifyer = {
      
      'a':/[\xAA\xE0-\xE6\u0101\u0103\u0105\u01CE\u01DD\u01DF\u01E1\u01FB\u0201\u0203\u0227\u0250\u0430\u04D1\u04D3\u1E01\u1E9A\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1F70\u1F71\u1FB0-\u1FB4\u1FB6\u1FB7\uFF41]/g,
      'A':/[\xC0-\xC5\u0100\u0102\u0104\u019B\u01CD\u01DE\u01E0\u01FA\u0200\u0202\u0226\u0386\u0391\u039B\u0410\u04D0\u04D2\u1E00\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1F08-\u1F0F\u1F88-\u1F8F\u1FB8-\u1FBC\u212B\u2204\uAB01-\uAB05\uFF21]/g,
      'ae':/[\u01E3\u01FD\u04D5]/g,
      'AE':/[\xC6\u01E2\u01FC\u04D4]/g,
      'b':/[\u0180\u0183\u0185\u0431\u10D1\u10D2\u1D4D\u1E03\u1E05\u1E07\u2D06\uFF42]/g,
      'B':/[\xDF\u0181\u0243\u0299\u0392\u1E02\u1E04\u1E06\u212C\uFF22]/g,
      'bg':/[\u33D2]/g,
      'Bq':/[\u33C3]/g,
      'C':/[\xC7\u0106\u0108\u010A\u010C\u0187\u0297\u03DA\u1E08\u20A1\u20A2\u20B5\u2102\u2103\u212D\u2201\uFF23]/g,
      'c':/[\xE7\u0107\u0109\u010B\u010D\u0188\u03F2\u1D9C\u1E09\u2D0B\uFF43]/g,
      'Ca':/[\u33C7]/g,
      'cc':/[\u33C4]/g,
      'cd':/[\u33C5]/g,
      'CE':/[\u0152\u0276]/g,
      'Ce':/[\u20A0]/g,
      'ce':/[\x9C\u0153\u0276]/g,
      'cm':/[\u339D]/g,
      'cm2':/[\u33A0]/g,
      'cm3':/[\u33A4]/g,
      'd':/[\u010F\u0111\u018C\u0501\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u20AB\uFF44]/g,
      'D':/[\xD0\u010E\u0110\u0189\u018A\u1E0A\u1E0C\u1E0E\u1E10\u1E12\uFF24]/g,
      'd3':/[\u02A4]/g,
      'dB':/[\u33C8]/g,
      'dj':/[\u0503]/g,
      'dl':/[\u3397]/g,
      'Dp':/[\u20AF]/g,
      'DZ':/[\u01C4\u01F1]/g,
      'dz':/[\u01C6\u01F3\u02A3\u02A5]/g,
      'E':/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A\u0190\u0204\u0206\u0228\u0388\u0395\u039E\u0400\u0401\u0404\u0415\u04D6\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1F18-\u1F1D\u1FC8\u1FC9\u2130\uFF25]/g,
      'e':/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B\u0205\u0207\u0229\u0435\u0450\u0451\u04BD\u04BF\u04D7\u04D9\u04DB\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u212E-\u2130\u2D12\uFF45]/g,
      'F':/[\u0191\u03DC\u1E1E\u20A3\u2109\u2131\uFF26]/g,
      'f':/[\u0192\u1DA0\u1E1F\u1E9B\u20A4\u2131\u222E\u2231-\u2233\uFF46]/g,
      'fax':/[\u213B]/g,
      'ff':/[\u222F\u2230\uFB00]/g,
      'ffi':/[\uFB03]/g,
      'ffl':/[\uFB04]/g,
      'fi':/[\uF001\uFB01]/g,
      'fl':/[\uF002\uFB02]/g,
      'fn':/[\u02A9\u3399]/g,
      'ft':/[\uFB05]/g,
      'G':/[\u011C\u011E\u0120\u0122\u0193\u01E4\u01E6\u01F4\u029B\u03DE\u050C\u10BA\u1E20\u20B2\u3387\uFF27]/g,
      'g':/[\u011D\u011F\u0121\u0123\u01E5\u01E7\u01F5\u1E21\uFF47]/g,
      'GHz':/[\u3393]/g,
      'GPa':/[\u33AC]/g,
      'Gy':/[\u33C9]/g,
      'H':/[\u0124\u0126\u021E\u029C\u0389\u0397\u12D8-\u12DF\u1E22\u1E24\u1E26\u1E28\u1E2A\u1F28-\u1F2F\u1F98-\u1F9F\u1FCA-\u1FCC\u210D\uAB11-\uAB16\uFF28]/g,
      'h':/[\u0125\u0127\u021F\u0266\u0267\u02B0\u02B1\u0452\u045B\u04BB\u0570\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E96\u2D0C\uFF48]/g,
      'ha':/[\u33CA]/g,
      'hj':/[\u0195]/g,
      'Hj':/[\u01F6\u050A]/g,
      'Hz':/[\u3390]/g,
      'I':/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130\u01CF\u0208\u020A\u038A\u0399\u03AA\u0406\u0407\u1E2C\u1E2E\u1EC8\u1ECA\u1F38-\u1F3F\u1FD2\u1FD3\u1FD6-\u1FDB\uFF29]/g,
      'i':/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131\u019A\u01D0\u0209\u020B\u0211\u0213\u0268-\u026C\u03CA\u03F3\u0456\u0457\u0622\u0623\u1E2D\u1E2F\u1EC9\u1ECB\u1F30-\u1F37\u1F76\u1F77\u1FD0-\u1FD3\u1FD6\u1FD7\uFF49]/g,
      'IJ':/[\u0132]/g,
      'ij':/[\u0133]/g,
      'in':/[\u33CC]/g,
      'IP':/[\u33CB]/g,
      'J':/[\u0134\u01F0\uFF2A]/g,
      'j':/[\u0135\u01F0\u0237\u029D\u0458\u0575\uFF4A]/g,
      'ji':/[\u05EA]/g,
      'K':/[\u0136\u0198\u01E8\u039A\u040C\u041A\u1E30\u1E32\u1E34\u20AD\u212A\uFF2B]/g,
      'k':/[\u0137\u0138\u0199\u01E9\u03BA\u043A\u045C\u049B\u049D\u049F\u04A1\u1D4F\u1E31\u1E33\u1E35\uFF4B]/g,
      'kA':/[\u3384]/g,
      'KB':/[\u3385]/g,
      'kg':/[\u338F]/g,
      'KK':/[\u33CD]/g,
      'kl':/[\u3398]/g,
      'km':/[\u339E]/g,
      'KM':/[\u33CE]/g,
      'km2':/[\u33A2]/g,
      'km3':/[\u33A6]/g,
      'kPa':/[\u33AA]/g,
      'kt':/[\u33CF]/g,
      'kV':/[\u33B8]/g,
      'kW':/[\u33BE]/g,
      'L':/[\u0139\u013B\u013D\u013F\u0141\u029F\u1E36\u1E38\u1E3A\u1E3C\uFF2C]/g,
      'l':/[\u013A\u013C\u013E\u0140\u0142\u026D\u056C\u0582\u05DF\u1E37\u1E39\u1E3B\u1E3D\uFF4C]/g,
      'l3':/[\u026E]/g,
      'LJ':/[\u01C7]/g,
      'lj':/[\u01C9]/g,
      'lm':/[\u33D0]/g,
      'ln':/[\u33D1]/g,
      'ls':/[\u02AA]/g,
      'lx':/[\u33D3]/g,
      'lz':/[\u02AB]/g,
      'M':/[\u039C\u041C\u04CD\u1E3E\u1E40\u1E42\uFF2D]/g,
      'm':/[\u1D50\u1E3F\u1E41\u1E43\u20A5\u2133\u217F\u2D07\u2D1B\u2D1C\uFF4D]/g,
      'm2':/[\u33A1]/g,
      'm3':/[\u33A3\u33A5]/g,
      'MB':/[\u33AB]/g,
      'mb':/[\u33D4]/g,
      'mg':/[\u338E]/g,
      'MHz':/[\u3392]/g,
      'mil':/[\u33D5]/g,
      'ml':/[\u3396]/g,
      'MPa':/[\u3386]/g,
      'ms':/[\u33A7\u33B3]/g,
      'ms2':/[\u33A8]/g,
      'mV':/[\u33B7]/g,
      'MV':/[\u33B9]/g,
      'MW':/[\u33BF]/g,
      'N':/[\xD1\u0143\u0145\u0147\u019D\u01F8\u039D\u1E44\u1E46\u1E48\u1E4A\u20A6\u2115\u2116\uFF2E]/g,
      'n':/[\xF1\u0144\u0146\u0148\u0149\u014B\u01F9\u0272\u0273\u03AE\u03B7\u0564\u0572\u0578\u057C\u05DE\u10D8\u1E45\u1E47\u1E49\u1E4B\u1F20-\u1F27\u1F74\u1F75\u1F90-\u1F97\u1FC2-\u1FC4\u1FC6\u1FC7\u2D02\u2D04\u2D05\u2D16\u2D19\u2D1A\uFF4E]/g,
      'nA':/[\u3381\u3383]/g,
      'nd':/[\u33D6]/g,
      'nF':/[\u338B]/g,
      'NJ':/[\u01CA]/g,
      'nj':/[\u01CC]/g,
      'nm':/[\u339A\u339C]/g,
      'nm2':/[\u339F]/g,
      'ns':/[\u33B1]/g,
      'nV':/[\u33B5]/g,
      'nW':/[\u33BB\u33BD]/g,
      'O':/[\xD2-\xD8\u014C\u014E\u0150\u019F\u01A0\u01A2\u01D1\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u0298\u038C\u0398\u039F\u03D8\u03EC\u03F4\u041E\u0472\u047A\u04E6\u04EA\u0555\u12D0\u12D1\u12D5\u1E4C\u1E4E\u1E50\u1E52\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1F48-\u1F4D\u1FA8-\u1FAF\u1FB2\u1FB4\u1FB6\u1FB7\u1FF8-\u1FFC\uFF2F]/g,
      'o':/[\xF0\xF2-\xF6\u014D\u014F\u0151\u018D\u01D2\u020D\u020F\u022B\u022D\u022F\u0231\u03BF\u03CC\u0479\u04E7\u04E9\u04EB\u0585\u1D52\u1E4D\u1E4F\u1E51\u1E53\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1F00-\u1F07\u1F40-\u1F45\u1F78\u1F79\u1F80-\u1F87\u2134\u2D03\u2D22\uFF4F]/g,
      'oh':/[\u2D25]/g,
      'oo':/[\u2D14]/g,
      'Oy':/[\u0478]/g,
      'P':/[\u01A4\u01F7\u03A1\u1E54\u1E56\u2119\uFF30]/g,
      'p':/[\u0584\u1D56\u1E55\u1E57\u1FE4\u1FE5\uFF50]/g,
      'pA':/[\u3380]/g,
      'Pa':/[\u33A9]/g,
      'pF':/[\u338A]/g,
      'pH':/[\u33D7]/g,
      'pn':/[\u33D8]/g,
      'PR':/[\u33DA]/g,
      'ps':/[\u33B0]/g,
      'pV':/[\u33B4]/g,
      'pW':/[\u33BA]/g,
      'Q':/[\u01EA\u01EC\u10AD\u211A\uFF31]/g,
      'q':/[\u01EB\u01ED\u0563\u0566\uFF51]/g,
      'qu':/[\uFB16]/g,
      'R':/[\u0154\u0156\u0158\u01A6\u0210\u0212\u1E58\u1E5A\u1E5C\u1E5E\u20A7\u211B-\u211F\uFF32]/g,
      'r':/[\u0155\u0157\u0159\u1E59\u1E5B\u1E5D\u1E5F\uFF52]/g,
      'rad':/[\u33AD]/g,
      'Rs':/[\u20A8]/g,
      'ru':/[\u2D0A\u2D20]/g,
      'S':/[\x8A\u015A\u015C\u015E\u0160\u0218\u0405\u10BD\u1E60\u1E62\u1E64\u1E66\u1E68\uFF33]/g,
      's':/[\x9A\u015B\u015D\u015F\u0161\u1E61\u1E63\u1E65\u1E67\u1E69\uFF53]/g,
      'sm':/[\u2120]/g,
      'sr':/[\u33DB]/g,
      'st':/[\uFB06]/g,
      'Sv':/[\u33DC]/g,
      'T':/[\u0162\u0164\u0166\u01AC\u01AE\u021A\u03A4\u0422\u1E6A\u1E6C\u1E6E\u1E70\u20AE\uFF34]/g,
      't':/[\u0163\u0165\u0167\u0565\u0567\u1D57\u1E6B\u1E6D\u1E6F\u1E71\u1E97\u20BA\u2D00\u2D15\uFF54]/g,
      'tel':/[\u2121]/g,
      'tf':/[\u02A7]/g,
      'tfu':/[\uFB13]/g,
      'tG':/[\u02A8]/g,
      'THz':/[\u3394]/g,
      'ts':/[\u02A6]/g,
      'U':/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01B1\u01B2\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u03B0\u1200\u1201\u1205-\u1207\u1E72\u1E74\u1E76\u1E78\u1E7A\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1F50\u1F52\u1F54\u1F56\u1FE2\u1FE3\u1FE6\u1FE7\uFF35]/g,
      'u':/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u03CB\u03CD\u0574\u0576\u057D\u0587\u1D58\u1E73\u1E75\u1E77\u1E79\u1E7B\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1F50-\u1F57\u1F7A\u1F7B\u1FE0-\u1FE3\u1FE6\u1FE7\u2D0E\u2D0F\u2D11\u2D1E\u2D23\u2D24\uFF55]/g,
      'uA':/[\u3382]/g,
      'uF':/[\u338C]/g,
      'ug':/[\u338D]/g,
      'uh':/[\u2D10]/g,
      'ul':/[\u3395\uFB14]/g,
      'ulu':/[\uFB17]/g,
      'um':/[\u339B]/g,
      'un':/[\u057F]/g,
      'up':/[\uFB15]/g,
      'us':/[\u33B2]/g,
      'uV':/[\u33B6]/g,
      'uW':/[\u33BC]/g,
      'V':/[\u0474\u0476\u1E7C\u1E7E\uFF36]/g,
      'v':/[\u0475\u0477\u05E2\u1D5B\u1E7D\u1E7F\uFF56]/g,
      'W':/[\u0174\u1E80\u1E82\u1E84\u1E86\u1E88\u20A9\uFF37\uFFE6]/g,
      'w':/[\u0175\u02B7\u0461\u0561\u1E81\u1E83\u1E85\u1E87\u1E89\u1E98\u1F60-\u1F67\u1F7C\u1F7D\u1FA0-\u1FA7\u1FF2-\u1FF4\u1FF6\u1FF7\u2D0D\u2D13\uFF57]/g,
      'Wb':/[\u33DD]/g,
      'X':/[\u03A7\u04FC\u04FE\u1E8A\u1E8C\uFF38]/g,
      'x':/[\u1E8B\u1E8D\u2D1F\uFF58]/g,
      'Y':/[\x9F\xDD\u0176\u0178\u01B3\u0232\u038E\u03A5\u03AB\u03D2-\u03D4\u04AE\u04B0\u1202-\u1204\u1E8E\u1EF2\u1EF4\u1EF6\u1EF8\u1F59\u1F5B\u1F5D\u1F5F\u1FE8-\u1FEB\uFF39\uFFE5]/g,
      'y':/[\xFD\xFF\u0177\u01B4\u0233\u02B8\u0443\u045E\u04EF\u04F1\u04F3\u04F5\u05E5\u05E6\u1202-\u1204\u1E8F\u1E99\u1EF3\u1EF5\u1EF7\u1EF9\u2D01\u2D17\u2D18\uFF59]/g,
      'Z':/[\x8E\u0179\u017B\u017D\u01B5\u0224\u0396\u1E90\u1E92\u1E94\uFF3A]/g,
      'z':/[\x9E\u017A\u017C\u017E\u01B6\u0225\u1DBB\u1E91\u1E93\u1E95\uFF5A]/g
      
    };
    
    // #corcall
    var corcall = g.Function.prototype.call;
    
    // #owns
    var owns    = (function () { // node, key
        return this.apply(null, arguments);
    }).bind(corcall.bind(g.Object.prototype.hasOwnProperty));
    
    // #keys
    var keys    = (function (node) {
        return this.keys(this.obj(node));
    }).bind({
      
      keys : g.Object.keys || function (node) {
        
        var key;
        var ownkeys = [];
        
        for (key in node)
          owns(node, key) && ownkeys.push(key);
        
        return ownkeys;
      }, 
      
      obj  : g.Object
      
    });
    
    // #forEach
    var forEach = (function (g, corcall, owns) {
      
      return ('function' == typeof g.Array.prototype.forEach) ? 
        
        corcall.bind(g.Array.prototype.forEach) :
        
        function (array, callback, context) {
          for (
            
            var it = -1, len = array.length, ctx = context || g;
            
            ++it < len;
            
            owns(array, it) && 
              callback.call(ctx, array[it], it, array)
            
          );
        };
  
    })(g, corcall, owns);
    
    
    // #save
    return (function (target) {
      
      var _    = this;
      var proc = {
        api : _, 
        str : ''+ target
      };
      
      
      // loop regexes in 'reasciifyer' hash 
      // replacing matches with corresponding hash's key
      _.each(_.keys(_.cmap), _.cbasciifyer, proc);
      
      
      return proc.str;
      
    }).bind({
      cbasciifyer : function (symbol) {
        var proc = this;
        proc.str = proc.str.replace(proc.api.cmap[symbol], symbol);
      }, 
      cmap        : reasciifyer, 
      each        : forEach, 
      keys        : keys
    });
    
    
  } // /def
  
));
// /eof asciify.js
