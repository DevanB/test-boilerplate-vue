<template>
  <div class="bar-util">
    <p class='disclaimer'>This site is intended for US healthcare professionals only.</p>
    <ul>
      <li>
        <a href="https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF">Prescribing Info with Boxed Warning</a><span class='desktop-span-pipe'>|</span>
      </li>
      <li>
        <a href="https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#page=38">Medication Guide</a><span class='desktop-span-pipe'>|</span>
      </li>
      <li><a href="https://www.viivconnect.com/">Patient Savings Card</a></li>
    </ul>
    </div>
</template>

<script>
  export default {
    name: 'UtilityLinks',
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import '../scss/main';
  .disclaimer {
    position: absolute;
    right: 0;
    width: 100%;
    top: 0;
    font-size: em(12.5);
    text-align: center;
    letter-spacing: -.05em;
    @include media($small-desktop) {
      position: relative;
      left: 0;
      right: initial;
      text-align: left;
      width: auto;
      font-size: 1em;
      margin-left: 0;
      padding-top: 1em;
    }
    @include media($small-desktop) {
      float: left;
      display: inline-block;
      color: $colorTert;
      font-family: $open-sans;
      margin-bottom: 0;
      padding-top: 1.5em;
      font-size: 0.7333em;
      margin-left: 20px;
    }
    @include media($px1144) {
      font-size: 0.875em;
    }
    @include media($widescreen-desktop) {
      font-size: 0.925em;
    }
  }
  .bar-util {
    width: 100%;
    padding: 30px 20px 0 20px;
    margin-bottom: 1em;

    @include media($small-desktop) {
      padding: 0;
      border-bottom: 0.0625em solid $gray;
      margin-bottom: 1.25em;
      display: inline-block;
      > ul > li {
        position: relative;
        @include transition(all 0.2s ease-in-out);
        &:hover {
          position: static;
        }
        a:hover + .desktop-span-pipe {
          display: none;
        }
      }
      .desktop-span-pipe {
        position: absolute;
        right: -.33em;
        top: 1em;
        @include transition(all .22s ease-in-out);
      }
    }
    .desktop-span-pipe {
      display: none;
      @include media($small-desktop) {
        display: block;
      } 
    }
    > ul {
      height: 50px;
      display: block;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid #ccc;
      margin-top: -.25rem;
      @include media($small-desktop) {
        float: right;
        display: inline-block;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
        position: relative;
        height: auto;
        border-bottom: 0px solid #ccc;
      }
      > li {
        float: left;
        position: relative;
        text-align: center;
        top: 50%;
        @include transform(translateY(-50%));
        @include media($small-desktop) {
          display: block;
          font-size: 0.938em;
          text-align: left;
          position: static;
          padding: 0;
          top: auto;
          @include transform(none);
        }
        &:first-child {
          width: 33%;
          @include media($small-desktop) {
            width:auto;
          }
        }
        &:nth-child(2) {
          padding: 0 5px;
          width: 33%;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          @include media($small-desktop) {
            border-left: none;
            border-right: none;
            padding: 0;
            width: auto;
          }
        }
        &:last-child {
          width: 33%;
          @include media($small-desktop) {
            width:auto;
          }
        }
        @include media($small-desktop) {
          font-size: 0.7333em;
        }
        @include media($px1024) {
          font-size: 0.775em;
        }
        @include media($px1144) {
          font-size: 0.875em;
        }
        @include media($widescreen-desktop) {
          font-size: 0.925em;
        }
        a {
          color: $colorDark;
          bottom: 0;
          height: 100%;
          display: block;
          vertical-align: bottom;
          font-size: em(12);
          line-height: em(22);
          font-weight: bold;
          padding: 0;
          margin: -5px 0 0 0;
          letter-spacing: -.05em;
          @include media($small-desktop) {
            color: $colorSena;
            font-size: 1em;
            line-height: 1.5em;
            font-weight: 100;
            padding: 1.5em;
            padding-left: 0.625em;
            padding-right: 0.625em;
          }
        }
        @include media($small-desktop) {
          a {
            padding-left: 0.625em;
            padding-right: 0.625em;
            @include transition(all .22s ease-in-out);
            &:hover {
              background: $colorQuin;
              color: transparentize($colorLght,.5);
            }
          }
        }
      }
    }
    @include media($small-desktop) {
      a {
        color: $colorQuin;
        padding: 1.5em 0;
        display: block;
      }
    }
  }
</style>