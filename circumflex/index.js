const availableInterruptions = ["|", "^", "%", "hahaha"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function circumflexTheText(text, interruptions, frequency) {
  const words = text.split(" ");
  let result = "";
  for (const word of words) {
    result += word;
    const test = Math.random();
    if (test <= frequency) {
      const interruptionIndex = getRandomInt(interruptions.length);
      const interruption = interruptions[interruptionIndex];
      result += ` ${interruption}`;
    }
    result += " ";
  }
  return result;
}

$(document).ready(() => {
  const interruptionsSelect = $("#interruptions");
  for (const interruption of availableInterruptions) {
    const option = document.createElement("option", {
      value: interruption,
    });
    option.innerHTML = interruption;
    interruptionsSelect.append(option);
  }

  $("#submit-button").on("click", () => {
    const input = $("#input-text").val();
    const chosenInterruptions = $("#interruptions").val();
    const frequency = $("#frequency").val();
    $("#output-text").val(
      circumflexTheText(input, chosenInterruptions, frequency)
    );
  });
});
