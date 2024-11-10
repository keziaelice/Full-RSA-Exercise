/*
Kezia Elice Yulianto - 0706022210006
*/

const crypto = require("crypto");

/**
 * First of all, the RECIPIENT obtains SENDER PUBLIC KEY
 */
const senderPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz1PWjkIZ9YTOz17t7Azp    
3X6OoevcRoPl4aa12oXECAw+ORCMu4dpOcecvlAlefMMl51VOqeaWrbv1rF/yh/m    
MObD0lKiCot5/KWwVU2OL44BcVedOcuf0AvJ3asuU+PXeY/C/w7v4e9Pm+ch8lcQ    
x7Yosx/9ch8wIoKq6T2tI2XdLQ7K6oqqfgZxCE9u+11IpFCgY8r/uCqVDCqiuYje    
wDEi1O+PFwlN6bDye+LyIRI6f2ri8vkd6fA6zfE5Kycw2UIveo2wZo+8/MFfr825    
FiPF1JDWsPI+8VDh1oO2cNwfUGVAPhE5ZCuv1VyU1jBkzrMMntMVMqiFg5hdfV2A    
QQIDAQAB
-----END PUBLIC KEY-----`;
const senderPublicKey = crypto.createPublicKey(senderPublicKeyPem);

const recipientPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCctVIdzE4fl0Yx    
4GmWnrUGSC6+VREBG4EzsQPr+b3m6de83nq/5VBMmq+7z4msIkTbWJZwzqE6lnDs    
HoMm7pWrBtmDX/MXVo4HzFjF7uH2zbRYVMO97fxkhkxxyIweWRFKHu71jZyQglCF    
xNiQT7kDFuc+G2L2XbzvidxIm2oXWw8gDohU14WzbOW1umDpzxVwgeY7Ht70Snf+    
+cIfp8phZEL6dXzj5Lyu/WWxvh+Wf35IwzkmrWFW6wJKF8RIEJ3G6K5v9bXgVzrJ    
kA/vCXoMoXqhSKxLoDhuVjx2wH+AmCf12n7XBLAzSnNbsWIBUra6WyJla/Y98E4h    
wkx8O331AgMBAAECggEASIQjnsRnNnkzM2tskRWaIXEPqGYG+2M186yrauxjs1Js    
0eqGFPzRntFKFvff9nbZNEOXQlZsB4eMc8de24o2WjFOQFwLSrZz/SnTvqxfhm0E    
UofPGLnjPMVk5JZwOK7wsEMGQz0nwTt8dZp0uLsbm1Fi6ruTnPwdrR83f6XjfzCb    
vHWzBK79TnxxmCfvwX9MeyUpGCVMN8FkMtLzjvXLysoo6+T87kIEQPU6j9ZhqSs/    
xi/vg90qLFi8kZxMDR3UWWd1GaoOae3Pbc/Zs0IysVfcO6DNF4R2Hme6SJlgu52r    
d85btNuCzuXDvRZGqKWr2AxnC0ceTIHM+vD91Ly81QKBgQDJEz9CN/54xWMoWlzA    
WllPxk/2+o43bLBQTgXZvZMrS4s1EjJEvKU0n3UzS9wOREcvg9JVz+uaDPmBkK3p    
8lirGDJt/TSHvHe4fnw70xWgg33qBH883mi7RzGytQHFJJieeNBj1Q1Qe8OtxGN/    
35Lnw0zhua36X9lYH2EzuL51IwKBgQDHg5ef6IL3SmwHnlwq5s1M5kZk8m3J5v4O    
+SRF9uGWV/ganGsFi6ZTWm+tyu0azfhzFrBuv8C5FhJ72cdVvlU23pe9lNbfr8Ts    
mRkmlHqF5P4jv8Aiohr8UGnlB7N9YRoPGiR0ebaMH41vY7XzOeWnu266S9BFdk+s    
kmwZAr4uBwKBgQCHrNoJV3j4is/OgbKGBDCxWHHKh+QAV/FcLllaQ8WS+CVVSRLs    
OJIMwO+3Dh/M7JtP31XEm0gxKUIN/86pxeG4iNo2Rxzz3eK2dXpkb5jvNup2RlSI    
gNYQUAijuekY2gm1HHYYdsDGJsyxaots1DHu+mPdB4nyIEyqXnobCTRSGwKBgQC3    
BFmUkJ+C5TwQCQ6XND1jq2ErvM9FhKXNanIB1CS/21Z2YsIxxhb/I1iK3jl+ey7L    
tCaIkVHi9wJhpjaayww0VyBvAhfR/dTxDMfrggyawqL2fDFuE7IZflKFi/j0rJxQ    
+jQyvGveQhtl8Nu5kITAxskeD+mvroYL0g1jLAb1BQKBgDV3NTiUj7gN5ITjswM2    
WiqCTwcEGamatXf4GCkLl0wQQkoI0KyoBIuOhB6o+8ntoWxh9bqgn7QshWgZUWqs    
yn/HbYDpLnojNjsT0ZKtpAT3t0fkQ++Xr4f1pkIZ9M2dYBuiIBANDeGlEp2EbuAm    
D/07BKrGsFTidLzEfxzJMNf5
-----END PRIVATE KEY-----`;
const recipientPrivateKey = crypto.createPrivateKey(recipientPrivateKeyPem);
/**
 * The PRIVATE KEY must be kept securely.
 * No one else should know about this PRIVATE KEY.
 * Meanwhile, the PUBLIC KEY can be shared to others.
 * In this case, the SENDER should know about this PUBLIC KEY.
 */

