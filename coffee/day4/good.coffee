eat = (meal, number) -> console.log "#{number} eating #{meal}"

foodSet = ['toast', 'fish', 'peach', 'chocolate', 'nuts', 'honey']

eat food, ++i for food, i in foodSet when food not in ['nuts', 'fish']

evens = (val for val in [1..20] by 3 when val % 2 is 0)
console.log evens

evens = [90..100].filter (val) -> val % 2 is 0
console.log evens


yearsOld = max: 10, ida: 9, tim: 11

ages = for child, age of yearsOld
  "#{child} is #{age}"

console.log ages