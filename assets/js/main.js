(function () {
  var form = document.getElementById('booking-form');
  var hint = document.getElementById('form-hint');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var topic = form.topic.value;
    var message = form.message.value.trim();

    var text =
      '【預約諮詢】中壢歐姐\n' +
      '稱呼：' + name + '\n' +
      '電話：' + phone + '\n' +
      '諮詢項目：' + topic + '\n' +
      '內容：' + (message || '（未填寫）');

    // Open synchronously (within the click gesture) so browsers don't block it as a popup.
    window.open('https://line.me/ti/p/~ruby387', '_blank', 'noopener');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        hint.hidden = false;
      }, function () {
        hint.hidden = true;
      });
    }
  });
})();
