import React, { Component } from 'react';

class ClassState extends Component {

  /* state 초깃값 설정 방법1 : constructor method
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      goal: 0
    };
  }
  */

  // state 초깃값 설정 방법2 : constructor method X
  state = {
    number: 0,
    goal: 0
  };

  render() {
    const { number, goal } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>목표 : {goal}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음

          /* this.setState에 값 전달 방법1 : 객체
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
          */

          // this.setState에 값 전달 방법2 : 함수 인자
          onClick={() => {
	          this.setState(prevState => {
		          return {
		            number: prevState.number + 1
		          }
            },
            // this.setState 두 번째 파라미터 : 값을 업데이트하고 난 다음 실행할 콜백 함수
            () => {
              console.log('setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default ClassState;