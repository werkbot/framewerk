window.addEventListener("load",(function(){function t(e){e.value||e.placeholder||e===document.activeElement||"date"==e.type||"time"==e.type||"datetime-local"==e.type||"week"==e.type||"month"==e.type||"password"==e.type?n(e):function(e){var t=r(e);t&&(t.classList.remove("labelShrunk"),e.classList.remove("labelShrunk"))}(e)}function n(e){var t=r(e);t&&(t.classList.add("labelShrunk"),e.classList.add("labelShrunk"))}function a(e,t){if(!e.classList.contains("readonly")){var n=e.querySelector("input");n.value=Number(n.value)+t}}function r(e){for(var t=document.getElementsByTagName("label"),n=0;n<t.length;n++)if(t[n].htmlFor==e.id)return t[n];return!1}document.querySelectorAll(".fw-form input[type=text],    .fw-form input[type=date],    .fw-form input[type=time],    .fw-form input[type=datetime-local],    .fw-form input[type=search],    .fw-form input[type=tel],    .fw-form input[type=url],    .fw-form input[type=week],    .fw-form input[type=month],    .fw-form input[type=email],    .fw-form input[type=password],    .fw-form textarea  ").forEach((function(e){t(e),e.addEventListener("focus",(function(e){n(e.target)})),e.addEventListener("blur",(function(e){t(e.target)}))})),document.querySelectorAll(".fw-form select").forEach((function(e){e.classList.add("labelShrunk");var t=r(e);t&&t.classList.add("labelShrunk")})),document.querySelectorAll(".fw-form.fw-form-process-event").forEach((function(t){t.addEventListener("submit",(function(t){if(this.checkValidity()){var n=this.querySelector(".fw-form-processing-container");n||((n=document.createElement("div")).className="fw-form-processing-container",t.submitter.parentNode.insertBefore(n,t.submitter),n.appendChild(t.submitter));const e=document.createElement("span");e.className="fw-form-processing",n.appendChild(e),t.submitter.disabled=!0;for(var a=this.getElementsByTagName("*"),r=0;r<a.length;r++)a[r].classList.add("readonly"),"number"==a[r].type&&a[r].parentElement.parentElement.classList.add("readonly")}else e.preventDefault()})),t.addEventListener("reset",(function(e){const t=this.querySelector(".fw-form-processing");t&&t.parentElement.removeChild(t);for(var n=this.getElementsByTagName("*"),a=0;a<n.length;a++)n[a].classList.remove("readonly"),n[a].disabled=!1,"number"==n[a].type&&n[a].parentElement.parentElement.classList.remove("readonly")}))})),document.querySelectorAll(".fw-form .numeric").forEach((function(e){var t=e.querySelector("input");if(t){if(t.type="number",!e.parentElement.querySelector(".subtract-qty")){var n=document.createElement("span");n.classList.add("subtract-qty");var r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-minus"),n.append(r),e.append(n),n.style.top=t.offsetTop+"px",n.style.height=t.offsetHeight+"px",n.addEventListener("click",(function(){a(e,-1)}))}if(!e.parentElement.querySelector(".add-qty")){var s=document.createElement("span");s.classList.add("add-qty");var l=document.createElement("i");l.classList.add("fas"),l.classList.add("fa-plus"),s.append(l),e.append(s),s.style.top=t.offsetTop+"px",s.style.height=t.offsetHeight+"px",s.addEventListener("click",(function(){a(e,1)}))}}}))}));
//# sourceMappingURL=framewerk-no-styles.js.map