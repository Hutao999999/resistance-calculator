const calculate = document.querySelector("#calculate")
const color1 = document.querySelector(".board .color1 .colors")
const color2 = document.querySelector(".board .color2 .colors")
const color3 = document.querySelector(".board .color3 .colors")
const result = document.querySelector(".board .result")

calculate.addEventListener("click", ev => {
  const resistance = repair((Number(color1.value) * 10 + Number(color2.value)) * (10 ** Number(color3.value)))

  result.innerHTML = `結果: ${resistance} Ω`
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