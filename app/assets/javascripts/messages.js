$(function() {
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image ? `<img src= ${ message.image }>` : "";
    var html = `
    <div class="right-content__chat__box__userdate" data-message-id="${message.id}">
      <div class="right-content__chat__box__userdate__info">
      ${message.name}
      </div>
        <div class="right-content__chat__box__userdate__date">
        ${message.time}
        </div>
    </div>
    <div class="right-content__chat__box__message">
      <p class="right-content__chat__box__message__content">
      ${content}
      </p>
      ${image}
    </div>
    `

    return html;
  }


  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.href
    $.ajax({
      url: url,
      type:"POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.right-content__chat__box').append(html);
      $("#new_message")[0].reset();
      $('.right-content__chat__box').animate({scrollTop:$('.right-content__chat__box')[0].scrollHeight}, 'fast');
      $('.right-content__form__sendbtn').prop('disabled', false);
    })
    .fail(function(){
      alert('自動更新に失敗しました');
    })
  })
})
      


    