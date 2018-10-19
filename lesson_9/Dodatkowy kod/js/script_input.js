let age = document.getElementById('age'),
    btn = document.querySelector('.btn'),
    div = document.getElementById('demo');
    btn.addEventListener('click', function(){

        user_age = age.value;

    let user = {
        value : user_age
    }
 
    function showUser(surname, name) {
            alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }

    showUser.apply(user, ['Tretsyak', 'Yauhen']);
   
    div.textContent = age.value;
});


 
//showUser();



/*let age = document.getElementById('age'),
    btn = document.querySelector('.btn'),
    value = age.value;
    /*User = {
        surname : "Tretsyak",
        name    : "Yauhen"
    }
 console.log('hello');

function User(surname, name) {
    this.value = value;
    this.surname = surname;
    this.name = name;
     //console.log('Hello' + this.name + this.surname);
        //alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
console.log('hello');
let men = new User('Tretsyak', 'Yauhen');
 
User.prototype.exit = function(surname, name) {
    //alert("Пользователь " + this.surname + " " + this.name + " " + this.value);
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};

btn.addEventListener('click', function(){
    men.exit();
});

//showUser();*/

