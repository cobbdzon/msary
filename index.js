function encrypt(plainText, secret) {
	var key = CryptoJS.enc.Utf8.parse(secret);
	let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
	console.log("IV : " + CryptoJS.enc.Base64.stringify(iv));

	// Encrypt the plaintext
	var cipherText = CryptoJS.AES.encrypt(plainText, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
	return cipherText.toString();
}

function decrypt(cipherText, secret, iv) {
	// IV is a base64 string
	let iv1 = CryptoJS.enc.Base64.parse(iv);

	var key = CryptoJS.enc.Utf8.parse(secret);
	var cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

	var decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherBytes }, key, {
		iv: iv1,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});

	return decrypted.toString(CryptoJS.enc.Utf8);
}

document.addEventListener("DOMContentLoaded", () => {
	const encrypted_el = document.getElementsByClassName("encrypted")[0];
	const encrypted_text = encrypted_el.innerText;

	const key_input = document.getElementById("key-input");
	const key_submit = document.getElementById("key-submit");

	const iv = "Zm9yZ2l2ZW5lc3MgYW5kIA==";
	const hash = "9f322760302ad3ee4fe498ca33d569cc";

	function onKeySubmit() {
		const key = key_input.value;
		const decrypted = decrypt(encrypted_text, key, iv)

		if (CryptoJS.MD5(decrypted) == hash) {
			encrypted_el.innerText = decrypted
			encrypted_el.setAttribute("encrypted", "false")
		}
	}

	key_submit.onclick = onKeySubmit;

	const params = {
		distance: '10%',
		delay: 150,
	}

	ScrollReveal({ reset: true });
	ScrollReveal().reveal('#welcome', params);
	ScrollReveal().reveal('#love', params);
	ScrollReveal().reveal('#message', params)
});
