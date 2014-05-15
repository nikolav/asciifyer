
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
      
      '!':/[\u01C3\uA78B\uA78C]/g,
      '&':/\uA778/g,
      '+':/[\u01C2\u271D-\u271F]/g,
      '2':/[\u01A8\u01BB]/g,
      '3':/[\u01B7\u01BA\u01EE\u01EF\u021C\u021D\u0292\u0293\u1D23\u1D9A\uA723\uA76B]/g,
      '4':/[\uA72C-\uA72F\uA75C]/g,
      '5':/[\u01BC-\u01BE\u0296]/g,
      '9':/[\uA76E\uA76F]/g,
      '?':/[\u0241\u0242\u0294\u02A1]/g,
      'A':/[\xC0-\xC5\u0100\u0102\u0104\u01CD\u01DE\u01E0\u01FA\u0200\u0202\u0226\u023A\u1D00\u1D25\u1E00\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u24B6\u2C6D\u2C6F\uA722\uA724\uFF21]|\uD83C[\uDD10\uDD30\uDD50\uDD70]/g,
      'a':/[\xE0-\xE5\u0101\u0103\u0105\u01CE\u01DF\u01E1\u01FB\u0201\u0203\u0227\u0250-\u0252\u0363\u1D8F\u1D90\u1DD3\u1E01\u1E9A\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u2090\u249C\u24D0\u2C65\uFF41]/g,
      'AA':/\uA732/g,
      'aa':/\uA733/g,
      'AE':/[\xC6\u018F\u01E2\u01FC\u1D01]/g,
      'ae':/[\xE6\u01A7\u01E3\u01FD\u0259\u025A\u1D02\u1D95\u1DD4\u2094\u2C77]/g,
      'ao':/[\u1DD5\uA735]/g,
      'AO':/\uA734/g,
      'AU':/\uA736/g,
      'au':/\uA737/g,
      'av':/[\u1DD6\uA739\uA73B]/g,
      'AV':/[\uA738\uA73A]/g,
      'AY':/\uA73C/g,
      'ay':/\uA73D/g,
      'b':/[\u0180\u0183-\u0185\u0253\u1D6C\u1D80\u1E03\u1E05\u1E07\u249D\u24D1\uFF42]/g,
      'B':/[\u0181\u0182\u0243\u0299\u1D03\u1E02\u1E04\u1E06\u1E9E\u24B7\uFF22]|\uD83C[\uDD11\uDD31\uDD51\uDD71]/g,
      'C':/[\xC7\u0106\u0108\u010A\u010C\u0187\u023B\u0295\u0297\u1D04\u1E08\u24B8\uA73E\uA792\uFF23]|\uD83C[\uDD12\uDD2B\uDD32\uDD52\uDD72]/g,
      'c':/[\xE7\u0107\u0109\u010B\u010D\u0188\u023C\u0255\u0368\u1DD7\u1E09\u2184\u249E\u24D2\uA73F\uA793\uFF43]/g,
      'D':/[\xD0\u010E\u0110\u0189-\u018B\u1D05\u1D06\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u24B9\uA779\uFF24]|\uD83C[\uDD13\uDD33\uDD53\uDD73]/g,
      'd':/[\xF0\u010F\u0111\u018C\u0221\u0256\u0257\u0369\u1D6D\u1D81\u1D91\u1DD8\u1DD9\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E9F\u249F\u24D3\uA771\uA77A\uFF44]/g,
      'd3':/\u02A4/g,
      'db':/\u0238/g,
      'DZ':/[\u01C4\u01F1]/g,
      'Dz':/[\u01C5\u01F2]/g,
      'dz':/[\u01C6\u01F3\u02A3\u02A5]/g,
      'E':/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A\u018E\u0190\u01A9\u01B8\u01B9\u0204\u0206\u0228\u0246\u1D07\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u24BA\u2C7B\uA72A\uA72B\uFF25]|\uD83C[\uDD14\uDD34\uDD54\uDD74]/g,
      'e':/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B\u01DD\u0205\u0207\u0229\u0247\u0258\u025B-\u025E\u029A\u0364\u1D08\u1D8B\u1D92-\u1D94\u1D98\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u2091\u24A0\u24D4\u2C78\uFF45]/g,
      'Et':/\uA76A/g,
      'F':/[\u0191\u1E1E\u24BB\uA730\uA77B\uA7FB\uFF26]|\uD83C[\uDD15\uDD35\uDD55\uDD75]/g,
      'f':/[\u0192\u1D6E\u1D82\u1E1F\u24A1\u24D5\uA76C\uA76D\uA77C\uFF46]/g,
      'ff':/\uFB00/g,
      'ffi':/\uFB03/g,
      'ffl':/\uFB04/g,
      'fi':/\uFB01/g,
      'fl':/\uFB02/g,
      'fn':/\u02A9/g,
      'G':/[\u011C\u011E\u0120\u0122\u0193\u01E4\u01E6\u01F4\u0262\u029B\u02A2\u1DDB\u1E20\u24BC\uA77D\uA77E\uA7A0\uFF27]|\uD83C[\uDD16\uDD36\uDD56\uDD76]/g,
      'g':/[\u011D\u011F\u0121\u0123\u01E5\u01E7\u01F5\u0260\u0261\u1D77\u1D79\u1D83\u1DDA\u1E21\u24A2\u24D6\uA77F\uA7A1\uFF47]/g,
      'H':/[\u0124\u0126\u021E\u029C\u1E22\u1E24\u1E26\u1E28\u1E2A\u24BD\u2C67\u2C75\uA726\uA78D\uA7AA\uFF28]|\uD83C[\uDD17\uDD37\uDD57\uDD77]/g,
      'h':/[\u0125\u0127\u021F\u0265-\u0267\u02AE\u02AF\u036A\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E96\u2095\u24A3\u24D7\u2C68\u2C76\uA727\uFF48]/g,
      'Hj':/\u01F6/g,
      'hv':/\u0195/g,
      'I':/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130\u0196\u0197\u01C0\u01C1\u01CF\u0208\u020A\u026A\u1D7B\u1E2C\u1E2E\u1EC8\u1ECA\u24BE\uA7FE\uFF29]|\uD83C[\uDD18\uDD38\uDD58\uDD78]/g,
      'i':/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131\u01D0\u0209\u020B\u0268\u0269\u0278\u0365\u1D09\u1D62\u1D7C\u1D96\u1E2D\u1E2F\u1EC9\u1ECB\u2071\u24A4\u24D8\uFF49]/g,
      'IJ':/\u0132/g,
      'ij':/\u0133/g,
      'J':/[\u0134\u0248\u1D0A\u24BF\uFF2A]|\uD83C[\uDD19\uDD39\uDD59\uDD79]/g,
      'j':/[\u0135\u01F0\u0237\u0249\u025F\u0284\u029D\u24A5\u24D9\u2C7C\uFF4A]/g,
      'K':/[\u0136\u0198\u01E8\u1D0B\u1E30\u1E32\u1E34\u24C0\u2C69\uA740\uA742\uA744\uA7A2\uFF2B]|\uD83C[\uDD1A\uDD3A\uDD5A\uDD7A]/g,
      'k':/[\u0137\u0138\u0199\u01E9\u029E\u1D84\u1DDC\u1E31\u1E33\u1E35\u2096\u24A6\u24DA\u2C6A\uA741\uA743\uA745\uA7A3\uFF4B]/g,
      'L':/[\u0139\u013B\u013D\u013F\u0141\u023D\u029F\u1D0C\u1DDE\u1E36\u1E38\u1E3A\u1E3C\u24C1\u2C60\u2C62\uA746\uA748\uA780\uFF2C]|\uD83C[\uDD1B\uDD3B\uDD5B\uDD7B]/g,
      'l':/[\u013A\u013C\u013E\u0140\u0142\u019A\u019B\u0234\u026B-\u026D\u1D85\u1DDD\u1E37\u1E39\u1E3B\u1E3D\u2097\u24A7\u24DB\u2C61\uA747\uA749\uA772\uA781\uA78E\uFF4C]/g,
      'l3':/\u026E/g,
      'LJ':/\u01C7/g,
      'Lj':/\u01C8/g,
      'lj':/\u01C9/g,
      'LL':/\u1EFA/g,
      'll':/\u1EFB/g,
      'ls':/\u02AA/g,
      'lz':/\u02AB/g,
      'M':/[\u019C\u1D0D\u1DDF\u1E3E\u1E40\u1E42\u24C2\u2C2E\u2C6E\uA7FA\uA7FD\uA7FF\uFF2D]|\uD83C[\uDD1C\uDD3C\uDD5C\uDD7C]/g,
      'm':/[\u026F-\u0271\u036B\u1D1F\u1D6F\u1D86\u1E3F\u1E41\u1E43\u2098\u24A8\u24DC\u2C5E\uA773\uFF4D]/g,
      'N':/[\xD1\u0143\u0145\u0147\u014A\u019D\u01F8\u0220\u0274\u1D0E\u1DE1\u1E44\u1E46\u1E48\u1E4A\u24C3\uA790\uA7A4\uFF2E]|\uD83C[\uDD1D\uDD3D\uDD5D\uDD7D]/g,
      'n':/[\xF1\u0144\u0146\u0148\u0149\u014B\u019E\u01F9\u0235\u0272\u0273\u1D70\u1D87\u1DE0\u1E45\u1E47\u1E49\u1E4B\u207F\u2099\u24A9\u24DD\uA774\uA791\uA7A5\uFF4E]/g,
      'NJ':/\u01CA/g,
      'Nj':/\u01CB/g,
      'nj':/\u01CC/g,
      'O':/[\xD2-\xD6\xD8\u014C\u014E\u0150\u0186\u019F\u01A0\u01D1\u01EA\u01EC\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u0298\u1D0F\u1D10\u1E4C\u1E4E\u1E50\u1E52\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u24C4\u2C70\uA74A\uA74C\uFF2F]|\uD83C[\uDD1E\uDD3E\uDD5E\uDD7E]/g,
      'o':/[\xF2-\xF6\xF8\u014D\u014F\u0151\u01A1\u01D2\u01EB\u01ED\u01FF\u020D\u020F\u022B\u022D\u022F\u0231\u0254\u0275\u0277\u0366\u1D11-\u1D13\u1D16\u1D17\u1D97\u1E4D\u1E4F\u1E51\u1E53\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u2092\u24AA\u24DE\u2C7A\uA74B\uA74D\uFF4F]/g,
      'OE':/[\u0152\u0276]/g,
      'oe':/[\u0153\u1D14]/g,
      'OI':/\u01A2/g,
      'oi':/\u01A3/g,
      'OO':/\uA74E/g,
      'oo':/\uA74F/g,
      'OU':/[\u0222\u1D15]/g,
      'ou':/\u0223/g,
      'P':/[\xDE\u01A4\u01F7\u1D18\u1E54\u1E56\u24C5\u2C63\uA750\uA752\uA754\uA764\uA766\uA7FC\uFF30]|\uD83C[\uDD1F\uDD3F\uDD5F\uDD7F\uDD8A]/g,
      'p':/[\xFE\u01A5\u01BF\u1D71\u1D7D\u1D88\u1E55\u1E57\u209A\u24AB\u24DF\uA751\uA753\uA755\uA765\uA767\uFF50]/g,
      'q':/[\u018D\u01AA\u024B\u02A0\u24AC\u24E0\uA757\uA759\uFF51]/g,
      'Q':/[\u024A\u24C6\uA756\uA758\uFF31]|\uD83C[\uDD20\uDD40\uDD60\uDD80]/g,
      'qp':/\u0239/g,
      'R':/[\u0154\u0156\u0158\u01A6\u0210\u0212\u024C\u0280\u0281\u1D19\u1D1A\u1DE2\u1E58\u1E5A\u1E5C\u1E5E\u24C7\u2C64\uA75A\uA782\uA7A6\uFF32]|\uD83C[\uDD21\uDD2C\uDD41\uDD61\uDD81]/g,
      'r':/[\u0155\u0157\u0159\u0211\u0213\u024D\u0279-\u027F\u036C\u1D63\u1D72\u1D73\u1D89\u1DCA\u1DE3\u1E59\u1E5B\u1E5D\u1E5F\u24AD\u24E1\u2C79\uA75B\uA75D\uA775\uA783\uA7A7\uFF52]/g,
      'Ri':/\uA776/g,
      'S':/[\u015A\u015C\u015E\u0160\u0218\u1E60\u1E62\u1E64\u1E66\u1E68\u24C8\u2C7E\uA731\uA784\uA7A8\uFF33]|\uD83C[\uDD22\uDD2A\uDD42\uDD62\uDD82]/g,
      's':/[\xDF\u015B\u015D\u015F\u0161\u017F\u0219\u023F\u0282\u0283\u0285\u0286\u1D74\u1D8A\u1DE4\u1DE5\u1E61\u1E63\u1E65\u1E67\u1E69\u1E9B-\u1E9D\u209B\u24AE\u24E2\uA785\uA7A9\uFF53]/g,
      'st':/[\uFB05\uFB06]/g,
      'T':/[\u0162\u0164\u0166\u01AC\u01AE\u021A\u023E\u1D1B\u1E6A\u1E6C\u1E6E\u1E70\u24C9\uA786\uFF34]|\uD83C[\uDD23\uDD43\uDD63\uDD83]/g,
      't':/[\u0163\u0165\u0167\u01AB\u01AD\u021B\u0236\u0287\u0288\u036D\u1D75\u1E6B\u1E6D\u1E6F\u1E71\u1E97\u209C\u24AF\u24E3\u2C66\uA787\uFF54]/g,
      'tc':/\u02A8/g,
      'th':/\u1D7A/g,
      'ts':/[\u02A6\u02A7\uA777]/g,
      'TZ':/\uA728/g,
      'tz':/\uA729/g,
      'U':/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01B1\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u0244\u1D1C\u1D7E\u1E72\u1E74\u1E76\u1E78\u1E7A\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u24CA\uFF35]|\uD83C[\uDD24\uDD44\uDD64\uDD84]/g,
      'u':/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u0289\u028A\u0367\u1D1D\u1D1E\u1D64\u1D7F\u1D99\u1E73\u1E75\u1E77\u1E79\u1E7B\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u24B0\u24E4\uFF55]/g,
      'ue':/\u1D6B/g,
      'V':/[\u0194\u01B2\u0245\u1D20\u1E7C\u1E7E\u1EFC\u24CB\uA75E\uFF36]|\uD83C[\uDD25\uDD45\uDD65\uDD85]/g,
      'v':/[\u0263\u0264\u028B\u028C\u036E\u1D65\u1D8C\u1E7D\u1E7F\u1EFD\u24B1\u24E5\u2C71\u2C74\uA75F\uFF56]/g,
      'VY':/\uA760/g,
      'vy':/\uA761/g,
      'W':/[\u0174\u1D21\u1E80\u1E82\u1E84\u1E86\u1E88\u24CC\u2C72\uFF37]|\uD83C[\uDD26\uDD46\uDD66\uDD86]/g,
      'w':/[\u0175\u028D\u02AC\u1E81\u1E83\u1E85\u1E87\u1E89\u1E98\u24B2\u24E6\u2C73\uFF57]/g,
      'x':/[\u036F\u1D8D\u1E8B\u1E8D\u2093\u24B3\u24E7\uFF58]/g,
      'X':/[\u1E8A\u1E8C\u24CD\uFF38]|\uD83C[\uDD27\uDD47\uDD67\uDD87]/g,
      'Y':/[\xDD\u0176\u0178\u01B3\u0232\u024E\u028F\u1E8E\u1EF2\u1EF4\u1EF6\u1EF8\u1EFE\u24CE\uA768\uFF39]|\uD83C[\uDD28\uDD48\uDD68\uDD88]/g,
      'y':/[\xFD\u00FF\u0177\u01B4\u0233\u024F\u028E\u1E8F\u1E99\u1EF3\u1EF5\u1EF7\u1EF9\u1EFF\u24B4\u24E8\uA769\uFF59]/g,
      'Z':/[\u0179\u017B\u017D\u01B5\u0224\u1D22\u1E90\u1E92\u1E94\u24CF\u2C6B\u2C7F\uA762\uFF3A]|\uD83C[\uDD29\uDD49\uDD69\uDD89]/g,
      'z':/[\u017A\u017C\u017E\u01B6\u0225\u0240\u0290\u0291\u1D76\u1D8E\u1DE6\u1E91\u1E93\u1E95\u24B5\u24E9\u2C6C\uA763\uFF5A]/g,
      
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
