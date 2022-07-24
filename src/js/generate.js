var ipsum = "";
var line = "";
var paragraph = "";
var emojis = "";
var emoji_entropy = 50;
var choco = [...chocolate];
var sports = [...sport];
var chocoEmoji = [...chocolateEmoji];
var sportsEmoji = [...sportEmoji];
var number_of_line = 2;
var line_length = 10;
var ipsume_category = 1;
var number_of_paragraph = 2;
var isEmoji = 1;

const random = () => {
  choco.sort(() => 0.5 - Math.random());
  chocoEmoji.sort(() => 0.5 - Math.random());
  sports.sort(() => 0.5 - Math.random());
  sportsEmoji.sort(() => 0.5 - Math.random());
  let dice = [1, 2, 3, 4, 5, 6];
};

const diceRandom = () => {
  let dice=[1,2,3,4,5,6];

  $(".diceRandom").html(
    `
            <div class="">
                <img src="src/img/dice/${
                  dice[Math.floor(Math.random() * 6)]
                }.svg" class="w-10 h-10" alt="">
            </div>
            `
  );
  generateIpsume();
};

const selectIpsumeWord = () => {
  switch (ipsume_category) {
    case 1:
      return choco[Math.floor(Math.random() * choco.length)];
    case 2:
      return sports[Math.floor(Math.random() * sports.length)];
  }
};

const selectIpsumeEmoji = () => {
  switch (ipsume_category) {
    case 1:
      return chocoEmoji[Math.floor(Math.random() * chocoEmoji.length)];
    case 2:
      return sportsEmoji[Math.floor(Math.random() * sportsEmoji.length)];
  }
};

const generateLine = () => {
  line = "";
  for (let index = 0; index < number_of_line; index++) {
    for (let jIndex = 0; jIndex < line_length; jIndex++) {
      line += " " + selectIpsumeWord();
      if (
        isEmoji &&
        Math.floor(Math.random() * chocolateEmoji.length) <
          (emoji_entropy * chocolateEmoji.length) / 100
      ) {
        line += " " + selectIpsumeEmoji(ipsume_category);
      }
    }
    line += ".";
  }
  return line;
};

const generateParagraph = () => {
  paragraph = "";
  for (let index = 0; index < number_of_paragraph; index++) {
    paragraph += " " + generateLine();
    paragraph += "<br><br>";
  }
  paragraph += "- Arth Raval";
  return paragraph;
};