/**
 * Then, the RECIPIENT obtains CIPHERTEXT from the
 * communication with the SENDER
 */
const ciphertextHex = "3030cc9b8d3fb81bab5c6f1448b67f0f25274c3e19a9274c8d03e6b5f77906e7d27069c8f3231ec7822933983b16199e7b498ba64909c551db3c9d9aba1d6a75fe54a748eda1cac02e1a0d251786647bb18ec85a41552697d3b204f23bbaa46de9c8242043ac42135c24991e6326baf958cd5a4b2dc8ac1eaa18050fdb46b25ed84ed262e1ae02b73c0e4288814101a787140f896be14238948ebe4d7ce0dd9e92a305f964c7de850def3ebec0b2996b63dd6dd93dc61da9009ef62a075e5d08e3b135d0159de76bf3f8ac552446626119a3ae31be41262afc6a11ea2dda8e57e7682eb25cb9caa723e86002ce418858d41d400d4f1fb83c3935d051b2aa1b6e";
const ciphertext = Buffer.from(ciphertextHex, "hex");

/**
 * Then, the RECIPIENT obtains MESSAGE and SIGNATURE
 * from the communication with the SENDER
 */
const signatureHex = "0424b4d9d5aa956af4fd4b82083122f9aefb802870510d3c8b91f555711220ae397cdcfa1683204c258f0de20299455288c3710b40b8aa26e1a89abdee43efe83cb7e02094633af535c0f9a16d825bbd9dbb6f896af2e10f66d4240fd61e77e3957a090a3eff670d34344c426981178a1c8a7abe9882e6c7b187afeeda482fe1bdd36576e18494e66376a4e712fd8b89c0c89fdaedf86846fc079f891bc30e7515f352eb9726f796f583173f42ce86be01fb0ede963a7a69a01d629ec07f9b2e0828dd9bfb0668a12bdc99bec2b74ac1e8d674e34265c4e9da4bff4e0e472b733ac6d2feb803e3797f344b3d63a3a476c73f75e62f23d4d09a766a4e584f1aad";
const signature = Buffer.from(signatureHex, "hex");

const recoveredPlaintext = crypto.privateDecrypt(recipientPrivateKey, ciphertext);
const data = Buffer.from(recoveredPlaintext);

// RECIPIENT verifies SIGNATURE
const isValid = crypto.verify("sha256", data, senderPublicKey, signature);
console.log("Signature Verification:", isValid);

// RECIPIENT recovers PLAINTEXT
console.log("Message:", recoveredPlaintext.toString("utf8"));