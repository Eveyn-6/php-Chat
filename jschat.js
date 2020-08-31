$(function(){
afficheConversation()
})

$('#send').click(function(){
    var name = $('#name').val();
    var message = $('#message').val();
    $.post('chat.php',{
        'nom': name,
        'message': message,
    }, afficheConversation);

})

function afficheConversation(){
    $('#conversation').load('ac.htm');
    $('#message').val('');
    $('#message').focus();
}

setInterval (afficheConversation, 4000);