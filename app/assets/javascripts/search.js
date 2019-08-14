$(function(){
  var userList = $("#user-search-result");
  var memberList = $("#member_search_result");

  function appendUsers(user){
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${ user.name }</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</div>
      </div>
    `
    userList.append(html)
  }

  function appendNoUsers(user) {
    var html = `
      <div class="chat-group-user clearfix">
        <p class='listview__element--right'>${ user }</p>
      </div>
    `
    userList.append(html)
  }

  function appendMembers(name, user_id){
    var html = `
      <div class='chat-group-user'>
        <input name='group[user_ids][]' type='hidden' value="${ user_id }">
        <p class='chat-group-user__name'>${ name }</p>
        <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>
    `
    memberList.append(html)
  }

  $('#user-search-field').on("keyup", function(){
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUsers(user);
        });
      }
      else {
        appendNoUsers("一致するユーザーは見つかりませんでした")
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })
  });

  $(function() {
    $(document).on("click", ".user-search-add", function() {
      var name =  $(this).attr("data-user-name");
      var user_id = $(this).attr("data-user-id");
      $(this).parent().remove();
      appendMembers(name, user_id);
    });
  })

  $(function(){
    $(document).on("click", ".chat-group-user__btn--remove", function() {
      $(this).parent().remove();
    })
  })
});