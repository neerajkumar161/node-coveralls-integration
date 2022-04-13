const addNumber = (num1: number, num2: number) => {
  if (num1 < 10 && num2 < 10) {
    return num1 + num2
  }
  /* istanbul ignore next */
  return num1 + num2 + 10
}

export { addNumber }
