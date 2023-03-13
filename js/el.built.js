/**
 * uri-effects-library
 * 
 * --scripts--
 * 
 * @version v0.1.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @license GPL-3.0
 * @see http://uriweb.github.io
 */

!function(){"use strict";function c(){var c,e,t;for(c=document.querySelectorAll(".cl-hero"),t=0;t<c.length;t++)e=c[t].querySelectorAll(".el-hitchcock"),2==e.length&&(e[0].classList.add("el-hitchcock-backdrop"),e[1].classList.add("el-hitchcock-cutout"),c[t].classList.add("el-ready"))}window.addEventListener("load",c,!1)}();