<div class="egoist-name">
  egoist
  <span class="dot">.</span>
  <span class="lily">lily</span>
</div>

<style scoped lang="stylus">
.egoist-name
  color: #586e75
  font-size: 8rem
  text-transform: uppercase
  line-height: 100%
  margin: 15px 0 35px 0
  /* to eliminate white space */
  display: flex

.egoist-name 
  span
    color: #b58900
  &:hover
    span.dot
      color: #ff69b4

@media screen and (max-width: 768px)
  .egoist-name
    font-size: 1.6rem;
    margin: 5px 0 15px 0;
</style>