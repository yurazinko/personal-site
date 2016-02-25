function run() {

  function Browser(name) {
    this.name = name;
    this.canDisplaySites = true;
  }

  var browser1 = new Browser('Opera');
  var browser2 = new Browser('Chrome')

  document.write(browser1, browser2)


  function forLoop() {
    for (var i = 10; i >= 0; --i) {
      console.log(i);
      document.write(i)
    }
  }

  function myHomeAnimals() {
    var names = ['Bobique', 'Pouhnгstyque', 'Lord', 'Buget', 'Charytia'];

    for (var i = 0; i < 5; i++) {
      console.log('I know someone called ' + names[i])
      document.write('I know someone called ' + names[i])
    }
  }

  function whileLoop() {
    var count = 0;

    var loop = function() {

      while (count < 3) {

        console.log('I am looping!');
        document.write('I am looping')
        count++
      }
    };

    loop();
  }
};