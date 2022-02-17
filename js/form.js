window.addEventListener('load', function(){

  // Shrink text field form label
  document.querySelectorAll('.form-modern .field.text input, .form-modern .field.textarea textarea').forEach(function(inputElement){
    toggleInputState(inputElement);
    inputElement.addEventListener('input', function(event){
      toggleInputState(event.target);
    });
  });

  // Shrink select field form label
  document.querySelectorAll('.form-modern select').forEach(function(selectElement){
    selectElement.classList.add('valid');
    var label = selectElement.parentElement.parentElement.querySelector('label');
    if(label){
      label.classList.add('valid');
    }
  });

  function toggleInputState(inputElement){
    var label = inputElement.parentElement.parentElement.querySelector('label');
    if(label){
      if(inputElement.value || inputElement.placeholder){
        label.classList.add('valid');
        inputElement.classList.add('valid');
      } else {
        label.classList.remove('valid');
        inputElement.classList.remove('valid');
      }
    }
  }

  document.querySelectorAll('.form-modern .field.numeric').forEach(function(numericFieldContainer){

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

  function incrementQuantity(fieldContainer, increment){
    if(!fieldContainer.classList.contains('.readonly')){
      var field = fieldContainer.querySelector('input');
      field.value = Number(field.value) + increment;
    }
  }

});