const clock_container = document.getElementById("clock_container")
const clock = document.getElementById("clock")

// 시간 표시 라인
for (let i = 0; i < 30; i++) {
  const gradation = document.createElement('div')
  gradation.classList.add('line')
  gradation.style.transform = `rotate(${6 * i}deg)`
  if (i % 5){
    gradation.classList.add('thin')
  }else{
    gradation.classList.add('thick')
  }
  clock_container.appendChild(gradation)
}

// clock-container안에 포함
// 로마자 시간 표시
const rome_number = ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ']
for (let j = 0; j < 6; j++) {
  const number_div = document.createElement('div')
  number_div.style.transform = `rotate(${30 * j + 120}deg)`
  const span1 = document.createElement('span')
  const span2 = document.createElement('span')
  span1.innerText = rome_number[j]
  span2.innerText = rome_number[6 + j]
  span1.style.transform = `rotate(${-(30 * j + 120)}deg)`
  span2.style.transform = `rotate(${-(30 * j + 120)}deg)`
  number_div.appendChild(span1)
  number_div.appendChild(span2)
  number_div.classList.add('num-div')
  number_div.classList.add('font1')
  clock_container.appendChild(number_div)
}

let hours_time = document.getElementById("hours-time")
let minutes_time = document.getElementById("minutes-time")
let seconds_time = document.getElementById("seconds-time")

// 이전 시간을 이용하기 위 등록
let previous_seconds_degree = 0
let previous_minutes_degree = 0
let previous_hours_degree = 0

setClock = () => {
  let current_time = new Date()
  let hours = current_time.getHours()
  let minutes = current_time.getMinutes()
  let seconds = current_time.getSeconds()
  let milliseconds = current_time.getMilliseconds()

  // 1초당 6도 + 6도를 1000으로 나눈 만큼 milliseconds값 더해서 부드럽게.
  let seconds_degree = 6 * seconds + (6/1000 * milliseconds)
  // 1분당 6도 + 그리고 6도를 60초로 나눠서 0.1씩 초마다 더움직이게, 그리고 밀리초까지 계산
  let minutes_degree = 6 * minutes + (0.1 * seconds) + (6 / 60 / 1000 * milliseconds)
  // 1시간당 30도 + 그리고 30도를 60분으로 나눠서 0.5씩 분마다 더움직이게, 그리고 초와 밀리초까지 계산
  let hours_degree = 30 * (hours % 12) + (0.5 * minutes) + (30 / 3600 * seconds) + (30 / 60 / 60 / 1000 * milliseconds)
  
  seconds_time.style.transform = `rotate(${seconds_degree}deg)`;
  minutes_time.style.transform = `rotate(${minutes_degree}deg)`
  hours_time.style.transform = `rotate(${hours_degree}deg)`

  // Math.abs(현재 값 - 이전 값) > 180이면
  // 예) 59초 -> 0초 이므로 이때 발생하는 반시계 방향 돌기 문제를 해결하기 위함
  // 잠시 transition을 꺼놓고 이외에는 켜놓는 방식을 사용
  if (Math.abs(seconds_degree - previous_seconds_degree) > 180) {
    seconds_time.style.transition = 'none'
  } else {
    seconds_time.style.transition = 'transform 0.05s linear'
  }
  if (Math.abs(minutes_degree - previous_minutes_degree) > 180) {
    minutes_time.style.transition = 'none'
  } else {
    minutes_time.style.transition = 'transform 0.05s linear'
  }
  if (Math.abs(hours_degree - previous_hours_degree) > 180) {
    hours_time.style.transition = 'none'
  } else {
    hours_time.style.transition = 'transform 0.05s linear'
  }

  previous_seconds_degree = seconds_degree
  previous_minutes_degree = minutes_degree
  previous_hours_degree = hours_degree
  
  // 날짜 갱신
  let year = current_time.getFullYear()
  let month = current_time.getMonth() + 1 // 월은 0부터 시작하므로 1을 더해줌
  let date = current_time.getDate()
  let day = current_time.getDay().toString()
  const change_day_str = {
    '1' : '월',
    '2' : '화',
    '3' : '수',
    '4' : '목',
    '5' : '금',
    '6' : '토',
    '0' : '일',
  }

  // 시계 위 날짜 표시를 위한 JS
  const date_container = document.getElementById('date_container')
  // date_container를 완전히 비워서기존 날짜를 지우고 새로 추가
  date_container.innerHTML = '' 
  let input_date_container = [year, month, date, day]
  for (let k = 0; k < 4; k++) {
    const span = document.createElement('span')
    if(k == 3){
      span.innerText =`(${change_day_str[input_date_container[k]]})`
    }else{
      span.innerText =`${input_date_container[k]}.`
    }
    date_container.appendChild(span)
  }
  
    // 시계 안에 날짜를 표시하는 JS
    const inner_date = document.getElementById('inner_date')
    // inner_date 완전히 비워서기존 날짜를 지우고 새로 추가
    inner_date.innerHTML = '' 
    // 지난 달의 마지막 날, 이번 달의 마지막 날 구하는 코드
    // 이번 달의 마지막날
    let closing_d = new Date()
    closing_d= new Date(closing_d.getFullYear(), closing_d.getMonth()+1, 0)
    // console.log(closing_d.toLocaleDateString()) // 이번달의 마지막날
    let closing_date = closing_d.getDate()
    // 지난 달의 마지막날
    let pre_d = new Date()
    let pre_closing_d = new Date(pre_d.getFullYear(), pre_d.getMonth(), 0)
    // console.log(pre_closing_d.toLocaleDateString()) // 이전 달의 마지막 날
    let pre_closing_date = pre_closing_d.getDate()
    for (let l = 0; l < 3; l++) {
      // date가 이번 달의 첫날이면, 전 날은 이전 달의 마지막 날
      let write_date
      if(date == 1 && l == 0){
        write_date = pre_closing_date
      }else if(date == closing_date && l == 2){
        write_date = 1
      }else{
        write_date = date + l - 1
      }
      const div = document.createElement('div')
      div.classList.add('inner-date-div')
      div.classList.add('font2')
      const span = document.createElement('span')
      span.innerText = `${write_date}`
      div.appendChild(span)
      div.style.transform = `rotate(${l * 20 - 20}deg)`
      inner_date.appendChild(div)
    }
}
setInterval(setClock, 50)