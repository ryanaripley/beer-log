


## State

		this.state = {
      settings: {
        efficiency: .75,
      },
      recipes: {
        recipe-{dateStamp} {
        	name: '', // string
        	batchSize: 6, // number
	        malts: {
	        	name: '',
	        	weight: 6.5, // in gallons
	        	sg: 1.037, // potential gravity
	        	srm: 3
	        },
	        hops: {},
	        yeast: {
	        	name: '',
	        	attenuation: .75,
	        }
        },
        ...
      }
    }