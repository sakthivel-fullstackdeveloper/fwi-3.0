import React, { useState } from 'react';
import { isAuthenticated } from '../services/Auth';

const FileProtectionTool = () => {
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleFileSubmit = async (event) => {
        event.preventDefault();

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const reader = new FileReader();

        reader.onload = async function(event) {
            const text = event.target.result;

            // Generate random key and IV
            const key = crypto.getRandomValues(new Uint8Array(32));
            const iv = crypto.getRandomValues(new Uint8Array(16));

            // Encrypt the text
            let encrypted = await encryptText(text, key, iv);

            // Check for malware sign (e.g., 'infrheu8herh999') and remove it if found
            const malwareSign = 'infrheu8herh999';
            if (encrypted.includes(malwareSign)) {
                encrypted = encrypted.replaceAll(malwareSign, '');
            }

            // Decrypt the sanitized encrypted text
            const decrypted = await decryptText(encrypted, key, iv);

            // Convert the protected decrypted data to a Blob
            const blob = new Blob([decrypted], { type: 'text/plain' });
            setDownloadUrl(URL.createObjectURL(blob));
        };

        reader.readAsText(file);
    };

    // Encrypt text using AES-GCM
    const encryptText = async (text, key, iv) => {
        const enc = new TextEncoder();
        const encoded = enc.encode(text);
        
        const cryptoKey = await window.crypto.subtle.importKey(
            "raw", key, { name: "AES-GCM" }, false, ["encrypt"]
        );
        const encrypted = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv }, cryptoKey, encoded
        );

        return new Uint8Array(encrypted).reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
    };

    // Decrypt text using AES-GCM
    const decryptText = async (encryptedText, key, iv) => {
        const decoded = new Uint8Array(encryptedText.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

        const cryptoKey = await window.crypto.subtle.importKey(
            "raw", key, { name: "AES-GCM" }, false, ["decrypt"]
        );
        const decrypted = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv }, cryptoKey, decoded
        );

        return new TextDecoder().decode(decrypted);
    };

    return (
        <>
        {isAuthenticated()?<div className="container mt-5">
            <h1 className="text-center">File Protection Tool</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Single Form for Uploading File */}
                    <form id="fileForm" onSubmit={handleFileSubmit}>
                        <div className="mb-3">
            
                            <input className="form-control" type="file" id="fileInput" required />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100">Process File</button>
                        </div>
                    </form>

                    {/* Download Link for Protected File */}
                    {downloadUrl && (
                        <div id="downloadLink">
                            <a href={downloadUrl} className="btn btn-success w-100" download="protected_file.txt">
                                Download Protected File
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>:<></> } </>
    );
};

export default FileProtectionTool;
