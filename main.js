class TextType {
  constructor(element, strings, onFinish, speed) {
    this.element = element
    this.strings = strings
    this.loopNum = 0
    this.speed = speed || 120
    this.currText = ""
    this.onFinish = onFinish || function() { return }

    this.type = () => {
      let fullText = this.strings[this.loopNum]
      this.currText = fullText.substring(0, this.currText.length + 1)
      this.element.find('span:last-child').text(this.currText)

      var that = this
      let delta = this.speed - Math.random() * this.speed/2

      if (this.currText === fullText) {
        this.currText = ""
        this.loopNum += 1
        if (this.loopNum == strings.length) {
          this.element.removeClass('typing')
          this.onFinish()
          return
        }
        $('<br>').appendTo(this.element)
        $('<span>').appendTo(this.element)
      }

      setTimeout(function() {
        that.type()
      }, delta)
    }
    $('<span>').appendTo(element)
  }
}

window.onload = function() {
  let strings = [
    "Hi, I am Alisa!",
    "I like coffee, programming, and pole fitness"
  ]
  let textType = new TextType($('#landing .typewrite'), strings, function() {
    $('#landing .navdown').show()
    $('#landing .navdown').addClass('pulse')
  })
  textType.type()

  $('#landing .navdown').on('click', function() {
    window.scroll({
      top: document.querySelector('#about').offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  })
  $('#about .navdown').on('click', function() {
    window.scroll({
      top: document.querySelector('#journey').offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  })
  $('#journey .navdown').on('click', function() {
    window.scroll({
      top: document.querySelector('#contact').offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  })
  $('#contact .navtop').on('click', function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
}
