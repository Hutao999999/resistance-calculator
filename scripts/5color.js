const calculate = document.querySelector("#calculate")
const color1 = document.querySelector(".board .color1 .colors")
const color2 = document.querySelector(".board .color2 .colors")
const color3 = document.querySelector(".board .color3 .colors")
const color4 = document.querySelector(".board .color4 .colors")
const color5 = document.querySelector(".board .color5 .colors")
const result = document.querySelector(".board .result")

const diff = {
  "1": 1,
  "2": 2,
  "5": 0.5,
  "6": 0.25,
  "7": 0.1,
  "9": 0.05,
  "-1": 5,
  "-2": 10,
  "-3": 20
}

calculate.addEventListener("click", ev => {
  const resistance = repair((Number(color1.value) * 100 + Number(color2.value) * 10 + Number(color3.value)) * (10 ** Number(color4.value)))

  result.innerHTML = `結果: ${resistance} Ω ±${diff[color5.value]}%`
  result.classList.add("calculated")
})

const repair = (number) => {
  const output = []

  if (number > 999999999999) return "Infinite"

  if (number > 999999999) {
    output.push(Math.floor(number / 1000000000), "G")
    number -= Math.floor(number / 1000000000) * 1000000000
  }

  if (number > 999999) {
    output.push(Math.floor(number / 1000000), "M")
    number -= Math.floor(number / 1000000) * 1000000
  }

  if (number > 999) {
    output.push(Math.floor(number / 1000), "k")
    number -= Math.floor(number / 1000) * 1000
  }

  if (
    number > 0 ||
    output.length == 0
  ) {
    output.push(number)
  }

  return output.join(" ")
}