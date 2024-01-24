const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size property of the Blob object, which represents the size in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Test cases
const size1 = byteSize('hello world');      // Output: 11
const size2 = byteSize('안녕하세요');           // Output: 15
const size3 = byteSize('');                  // Output: 0

console.log(size1);
console.log(size2);
console.log(size3);
