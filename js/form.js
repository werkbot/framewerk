window.addEventListener('load', function(){

  // Shrink input field form label, textarea field label
  document.querySelectorAll('.fw-form .field.text input, .fw-form .field.textarea textarea').forEach(function(inputElement){
    toggleInputState(inputElement);
    // On input, toggle the state
    inputElement.addEventListener('input', function(event){
      toggleInputState(event.target);
    });
    // On focus, shrink the label
    inputElement.addEventListener('focus', function(event){
      shrinkLabel(event.target);
    });
    // On blur, toggle the state
    inputElement.addEventListener('blur', function(event){
      toggleInputState(event.target);
    });
  });

  // Shrink select field form label
  document.querySelectorAll('.fw-form select').forEach(function(selectElement){
    selectElement.classList.add('valid');
    var label = selectElement.parentElement.parentElement.querySelector('label');
    if(label){
      label.classList.add('valid');
    }
  });

  /**
   * Toggle Input State
   * Shrinks or unshrinks the label of the element passed in
   * @param inputElement - The input whose label we want to toggle
   */
  function toggleInputState(inputElement){
    if(inputElement.value || inputElement.placeholder){
      shrinkLabel(inputElement);
    } else {
      unshrinkLabel(inputElement);
    }
  }

  /**
   * Shrink Label
   * Shrinks the label of the element passed in
   * @param inputElement - The input whose label we want to shrink
   */
  function shrinkLabel(inputElement){
    var label = inputElement.parentElement.parentElement.querySelector('label');
    if(label){
      label.classList.add('valid');
      inputElement.classList.add('valid');
    }
  }

  /**
   * Unshrink Label
   * Unshrinks the label of the element passed in
   * @param inputElement - The input whose label we want to unshrink
   */
  function unshrinkLabel(inputElement){
    var label = inputElement.parentElement.parentElement.querySelector('label');
    if(label){
      label.classList.remove('valid');
      inputElement.classList.remove('valid');
    }
  }

  // Numeric Field
  document.querySelectorAll('.fw-form .field.numeric').forEach(function(numericFieldContainer){
    var field = numericFieldContainer.querySelector('input');
    field.type = 'number';

    if(!numericFieldContainer.parentElement.querySelector('.subtract-qty')){
      // Insert subtract button
      var subtractButton = document.createElement('span');
      subtractButton.classList.add('subtract-qty');
      var subtractIcon = document.createElement('i');
      subtractIcon.classList.add('fas');
      subtractIcon.classList.add('fa-minus');
      subtractButton.append(subtractIcon);
      numericFieldContainer.append(subtractButton);
      subtractButton.style.top = field.offsetTop + 'px';
      subtractButton.style.height = field.offsetHeight + 'px';
      subtractButton.addEventListener('click', function(){
        incrementQuantity(numericFieldContainer, -1);
      });
    }

    if(!numericFieldContainer.parentElement.querySelector('.add-qty')){
      // Insert add button
      var addButton = document.createElement('span');
      addButton.classList.add('add-qty');
      var addIcon = document.createElement('i');
      addIcon.classList.add('fas');
      addIcon.classList.add('fa-plus');
      addButton.append(addIcon);
      numericFieldContainer.append(addButton);
      addButton.style.top = field.offsetTop + 'px';
      addButton.style.height = field.offsetHeight + 'px';
      addButton.addEventListener('click', function(){
        incrementQuantity(numericFieldContainer, 1);
      });
    }

  });

  /**
   * Increment Quantity
   * @param {*} fieldContainer - The button that was clicked
   * @param {*} increment - The amount to increment by
   */
  function incrementQuantity(fieldContainer, increment){
    if(!fieldContainer.classList.contains('.readonly')){
      var field = fieldContainer.querySelector('input');
      field.value = Number(field.value) + increment;
    }
  }

});
