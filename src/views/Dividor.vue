<template>

  <v-container class="fill-height ">
    <v-responsive class="d-flex align-center text-center fill-height">

<v-card
  class="mx-auto"
  max-width="344"
  variant="outlined"

>
  <v-card-item>
    <div>
      <div class="text-overline mb-1 ">
        진아 나눗셈 시험 100점을 위한
      </div>
      <v-divider></v-divider>
      <div class="text-h3 mb-2 bg-green-lighten-2" >
        나눗셈 퀴즈
      </div>
      <v-divider></v-divider>
      <div class="text-caption">10번 연속으로 성공하면 축하 메세지가 있습니다!</div>
    </div>
    <v-sheet class="mb-2 pa-2"></v-sheet>
    <v-divider></v-divider>
    <v-sheet class="mb-2 pa-2"></v-sheet>
    <div>
      <v-btn size="x-large" color="primary" append-icon="mdi-vuetify" variant="outlined" @click="generateQuestion()" >
시작
</v-btn>


<v-btn size="x-large" color="primary" append-icon="mdi-wrench" variant="outlined" @click="reset()">
리셋
</v-btn>
<v-sheet class="mb-2 pa-2"></v-sheet>
<div> <h2>문제: {{ question }}</h2></div>

    </div>

    <div>
<!-- 
      <v-form validate-on="submit" @submit.prevent="submit()">
    <v-text-field
      v-model="answer"
      label="정답 입력"
      @keypress.enter="checkAnswer"
    ></v-text-field>
    <v-btn color="primary" type="submit" append-icon="mdi-checkbox-marked-circle" variant="outlined" @click="checkAnswer()">입력</v-btn>
  </v-form>
-->

<p>답:{{ clickedAnswer }}</p>
  <p>결과:{{ result }}</p>


  <div>
    combo: {{ correctCombo }} <br/>
    남은시간: {{ timeRecord }} <br/>
    <br/>
    <v-divider></v-divider>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-sheet class="mb-2 pa-2"></v-sheet>
<v-divider></v-divider>
<v-card h-screen>
<p> <v-btn  class="ma-1 " size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(1)">1</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(2)">2</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
  variant="outlined" @click="inputAnswer(3)">3</v-btn>
</p>
<p> <v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(4)">4</v-btn>
<v-btn  class="ma-1 " size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(5)">5</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
  variant="outlined" @click="inputAnswer(6)">6</v-btn>
</p>
<p> <v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(7)">7</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(8)">8</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
  variant="outlined" @click="inputAnswer(9)">9</v-btn>
</p>
<p> <v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer('*')">삭제</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
 variant="outlined" @click="inputAnswer(0)">0</v-btn>
<v-btn  class="ma-1 "  size="x-large" color="primary" type="submit" 
  variant="outlined" @click="inputAnswer('#')">입력</v-btn>
</p>
</v-card>

  </div>

    </div>
  </v-card-item>
</v-card>
    </v-responsive>
  </v-container>



</template>




<script setup>

import {ref} from 'vue'
//import AppBar from '@/views/Appbar'

//const answer= ref([])

const question= ref('');
const answer= ref('');
const result= ref('');
const correctCombo= ref('');
const timeRecord= ref('');
const startTime= ref('');
const timeLimit = 5; // 시간 제한 (초)
    //var startTime; // 퀴즈 시작 시간
   var timer; // 타이머
    var num1, num2, num3; // 구구단 문제의 숫자
   // var answer; // 사용자의 답
    var correctAnswer; // 정답

  //  var congratulated = false;
   // let input= document.getElementById('answer'); //html 용?





function generateQuestion() {

num1 = Math.floor(Math.random() * 7) + 3; // 3 ~ 9 중 랜덤한 숫자 선택
      num2 = Math.floor(Math.random() * 7) + 3;
      num3 = num1 * num2;
      correctAnswer = num2; // 정답 계산
      question.value=num3 + "÷" + num1 + " = ?";
      answer.value ='';
      result.value ='';
      //document.getElementById("question").innerHTML = num1 + " × " + num2 + " = ?";
      //document.getElementById("answer").value = "";
      //document.getElementById("result").innerHTML = "";
      startTime.value = new Date(); // 퀴즈 시작 시간 기록
      timer = setTimeout(timeOut, timeLimit * 1000); // 타이머 시작
}

function reset() {

clearTimeout(timer);
clearInterval(timer);
      question.value ='';
      answer.value ='';
      result.value ='';
      //document.getElementById("question").innerHTML = "";
      //document.getElementById("answer").value = "";
      //document.getElementById("result").innerHTML = "";
      correctCombo.value ='';
    
}

function checkAnswer() {
//answer = document.getElementById("answer").value;
if (answer.value == correctAnswer) {
   // document.getElementById("result").innerHTML = "딩동댕~ 최진아 짱! &#x1F601";
     result.value= "딩동댕~ 최진아 짱!";
     correctCombo.value++;
     setTimeout(generateQuestion, 1000); // 2초 후 다음 문제 출제
//  }  
    if (correctCombo.value == 5) {
     // document.getElementById("result").innerHTML = "5번연속 성공했구나 장하다 우리 진아!!! &#x1F601&#x1F601";
     result.value= "5번연속 조금만 더 힘내 진아야!!!";
    
    }
    if (correctCombo.value == 10) {
  //    document.getElementById("result").innerHTML = "10번 성공 축하해!!진아~~졸업!!! &#x1F63D &#x1F63D";
      alert("아니 나눗셈도 10번을 맞추다니! 진아 대단해!!");
  
    }

clearTimeout(timer); // 타이머 중지
clearInterval(timer); // 타이머 중지

// if (correctCombo.value <3) {


} else {
    result.value= "땡~ 틀렸어요.";
   correctCombo.value = ''
   setTimeout(generateQuestion, 1000); // 2초 후 다음 문제 출제
//  }  

   }
 
}


// 시간 초과 함수
function timeOut() {
 result.value = "땡~ 시간 초과!";
      setTimeout(generateQuestion, 1000); //2초 후 다음 문제 출제
      correctCombo.value =''
    }

const clickedAnswer = ref('')
function inputAnswer(number) {

if (number == '#'){
  answer.value = clickedAnswer.value;
  checkAnswer();
  setTimeout(clickedAnswer.value = '',1000)
} else
if (clickedAnswer.value == null) {
clickedAnswer.value = number

} else { clickedAnswer.value = clickedAnswer.value + number}

if (number == '*'){
  clickedAnswer.value = ''
}



}
</script>

