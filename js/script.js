
const list = document.getElementById('list')

for(let i = 1; i <= 100; i++){
  console.log(i);

  let li = document.createElement('li')

  if((i % 3 === 0) && (i % 5 === 0)){
    li.innerHTML = 'Fizz Buzz'
    console.log('Fizz Buzz');

  }else if(i % 5 === 0){
    li.innerHTML = 'Buzz';
    console.log('Buzz');

  }else if (i % 3 === 0){
    li.innerHTML = 'Fizz';
    console.log('Fizz');

  }else {
    console.log(i);
    li.innerHTML = i
  }

  list.append(li)

}