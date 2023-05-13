let x = 1;

while(x <= 50) {
  if(x % 2 == 0) {
    document.write('<p class="green">' + x + '</p>');
  }

  else {
    document.write('<p class="red">' + x + '</p>');
  }

  x++;
}