const textarea = document.querySelector("#texto")
textarea.addEventListener("input", function(e){
  textarea .style.height = "auto"
   textarea.style.height = `${this.scrollHeight}px`
})