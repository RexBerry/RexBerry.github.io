function updateBrightness(value) {
    document.querySelector("#brightness-slider-value").textContent = value

    document.querySelector("#brightness-test").style.filter = `brightness(${
        value / 255
    })`

    brightnessFactor = 1 / srgbToLinear(value / 255)

    document.querySelector("#brightness-factor").textContent = `HDR Brightness Factor: ${brightnessFactor.toFixed(2)}`
}

function srgbToLinear(x) {
    // Also works for Display P3, which uses the same transfer function
    if (x <= 0.04045) {
        return x / 12.92
    } else {
        return ((x + 0.055) / 1.055) ** 2.4
    }
}

function main() {
    const slider = document.querySelector("#brightness-slider")

    slider.addEventListener("input", (e) => updateBrightness(e.target.value))

    updateBrightness(slider.value)
}

window.onload = main()
