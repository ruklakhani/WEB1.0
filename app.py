def mystery1(x, y):
  while (x < y/2):
      x += 1
      y /= 2
  print (x, y)
mystery1(10, 100)