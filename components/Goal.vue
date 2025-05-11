<template>
  <section class="sc-goal" data-color="#fff">
    <h2 class="blind">My Goal</h2>
    <div class="num-area">
      <div class="num-box">
        <span class="num-txt">0</span>
        <ul class="num-list">
          <li v-for="num in numbers" :key="num" class="num-item">{{ num }}</li>
        </ul>
        <span class="num-txt">.</span>
      </div>
    </div>
    <div class="goal-area">
      <div class="column-left" data-fade>
        <div class="desc-box">
          <strong class="desc-tit">The Goal</strong>
          <p class="desc-txt">
            프론트엔드 관련한 React.js , vue.js에 대한 프로그래밍 능력도 키워나가 퍼블리셔로서, 
            더 나아가 프론트엔드 전문가가 될 수 있도록 현재에는 충실하되 항상 미래를 보는 사람이 되겠습니다.
          </p>
        </div>
      </div>
      <div class="column-right">
        <figure class="thumb-box">
          <img src="~/assets/images/ohr-bg.jpg" alt="내 목표">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Goal',
  data() {
    return {
      numbers: [0, 1, 2]
    }
  }
}
</script>

<style scoped>
.sc-goal {
  /* 기존 CSS 스타일 유지 */
}
</style> 