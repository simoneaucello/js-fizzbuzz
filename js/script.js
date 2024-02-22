
const list = document.getElementById('list')

for(let i = 1; i <= 100; i++){
  console.log(i);

  let li = document.createElement('li')

  if((i % 3 === 0) && (i % 5 === 0)){
    li.innerHTML = 'FizzBuzz'
    console.log('FizzBuzz');
    li.className = 'fizz-buzz'

  }else if(i % 5 === 0){
    li.innerHTML = 'Buzz';
    console.log('Buzz');
    li.className = 'buzz'

  }else if (i % 3 === 0){
    li.innerHTML = 'Fizz';
    console.log('Fizz');
    li.className = 'fizz'

  }else {
    console.log(i);
    li.innerHTML = i
  }

  list.append(li)

}