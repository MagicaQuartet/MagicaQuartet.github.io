(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{424:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/images/javascript-logo.png",alt:"Javascript-logo"}})]),t._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("h2",{attrs:{id:"표현식과-문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#표현식과-문"}},[t._v("#")]),t._v(" 표현식과 문")]),t._v(" "),a("p",[t._v("자바스크립트에서 "),a("strong",[t._v("표현식(Expression)")]),t._v(" 과 "),a("strong",[t._v("문(Statement)")]),t._v(" 은 비슷해 보이지만 반드시 구분해서 이해해야 하는 개념입니다. 자바스크립트의 모든 코드는 표현식 또는 문으로 구성되어 있습니다. 그런 만큼 자바스크립트 문법의 구조를 이루는 매우 중요한 개념이라 할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"표현식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#표현식"}},[t._v("#")]),t._v(" 표현식")]),t._v(" "),a("p",[t._v("표현식은 "),a("strong",[t._v("실행 결과가 하나의 값이 되는 코드 조각")]),t._v("을 말합니다. 여기서 표현식을 실행하여 하나의 값으로 만드는 과정을 "),a("strong",[t._v("평가(evaluation)")]),t._v(" 라고 합니다.")]),t._v(" "),a("p",[t._v("표현식의 종류는 리터럴(값 그 자체), 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등이 있습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 리터럴 표현식 */")]),t._v("\ndeclaredVariable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 식별자 표현식 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 연산자 표현식 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("functionCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 함수 호출 표현식 */")]),t._v("\n")])])]),a("p",[t._v("일반적으로 표현식은 값을 생성할 뿐, 프로그램의 상태를 변화시킬 수는 없습니다. 그러한 역할은 표현식이 아닌 문이 수행합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 변수에 값을 할당하는 문 */")]),t._v("\nanswer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 표현식 */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Result: 42 */")]),t._v("\n")])])]),a("h3",{attrs:{id:"expression-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expression-statement"}},[t._v("#")]),t._v(" Expression statement")]),t._v(" "),a("p",[t._v("물론 예외는 있습니다. 할당 연산자 =, 증감 연산자 ++와 --, 혹은 문이 포함된 함수 호출로 구성된 표현식은 상태를 변화시키는 side effect를 가지고 있습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 선언문 */")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 표현식: x = 2, Evaluation: 2 */")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 표현식: x++, Evaluation: 2 */")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 표현식: x--, Evaluation: 3 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 표현식: func(), Evaluation: 0 */")]),t._v("\n")])])]),a("p",[t._v("위 예시에서 각 표현식은 하나의 값을 나타냄과 동시에, 연산 및 실행 후 변수 "),a("code",[t._v("x")]),t._v("의 상태를 변화시킵니다. 이처럼 "),a("strong",[t._v("표현식의 역할과 문의 역할을 모두 수행하는 코드 조각")]),t._v("을 "),a("strong",[t._v("expression statement")]),t._v("라고도 부릅니다.")]),t._v(" "),a("h2",{attrs:{id:"문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문"}},[t._v("#")]),t._v(" 문")]),t._v(" "),a("p",[t._v("문은 어떠한 동작이 일어나도록 "),a("strong",[t._v("자바스크립트 엔진에 명령을 내리는 코드 조각")]),t._v("입니다. 코드 블록({ ... })을 제외하면 문의 끝에는 원칙적으로 세미콜론이 옵니다.")]),t._v(" "),a("p",[t._v("문에는 대표적으로 다음과 같은 종류가 있습니다.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("if-else")]),t._v(", "),a("code",[t._v("switch")]),t._v(" 와 같은 조건문")]),t._v(" "),a("li",[a("code",[t._v("for")]),t._v(", "),a("code",[t._v("for-in")]),t._v(", "),a("code",[t._v("while")]),t._v(", "),a("code",[t._v("do-while")]),t._v("과 같은 반복문")]),t._v(" "),a("li",[t._v("변수 및 함수 선언문")]),t._v(" "),a("li",[t._v("할당문과 같이 표현식과 문의 역할을 모두 수행하는 expression statement")])]),t._v(" "),a("p",[t._v("모든 표현식은 끝에 세미콜론을 붙이면 딱히 어떠한 명령을 내리지 않더라도 일단 expression statement, 즉 문으로 간주할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* valid */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("그러나 expression statement를 제외하면, 문은 값이 와야하는 자리에 "),a("em",[t._v("절대로")]),t._v(" 올 수 없습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* invalid */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" var1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" var2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("functionCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"함수-선언문-vs-함수-표현식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-선언문-vs-함수-표현식"}},[t._v("#")]),t._v(" 함수 선언문 vs 함수 표현식")]),t._v(" "),a("p",[a("strong",[t._v("함수 선언문(function declaration)")]),t._v(" 과 "),a("strong",[t._v("함수 표현식(function expression)")]),t._v(" 은 다음과 같이 사용합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 함수 선언문 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Function declaration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 함수 표현식 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Function expression"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이름에서 알 수 있듯이, 함수 선언문은 문이고 함수 표현식은 표현식입니다. 그래서 함수 표현식은 인자로 전달하거나, 변수에 할당하는 값으로 사용할 수 있습니다.")]),t._v(" "),a("p",[t._v("위 예시처럼 이름 없이 사용되는 함수 표현식을 "),a("strong",[t._v("익명 함수(anonymous function)")]),t._v(" 라고 부릅니다. 그러면 이름이 붙는 함수 표현식도 있을까요?")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("그렇습니다. 함수 표현식에는 이름이 붙을 수 있습니다. 이러한 함수 표현식은 "),a("strong",[t._v("기명 함수(named function expression)")]),t._v(" 라고 부릅니다.")]),t._v(" "),a("p",[t._v("그런데 뭔가... 생김새가 함수 선언문과 똑같지 않나요? 그러면 자바스크립트 엔진은 함수 선언문과 기명 함수을 어떻게 구분할까요? 그 기준은 대략적으로 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("값이 와야하는 영역")]),t._v("에 있을 경우 "),a("strong",[t._v("함수 표현식")]),t._v("으로 간주하며, 불가능할 경우 에러를 일으킵니다")]),t._v(" "),a("li",[t._v("스크립트의 전역 레벨, 코드 블록 내의 최상위 레벨 등 "),a("strong",[t._v("값이 오기로 되어있지 않은 영역")]),t._v("에서는 "),a("strong",[t._v("함수 선언문")]),t._v("으로 간주하며, 불가능할 경우 에러를 일으킵니다")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 코드 블록 내의 최상위 레벨 => 함수 선언문 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 코드 블록 내의 최상위 레벨 => 함수 선언문 => 에러 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 스크립트의 전역 레벨 => 함수 선언문 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 코드 블록 내의 최상위 레벨 => 함수 선언문 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 값이 와야하는 자리 => 함수 표현식 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 코드 블록 내의 최상위 레벨 => 함수 선언문 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 스크립트의 전역 레벨 => 함수 선언문 => 에러 */")]),t._v("\n")])])]),a("h3",{attrs:{id:"즉시-실행-함수-iife"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#즉시-실행-함수-iife"}},[t._v("#")]),t._v(" 즉시 실행 함수(IIFE)")]),t._v(" "),a("p",[t._v("자바스크립트에서는 소괄호로 값이 와야하는 영역을 나타낼 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Evaluation: function() {} */")]),t._v("\n")])])]),a("p",[t._v("즉, 이러한 방식으로 함수 표현식은 정의를 한 뒤 즉시 호출할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IIFE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이러한 형태를 "),a("strong",[t._v("즉시 실행 함수(Immediately invoked function expression)")]),t._v(" 라고 하며, 일반적으로 줄여서 "),a("strong",[t._v("IIFE")]),t._v(" "),a("em",[t._v("[iffy]")]),t._v(" 라고 부릅니다.")]),t._v(" "),a("p",[t._v("자바스크립트 함수 및 즉시 실행 함수에 대한 자세한 내용은 추후 따로 정리하도록 하겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("All you need to know about Javascript's Expressions, Statements and Expression Statements | DEV Community "),a("a",{attrs:{href:"https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("JavaScript Expressions and Statements | Launch School "),a("a",{attrs:{href:"https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Operator | PoiemaWeb "),a("a",{attrs:{href:"https://poiemaweb.com/js-operator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);