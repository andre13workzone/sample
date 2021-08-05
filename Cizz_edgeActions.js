/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "5500%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Sapi2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("Sapi2");
   //Edge symbol end:'Sapi2'

   //=========================================================
   
   //Edge symbol: 'Sapi2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("Sapi2_1");
   //Edge symbol end:'Sapi2_1'

   //=========================================================
   
   //Edge symbol: 'land2'
   (function(symbolName) {   
   
   })("land2");
   //Edge symbol end:'land2'

   //=========================================================
   
   //Edge symbol: 'land1b'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

   })("land1b");
   //Edge symbol end:'land1b'

   //=========================================================
   
   //Edge symbol: 'BGpabrik'
   (function(symbolName) {   
   
   })("BGpabrik");
   //Edge symbol end:'BGpabrik'

   //=========================================================
   
   //Edge symbol: 'puteran'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("puteran");
   //Edge symbol end:'puteran'

   //=========================================================
   
   //Edge symbol: 'Pesawat'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "2000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         

      });
      //Edge binding end

   })("Pesawat");
   //Edge symbol end:'Pesawat'

   //=========================================================
   
   //Edge symbol: 'ateptank'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("ateptank");
   //Edge symbol end:'ateptank'

   //=========================================================
   
   //Edge symbol: 'Part02'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         

      });
      //Edge binding end

   })("Part02");
   //Edge symbol end:'Part02'

   //=========================================================
   
   //Edge symbol: 'Pesawat_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym,e){// jQuery up a tall hidden div, to trigger scrolling
var d = document.createElement("div");
sym.$(d).css({
 position:   "absolute",
 top:        "0px",
 height:     "3000%",
 visibility: "hidden"
}).html("&nbsp;");
document.body.appendChild(d);

// prevent Edge Animate stage from scrolling
sym.getSymbolElement().css({ position:"fixed" });

