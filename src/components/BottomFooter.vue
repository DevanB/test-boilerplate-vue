<template>
  <footer id='footer' v-bind:class='footerStyles'>
    <div class='inset'>
      <hr>
      <p>
        You are encouraged to report negative side effects of prescription drugs to the FDA.<br>
        Visit <a class='modal' href='http://www.fda.gov/medwatch'>www.fda.gov/medwatch</a>, or call 1-800-FDA-1088.
      </p>
      <ul class='viiv-image-links'>
        <li><a href='https://viivhealthcare.com' target='_blank'><img src='/static/images/viiv-logo.svg' alt=''></a></li>
        <li><a href='http://viivconnect.com' target='_blank'><img src='/static/images/viiv-for-you.svg' alt=''></a></li>
        <li><a href='https://www.contactus.gsk.com/callback/index.html' target='_blank'><img src='/static/images/viiv-contact-us.png' alt=''></a></li>
        <li><a href='https://www.contactus.gsk.com/callback/index.html' target='_blank'><img src='/static/images/viiv-request-sales-professional.png' alt=''></a></li>
      </ul>
      <p>
        SELZENTRY is a registered trademarks of the ViiV Healthcare group of companies.<br>
        This Web site is funded and developed <br class='mobile-break'>by ViiV Healthcare.<br>
        <span>This site is intended for US healthcare <br class='mobile-break'>professionals only.<br>
        ©2016 ViiV Healthcare group of companies. <br class='mobile-break'>All rights reserved.</span>
      </p>
    </div>
    <div class='footer-menu'>
      <ul>
        <li><a href='https://www.viivhealthcare.com/terms-of-use.aspx' target='_blank'>Legal Notices</a><span>|</span></li>
        <li><a href='https://www.viivhealthcare.com/privacy-policy.aspx' target='_blank'>Privacy Statement</a><span>|</span></li>
        <li><a href='http://www.viivhealthcareforyou.com' target='_blank'>Medicine Savings</a><span>|</span></li>
        <li><a href='https://www.contactus.gsk.com/callback/index.html' target='_blank'>Contact Us</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters([ 'mobile' ]),
      ...mapState([ 'isiActive', 'isiSeen' ]),
      footerStyles () {
        const { mobile, isiActive, isiSeen } = this
        if (mobile) {
          return {
            isiSeenFooterHeight: mobile && !isiActive && isiSeen,
            isiNotSeenFooterHeight: mobile && !isiActive && isiSeen === false
          }
        }
        return
      }
    },
    name: 'BottomFooter'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  .isiNotSeenFooterHeight {
    margin-bottom: 66px !important;
  }

  .isiSeenFooterHeight {
    margin-bottom: 31px !important;
  }

  #footer {
    clear: both;
    text-align: center;
    width:100%;

    .inset {
      padding: 0 1.7em;
      padding-top: 2em;
      padding-bottom: 2em;
      position: relative;
      z-index: 2;

      .round-bullets,
      .prescribing-callout {
        font-weight: 500;
        position: relative;
        z-index: 99;
      }

      a {
        color: $brand-secondary;
      }

      h3 {
        font-size: 1.125em;

        @include media($small-desktop) {
          font-size: 1.5em;

          .keep-inline {
            display: inline-block;
            position: relative;

            sup {
              left: auto;
              position: absolute;
              right: -.333em;
            }
          }
        }
      }

      p {
        font-size:90%;

        a {
          color: $brand-secondary;
          text-decoration: underline;
        }
        
        @include media($small-desktop) {
          font-size: 85%;
          line-height: 1.35;
        }
      }

      ul {
        margin-top: .75em;
      }

      @include media($small-desktop) {
        @include span-columns(12 of 14);
        @include shift(1 of 14);
      }
    }

    .viiv-image-links {
      display: table;
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;

      li {
        &:nth-child(1) {
          padding-bottom: 2em;
          @include span-columns(4 of 12);
          @include shift(4);
        }

        &:nth-child(3){
          padding-bottom: 2em;
          padding-top: 2em;
          @include span-columns(8 of 12);
          @include shift(2);
        }

        &:nth-child(4) {
          padding-bottom: 2em;
          @include span-columns(8 of 12);
          @include shift(2);
        }

        @include media($small-desktop) {
          display: inline;
          margin-bottom: 3em;
          position: relative;
          top: 3em;

          &:nth-child(1) {
            padding-bottom: 0;
            @include span-columns(1.5 of 12);
            @include omega;
            @include shift(0);
          }

          &:nth-child(2) {
            margin-right: 0%;
            @include span-columns(5.12 of 12);
            @include omega;
            
            img {
              padding: 0 1em;
            }
          }

          &:nth-child(3) {
            margin-right: 1%;
            padding-bottom: 0;
            padding-top: 0;
            @include span-columns(2.95 of 12);
            @include omega;
            @include shift(0);
          }

          &:nth-child(4) {
            display: block;
            margin-left: 0;
            @include span-columns(2.48 of 12);
            @include omega;
          }
        }

        a {
          display: block;
        }
        
        img {
          display: block;
          width: 100%;
        }
      }
    }

    .footer-menu {
      background-color: $brand-navy;
      color: $white;

      a {
        color: $white;
        padding: 1em;
        display: inline-block;
      }
      
      li {
        display: block;
        @include media($small-desktop) {
          display: inline-block;
        }
      }
      
      span {
        display: none;
        @include media($small-desktop) {
          display:inline;
        }
      }
      
      ul {
        margin: 0;
        padding: 1em 0;
        @include media($small-desktop) {
          padding: 0;
        }
      }

      @include media($small-desktop) {
        display: inline-block;
        width: 100%;
        @include pad(0 default 0 0);
        box-sizing: content-box;
      }
    }
    
    .mobile-break {
      @include media($small-desktop) {
        display: none;
      }
    }
  }
</style>
