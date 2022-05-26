window.addEventListener('load', function(){

  // Shrink input and textarea field labels
  document.querySelectorAll('.fw-form input[type=text], .fw-form input[type=date], .fw-form input[type=email], .fw-form input[type=password], .fw-form textarea').forEach(function(inputElement){
    toggleInputState(inputElement);
    // On focus, shrink the label
    inputElement.addEventListener('focus', function(event){
      shrinkLabel(event.target);
    });
    // On blur, toggle the state
    inputElement.addEventListener('blur', function(event){
      toggleInputState(event.target);
    });
  });

  // Shrink select field label
  document.querySelectorAll('.fw-form select').forEach(function(selectElement){
    selectElement.classList.add('labelShrunk');
    var label = getLabel(selectElement);
    if(label){
      label.classList.add('labelShrunk');
    }
  });

  /**
   * Form Processing
   * Disables all form fields and replaces the submit button with a span element whcih
   * can be configured in the css
   */
  document.querySelectorAll('.fw-form.fw-form-process-event').forEach(function(formElement){
    formElement.addEventListener('submit', function(event){
      // Check the validity of the form, if any fields are not valid do not move forward
      if(!this.checkValidity()){
        // Invalid form elements, halt
        e.preventDefault();
      }else{
        // create wrapper container if it does not exist already
        var wrapper = this.querySelector('.fw-form-processing-container');
        if(!wrapper){
          wrapper = document.createElement('div');
          wrapper.className = "fw-form-processing-container";
          // insert wrapper before el in the DOM tree
          event.submitter.parentNode.insertBefore(wrapper, event.submitter);
          // move el into wrapper
          wrapper.appendChild(event.submitter); 
        }

        // Create "Processing" element 
        const processingElement = document.createElement("span");
        processingElement.className = "fw-form-processing";
        wrapper.appendChild(processingElement); 

        // Disable submit button
        event.submitter.disabled = true;

        // Disable all fields
        var fields = this.getElementsByTagName('*');
        for(var i = 0; i < fields.length; i++)
        {
          fields[i].classList.add("readonly");
          // Check for number input type
          if(fields[i].type=="number"){
            fields[i].parentElement.parentElement.classList.add("readonly");
          }
        }
      }
    });
    
    // Listener for a form reset event, useful for ajax calls.
    // This will reset the form to its original state
    formElement.addEventListener('reset', function(event){
      // Remove the processing element
      const p = this.querySelector('.fw-form-processing');
      p.parentElement.removeChild(p);

      // Re-enable all fields
      var fields = this.getElementsByTagName('*');
      for(var i = 0; i < fields.length; i++)
      {
        fields[i].classList.remove("readonly");
        fields[i].disabled = false;
        // Check for number input type
        if(fields[i].type=="number"){
          fields[i].parentElement.parentElement.classList.remove("readonly");
        }
      }
    });
  });

  /**
   * Toggle Input State
   * Shrinks or unshrinks the label of the element passed in
   * @param inputElement - The input whose label we want to toggle
   */
  function toggleInputState(inputElement){
    if(inputElement.value || inputElement.placeholder || inputElement === document.activeElement || inputElement.type == 'date' || inputElement.type == 'email' || inputElement.type == 'password'){
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
    var label = getLabel(inputElement);
    if(label){
      label.classList.add('labelShrunk');
      inputElement.classList.add('labelShrunk');
    }
  }

  /**
   * Unshrink Label
   * Unshrinks the label of the element passed in
   * @param inputElement - The input whose label we want to unshrink
   */
  function unshrinkLabel(inputElement){
    var label = getLabel(inputElement);
    if(label){
      label.classList.remove('labelShrunk');
      inputElement.classList.remove('labelShrunk');
    }
  }

  // Numeric Field
  document.querySelectorAll('.fw-form .numeric').forEach(function(numericFieldContainer){
    var field = numericFieldContainer.querySelector('input');
    if(field){
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
    }

  });

  /**
   * Increment Quantity
   * @param element fieldContainer - The button that was clicked
   * @param integer increment - The amount to increment by
   */
  function incrementQuantity(fieldContainer, increment){
    if(!fieldContainer.classList.contains('readonly')){
      var field = fieldContainer.querySelector('input');
      field.value = Number(field.value) + increment;
    }
  }

  /**
   * Get Label
   * Returns the label associated with the element, label must have `for` attribute
   * @param element el
   * @returns label element
   */
  function getLabel(el){
    var labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
      if (labels[i].htmlFor == el.id){
        return labels[i];
      }
    }
    return false;
  }

});
