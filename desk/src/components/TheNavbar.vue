<template>
  <nav class="border-b border-grey-light bg-white">
    <div class="container flex items-center justify-between">
      <a class="font-semibold text-grey-dark hover:text-grey-darker no-underline" href="#/">Home</a>
      <div class="flex items-center">
        <TheAwesomeBar class="mr-8"/>
        <TheNavbarLogin/>
      </div>
    </div>
  </nav>
</template>
<script>
import TheAwesomeBar from './TheAwesomeBar'
import TheNavbarLogin from './TheNavbarLogin'

export default {
  name: 'TheNavbar',
  components: {
    TheAwesomeBar,
    TheNavbarLogin,
  },
}
</script>
