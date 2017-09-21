const mnist = require('mnist')
const synaptic = require('synaptic')


// Setting up trainig set
const set = mnist.set(700, 20)

const trainingSet = set.training
const testSet = set.test


// Creating neuron network
const Layer = synaptic.Layer
const Network = synaptic.Network
const Trainer = synaptic.Trainer

const inputLayer = new Layer(784)
const hiddenLayer = new Layer(100)
const outputLayer = new Layer(10)

inputLayer.project(hiddenLayer)
hiddenLayer.project(outputLayer)

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
})

const traineer = new Trainer(myNetwork)
trainer.train(trainingSet, {
  rate: .2,
  iterations: 20,
  error: .1,
  shuffle: true,
  log: 1,
  const: Trainer.const.CROSS_ENTROPY
})