// animation frame loop: check scroll position 
// each frame and move animation accordingly
var lastScrollTop = 0;
var animate = function() {
 var scrollTop = $(window).scrollTop();
 if (scrollTop != lastScrollTop) {
  lastScrollTop = scrollTop;
  var maxScroll = $(document).height()-$(window).height();
  var scrollPos = scrollTop / maxScroll;
  // scrollPos is 0..1
  sym.stop( scrollPos * sym.getDuration() );
 }
 requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

requestAnimationFrame(animate);});
      //Edge binding end

   })("Pesawat_1");
   //Edge symbol end:'Pesawat_1'

   //=========================================================
   
   //Edge symbol: 'ateppabrik'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

      

      

   })("ateppabrik");
   //Edge symbol end:'ateppabrik'

   //=========================================================
   
   //Edge symbol: 'mainTRACK'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

   })("mainTRACK");
   //Edge symbol end:'mainTRACK'

   //=========================================================
   
   //Edge symbol: 'tepung'
   (function(symbolName) {   
   
   })("tepung");
   //Edge symbol end:'tepung'

   //=========================================================
   
   //Edge symbol: 'mainTRACK_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
         //Edge binding end

      })("mainTRACK_1");
   //Edge symbol end:'mainTRACK_1'

   //=========================================================
   
   //Edge symbol: 'semprotan'
   (function(symbolName) {   
   
      

   })("semprotan");
   //Edge symbol end:'semprotan'

   //=========================================================
   
   //Edge symbol: 'api'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5388, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("api");
   //Edge symbol end:'api'

   //=========================================================
   
   //Edge symbol: 'mangkok'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         

      });
      //Edge binding end

   })("mangkok");
   //Edge symbol end:'mangkok'

   //=========================================================
   
   //Edge symbol: 'mainTRACK_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
            //Edge binding end

         })("mainTRACK_2");
   //Edge symbol end:'mainTRACK_2'

   //=========================================================
   
   //Edge symbol: 'delivery_truck'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

   })("delivery_truck");
   //Edge symbol end:'delivery_truck'

   //=========================================================
   
   //Edge symbol: 'mainTRACK_3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
            //Edge binding end

         })("mainTRACK_3");
   //Edge symbol end:'mainTRACK_3'

   //=========================================================
   
   //Edge symbol: 'bgoutroo'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         

      });
      //Edge binding end

   })("bgoutroo");
   //Edge symbol end:'bgoutroo'

   //=========================================================
   
   //Edge symbol: 'charOutro'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "3000%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         

      });
      //Edge binding end

   })("charOutro");
   //Edge symbol end:'charOutro'

   //=========================================================
   
   //Edge symbol: 'awan01'
   (function(symbolName) {   
   
   })("awan01");
   //Edge symbol end:'awan01'

   //=========================================================
   
   //Edge symbol: 'iconQuiz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2861, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("iconQuiz");
   //Edge symbol end:'iconQuiz'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar");
   //Edge symbol end:'kacaPembesar'

   //=========================================================
   
   //Edge symbol: 'teks1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("teks1");
   //Edge symbol end:'teks1'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_1");
   //Edge symbol end:'kacaPembesar_1'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_pesawat");
   //Edge symbol end:'kacaPembesar_pesawat'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_dapur");
   //Edge symbol end:'kacaPembesar_dapur'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_dapur_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_dapuroven");
   //Edge symbol end:'kacaPembesar_dapuroven'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_dapur_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_dapur_packing");
   //Edge symbol end:'kacaPembesar_dapur_packing'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_dapur_packing_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaca_pembesar}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("kacaPembesar_toko");
   //Edge symbol end:'kacaPembesar_toko'

   //=========================================================
   
   //Edge symbol: 'teks1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("teks2");
   //Edge symbol end:'teks2'

   //=========================================================
   
   //Edge symbol: 'teks2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("teks3");
   //Edge symbol end:'teks3'

   //=========================================================
   
   //Edge symbol: 'teks3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("teks4");
   //Edge symbol end:'teks4'

   //=========================================================
   
   //Edge symbol: 'teks4_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("teks5");
   //Edge symbol end:'teks5'

   //=========================================================
   
   //Edge symbol: 'teks5_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("teks6");
   //Edge symbol end:'teks6'

   //=========================================================
   
   //Edge symbol: 'teks6_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1670, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("teks7");
   //Edge symbol end:'teks7'

   //=========================================================
   
   //Edge symbol: 'icontanya'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1621, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3742, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-tanyaa}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-tanyaa}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-tanyaa}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("icontanya");
   //Edge symbol end:'icontanya'

   //=========================================================
   
   //Edge symbol: 'teks7_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 647, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("teksA");
   //Edge symbol end:'teksA'

   //=========================================================
   
   //Edge symbol: 'QUIZZZZ'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseover", function(sym, e) {
         sym.play("b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1947, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4432, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseout", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("QUIZZZZ");
   //Edge symbol end:'QUIZZZZ'

   //=========================================================
   
   //Edge symbol: 'kacaPembesar_toko_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseover", function(sym, e) {
         sym.play("b");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6542, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_coklat2Copy}", "click", function(sym, e) {
         sym.play("e");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_coklat2Copy}", "mouseover", function(sym, e) {
         sym.play("d");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9887, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("QUIZ_1");
   //Edge symbol end:'QUIZ_1'

   //=========================================================
   
   //Edge symbol: 'QUIZ_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6542, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9887, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "click", function(sym, e) {
         sym.play("c");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseover", function(sym, e) {
         sym.play("b");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-single_slice2}", "mouseover", function(sym, e) {
         sym.play("d");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-single_slice2}", "click", function(sym, e) {
         sym.play("e");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon-single_slice2}", "mouseout", function(sym, e) {
         sym.play("z");
         

      });
      //Edge binding end

         })("QUIZ_2");
   //Edge symbol end:'QUIZ_2'

   //=========================================================
   
   //Edge symbol: 'teksa_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 647, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

         })("teksB");
   //Edge symbol end:'teksB'

   //=========================================================
   
   //Edge symbol: 'QUIZ_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6542, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9887, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "click", function(sym, e) {
         sym.play("c");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseover", function(sym, e) {
         sym.play("b");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_drinkinWater2}", "click", function(sym, e) {
         sym.play("e");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_drinkinWater2}", "mouseover", function(sym, e) {
         sym.play("d");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_drinkinWater2}", "mouseout", function(sym, e) {
         sym.play("z");

      });
      //Edge binding end

         })("QUIZ_3");
   //Edge symbol end:'QUIZ_3'

   //=========================================================
   
   //Edge symbol: 'teksB_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 647, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

         })("teksC");
   //Edge symbol end:'teksC'

   //=========================================================
   
   //Edge symbol: 'teksC_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 647, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

         })("teksD");
   //Edge symbol end:'teksD'

   //=========================================================
   
   //Edge symbol: 'QUIZ_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 789, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5471, function(sym, e) {
         sym.play("b");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6542, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9887, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "click", function(sym, e) {
         sym.play("c");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tanya_bru2}", "mouseover", function(sym, e) {
         sym.play("b");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_shop2}", "mouseover", function(sym, e) {
         sym.play("d");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon_shop2}", "click", function(sym, e) {
         sym.play("e");
         

      });
      //Edge binding end

         })("QUIZ_4");
   //Edge symbol end:'QUIZ_4'

   //=========================================================
   
   //Edge symbol: 'burst'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3806, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("burst");
   //Edge symbol end:'burst'

   //=========================================================
   
   //Edge symbol: 'lingkaran_titik2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4464, function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

   })("lingkaran_titik2");
   //Edge symbol end:'lingkaran_titik2'

   //=========================================================
   
   //Edge symbol: 'circularBUTTON-outro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42780, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 123305, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 244093, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_icon_outro2}", "click", function(sym, e) {
         sym.play("c");

      });
      //Edge binding end

   })("circularBUTTON-outro");
   //Edge symbol end:'circularBUTTON-outro'

   //=========================================================
   
   //Edge symbol: 'icon_outro2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         sym.play("c");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseover", function(sym, e) {
         sym.play("b");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseout", function(sym, e) {
         sym.play("a");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42780, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 123305, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 244093, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("icon_outro2");
   //Edge symbol end:'icon_outro2'

})(jQuery, AdobeEdge, "EDGE-5611080");