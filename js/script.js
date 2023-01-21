var increButton = document.getElementsByClassName('inc');
              var decrementButton = document.getElementsByClassName('dec');
              for (let i = 0; i < increButton.length; i++) {
                  var button = increButton[i];
             
                  button.addEventListener('click', function(event){
      
                      var buttonClicked = event.target;
                      var input = buttonClicked.parentElement.children[2];
                      // console.log(input);
                      var inputValue = input.value;
                      // console.log(inputValue);
                      if(inputValue<10){
                        var newValue = parseInt(inputValue)+1;
                        console.log(newValue);
                        input.value = newValue
                      }
                      if(inputValue<0){
                        var newValue = parseInt(inputValue);
                        console.log(newValue);
                        input.value = 0;
                      }
                    
                  })
                  
              }
              // decrement
              for (let i = 0; i < decrementButton.length; i++) {
                  var button = decrementButton[i];
                  button.addEventListener('click', function(event){
      
                      var buttonClicked = event.target;
                      var input = buttonClicked.parentElement.children[2];
                      // console.log(input);
                      var inputValue = input.value;
                      // console.log(inputValue);
                      var newValue = parseInt(inputValue) - 1;
                      console.log(newValue);
                      input.value = newValue
                  })
                  
              }