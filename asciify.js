
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
      
      '2':/[\u01A7\u01A8]/,
      '3':/[\u01B7\u01EE\u021C\u01BA\u01EF\u021D\u0292\u0293\u1D9A\u1D23]/,
      '5':/[\u01BC\u01BD]/,
      '8':/[\u0222\u0223]/,
      'A':/[\xC0-\xC5\u0100\u0102\u0104\u01CD\u01DE\u01E0\u01FA\u0200\u0202\u0226\u023A\u1E00\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u2C6D\u2C6F\u2C70\uFF21\u1D00]/,
      'a':/[\xE0-\xE5\u0101\u0103\u0105\u019B\u01CE\u01DF\u01E1\u01FB\u0201\u0203\u0227\u0250-\u0252\u1D8F\u1D90\u1E01\u1E9A\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u2C65\uFF41]/,
      'AA':/\uA732/,
      'aa':/\uA733/,
      'AE':/[\xC6\u01E2\u01FC\u1D01]/,
      'ae':/[\xE6\u018F\u01E3\u01FD\u0259\u025A\u1D95]/,
      'AO':/\uA734/,
      'ao':/\uA735/,
      'AU':/\uA736/,
      'au':/\uA737/,
      'AV':/[\uA738\uA73A]/,
      'av':/[\uA739\uA73B]/,
      'AY':/\uA73C/,
      'ay':/\uA73D/,
      'b':/[\u0180\u0183-\u0185\u0253\u1D6C\u1D80\u1E03\u1E05\u1E07\uFF42]/,
      'B':/[\u0181\u0182\u0243\u1E02\u1E04\u1E06\uFF22\u0299\u1D03]/,
      'C':/[\xC7\u0106\u0108\u010A\u010C\u0187\u023B\u1E08\uA72C\uA72E\uA73E\uA76E\uA792\uFF23\u1D04]/,
      'c':/[\xE7\u0107\u0109\u010B\u010D\u0188\u023C\u0255\u1E09\u2184\uA72D\uA72F\uA73F\uA76F\uA793\uFF43]/,
      'D':/[\xD0\u010E\u0110\u0189-\u018B\u01C5\u01F2\u1E0A\u1E0C\u1E0E\u1E10\u1E12\uA779\uFF24\u1D05\u1D06]/,
      'd':/[\xF0\u010F\u0111\u018C\u0221\u0256\u0257\u1D6D\u1D81\u1D91\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E9F\uA771\uA77A\uFF44]/,
      'd3':/\u02A4/,
      'db':/\u0238/,
      'DZ':/[\u01C4\u01F1]/,
      'Dz':/[\u01C5\u01F2]/,
      'dz':/[\u01C6\u01F3\u02A3\u02A5]/,
      'E':/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A\u018E\u0190\u01A9\u01B8\u0204\u0206\u0228\u0246\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\uA76A\uFF25\u1D07\u2C7B]/,
      'e':/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B\u01B9\u01DD\u0205\u0207\u0229\u0247\u0258\u025B-\u025D\u029A\u1D02\u1D08\u1D92-\u1D94\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u2C78\uA76B\uFF45]/,
      'F':/[\u0191\u1E1E\uA77B\uFF26\uA730]/,
      'f':/[\u0192\u1D6E\u1D82\u1E1F\uA77C\uFF46]/,
      'fn':/\u02A9/,
      'G':/[\u011C\u011E\u0120\u0122\u0193\u01E4\u01E6\u01F4\u1E20\uA77D\uA77E\uA7A0\uFF27\u024A\u0262\u029B]/,
      'g':/[\u011D\u011F\u0121\u0123\u01E5\u01E7\u01F5\u0260\u0261\u1D77\u1D79\u1D83\u1E21\uA77F\uA7A1\uFF47]/,
      'H':/[\u0124\u0126\u021E\u1E22\u1E24\u1E26\u1E28\u1E2A\u2C67\u2C75\uA78D\uA7AA\uFF28\u029C]/,
      'h':/[\u0125\u0127\u021F\u0265-\u0267\u02AE\u02AF\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E96\u2C68\u2C76\uA727\uFF48]/,
      'hj':/\u0195/,
      'HJ':/\u01F6/,
      'HN':/\uA726/,
      'I':/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130\u0196\u0197\u01CF\u0208\u020A\u1E2C\u1E2E\u1EC8\u1ECA\uA76C\uFF29\u026A\u1D7B]/,
      'i':/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131\u01D0\u0209\u020B\u0268\u1D09\u1D96\u1E2D\u1E2F\u1EC9\u1ECB\uA76D\uFF49]/,
      'J':/[\u0134\u0248\uFF2A\u1D0A]/,
      'j':/[\u0135\u01F0\u0237\u0249\u025F\u0269\u0284\u029D\u1D7C\uFF4A]/,
      'K':/[\u0136\u0198\u01E8\u1E30\u1E32\u1E34\u2C69\uA740\uA742\uA744\uA7A2\uFF2B\u1D0B]/,
      'k':/[\u0137\u0138\u0199\u01E9\u029E\u1D84\u1E31\u1E33\u1E35\u2C6A\uA741\uA743\uA745\uA7A3\uFF4B]/,
      'L':/[\u0139\u013B\u013D\u013F\u0141\u01C8\u023D\u1E36\u1E38\u1E3A\u1E3C\u2C60\u2C62\uA746\uA748\uA780\uFF2C\u029F\u1D0C]/,
      'l':/[\u013A\u013C\u013E\u0140\u0142\u019A\u0234\u026B-\u026D\u0283\u0285\u0286\u1D85\u1D8B\u1D98\u1E37\u1E39\u1E3B\u1E3D\u2C61\uA747\uA749\uA772\uA781\uA78E\uFF4C]/,
      'l3':/\u026E/,
      'LJ':/\u01C7/,
      'Lj':/\u01C8/,
      'lj':/\u01C9/,
      'LL':/\u1EFA/,
      'll':/\u1EFB/,
      'ls':/\u02AA/,
      'lz':/\u02AB/,
      'M':/[\u019C\u1E3E\u1E40\u1E42\u2C6E\uFF2D\u1D0D\uA7FA]/,
      'm':/[\u026F-\u0271\u1D1F\u1D6F\u1D86\u1E3F\u1E41\u1E43\uA773\uFF4D]/,
      'N':/[\xD1\u0143\u0145\u0147\u014A\u019D\u01CB\u01F8\u0220\u1E44\u1E46\u1E48\u1E4A\uA790\uA7A4\uFF2E\u0274\u1D0E]/,
      'n':/[\xF1\u0144\u0146\u0148\u0149\u014B\u019E\u01F9\u0235\u0272\u0273\u1D70\u1D87\u1E45\u1E47\u1E49\u1E4B\uA774\uA791\uA7A5\uFF4E]/,
      'NJ':/\u01CA/,
      'Nj':/\u01CB/,
      'nj':/\u01CC/,
      'O':/[\xD2-\xD6\xD8\u014C\u014E\u0150\u0186\u019F\u01A0\u01D1\u01EA\u01EC\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u1E4C\u1E4E\u1E50\u1E52\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\uA74A\uA74C\uFF2F\u1D0F\u1D10]/,
      'o':/[\xF2-\xF6\xF8\u014D\u014F\u0151\u01A1\u01D2\u01EB\u01ED\u01FF\u020D\u020F\u022B\u022D\u022F\u0231\u0254\u025E\u0275\u0277\u0278\u1D11-\u1D13\u1D16\u1D17\u1D97\u1E4D\u1E4F\u1E51\u1E53\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u2C77\u2C7A\uA74B\uA74D\uFF4F]/,
      'OE':/\u0276/,
      'oe':/\u1D14/,
      'OI':/\u01A2/,
      'oi':/\u01A3/,
      'OO':/\uA74E/,
      'oo':/\uA74F/,
      'OU':/\u1D15/,
      'P':/[\xDE\u01A4\u1E54\u1E56\u2C63\uA750\uA752\uA754\uA764\uA766\uFF30\u1D18]/,
      'p':/[\xFE\u01A5\u01F7\u1D71\u1D7D\u1D88\u1E55\u1E57\uA751\uA753\uA755\uA765\uA767\uFF50]/,
      'q':/[\u018D\u024B\u02A0\uA757\uA759\uFF51]/,
      'Q':/[\u024A\uA756\uA758\uFF31]/,
      'qp':/\u0239/,
      'R':/[\u0154\u0156\u0158\u0210\u0212\u024C\u1E58\u1E5A\u1E5C\u1E5E\u2C64\uA75A\uA782\uA7A6\uFF32]/,
      'r':/[\u0155\u0157\u0159\u0211\u0213\u024D\u0279-\u027F\u1D72\u1D73\u1D89\u1E59\u1E5B\u1E5D\u1E5F\u2C79\uA75B\uA783\uA7A7\uFF52]/,
      'R':/[\u0280\u0281\u1D19\u1D1A]/,
      'S':/[\u015A\u015C\u015E\u0160\u0218\u1E60\u1E62\u1E64\u1E66\u1E68\u1E9E\u2C7E\uA784\uA78B\uA7A8\uFF33\uA731]/,
      's':/[\xDF\u015B\u015D\u015F\u0161\u017F\u0219\u023F\u0282\u1D74\u1D8A\u1E61\u1E63\u1E65\u1E67\u1E69\u1E9B-\u1E9D\uA785\uA78C\uA7A9\uFF53]/,
      'T':/[\u0162\u0164\u0166\u01AC\u01AE\u021A\u023E\u1E6A\u1E6C\u1E6E\u1E70\uA72A\uA786\uFF34\u1D1B]/,
      't':/[\u0163\u0165\u0167\u01AB\u01AD\u021B\u0236\u0287\u0288\u1D75\u1E6B\u1E6D\u1E6F\u1E71\u1E97\u2C66\uA787\uFF54]/,
      'tc':/\u02A8/,
      'th':/\u1D7A/,
      'tm':/\uA777/,
      'ts':/[\u02A6\u02A7]/,
      'TZ':/\uA728/,
      'tz':/\uA729/,
      'U':/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01B1\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u0244\u1E72\u1E74\u1E76\u1E78\u1E7A\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\uFF35\u1D1C\u1D7E]/,
      'u':/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u0289\u028A\u1D1D\u1D1E\u1D7F\u1D99\u1E73\u1E75\u1E77\u1E79\u1E7B\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\uFF55]/,
      'ue':/\u1D6B/,
      'um':/\uA778/,
      'V':/[\u0194\u01B2\u0245\u1E7C\u1E7E\u1EFC\uA75E\uFF36\u1D20]/,
      'v':/[\u0263\u0264\u028B\u028C\u1D8C\u1E7D\u1E7F\u1EFD\u2C71\u2C74\uA75D\uA75F\uA775\uFF56]/,
      'VN':/\uA768/,
      'VY':/\uA760/,
      'vy':/\uA761/,
      'W':/[\u0174\u1E80\u1E82\u1E84\u1E86\u1E88\u2C72\uFF37\u1D21]/,
      'w':/[\u0175\u028D\u1E81\u1E83\u1E85\u1E87\u1E89\u1E98\u2C73\uFF57]/,
      'x':/[\u1D8D\u1E8B\u1E8D\uFF58]/,
      'X':/[\u1E8A\u1E8C\uFF38]/,
      'Y':/[\xDD\u0176\u0178\u01B3\u0232\u024E\u1E8E\u1EF2\u1EF4\u1EF6\u1EF8\u1EFE\uFF39\u028F]/,
      'y':/[\xFD\xFF\u0177\u01B4\u0233\u024F\u028E\u1E8F\u1E99\u1EF3\u1EF5\u1EF7\u1EF9\u1EFF\uFF59]/,
      'Z':/[\u0179\u017B\u017D\u01B5\u0224\u1E90\u1E92\u1E94\u2C6B\u2C7F\uA762\uFF3A\u1D22]/,
      'z':/[\u017A\u017C\u017E\u01B6\u0225\u0240\u0290\u0291\u1D76\u1D8E\u1E91\u1E93\u1E95\u2C6C\uA763\uFF5A]/,      
      
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
