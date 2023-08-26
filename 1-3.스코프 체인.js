// 스코프 체인: 어떤 함수에서 어떤 값에 접근이 가능한지 불가능한지를 의미한다.
// 함수가 호출이 되고 안되고를 알려줄 수 있는 기준이다.
// 호출은 호출 스택에 쌓인다.
// 스코프 체인은 함수의 선언위치를 기준으로 생각해보면 편하다.

const x = 'x';

function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  const x = 1;
  console.log('a');

  b();
}

// 위에 함수 선언을 기준으로 생각
// 이런 밑에 범위를 렉시컬 스코프라고 한다.
// c함수, a함수 => anonymous (최상위 위치를 의미)
// b함수 => c함수 => anonymous

// a함수안에서 b함수가 호출이 가능한지는 렉시컬 스코프를 보면 되는데 a함수는 anonymous만 연결이 되어 있기 때문에 anonymous에는 a와 c만 있기 때문에 b를 호출하지 못한다.
// 이 순서로 생각해보면 b에서 a를 호출할 수 있다. b에서 c로 가서 c에서는 a가 없고 다음으로는 anonymous로 갔을때 a함수가 있기 때문이다.

a();
c();

// b => a => anonymous
// 이를 렉시컬 체인이라고 한다. 이 관계에 맞지 않으면 접근이 불가능하다.
