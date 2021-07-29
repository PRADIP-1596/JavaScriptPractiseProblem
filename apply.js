var name = 'Pradip';

const func = function (age, hobby) {
  return (this.name + ' is ' + age + ' years old and his hobby is '
  + hobby);
};

var person = {
    name: 'scbsbbccsc'
}

func(); 

func.apply(); 

console.log(func() === func.apply()); 

func('15', 'writing'); 
func.apply(undefined, ['15', 'writing']); 
func.apply(null, ['15', 'writing']); 


func.apply(person, ['20', 'music']); 
func(); 
func('15', 'writing'); 
func.apply();
func.apply(undefined, ['15', 'writing']);


func.apply(null, ['15', 'writing']); 