# WEB 1.0 Lesson 2 challenges 

## Challenge 2 - Images

Open `challenge-01.html`

This is a mock up of the Android web site. It needs some images. Your job is to add the images.

Image files are in the images folder. 

The img tag uses the src attribute to specify the image. You need to include the path to the the image by including the folder name. 

`/images/file-name.png`

Images also need a width and height. These attributes set dimension of the iamge when it is displayed. Setting one or other to 'auto' tells the maintain the ratio when resizing. 

Images should also have an al tag that names the image. If the image can't be displayed the alt text is displayed. 

**What to do**

Look through this file and find the comments. These specify where an image should be placed and include the width. You should set the height to auto. Set the src and alt attirbutes also.

For example: 

`<img src="images/file-name.png" width="999" height="auto" alt="my Picture">`

Remember all of the images are in the images folder. 

## Challenge 2 - Form numbers and select

This is a simple form that displays info about Star Wars. 

Entering a number in the input and clicking submit will display information about character assigned that number.

Type a number into the field and press submit. Type 4 into the field. This should be Darth Vader. 

There is a problem, the currently allows any thing in the field. Type something that is not a number and press return. This should show "Not Found". 

Improve the form to only allow numbers by modifying the input. 

Find: `<input id="swapi-id">`. Use the `type` with the value of `"number"`: 

`type="number"`

Try the form again. This time you should not be able to submit if you have entered something other than a number. 

The Star Wars API allows you to look up peopls, planets, and starships. Currently it only loosk up people. Your job is to add a menu with the choices: people, planets, and starships.

Find `<select id="swapi-category">`. This creates a drop down menu. The select tag only allows option tags `<option>` as children. 

Add some options for: 

- people
- planets
- starships

You should now be able to to select different categories of starws wars things to look up. 

## Challenge 3 - Forms input radio and checkbox

This is simple form that uses the Giphy search API.

Type a search term into the field and click submit. 

Look at the code find the comment: 

<!-- make three radio buttons -->

Your job is to create three radio buttons. 

A radio button is an `<input>` with a type of `"radio"`. 

`<input type="radio">`

Radio buttons work together so that only one is active at a time. For this to work you should give all your radio buttons a name attribute with the same value for all radio buttons in the group: 

`name="size"`

The value used for the selected radio button is set with the value attribute. Read the comments to get the correct value for each radio button. 

Look through the source code find the comments and add radio buttons with name and value attributes. 

This should leave you with some radio button dots but no labels!

Each radio button should have a label. Wrap each `<input type="radio">` in the label tag and include some text for the label. Look carefully at the example below. Notice the label text follows the input, and the text and the input are inside the label.

```html
<label>
  <input 
    type="radio" 
    value="fixed_height"
    name="size">
    Fixed Height
</label>
```

Test your work if the radio buttons are set correctly you should only be able to choose one radio button from the group and each should show a label.

Sometimes there are options you can turn on and off. The internet is full cats. Sometimes you want cats in everything. 

Add a checkbox for cats only. This should have a label. Find the comment and add the checkbox and label. A check box is an input with a type of "checkbox". Include an id of "cats-only". 

`<input type="checkbox" id="cats-only">`

Sometimes you want to show a title. Add an input type checkbox swith the id name "show-title".

Notice witht chckboxes you can choose one or both.

Might be nice if we could control the number of images that were displayed from the search results. Use an input with a type range. This creates a slider. You can set the min and max values. 

Add an input type "range". Give this an id of "image-count". Set the min to "1" and max to "6".

## Challenge 4 - Forms

Writing froms is an important and common task for web developers. This example page has a long form with many inputs. There are some styles at the bottom that will style the form elements in a reasonable way. 

Your job is to configure all of the form elements. You'll do this by setting the attributes on each to fit the type of input that element is accepting. 

Tasks: 

### Task 1

  **Associate labels with inputs.** If an input is a child of 
  a label they are associated/linked. If not you can 
  associate/link them using the for and id attributes. 

  For example: 

```html
  <label>
    Some Label
    <input>
  </label>
```

  or
  
```html
  <label for="some-id">Some Label</label>
  <input id="some-id">
```

  Some of the labels below have a nested input and 
  others do not. Your job is to find the labels that do not 
  have nested inputs and use the id and for attributes to 
  associate/link them. 

### Task 2: 

  **Set the attribute for each input.** The inputs in the 
  form need to take various types of data. Some take text
  some take numbers, some take files, colors, or dates. Your
  job is to configure each input to handle the correct type 
  of input by setting the type attribute. 

  Inputs also have a placeholder attribute that displays 
  a placeholder message. You should configure this to a 
  reasonable value. 

  The browser will autocomplete on some inputs if we allow
  it. Some inputs want this and otherd do not. 

  Inputs should have a name attribute this sets the key for 
  the value submitted from the form. Give each input a name
  that makes sense. 

  Refer to this list of input attributes for more info: 

  https://www.w3schools.com/html/html_form_attributes.asp
 
  Take a look at each of the inputs and set the attributes 
  following the guide below. 

  - Enter their User name (input type text, should not autocomplete)
  - Email (input email)
  - Number of pets (input number)
  - Birthday (input date)
  - Choose an prefix (select)
  - Set a role (input type radio)
  - Show public profile (input checkbox, should be checked by default)
  - Enter a bio (textarea)
  - Upload a picture (input file, should only accept images)
  - Self Destruct (input checkbox, should be DISABLED by default since we haven't implemented this feature yet)
  
