For Phase 1 of the midterm, I decided to sketch a pair of glasses, with the lenses 3 units wide and 2 units tall, the bridge 1 unit wide, and the arms going down 4 units and to the right 3 units.

For Phase 2, I used ellipses to create the glasses lenses, a rectangle to create the bridge, and quadrilaterals to create the arms.
After playing around with the quadrilateral shape for a little bit, I realized it works similarly to the line shape, but that you need to input the data for 2 lines, and it fills in the space in between those lines.
I set all the shapes to match the ratios of my sketch in Phase 1, and used fill(0) for the rectangle and quadrilaterals, and fill(255) for the ellipses, so the lenses would look see-through.
I also intnentionally did not write noStroke(), so that there would be a outline around the ellipses (like the glasses frames).

In Phase 3, I added the drawObject function and the translate function. I used the image of the code provided in the instructions to help understand how to use these functions.
I decided to translate my glasses image 100 pixels to the right and 100 pixels down, and set the scale to 2.

For Phase 4, I first thought to try using the modular drawing function like was in our codealong. However I soon realized that it would need too much code and wouldn't be time efficient. 

After finding that the tiles in my image were 50 pixels by 50 pixels, I wrote

let x = 0
let y = 0
function draw() {
  background(204)
  glasses(x, y)
  x += 50
  y += 50
}

to try to duplicate the glasses image in each tile. However, this instead caused my one glasses image to move diagonally down and to the right.
I played around with this method a little more, but couldn't find a way for it to work. 

Next, I looked up in google, "how to tile an image in p5.js".
The google AI Overview offered a few methods to do this, and I tried the first one. 