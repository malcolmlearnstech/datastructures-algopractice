/*
APPROACH:

1. initialize left & right at the beginning and end of input array, respectively
2. initialize a dummy area of 0
3. calculate area btwn left & right
    a. area is calculated by smaller of left & right, times left to right distance minus 1
4. find max btwn initialized dummy area and area calculated btwn left & right
5. if left is greater than right, move right down; if left is less than right, move left up
6. perform steps 3 to 5 until left & right cross

*/

function mostWater(heights) {}
