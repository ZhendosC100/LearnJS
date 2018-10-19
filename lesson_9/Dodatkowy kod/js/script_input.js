let age = document.getElementById('age');
    /*User = {
        surname : "Tretsyak",
        name    : "Yauhen"
    }*/
 console.log('hello');

function User(surname, name) {
    this.surname = surname;
    this.name = name;
    console.log('Hello' + this.name + this.surname);
        //alert("Пользователь " + surname + " " + name + ", его возраст " /*+ this.value*/);
}
console.log('hello');
let men = new User('Tretsyak', 'Yauhen');
 
User.prototype.exit = function(surname, name) {
    alert("Пользователь " + this.surname + " " + this.name);
};

men.exit();
//showUser();