// A $( document ).ready() block.
$(document).ready(function () {
  getUserData();
});

function getUserData() {
  let randomNumber = Math.floor(Math.random() * 10);

  console.log(randomNumber);

  fetch('https://dummyjson.com/users/' + randomNumber)
    .then((res) => res.json())
    .then((user) => {
      $('#user-name').text(user.firstName);

      console.log(user);

      let url = 'https://xsgames.co/randomusers/avatar.php?g=';

      url = url + user.gender;

      $('#user-image').prop('src', url);
    });
}
