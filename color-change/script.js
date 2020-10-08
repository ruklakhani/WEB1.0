function replace_font() {
    const h1 = document.querySelector('h1') // Selects the h1 tag
    
    const font_input = document.querySelector('#font')
    let font_str = font_input.value
    console.log(font_str)
  
    h1.style['font-family'] = font_str
  }
  
  function replace_color() {
    // TODO: Complete this function to change the color of the h1 tag:
  
    // STEP 1: Get the h1 element as a variable using document.querySelector.
    const h1 = document.querySelector('h1')
    // STEP 2: Get the input element for "color" using document.querySelector.
    const color_input = document.querySelector('#color')
    // STEP 3: Get the value of the element using dot notation.
    let color_str = color_input.value
    // At this point, it may be useful to print the color value to the console to make sure your code's working so far.
    console.log(color_str)
    // STEP 4: Change the style of the h1 element to match the value from step 3. You can use `.style.color` to change the color.
    h1.style.color = color_str
    h1.innerHTML = `Your Favorite color is: ${color_str}`
  }