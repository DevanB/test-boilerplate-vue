<template>
  <div id='sidebar' @click='toggleIsi' v-bind:class='isiClasses' v-bind:style='isiStyles'>
    <i v-show='mobile' class='fa fa-angle-up isi-control' :class='isiControlClasses'></i>
    <div v-if='!this.mobile' class='indications-and-usage'>
      <strong class="large">INDICATION AND USAGE</strong>
      <p>SELZENTRY<sup>®</sup> (maraviroc) is indicated in combination with other antiretroviral agents for the treatment of only CCR5‑tropic human immunodeficiency virus type 1 (HIV‑1) infection in patients 2 years of age and older and weighing &geq;10 kg.</p>
      <p><strong>Limitations of Use:</strong> SELZENTRY is not recommended in patients with dual/mixed- or CXCR4-tropic HIV-1</p>
    </div>
    <div class="important-information">
      <span class='preview-content'>
        <strong class="large">IMPORTANT SAFETY INFORMATION</strong>
        <p>
          <strong>
          BOXED WARNING: Hepatotoxicity has been reported, which may be preceded by severe rash or other features of a systemic allergic reaction (eg, fever, eosinophilia, or elevated IgE). Immediately evaluate patients with signs or symptoms of hepatitis or allergic reaction.
          </strong>
        </p>
      </span>
    </div>
    <span class='non-preview-content'>
      <strong>CONTRAINDICATION</strong>
      <p>SELZENTRY is contraindicated in patients with severe renal impairment (creatinine clearance [CrCl] &lt;30 mL/min) or end-stage renal disease (ESRD) who are taking potent cytochrome P450 (CYP) 3A inhibitors or inducers.</p>
      <strong>ADDITIONAL WARNINGS AND PRECAUTIONS</strong>
      <p><strong>Hepatotoxicity:</strong> Hepatotoxicity accompanied by severe rash or systemic allergic reaction, including life-threatening events, has been reported in clinical trials and postmarketing. These events occurred approximately 1 month after patients started treatment. Among reported cases of hepatitis, some were observed in the absence of allergic features or with no pre-existing hepatic disease.</p>
      <p>Hepatic laboratory parameters, including alanine aminotransferase (ALT), aspartate aminotransferase (AST), and bilirubin should be obtained prior to starting SELZENTRY and at other time points during treatment as clinically indicated. Discontinuation of SELZENTRY should be considered in any patient with signs or symptoms of hepatitis, or with increased liver transaminases combined with rash or other systemic symptoms.</p>
      <p>When administering SELZENTRY to patients with pre-existing liver dysfunction or who are coinfected with hepatitis B and/or C virus, additional monitoring may be warranted. The safety and efficacy of SELZENTRY have not been specifically studied in patients with significant underlying liver disorders.</p>
      <p><strong>Severe Skin and Hypersensitivity Reactions:</strong> Severe, potentially life-threatening skin and hypersensitivity reactions have been reported in patients taking SELZENTRY, in most cases concomitantly with other drugs associated with these reactions. These include cases of Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and drug rash with eosinophilia and systemic symptoms (DRESS). The cases were characterized by features including rash, constitutional findings, and sometimes organ dysfunction, including hepatic failure. Discontinue SELZENTRY and other suspected agents immediately if signs or symptoms of severe skin or hypersensitivity reactions develop. Delay in stopping treatment with SELZENTRY or other suspect drugs after the onset of rash may result in a life‐threatening reaction. Clinical status, including liver aminotransferases, should be monitored and appropriate therapy initiated.</p>
      <p><strong>Cardiovascular Events:</strong> More cardiovascular events, including myocardial ischemia and/or infarction, were observed in treatment-experienced adult patients who received SELZENTRY compared to placebo. In treatment-naïve adult patients, the incidence of such events was lower with SELZENTRY than with efavirenz.</p>
      <p>Patients with cardiovascular comorbidities, risk factors for postural hypotension, or receiving concomitant medication known to lower blood pressure, could be at increased risk of cardiovascular adverse events triggered by postural hypotension. Additional monitoring may be warranted. Patients should be advised that if they experience dizziness while receiving SELZENTRY, they should avoid driving or operating machinery.</p>
      <p><strong>Postural Hypotension in Patients with Renal Impairment:</strong> SELZENTRY is contraindicated in patients with severe renal impairment (CrCl &lt;30 mL/min) or ESRD who are taking potent CYP3A inhibitors with or without a potent CYP3A inducer due to an increased risk of postural hypotension as a result of increased systemic exposure to SELZENTRY.</p>
      <p>SELZENTRY should be used in patients with severe renal impairment or ESRD only if they are not receiving a concomitant potent CYP3A inhibitor or inducer and no alternative treatment options are available. If adult patients with severe renal impairment or ESRD, not receiving a concomitant potent CYP3A inhibitor or inducer, experience any symptoms of postural hypotension while taking SELZENTRY 300 mg twice daily, the dose should be reduced to 150 mg twice daily.</p>
      <p><strong>Immune Reconstitution Syndrome</strong>, including the occurrence of autoimmune disorders with variable time to onset, has been reported.</p>
      <p><strong>Potential Risk of Infection:</strong> SELZENTRY antagonizes the CCR5 coreceptor located on some immune cells, and therefore could potentially increase the risk of developing infections. Patients should be monitored closely for evidence of infection while receiving SELZENTRY.</p>
      <p><strong>Potential Risk of Malignancy:</strong> While no increase in malignancy has been observed with SELZENTRY, due to this drug’s mechanism of action, it could affect immune surveillance and lead to an increased risk of malignancy. Long-term follow-up is needed to more fully assess this risk.</p>
      <strong>ADVERSE REACTIONS:</strong>
      <ul>
        <li>The most common adverse events in treatment-experienced adult patients through 48 weeks (>8%) which occurred at a higher frequency compared with placebo were upper respiratory tract infections, cough, pyrexia, rash, and dizziness.</li>
        <li>The most common adverse events in treatment-naїve adult patients through 96 weeks (>8%) which occurred at a higher frequency than the comparator arm were upper respiratory tract infections, bronchitis, flatulence, bloating and distention, upper respiratory tract signs and symptoms, and gastrointestinal atonic and hypomotility disorders.</li>
        <li>The most common adverse reactions in treatment- experienced pediatric patients (≥3%) were vomiting, abdominal pain, diarrhea, nausea, and dizziness.</li>
      </ul>
      <strong>DRUG INTERACTIONS</strong>
      <p>SELZENTRY is a substrate of CYP3A and P-glycoprotein (P-gp). Coadministration with potent CYP3A inhibitors, including delavirdine or protease inhibitors (except tipranavir/ritonavir), will increase the concentration of SELZENTRY. Coadministration with potent CYP3A inducers, including efavirenz, may decrease the concentration of SELZENTRY. Healthcare providers should ensure that an appropriate dose adjustment of SELZENTRY is made when SELZENTRY is coadministered with potent CYP3A inhibitors and/or potent CYP3A inducers since concentrations, therapeutic effects, and the safety of SELZENTRY may be affected.</p>
      <p>Concomitant use of SELZENTRY and St. John's wort (<i>Hypericum perforatum</i>) or products containing St. John's wort is not recommended.</p>
      <p>SELZENTRY is not recommended in pediatric patients 2 years of age or older and weighing ≥10 kg receiving potent CYP3A inducers without a potent CYP3A inhibitor. Additionally, there are insufficient data to make a dosing recommendation for use of SELZENTRY in pediatric patients concomitantly receiving non-interacting medications and weighing &lt;30 kg.</p>
      <strong>USE IN SPECIFIC PATIENT POPULATIONS</strong>
      <p><strong>Pregnancy: </strong>The Antiretroviral Pregnancy Registry monitors outcomes in women exposed to SELZENTRY during pregnancy. The limited data available on the use of SELZENTRY during pregnancy are not sufficient to assess any potential drug‐associated risk of birth defects and miscarriage.</p>
      <p><strong>Lactation: </strong>Breastfeeding is not recommended due to the potential for HIV transmission and the potential for serious adverse reactions in nursing infants.</p>
      <p><strong>Pediatric Patients: </strong>SELZENTRY is not recommended in patients younger than 2 years of age because the pharmacokinetics, safety, and efficacy of this drug have not been established in this patient population.</p>
      <p><strong>Renal Impairment in Pediatric Patients: </strong>There are no data to recommend specific doses of SELZENTRY in pediatric patients with mild to moderate renal impairment.</p>
      <p><strong>Hepatic Impairment: </strong>SELZENTRY is principally metabolized by the liver. Therefore, concentrations of SELZENTRY may be increased in patients with hepatic impairment. SELZENTRY has not been studied in patients with severe hepatic impairment or in pediatric patients with any degree of hepatic impairment.</p>
      <p><strong>HOW SUPPLIED:</strong> SELZENTRY is available in 25‐mg, 75‐mg, 150‐mg, and 300‐mg tablets, and a 20‐mg/mL oral solution.</p>
      <p class="prescribing-information"><strong>Please see full <a href="https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Selzentry/pdf/SELZENTRY-PI-MG-IFU.PDF" target="_blank">Prescribing Information</a>, including Boxed Warning and Medication Guide, for SELZENTRY.</strong></p>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([ 'isiActive', 'isiSeen', 'navigationOpen', 'windowHeight' ]),
    ...mapGetters([ 'mobile' ]),
    isiClasses () {
      const { mobile, isiActive, isiSeen } = this
      return {
        active: mobile && isiActive,
        isiSeenHeight: mobile && !isiActive && isiSeen,
        isiNotSeenHeight: mobile && !isiActive && isiSeen === false
      }
    },
    isiStyles () {
      if (this.mobile && this.isiActive) {
        const headerPadHeight = document.querySelector('.header-pad').offsetHeight
        return {
          height: `${this.windowHeight - headerPadHeight}px`,
          minHeight: `${this.windowHeight - headerPadHeight}px`,
          maxHeight: '4000px'
        }
      }
      return
    },
    isiControlClasses () {
      return {
        active: this.isiActive
      }
    }
  },
  methods: {
    ...mapActions([ 'toggleIsi' ])
  },
  name: 'ISI'
}
</script>

