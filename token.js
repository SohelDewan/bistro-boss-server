function generateRandomToken(length) {
    const characters = '0123456789abcdefghijklmnop'; // You can customize this to include other characters if needed
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
  
    return token;
  }
  
  // Usage
  const randomToken = generateRandomToken(64); // Generates a 64-digit random token
  console.log('Random Token:', randomToken);