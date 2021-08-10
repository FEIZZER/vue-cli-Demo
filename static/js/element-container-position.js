/*
 * @Author: FEIZZER
 * @Date: 2021-07-31 11:21:15
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-10 13:49:48
 * @Description:
 */

window.addEventListener('DOMContentLoaded', resize);
window.onresize = resize
function resize(){
  let pageHei = window.innerHeight
  let pageWid = window.innerWidth;
  let aside = document.getElementById('main-aside')
  let header = document.getElementById('main-header')
  let footer = document.getElementById('main-footer')
  let main = document.getElementById('main-main')
  aside.style.height = pageHei + 'px'
  header.style.width = pageWid + 'px'
  footer.style.width = pageWid + 'px'
  main.style.marginLeft = aside.style.width
}
