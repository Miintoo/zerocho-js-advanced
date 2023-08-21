const x = 'x';

function c() {
  const y = 'y';

  console.log('c');
}

function a() {
  const x = 'x';

  console.log('a');
  function b() {
    const z = 'z';

    console.log('b');
    c();
  }
  b();
}

a();
// a
// b
// c
c();
// c

// 실행해 보지 않아도 어떤 함수가 실행이 되고 어떤 변수가 참조가 되는지 알아야한다.

// 프로그래밍 코드는 위에서 아래로 실행이 된다. 하지만 이런 흐름으로 분석하는거에서 벗어나야한다.

// 호출 스택에는 함수의 호출들만 담아줘야한다. 호출스택에 담긴 함수는 해당 함수가 끝나는 부분에서 스택에서 빠져나간다.

// 함수가 호출되기전에 실행되는게 annonymous이다.
