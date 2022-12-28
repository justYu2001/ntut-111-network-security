let unsafe_str = ''

function escapeHTML (unsafe_str) {
    if(!unsafe_str) return
    return unsafe_str .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&#39;').replace(/\//g, '&#x2F;')
} //透過HTML的原始碼的字元實體

PureButton.addEventListener('click', ()=>{
    str = PureInput.value;
    PureOutcome.innerHTML = str;
})

ReplaceButton.addEventListener('click', ()=>{
    str = ReplaceInput.value;
    ReplaceOutcome.innerHTML = escapeHTML(str);
})

TextButton.addEventListener('click', ()=>{
    str = TextInput.value;
    TextOutcome.innerText = str;
})
