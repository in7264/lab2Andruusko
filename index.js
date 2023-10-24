function encrypt() {
    const inputText = document.getElementById("inputText").value;
    const key = "MySecretKey"; // Замените на свой собственный ключ
    const encrypted = CryptoJS.DES.encrypt(inputText, key);
    document.getElementById("output").textContent = encrypted.toString();
  }
  
  function decrypt() {
    const encryptedText = document.getElementById("output").textContent;
    const key = "MySecretKey"; // Замените на тот же ключ, который использовался для шифрования
    const decrypted = CryptoJS.DES.decrypt(encryptedText, key);
    document.getElementById("output").textContent = decrypted.toString(CryptoJS.enc.Utf8);
  }