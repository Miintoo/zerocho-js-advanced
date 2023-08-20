const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5); // 8

// 아래 코드의 경우는 콜백에 바로 함수를 호출해도 정상적인 코드이다. 왜냐하면 고차함수이기 때문에 onClick 함수는 return으로 함수를 주기 때문이다.

const onClick = () => () => {
  console.log('클릭');
};

document.querySelector('#header').addEventListener('click', onClick());

// 함수의 호출을 보면 바로 return 값으로 대체해서 확인해봐라
