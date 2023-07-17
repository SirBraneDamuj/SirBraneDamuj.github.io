const availableInterruptions = ["|", "^", "%", "hahaha", "_"];

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
  interruptionsSelect.val(availableInterruptions.join("\n"));

  const frequencySlider = $("#frequency");
  frequencySlider.on("input", (e) => {
    const percent = e.target.value * 100;
    $("#frequency-label").text(`Frequency: ${percent.toFixed(0)}%`);
  });
  frequencySlider.val("0.1").trigger("input");

  $("#submit-button").on("click", () => {
    const input = $("#input-text").val();
    const chosenInterruptions = $("#interruptions").val().split("\n");
    const frequency = $("#frequency").val();
    $("#output-text").val(
      circumflexTheText(input, chosenInterruptions, frequency)
    );
  });
});
