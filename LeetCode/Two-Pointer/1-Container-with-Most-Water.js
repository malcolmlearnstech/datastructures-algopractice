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

function mostWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currentArea = Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (left > right) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
}

// Time Complexity: O(N)
// The function has two pointers that iterate thru the entirety of the input array, time complexity directly

// Space Complexity: O(1) [O(1) + O(1) + O(1) + O(1) = O(4) which simplifies to O(1)]
// Every variable within our is only holding a number, so every is holding constant space
