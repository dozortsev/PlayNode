should = require 'should'

evenValues = [1, 2, 3, 4, 5].filter (val, idx) ->
  console.log "Index: #{idx} value: #{val}"
  val % 2 == 0

evenValues.should.eql [2, 4]

# callback args must be wrapped in parentheses
# even when it have only one argument
sqrValues = [1, 2, 3, 4, 5].map (val) -> val * val

sqrValues.should.eql [1, 4, 9, 16, 25]

num = 12 if sqrValues.length >= 5

num.should.be.exactly 12

# on first time looks good by still need reduce this function
# when my knowledge about CoffeeScrip loops will be more deep
String.prototype.repeat = (times = 2) ->
  res = ''
  res += this.toString() for i in [1..times]
  res

''.should.have.property('repeat').and.be.a.Function()

'foo'.repeat().should.be.exactly('foofoo')
'foo'.repeat(4).should.be.exactly('foofoofoofoo')



### Output:

  Index: 0 value: 1
  Index: 1 value: 2
  Index: 2 value: 3
  Index: 3 value: 4
  Index: 4 value: 5

###
