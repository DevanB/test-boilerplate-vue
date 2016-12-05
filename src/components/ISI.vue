<template>
  <div id='sidebar' @click='toggleIsi' v-bind:class='isiClasses' v-bind:style='isiStyles'>
    <i v-show='mobile' class='fa fa-angle-up isi-control'></i>
    <div class='indications-usage'>
      <h2>Indications and Usage:</h2>
      <p>TRIUMEQ is indicated for the treatment of human immunodeficiency virus type 1 (HIV-1) infection.</p>
      <p><b class='text-black'>Limitations of Use:</b></p>
      <ul>
        <li>TRIUMEQ alone is not recommended in patients with:
          <ul>
            <li>Current or past history of resistance to any components of TRIUMEQ</li>
            <li>Resistance-associated integrase substitutions or clinically suspected integrase strand transfer inhibitor (INSTI) resistance because the dose of dolutegravir in TRIUMEQ is insufficient in these subpopulations. See full prescribing information for dolutegravir</li>
          </ul>
        </li>
      </ul>
    </div>
    <h2>Important Safety Information:</h2>
    <div class='bold'>
    <p>
      <strong>
        BOXED WARNING: HYPERSENSITIVITY REACTIONS, LACTIC ACIDOSIS AND SEVERE HEPATOMEGALY, and EXACERBATIONS OF HEPATITIS B VIRUS (HBV): 
        <i v-if='mobile'><br/>See full Prescribing Information for complete boxed warning</i>
      </strong>
    </p>
    <h3>Hypersensitivity Reactions:</h3>
    <ul>
      <li>Serious and sometimes fatal hypersensitivity reactions have occurred with abacavir-containing products</li>
      <li>Hypersensitivity to abacavir is a multi-organ clinical syndrome</li>
      <li>Patients who carry the <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701</span>allele are at a higher risk of experiencing a hypersensitivity reaction to abacavir; although, hypersensitivity reactions have occurred in patients who do not carry the <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701</span>allele</li>
      <li>TRIUMEQ is contraindicated in patients with a prior hypersensitivity reaction to abacavir and in <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701-positive</span>patients. All patients should be screened for the <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701</span>allele prior to initiating therapy or reinitiation of therapy with TRIUMEQ, unless patients have a previously documented <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701</span> allele assessment</li>
      <li>Discontinue TRIUMEQ as soon as hypersensitivity reaction is suspected. Regardless of <span class='inline-block'>HLA-B<sup class='asterisk'>*</sup>5701</span>status, permanently discontinue TRIUMEQ if hypersensitivity cannot be ruled out, even when other diagnoses are possible</li>
      <li>Following a hypersensitivity reaction to TRIUMEQ, NEVER restart TRIUMEQ or any other abacavir-containing product</li>
    </ul>
    <h3>Lactic Acidosis and Severe Hepatomegaly with Steatosis:</h3>
    <ul>
      <li>Lactic acidosis and severe hepatomegaly with steatosis, including fatal cases, have been reported with the use of nucleoside analogues</li>
    </ul>
    <h3>Exacerbations of Hepatitis B:</h3>
    <ul>
      <li>Severe acute exacerbations of HBV have been reported in patients who are co-infected with HBV and HIV-1 and have discontinued lamivudine, a component of TRIUMEQ. Monitor hepatic function closely in these patients and, if appropriate, initiate anti-hepatitis B treatment</li>
    </ul>
    </div>
    <h3>CONTRAINDICATIONS</h3>
    <p>TRIUMEQ is contraindicated in patients:</p>
    <ul>
      <li>who have the  <span class='inline-block lineHeight'>HLA-B<sup class='asterisk lineHeight'>*</sup>5701</span> allele</li>
      <li>with prior hypersensitivity reaction to abacavir, dolutegravir, or lamivudine</li>
      <li>receiving dofetilide (antiarrhythmic)</li>
      <li>with moderate or severe hepatic impairment</li>
    </ul>
    <h3>WARNINGS AND PRECAUTIONS</h3>
    <h3>Hypersensitivity Reactions to Dolutegravir:</h3>
    <ul>
      <li>Hypersensitivity reactions have been reported and were characterized by rash, constitutional findings, and sometimes organ dysfunction, including liver injury. The events were reported in &lt;1% of subjects receiving <span class='inline-block'>TIVICAY<sup>&reg;</sup></span> in <span class='inline-block'>Phase 3</span> clinical trials </li>
      <li>Clinically, it is not possible to determine whether a hypersensitivity reaction with TRIUMEQ would be caused by abacavir or dolutegravir. Discontinue TRIUMEQ and other suspect agents immediately if signs or symptoms of hypersensitivity reaction develop </li>
    </ul>
    <h3>Effects on Serum Liver Biochemistries in Patients with Hepatitis B or C Co-infection:</h3>
    <ul>
      <li>Patients with underlying hepatitis B or C may be at increased risk for worsening or development of transaminase elevations with use of TRIUMEQ. In some cases the elevations in transaminases were consistent with immune reconstitution syndrome or <span class='inline-block'>hepatitis B</span> reactivation, particularly in the setting where anti-hepatitis therapy was withdrawn</li>
      <li>Appropriate laboratory testing prior to initiating therapy and monitoring for hepatotoxicity during therapy with TRIUMEQ are recommended in patients with underlying hepatic disease such as hepatitis B or C</li>
    </ul>
    <p><b>Use with Interferon- and Ribavirin-based Regimens:</b><br> Hepatic decompensation, some fatal, has occurred in HIV-1/hepatitis C virus (HCV) co-infected patients receiving combination antiretroviral therapy and interferon alfa with or without ribavirin. Patients receiving interferon alfa with or without ribavirin and TRIUMEQ should be closely monitored.</p>
    <p><b>Immune Reconstitution Syndrome,</b> including the occurrence of autoimmune disorders with variable time to onset, has been reported.</p>

    <p><b>Fat Redistribution</b> or accumulation has been observed in patients receiving antiretroviral therapy.</p>
    <p><b>Myocardial Infarction (MI):</b></p>
    <ul>
      <li>An observational study showed an increase in MI with abacavir; a sponsor-conducted, pooled analysis did not show increased risk. In totality, the available data are inconclusive</li>
      <li>The underlying risk of coronary heart disease should be considered when prescribing antiretroviral therapies, including abacavir, and action taken to minimize all modifiable risk factors (eg, hypertension, hyperlipidemia, diabetes mellitus, smoking)</li>
    </ul>
    <p><b>Use with Certain Antiretroviral Products:</b> <br>TRIUMEQ should not be administered concomitantly with other products containing abacavir or lamivudine.</p>
    <h3>ADVERSE REACTIONS</h3>
    <ul>
      <li>The most commonly reported (&ge;2%) adverse reactions of at least moderate intensity in treatment-naïve adults receiving TRIUMEQ were insomnia (3%), headache (2%), and fatigue (2%)</li>
    </ul>
    <h3>DRUG INTERACTIONS</h3>
    <ul>
      <li>Coadministration of TRIUMEQ with certain inducers of UGT1A and/or CYP3A may reduce plasma concentrations of dolutegravir. Consult the full Prescribing Information for TRIUMEQ for more information</li>
      <li>Administer TRIUMEQ 2 hours before or 6 hours after taking polyvalent cation-containing antacids or laxatives, sucralfate, oral supplements containing iron or calcium, or buffered medications. Alternatively, TRIUMEQ and supplements containing calcium or iron can be taken with food</li>
    </ul>
    <h3>USE IN SPECIFIC POPULATIONS</h3>
    <ul>
      <li><b class='purple'>Pregnancy Category C.</b> TRIUMEQ should be used during pregnancy only if the potential benefit justifies the potential risk. An Antiretroviral Pregnancy Registry has been established </li>
      <li><b class='purple'>Nursing Mothers:</b> Breastfeeding is not recommended due to the potential for HIV transmission and the potential for adverse reactions in nursing infants</li>
      <li><b class='purple'>Patients with Impaired Renal Function:</b> TRIUMEQ is not recommended in patients with creatinine clearance &lt;50 mL/min</li>
      <li><b class='purple'>Patients with Impaired Hepatic Function:</b> If a dose reduction of abacavir, a component of TRIUMEQ, is required for patients with mild hepatic impairment, then the individual components should be used </li>
    </ul>
    <p class='prescribing-information'><b>Please see full <a href='https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#1' target='_blank' class='pink'>Prescribing Information</a>, including Boxed Warning and Medication Guide, for TRIUMEQ.</b></p>
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
    height: 66px !important;
    min-height: 66px !important;
  }

  .isiSeenHeight {
    height: 31px !important;
    min-height: 31px !important;
  }

  #sidebar {
    background: $white;
    bottom: 0;
    font-family: $ag-book;
    font-size: 78.5%;
    height: 75px;
    line-height: 1.5em;;
    padding: 10px;
    position: fixed;
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0, 0, 0);
    width: 100%;
    z-index: 1000;
    a {
      color: $colorQuin;
    }
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
      color: $colorQuin;
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
        color: $colorQuin;
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
    .pink {
      color: $colorSena;
      font-weight: 900;
    }
    @include media($small-desktop) {
      background-color: $colorLght;
      bottom: 0;
      box-shadow: 0 0 1em 0 transparentize($colorDark,.5);
      display: block;
      font-size: 85%;
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

  #sidebar, .added-isi, .added-indications {
    height: 100%;
    font-size: 0.8rem;
    padding: 5px 20px 20px 20px;
    z-index: 20000;
    a {
      color: $colorQuin;
    }
    h2 {
      @extend %h3;
      color: $colorQuin;
      font-weight: 500;
      font-family: $ag-demi;
      font-size: 1.3em;
      line-height: 1.15em
    }
    h3 {
      @extend %p;
      color: $colorQuin;
    }
    li {
      position: relative;
      font-size: 13px;
      line-height: 18px;
      &:before {
        content: '• ';
        font-weight: 500;
        color: $colorQuin;
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
      color: $colorQuin;
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
    .purple {
      color: $colorQuin;
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

  .added-isi {
    padding: 15px 0;
    padding: 15px;
    li {
      list-style: none;
      position: relative;
      font-weight: 100;
      line-height: 1.5em;
      margin: 0;
      left: -1em;
      &:before {
        content: '• ';
        font-weight: 600;
        color: $colorQuin;
        position: absolute;
        left: -0.75em;
        font-size: 1rem;
      }
    }
    .indications-usage {
      display: none;
    }
    .inline-block {
      line-height: 0;
    }
    .prescribing-information {
      display: none;
    }
    p {
      padding: 0;
      line-height: 1.5em;
    }
    @include media($small-desktop) {
      padding: 20px;
      display: none;
    }
    @include media($small-desktop-down) {
      .isi-control {
        display: none;
      }
      h2 {
        font-size: em(22);
      }
      h3 {
        font-size: em(18);
      }
      ul {
        list-style-type: disc;
      }
    }
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

  .added-indications {
    li {
      list-style: none;
      position: relative;
      font-weight: 100;
      line-height: 1.5em;
      margin: 0;
      left: -0.9em;
      &:before {
        content: '• ';
        font-weight: 600;
        color: $colorQuin;
        position: absolute;
        left: -0.75em;
        font-size: 1.3em;
      }
    }
    p b {
      color: $colorDark;
    }
    padding-bottom: 0;
    @include media($small-desktop) {
      display: none;
    }
  }
</style>