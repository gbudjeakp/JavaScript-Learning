class Vehicle {
  constructor (make, model, year, weight) {
    this.make = make
    this.model = model
    this.year = year
    this.weight = weight
    this.TripsSinceMain = 0
    this.Needmain = false
  }
}

class Cars extends Vehicle {
  constructor (make, model, year, weight) {
    super(make, model, year, weight)
    this.make = make
    this.year = year
    this.weight = weight
    this.model = model
  }

  Drive () {
    this.isDriving = true
  }

  Stop () {
    this.isDriving = false
    this.TripsSinceMain += 1
    if (this.TripsSinceMain > 100) {
      this.Needmain = true
    }
  }

  repair () {
    this.TripsSinceMain = 0
    this.Needmain = false
  }

  displayInformation () {
    console.log(`Make: ${this.make}`)
    console.log(`Model: ${this.model}`)
    console.log(`Year: ${this.year}`)
    console.log(`Weight: ${this.weight}`)
    console.log(`Needs maintenance: ${this.Needmain}`)
    console.log(`Trips since maintenance: ${this.TripsSinceMain}`)
    console.log('------')
  }
}

const bmw = new Cars('BMW', '5-series', 2019, '1800kg')
const mercedes = new Cars('Mercedes-Benz', 'Benz-C class', 2019, '1600kg')
const kia = new Cars('Kia', 'Seltos', 2019, '1700kg')

for (let i = 0; i < 20; i++) {
  bmw.Drive()
  bmw.Stop()
}
for (let i = 0; i < 75; i++) {
  kia.Drive()
  kia.Stop()
}

for (let i = 0; i < 150; i++) {
  mercedes.Drive()
  mercedes.Stop()
}

bmw.displayInformation()
mercedes.displayInformation()
kia.displayInformation()
