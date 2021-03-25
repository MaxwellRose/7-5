let userinput = 0
let day = 'saturday'

document.getElementById('button').addEventListener('click', input)
function input () {
  userinput = document.getElementById('num').value
  day = document.getElementById('day').value
  if (userinput <= 18 && (day !== 'saturday' && day !== 'sunday')) {
   alert('Have fun at school')
  } else if (userinput > 18 && (day !== 'saturday' && day !== 'sunday')) {
    alert('Have fun at work')}
  else {
    alert('Its the weekend')
  }
}
