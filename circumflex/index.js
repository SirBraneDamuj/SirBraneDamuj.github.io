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
// œœœœœœ ææææææ œœœœœœ ææææææ œœœœœœ ææææææ
const availableSyllables = ["æ", "œ"];

const finale = " œœœœœœ ææææææ œœœœœœ ææææææ œœœœœœ ææææææ";

function aaahhhTheText(text, frequency, includeFinale) {
  const replaced = text.replaceAll(/[aeiou]/gi, (match) => {
    const test = Math.random();
    if (test <= frequency) {
      return availableSyllables[getRandomInt(2)];
    }
    return match;
  });
  if (includeFinale) {
    return replaced + finale;
  } else {
    return replaced;
  }
}

function setupCircumflex() {
  const clipboard = new ClipboardJS("#copy-button");
  clipboard.on("success", function (e) {
    $("#copy-button").text("Copied!");
    e.clearSelection();
    setTimeout(() => $("#copy-button").text("Copy"), 2000);
  });
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
}

function setupAaahhh() {
  const clipboard = new ClipboardJS("#aaahhh-copy-button");
  clipboard.on("success", function (e) {
    $("#aaahhh-copy-button").text("Copied!");
    e.clearSelection();
    setTimeout(() => $("#aaahhh-copy-button").text("Copy"), 2000);
  });
  const frequencySlider = $("#aaahhh-frequency");
  frequencySlider.on("input", (e) => {
    const percent = e.target.value * 100;
    $("#aaahhh-frequency-label").text(`Frequency: ${percent.toFixed(0)}%`);
  });
  frequencySlider.val("0.1").trigger("input");

  $("#aaahhh-submit-button").on("click", () => {
    const input = $("#aaahhh-input-text").val();
    const includeFinale = $("#aaahhh-finale").prop("checked");
    console.log(includeFinale);
    const frequency = $("#aaahhh-frequency").val();
    $("#aaahhh-output-text").val(
      aaahhhTheText(input, frequency, includeFinale)
    );
  });
}

$(document).ready(() => {
  setupCircumflex();
  setupAaahhh();
});
