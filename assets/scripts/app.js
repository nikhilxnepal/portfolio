const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "ReactJS",
        weight: 10,
      },
      {
        text: "css3",
        weight: 8,
      },
      {
        text: "Javascript",
        weight: 12,
      },
      {
        text: "HTML",
        weight: 9,
      },
      {
        text: "Programming",
        weight: 7,
      },
      {
        text: "Python",
        weight: 14,
      },
      {
        text: "Java",
        weight: 3,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Web Developer.",
        "Cybersecurity Enthusiast.",
        "love learning new things.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#C8412B",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
