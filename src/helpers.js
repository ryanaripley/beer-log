export function formatDate(date) {
	const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
	const d = new Date(date);
	const month = months[d.getMonth()];
	const day = d.getDate();
	const year = d.getFullYear();
	const datestring = `${month} ${day}, ${year}`;
	return datestring;
}

export function objectLength( object ) {
  var length = 0;
  for( var key in object ) {
    if( object.hasOwnProperty(key) ) {
      ++length;
    }
  }
  return length;
}

export function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export function calculateSG(malts, batchSize, efficiency = .75) {
  const totalPoints = malts.reduce((total, malt) => {
      return total + parseFloat(((malt.sg - 1) * efficiency) * malt.weight / batchSize); 
    }, 0);
  return round((totalPoints + 1), 3);
}

export function calculateFG(sg, attenuation) {
  const fg = (sg - 1) * (1 - attenuation) + 1;
  return round(fg, 3);
}

export function calculateABV(sg, fg) {
  return round((sg - fg) * 131.25, 1);
}

export function calculateSRM(malts, batchSize) {
  // Calculate MCU
  const totalMcu = malts.reduce((total, malt) => {
      const mcu = (malt.srm * malt.weight)/batchSize;
      return total + parseFloat(mcu);
    }, 0);
  // Return SRM adjusted by Morey's Formula
  const moreySRM = (1.4922 * Math.pow(totalMcu, 0.6859));
  return round(moreySRM, 1);
}