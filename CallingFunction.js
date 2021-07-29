var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

var person3 = {firstName: 'bdbbsbd', lastName: 'bczbzbc'};
var person4 = {firstName: 'bvhSCvvA', lastName: 'vsxvasv'};

var person5 = {firstName: 'vvxvvavxa', lastName: 'vscvvs'};
var person6 = {firstName: 'bvdsvvcs', lastName: 'bvhbcvas'};
var person7 = {firstName: 'vvcsvvc', lastName: 'vcscs'};
var person8 = {firstName: 'vhvasvav', lastName: 'gaxagx'};

function tellme(say) {
    console.log(say + ' ' + this.firstName + ' ' + this.lastName);
}

tellme.call(person1, 'Hello'); // Hello Jon Kuperman
tellme.call(person2, 'Hello'); // Hello Kelly King

tellme.call(person3, 'Hvvdvvsvd'); // Hello Jon Kuperman
tellme.call(person4, 'gdgggdgsgd'); // Hello Kelly King
tellme.call(person5, 'Hello'); // Hello Jon Kuperman
tellme.call(person6, 'Hello'); // Hello Kelly King
tellme.call(person7, 'Hello'); // Hello Jon Kuperman
tellme.call(person8, 'Hello'); // Hello Kelly King
tellme.call(person1, 'Hello'); // Hello Jon Kuperman

function someone(Tell) {
    console.log(Tell + ' ' + this.firstName + ' ' + this.lastName);
}
someone.call(person1, 'Hello'); // Hello Jon Kuperman
someone.call(person2, 'Hello'); // Hello Kelly King