if (document.location.href.includes('/index.html')) {
  // COPY TO CLIPBOARD  
  const elCaesarOutput = document.querySelector('.js-output-text');
  const elCaesarOutputCopyBtn = document.querySelector('.js-copy-btn');
  const elCaesarInputClear = document.querySelector('.js-clear-btn');
  // INPUT
  let elInputFormText = document.querySelector('.js-input-text');

  function clearText() {
    elCaesarOutput.innerHTML = '';
  }

  if (elCaesarOutputCopyBtn) {
    elCaesarOutputCopyBtn.addEventListener('click', async function clipboardCopy() {
      let copiedText = elCaesarOutput.value;
      await navigator.clipboard.writeText(copiedText);
    });
  }

  if (elCaesarInputClear) {
    elCaesarInputClear.addEventListener('click', clearText);
  }

  function rotate() {
    const elInputFormRotate = document.querySelector('.js-rotate-select').value;
    let elInputFormTextval = elInputFormText.value;
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for (let i = 0; i < elInputFormTextval.length; i++) {
      let arrIndex = arr.findIndex(index => index == elInputFormTextval[i].toLowerCase());
      let letterIndex = arrIndex + Number(elInputFormRotate);
      if (arrIndex !== -1) {
        if(elInputFormTextval[i].toUpperCase() == elInputFormTextval[i]) {
          result += letterIndex < 26 ? arr[letterIndex].toUpperCase() : arr[letterIndex - arr.length].toUpperCase();
        }else{
          result += letterIndex < 26 ? arr[letterIndex] : arr[letterIndex - arr.length];
        }
      }
      else result += elInputFormTextval[i];
    }
    elCaesarOutput.textContent = result;
    return result;
  }
  
  elInputFormText.onkeyup = rotate;
} else if (document.location.href.includes('caesar-reverse.html')) {
  
  // COPY TO CLIPBOARD  
  const elCaesarForm = document.querySelector('.js-caesar-form');
  const elReverseCaesarOutput = document.querySelector('.js-output-text');
  const elReverseCaesarOutputCopyBtn = document.querySelector('.js-copy-btn');
  const elReverseCaesarInputClear = document.querySelector('.js-clear-btn');
  const elReverseFormBtn = document.querySelector('.js-form-btn');

  function clearText() {
    elReverseCaesarOutput.innerHTML = '';
  }

  if (elReverseCaesarOutputCopyBtn) {
    elReverseCaesarOutputCopyBtn.addEventListener('click', async function clipboardCopy() {
      let copiedText = elReverseCaesarOutput.value;
      await navigator.clipboard.writeText(copiedText);
    });
  }

  if (elReverseCaesarInputClear) {
    elReverseCaesarInputClear.addEventListener('click', clearText);
  }
  
  // INPUT
  let elReverseInputFormText = document.querySelector('.js-input-text');
  function rotateReverse(evt) {
    evt.preventDefault();
    const elReverseInputFormRotate = document.querySelector('.js-rotate-select').value;
    let elInputFormTextval = elReverseInputFormText.value;
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse();
    let result = '';
    for (let i = 0; i < elInputFormTextval.length; i++) {
      let arrIndex = arr.findIndex(index => index == elInputFormTextval[i].toLowerCase());
      let letterIndex = arrIndex + Number(elReverseInputFormRotate);
      if (arrIndex !== -1) {
        if(elInputFormTextval[i].toUpperCase() == elInputFormTextval[i]) {
          result += letterIndex < 26 ? arr[letterIndex].toUpperCase() : arr[letterIndex - arr.length].toUpperCase();
        }else{
          result += letterIndex < 26 ? arr[letterIndex] : arr[letterIndex - arr.length];
        }
      }
      else result += elInputFormTextval[i];
    }
    elReverseCaesarOutput.textContent = result;
    return result;
  }
  
  elReverseFormBtn.addEventListener('click', rotateReverse);
}
