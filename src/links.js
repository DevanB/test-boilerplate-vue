import R from 'ramda'

const getChildLinks = (parentRouteName) => {
  return R.find(R.propEq('title', parentRouteName))(links).children
}

const links = [
  {
    title: 'About Selzentry',
    url: 'about-selzentry',
    children: [{
      title: 'Mechanisms of Action',
      url: '#mechanisms-of-action'
    }]
  }, {
    title: 'Viral Tropism',
    url: 'viral-tropism',
    children: [{
      title: 'CCR5 Prevalence',
      url: '#ccr5-prevalence'
    }, {
      title: 'Importance of Tropism Testing',
      url: '#importance-of-tropism-testing'
    }, {
      title: 'Available Highly Sensitive Tropism Tests',
      url: '#tropism-tests'
    }, {
      title: 'Tropism Access Program',
      url: '#tropism-access-program'
    }]
  }, {
    title: 'Clinical Data',
    url: 'clinical-data',
    children: [{
      title: 'Study Design',
      url: '#study-design'
    }, {
      title: 'Demographics and Baseline Characteristics',
      url: '#demographics'
    }, {
      title: 'Virologic Response',
      url: '#virologic-response'
    }, {
      title: 'CD4+ T-Cell Count Results',
      url: '#cell-count-results'
    }, {
      title: 'Resistance',
      url: '#resistance'
    }]
  }, {
    title: 'Risks and Side Effects',
    url: 'risks-and-side-effects',
    children: [{
      title: 'Adverse Events',
      url: '#adverse-events'
    }, {
      title: 'Laboratory Abnormalities',
      url: '#laboratory-abnormalities'
    }, {
      title: 'Warnings and Precautions',
      url: '#warnings-and-precautions'
    }]
  }, {
    title: 'Dosing Considerations',
    url: 'dosing-considerations',
    children: [{
      title: 'How To Use Selzentry',
      url: '#how-to-use-selzentry'
    }, {
      title: 'Interactive Dosing Guide',
      url: '#interactive-dosing-guide'
    }, {
      title: 'Dosing Adjustments',
      url: '#dosing-adjustments'
    }, {
      title: 'Renal Impairment',
      url: '#renal-impairment'
    }]
  }, {
    title: 'Patient Assistance',
    url: 'patient-assistance',
    children: [{
      title: 'Patient Assistance Programs',
      url: '#patient-assistance-programs'
    }]
  }, {
    title: 'Resources',
    url: 'resources',
    children: [{
      title: 'HIV Resources',
      url: '#hiv-resources'
    }, {
      title: 'MOA Video',
      url: '#moa-video'
    }]
  }
]

export { getChildLinks, links as default }
