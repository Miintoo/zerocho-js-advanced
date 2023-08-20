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
