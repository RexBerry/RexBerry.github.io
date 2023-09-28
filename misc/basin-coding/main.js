import { DEFAULT_ALPHABET, Encoder, Decoder } from "./basin_coding.min.js"

function updateTextareaInfo(textarea, info) {
    info.textContent
        = `${new TextEncoder().encode(textarea.value).length} bytes`
}

function updateAlphabetInfo(textarea, info) {
    info.textContent
        = `${textarea.value.length} characters`
}

function main() {
    const decodedTextarea = document.querySelector("#decoded-text")
    const encodedTextarea = document.querySelector("#encoded-text")
    const alphabetTextarea = document.querySelector("#alphabet-text")

    const defaultAlphabet = DEFAULT_ALPHABET

    const placeholderDecoded = "The quick brown fox jumps over the lazy dog."
    const placeholderEncoded
        = new Encoder(defaultAlphabet).encodeFromString(placeholderDecoded)

    decodedTextarea.setAttribute(
        "placeholder", `Example: ${placeholderDecoded}`
    )
    encodedTextarea.setAttribute(
        "placeholder", `Example: ${placeholderEncoded}`
    )
    alphabetTextarea.setAttribute(
        "placeholder",
        "Must be between 2 and 256 characters;"
        + " all characters must be unique;"
        + " only characters in the basic multilingual plane work"
    )

    alphabetTextarea.value = defaultAlphabet

    const decodedInfo = document.querySelector("#decoded-info")
    const encodedInfo = document.querySelector("#encoded-info")
    const alphabetInfo = document.querySelector("#alphabet-info")

    updateTextareaInfo(decodedTextarea, decodedInfo)
    updateTextareaInfo(encodedTextarea, encodedInfo)
    updateAlphabetInfo(alphabetTextarea, alphabetInfo)

    decodedTextarea.addEventListener(
        "change", () => updateTextareaInfo(decodedTextarea, decodedInfo)
    )
    encodedTextarea.addEventListener(
        "change", () => updateTextareaInfo(encodedTextarea, encodedInfo)
    )
    alphabetTextarea.addEventListener(
        "change", () => {
            const WHITESPACE_CHARS = " \n\r\t\v\f\u00A0\u2028\u2029"
            for (const ch of WHITESPACE_CHARS) {
                alphabetTextarea.value
                    = alphabetTextarea.value.replaceAll(ch, "")
            }
            updateAlphabetInfo(alphabetTextarea, alphabetInfo)
        }
    )

    document.querySelector("#encode-button").addEventListener(
        "click",
        () => {
            try {
                encodedTextarea.value
                = new Encoder(alphabetTextarea.value)
                    .encodeFromString(decodedTextarea.value)
                updateTextareaInfo(encodedTextarea, encodedInfo)
            } catch (ex) {
                alert(ex)
            }
        }
    )
    document.querySelector("#decode-button").addEventListener(
        "click",
        () => {
            try {
                decodedTextarea.value
                = new Decoder(alphabetTextarea.value)
                    .decodeToString(encodedTextarea.value)
                updateTextareaInfo(decodedTextarea, decodedInfo)
            } catch (ex) {
                alert(ex)
            }
        }
    )
    document.querySelector("#switch-button").addEventListener(
        "click",
        () => {
            ;[decodedTextarea.value, encodedTextarea.value]
                = [encodedTextarea.value, decodedTextarea.value]
            updateTextareaInfo(encodedTextarea, encodedInfo)
            updateTextareaInfo(decodedTextarea, decodedInfo)
        }
    )
}

window.onload = main
