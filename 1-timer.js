import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-D9L3Qz0t.js";const n=document.querySelector("[data-start]");n.disabled=!0;let s=null;const c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({messageColor:"rgba(225, 225, 225, 1)",messageSize:16,messageLineHeight:1.5,backgroundColor:"rgba(239, 64, 64, 1)",position:"topRight",message:"Please choose a date in the future"}),n.disabled=!0):(s=t,n.disabled=!1)}};u("#datetime-picker",c);const m=e=>{s&&(o.deadline=s,o.start(),n.disabled=!0)};n.addEventListener("click",m);const o={deadline:null,intervalId:null,elements:{days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},start(){this.intervalId=setInterval(()=>{const e=this.deadline-Date.now();if(e<=0){this.stop();return}const t=this.convertMs(e);this.elements.days.textContent=this.addLeadingZero(t.days),this.elements.hours.textContent=this.addLeadingZero(t.hours),this.elements.minutes.textContent=this.addLeadingZero(t.minutes),this.elements.seconds.textContent=this.addLeadingZero(t.seconds)},1e3)},stop(){clearInterval(this.intervalId)},convertMs(e){const a=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:d,seconds:i}},addLeadingZero(e){return String(e).padStart(2,"0")}};
//# sourceMappingURL=1-timer.js.map
