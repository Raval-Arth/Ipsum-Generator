const isEntropyController = () => {
  $(".emojiEntropy").toggle("hidden");
  $(".emojiLable").toggle("hidden");
  isEmoji ? (isEmoji = 0) : (isEmoji = 1);
  generateIpsume();
};

const setEmojiEntropy = () => {
  emoji_entropy = $(".emojiEntropy").val();
  generateIpsume();
};

const setLineLength = () => {
  line_length = $(".lineLength").val();
  generateIpsume();
};

const setLineNumber = () => {
  number_of_line = $(".numberOfLine").val();
  generateIpsume();
};

const setNumberOfParagraph = () => {
  number_of_paragraph = $(".numberOfParagraph").val();
  generateIpsume();
};

const setIpsumeCategory = (el) => {
  $(el).addClass("blob");
  setTimeout(() => {
    $(el).removeClass("blob");
  }, 500);
  $(el).hasClass("activeCategory")
    ? generateIpsume()
    : ($(el.parentNode.querySelector(".activeCategory")).removeClass(
        "border border-slate-900 activeCategory"
      ),
      $(el).addClass("border border-slate-900 activeCategory"));
  ipsume_category = $(el).data("ipsume-category");
  generateIpsume();
};

const copyIpsum = (el) => {
  $(el).addClass("blob");
  setTimeout(() => {
    $(el).removeClass("blob");
  }, 500);
  console.log(el.parentNode.childNodes[3].innerText);
  navigator.clipboard.writeText(el.parentNode.childNodes[3].innerText);
};

const generateIpsume = () => {
  ipsum = "";
  ipsum += generateParagraph();
  $(".ipsumCanavas").html(`
  <button onclick="copyIpsum(this)" class='mb-2 px-3 py-1 bg-slate-100 rounded-full'>copy</button><br>`);
  $(".ipsumCanavas").append(`<span class="">${ipsum}</span>`);
};

const main = () => {
  ipsum = "";
  line = "";
  paragraph = "";
  emojis = "";
  emoji_entropy = $(".emojiEntropy").val();
  choco = [...chocolate];
  chocoEmoji = [...chocolateEmoji];
  number_of_line = $(".numberOfLine").val();
  line_length = $(".lineLength").val();
  ipsume_category = 2;
  number_of_paragraph = $(".numberOfParagraph").val();
  isEmoji = 1;
  $(".toggle-checkbox").attr("checked", "true");
  diceRandom();
  generateIpsume();
};
main();