<style lang='scss' scoped>
  @import '../scss/main.scss';

  .isiNotSeenHeight {
    height: 83px !important;
    min-height: 83px !important;
  }

  .isiSeenHeight {
    height: 31px !important;
    min-height: 31px !important;
  }

  #sidebar {
    background: $white;
    bottom: 0;
    font-family: $ag-book;
    height: 100%;
    line-height: 1.5em;;
    padding: 10px;
    position: fixed;
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0, 0, 0);
    width: 100%;
    z-index: 1000;
    h2 {
      font-size: 1em;
      font-family: $ag-demi;
      line-height: 1em;
      margin-top: 0;
      margin-bottom: 1em;
      margin-bottom: 1.5rem;
    }
    h3 {
      @extend %p;
      /*color: $colorQuin;*/
      font-family: $ag-demi;
      line-height: 14px;
      font-size: 1.1em;
    }
    li {
      position: relative;
      font-weight: 200;
      font-family: $ag-book;
      left: -0.667em;
      &:before {
        content: '• ';
        font-weight: 100;
        /*color: $colorQuin;*/
        position: absolute;
        left: -1em;
        font-size: 1rem;
      }
    }
    p,li,h2,h3,h4 {
      line-height: 1rem;
    }
    strong {
      font-family: $ag-demi;
      font-weight: 700;
    }
    *,h2,h3 {
      margin-top: .25em;
      margin-bottom: .25em;
    }
    &.active {
      overflow-y: scroll;
      .isi-control {
        @include transform(rotate(180deg));
        @include transition(all .2s ease-in-out);
      }
    }
    .asterisk {
      margin-top: 0;
      margin-left: 0;
    }
    .bold li {
      font-family: $ag-demi;
      font-weight: 700;
    }
    .indications-usage {
      display: none;
    }
    .inline-block {
      line-height: 0;
    }
    @include media($small-desktop) {
      background-color: $colorLght;
      bottom: 0;
      box-shadow: 0 0 1em 0 transparentize($colorDark,.5);
      display: block;
      height: auto;
      overflow-y: scroll;
      padding: 20px;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 999999;
      .indications-usage {
        display: block;
      }
      @include span-columns(4.1);
      @include omega;
    }
  }

  .sidebar-wrap {
    width: 100%;
    background-color: $colorLght;
    right: 0;
    top: 0;
    bottom: 0;
    font-size:85%;
    box-shadow:0 0 1em 0 transparentize($colorDark,.5);
    @include transition(all .5s ease-in-out);
    @include media($small-desktop) {
      position: fixed;
      top: 0;
      right: 0;
      width: 21.78769%;
      height: 100%;
      display: inline-block;
      z-index: 100;
      overflow: hidden;
      @include transform(translatex(20px));
    }
  }

  #sidebar {
    padding: 5px 20px 20px 20px;
    z-index: 20000;
    h2 {
      @extend %h3;
      /*color: $colorQuin;*/
      font-weight: 500;
      font-family: $ag-demi;
      font-size: 1.3em;
      line-height: 1.15em
    }
    h3 {
      @extend %p;
      /*color: $colorQuin;*/
    }
    li {
      position: relative;
      font-size: 13px;
      line-height: 18px;
      &:before {
        content: '• ';
        font-weight: 500;
        /*color: $colorQuin;*/
        position: absolute;
        left: -1em;
        font-size: 1rem;
      }
      ul {
        li {
          &:before {
            content: '–';
          }
        }
      }
    }
    p b {
      /*color: $colorQuin;*/
      font-family: $ag-demi;
      font-size: 1.1em;
      font-weight: 700;
    }
    *,h2,h3 {
      margin-top: .25em;
      margin-bottom: .25em;
    }
    .bold {
      font-weight: 700;
      li {
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        font-family: $ag-demi;
      }
    }
    @include media($small-desktop) {
      padding: 20px 10px 20px 10px;
      overflow: auto;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  .prescribing-information {
    margin-top: 1em;
  }

  .isi-control {
    cursor: pointer;
    font-size: em(28);
    margin-top: 0;
    position: fixed;
    right: 20px;

    @include transform(rotate(360deg));
    @include transition-duration(0.45s);
  }
</style>