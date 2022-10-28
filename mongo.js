const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://lassepirnes:${password}@pirnescluster.e9fks.mongodb.net/tyreshop?retryWrites=true&w=majority`

mongoose.connect(url)

const tyreSchema = new mongoose.Schema({
  rengasID: Number,
  merkki: String,
  malli: String,
  tyyppi: String,
  koko: String,
  hinta: Number,
  saldo: Number
})

const Tyre = mongoose.model('Tyre', tyreSchema)

const tyre = new Tyre 

Tyre.insertMany([
{rengasID :1, merkki :"Nokian", malli :"Hakkapeliitta 8", tyyppi : "Nasta", koko :"165/55-14", hinta: 65.50, saldo :15},
{rengasID :2, merkki :"Nokian", malli :"Hakkapeliitta 8", tyyppi :"Nasta", koko :"165/65-14", hinta: 65.75, saldo :15},
{rengasID :3, merkki :"Nokian", malli :"Hakkapeliitta 9", tyyppi :"Kitka", koko :"165/55-15", hinta: 74.55, saldo :50},
{rengasID :4, merkki :"Nokian", malli :"Hakkapeliitta R3", tyyppi :"Kitka", koko :"175/65-15", hinta: 78.94, saldo :3},
{rengasID :5, merkki :"Kumho", malli :"Wi31+", tyyppi :"Nasta", koko :"185/65-15", hinta: 125.45, saldo :80},
{rengasID :6, merkki :"Kumho", malli :"Wi31+", tyyppi :"Nasta", koko :"205/65-16", hinta: 132.53, saldo :14},
{rengasID :7, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"175/65-15", hinta: 86.45, saldo :23},
{rengasID :8, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"165/55-14", hinta: 75.88, saldo :3},
{rengasID :9, merkki :"Hankook", malli :"RW11", tyyppi :"Kitka", koko :"165/65-14", hinta: 98.12, saldo :2},
{rengasID :10, merkki :"Hankook", malli :"RW11", tyyppi :"Kitka", koko :"175/65-15", hinta: 99.49, saldo :12},
{rengasID :11, merkki :"Hankook", malli :"RW11", tyyppi :"Kitka", koko :"205/65-16", hinta: 102.24, saldo :50},
{rengasID :12, merkki :"Nokian", malli :"Nordman RS2", tyyppi :"Kitka", koko :"185/65-15", hinta: 78.50, saldo :60},
{rengasID :13, merkki :"Nokian", malli :"Nordman RS2", tyyppi :"Kitka", koko :"175/65-14", hinta: 88.34, saldo :16},
{rengasID :14, merkki :"Nokian", malli :"Nordman RS2", tyyppi :"Kitka", koko :"185/65-14", hinta: 87.32, saldo :5},
{rengasID :15, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"235/65-17", hinta: 199.93, saldo :7},
{rengasID :16, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"235/60-18", hinta:  213.05, saldo :8},
{rengasID :17, merkki :"Nokian", malli :"Hakkapeliitta 9", tyyppi :"Nasta", koko :"185/65-15", hinta: 81.20, saldo :16},
{rengasID :18, merkki :"Nokian", malli :"Hakkapeliitta 9", tyyppi :"Nasta", koko :"195/65-15", hinta: 99.00, saldo :20},
{rengasID :19, merkki :"Nokian", malli :"Hakkapeliitta 8 SUV", tyyppi :"Kitka", koko :"225/55-18", hinta: 234.40, saldo :7},
{rengasID :20, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"235/60-17", hinta: 134.90, saldo :30},
{rengasID :21, merkki :"Kumho", malli :"WS71", tyyppi :"Kitka", koko :"255/50-19", hinta: 144.10, saldo :8},
{rengasID :22, merkki :"Hankook", malli :"K425", tyyppi :"Kesä", koko :"205/55-16", hinta: 55.00, saldo :34},
{rengasID :23, merkki :"Hankook", malli :"K125", tyyppi :"Kesä", koko :"205/55-16", hinta: 61.00, saldo :12},
{rengasID :24, merkki :"Nokian", malli :"91H", tyyppi :"Kesä", koko :"205/55-16", hinta: 63.00, saldo :1},
{rengasID :25, merkki :"Hankook", malli :"Ventus Prime 3 K125", tyyppi :"Kesä", koko :"185/55-15", hinta: 75.00, saldo :32},
{rengasID :26, merkki :"Hankook", malli :"Ventus Prime 3 K125", tyyppi :"Kesä", koko :"195/55-15", hinta: 82.00, saldo :12},
{rengasID :27, merkki :"Kumho", malli :"Ecowing ES-31", tyyppi :"Kesä", koko :"195/55-15", hinta: 81.00, saldo :16},
{rengasID :28, merkki :"Nokian", malli :"Hakka Blue 2", tyyppi :"Kesä", koko :"195/55-15", hinta: 91.00, saldo :3}
])

tyre.save().then(result => {
  console.log('tyre saved!')
  mongoose.connection.close()
})