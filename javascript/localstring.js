// toLocalString() = returns a string with a language sensetive
// representation of a number

// number.toLocalString(local, {options});

// 'local' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options


let num = 0.5

// num = num.toLocaleString('en-US')
// num = num.toLocaleString('hi-IN')

// num = num.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
// num = num.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'})

// num = num.toLocaleString(undefined, {style: 'percent'})

// num = num.toLocaleString(undefined, {style: 'unit', unit: 'centimeter'})
num = num.toLocaleString(undefined, {style: 'unit', unit: 'celsius'})


console.log(num)