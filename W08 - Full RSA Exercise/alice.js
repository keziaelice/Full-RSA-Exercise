/*
Kezia Elice Yulianto - 0706022210006
*/

const crypto = require("crypto");

/**
 * First of all, the SENDER obtains the RECIPIENT PUBLIC KEY.
 */
const recipientPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnLVSHcxOH5dGMeBplp61    
BkguvlURARuBM7ED6/m95unXvN56v+VQTJqvu8+JrCJE21iWcM6hOpZw7B6DJu6V    
qwbZg1/zF1aOB8xYxe7h9s20WFTDve38ZIZMcciMHlkRSh7u9Y2ckIJQhcTYkE+5    
AxbnPhti9l2874ncSJtqF1sPIA6IVNeFs2zltbpg6c8VcIHmOx7e9Ep3/vnCH6fK    
YWRC+nV84+S8rv1lsb4fln9+SMM5Jq1hVusCShfESBCdxuiub/W14Fc6yZAP7wl6    
DKF6oUisS6A4blY8dsB/gJgn9dp+1wSwM0pzW7FiAVK2ulsiZWv2PfBOIcJMfDt9    
9QIDAQAB
-----END PUBLIC KEY-----`;
const recipientPublicKey = crypto.createPublicKey(recipientPublicKeyPem);

/**
 * SENDER PRIVATE KEY FOR SIGNATURE
 */
const senderPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPU9aOQhn1hM7P
Xu3sDOndfo6h69xGg+XhprXahcQIDD45EIy7h2k5x5y+UCV58wyXnVU6p5patu/W    
sX/KH+Yw5sPSUqIKi3n8pbBVTY4vjgFxV505y5/QC8ndqy5T49d5j8L/Du/h70+b    
5yHyVxDHtiizH/1yHzAigqrpPa0jZd0tDsrqiqp+BnEIT277XUikUKBjyv+4KpUM    
KqK5iN7AMSLU748XCU3psPJ74vIhEjp/auLy+R3p8DrN8TkrJzDZQi96jbBmj7z8    
wV+vzbkWI8XUkNaw8j7xUOHWg7Zw3B9QZUA+ETlkK6/VXJTWMGTOswye0xUyqIWD    
mF19XYBBAgMBAAECggEAA/JVvTLD2CfUFiq5kaLLy2DNZzFBvyZjiH8ndaPST9sS    
zqbdNPR+jmrkNb5kaOeVZmfzGhkcFTdnsKEDnJss7bf2LjwO3q+ZwyimHF5BSLAL    
IJIWmZBsnVWyHP9VPrkm44b27cBw1M6nnRaXj6D0aPF+NsMIbIUXN0WglQIiGFBp    
7om32LHj0dENCSBEbJIoD6nidUJUSvf7p0MXDFra+WkiYZ/vK5D1MHREnYaiDDow    
BRKIG8BzDz1Sl6WyVATM4MIJlSXDmzKf/W9LXMOxGiCz3bf0qhwyLxjo/zgYJaHm    
5Gdzon9RlXqrXr7KEoJJDeZMZz9o8gHMtgjl0WWfoQKBgQDzAN/YyxL50/xxc4AK    
inwOu5UsFcfFl5Tk7Cju/JKMyINdJOBnjyXf5hNBI2YxnScqvykdE2RqB7r68rqi    
C/gwOeYb4hL1IqEJV9T/rQD6fWDDhaBa7/DH0KP6VIVGN1IfeDvJzicuhiPg4wpP    
TDb2za8PC30ViJn63PUvlV7/cQKBgQDaaoATgxIuBLBLfMX6FarYho/f+RFZjDv9    
LhKv+pPFo6ArOjmFDV9qEJ74NXUrhf+4IrW6Jx3cMWgUkrVisNw9t+ys2ECSl3IS    
CL9xYZ5NRqBZFTg+P2wyQ6+hLGNf7KVlxrwONnd/HSWi9wrjwhNOe/83nO7uBnfE    
KuT6L43F0QKBgDRRdeBZKIa9S1apxWF/m2IYpO9O6Snzjs0Sw2Vg37SL3yyIqf/h    
5Aemo3Kcyn3YFfywF4v5Bt+FNo6c/+2vognQDWjnbal1gTJfxK4fc1x67gBqnrG1    
gyOiGgvlcqRBeN7ppgW26tyraMIcX7Xe9N6CPjSBBrdCJ9TJCcjq4f8hAoGAIj5e    
VDDRkdt0VHF8jKgHACmgtwnSuYpuAVTO4z5TGsJ7oytex0iAdB2k/t9Kvockv5bZ    
jRUC7nnkio0x2QZHkXmbpsHE5fbOkJtEgJ9AdXckPrM//SpuaTcJeyh9cBWnHNza    
sRPDCm/kbbdzwp+z7TMtoWd+Yl0rO9tJyRvZi3ECgYEA6o5dSHP7FhhV0bUW+UIJ    
L90YXjAiPdX7QXOINjddykIeyfNnl+YB8K2dCwd3p/vPdbXgunJge4ftAZWCryAd    
grQvxCJRpaGPZjs7bfCp8ulysnkHGfxwrfqtfC51/kitNdgJlGgDeD9UmEp4lTpN    
trmdqF4BsjaEXLZSRvz5DfQ=
-----END PRIVATE KEY-----`;
const senderPrivateKey = crypto.createPrivateKey(senderPrivateKeyPem);

const message = "I want some apples";

// sign rsa
const data = Buffer.from(message);
const signature = crypto.sign("sha256", data, senderPrivateKey);
console.log("Signature:", signature.toString("hex"));

// SENDER generate CIPHERTEXT
const ciphertext = crypto.publicEncrypt(recipientPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));