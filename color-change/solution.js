function replace_font() {
    const h1 = document.querySelector('h1') // Selects the h1 tag
    
    const font_input = document.querySelector('#font')
    let font_str = font_input.value
    console.log(font_str)
  
    h1.style['font-family'] = font_str
  }
  
  function replace_color() {
    const h1 = document.querySelector('h1') // Selects the h1 tag
    
    const color_input = document.querySelector('#color')
    let color_str = color_input.value
    console.log(color_str)
  
    h1.style.color = color_str
    h1.innerHTML = `Your Favorite Color is: ${color_str}`
  }
  
  