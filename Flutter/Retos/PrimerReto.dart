void primerReto() {
  List<int> ages = [33, 15, 27, 40, 22];
  double promedio = 0;

  ages.sort();
  for (int n in ages) {
    promedio += n;
  }

  promedio = promedio / ages.length;
  print("""La edad mayor es: ${ages.last},
         La edad menor es: ${ages.first},
         La edad promedio es: $promedio  """);
}

void main() {
  primerReto();
}
